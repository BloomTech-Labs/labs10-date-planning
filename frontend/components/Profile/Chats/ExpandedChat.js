import React, { useEffect, useState, Fragment, useRef } from "react";
import NProgress from "nprogress";
import { Mutation, withApollo } from "react-apollo";
import { useMutation } from "react-apollo-hooks";
import Router from "next/router";
import moment from "moment";
import gql from "graphql-tag";
import { withStyles, ButtonBase } from "@material-ui/core";
import Verify from "../../verifyPhone";
import styles from "../../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";
import Button from "../../../styledComponents/CustomButtons/Button";
import CustomInput from "../../../styledComponents/CustomInput/CustomInput.jsx";
import Media from "../../../styledComponents/Media/Media.jsx";
import { Send } from "@material-ui/icons";
import TextareaAutosize from "react-autosize-textarea";
import scrollbar from "../../../static/jss/ScrollbarStyles";

const SEND_MESSAGE_MUTATION = gql`
  mutation SEND_MESSAGE_MUTATION($id: String!, $message: String!) {
    sendMessage(id: $id, message: $message) {
      id
      users {
        id
        firstName
        img {
          id
          img_url
          default
        }
      }
      messages {
        id
        text
        seen
        createdAt
        from {
          id
          firstName
          img {
            id
            img_url
            default
          }
        }
        updatedAt
      }
    }
  }
`;

const MARK_SEEN = gql`
  mutation MARK_SEEN($chatId: String!) {
    markAllAsSeen(chatId: $chatId) {
      id
    }
  }
`;
const REMAINING_MESSAGES = gql`
  query {
    remainingMessages
  }
`;

const Chat = ({ chat, currentUser, classes, client }) => {
  const [message, setMessage] = useState("");
  const msgRef = useRef(null);
  const [error, setError] = useState(null);
  const markAllAsSeen = useMutation(MARK_SEEN);
  currentUser.verified = true;
  useEffect(() => {
    // if (!currentUser.verified) {
    // 	setError({
    // 		msg: 'You must verify your account before you can send messages!',
    // 		link: null,
    // 		linkText: 'Verify now?',
    // 	});
    // } else
    if (currentUser.permissions === "FREE") {
      getRemainingMessages();
    }
  }, []);

  useEffect(() => {
    const unSeen =
      chat &&
      chat.messages.filter(msg => !msg.seen && msg.from.id !== currentUser.id);

    if (unSeen && unSeen.length > 0) {
      markAllAsSeen({
        variables: {
          chatId: chat.id
        }
      });
    }
  });

  useEffect(() => {
    if (msgRef.current) {
      msgRef.current.scrollTop = msgRef.current.scrollHeight;
    }
  }, [chat]);
  const getRemainingMessages = async () => {
    let messagesRemaining = await client.query({ query: REMAINING_MESSAGES });
    if (messagesRemaining.data.remainingMessages === 0) {
      setError({
        msg: "You are out of weekly messages allowed on a free account!",
        link: "/profile/billing",
        linkText: "Go Pro?"
      });
    }
  };

  let friend;
  if (chat) {
    friend = chat.users.find(user => user.id !== currentUser.id);
  }
  return (
    <div
      style={{
        flexGrow: 1,
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div className={classes.messageList} ref={msgRef}>
        {chat &&
          chat.messages.map(msg => {
            console.log(msg);
            const img = msg.from.img.find(x => x.default).img_url;
            return (
              <Media
                currentUser={currentUser && msg.from.id === currentUser.id}
                key={msg.id}
                avatar={img}
                avatarClick={() =>
                  Router.push(
                    `/profile?slug=chats&user=${msg.from.id}`,
                    `/profile/chat/user/${msg.from.id}`,
                    { shallow: true },
                    { scroll: false }
                  )
                }
                title={
                  <span style={{ color: "#fafafa" }}>
                    {msg.from.firstName}{" "}
                    <small style={{ fontSize: "12px" }}>
                      · {moment(msg.createdAt).fromNow()}
                    </small>
                  </span>
                }
                body={
                  <span
                    style={{
                      maxWidth: "300px",
                      wordBreak: "break-word"
                    }}
                  >
                    <p style={{ color: "#fafafa", fontSize: "14px" }}>
                      {msg.text}
                    </p>
                    {currentUser.permissions !== "FREE" && msg.seen ? (
                      <small>
                        <span style={{ marginRight: "2px" }}>seen</span>
                        {moment(msg.UpdatedAt).format("M/D/YY h:mm a")}
                      </small>
                    ) : null}
                  </span>
                }
              />
            );
          })}
      </div>
      {chat && (
        <Mutation
          mutation={SEND_MESSAGE_MUTATION}
          variables={{ id: friend.id, message }}
          onCompleted={() => NProgress.done()}
          onError={() => NProgress.done()}
        >
          {sendMessage =>
            error ? (
              !error.link ? (
                <Verify />
              ) : (
                <div>
                  <h4>{error.msg}</h4>
                  <Button onClick={() => Router.push(error.link)}>
                    {error.linkText}
                  </Button>
                </div>
              )
            ) : (
              <form
                className={classes.expandedChat}
                onSubmit={e => {
                  e.preventDefault();
                  NProgress.start();
                  sendMessage();
                  setMessage("");
                }}
              >
                {/* <CustomInput
									id='logged'
									formControlProps={{
										fullWidth: true,
									}}
									inputProps={{
										multiline: true,
										rows: '3',
										// rows: Math.ceil(message.length / 60),
										placeholder: `Respond to ${friend.firstName}`,
										value: message,
										onChange: e => setMessage(e.target.value),
										style: { color: '#fafafa', width: '80%' },
									}}
								/> */}
                <TextareaAutosize
                  className={classes.textareaAutosize}
                  onChange={e => setMessage(e.target.value)}
                  placeholder={`Respond to ${friend.firstName}`}
                  rows={1}
                  maxRows={4}
                  onKeyDown={e => {
                    if (e.keyCode === 13) {
                      sendMessage();
                      setMessage("");
                    }
                  }}
                />
                <ButtonBase type="submit">
                  <Button
                    style={{
                      background: "transparent",
                      borderRadius: "6px !important"
                    }}
                    justIcon
                    className={classes.floatRight}
                    component="div"
                  >
                    <Send />
                  </Button>
                </ButtonBase>
              </form>
            )
          }
        </Mutation>
      )}
    </div>
  );
};

export default withApollo(withStyles(styles)(Chat));
