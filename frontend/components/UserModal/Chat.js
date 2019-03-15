import React, { useState, useEffect, useRef, Fragment } from "react";
import NProgress from "nprogress";
import moment from "moment";
import Router from "next/router";
import gql from "graphql-tag";

import withStyles from "@material-ui/core/styles/withStyles";
import { Send } from "@material-ui/icons";

import { Mutation, withApollo } from "react-apollo";
import { useMutation } from "react-apollo-hooks";

// import { SEND_MESSAGE_MUTATION } from '../Mutations/sendMessage';
import Verify from "../verifyPhone";
import CustomInput from "../../styledComponents/CustomInput/CustomInput.jsx";
import Media from "../../styledComponents/Media/Media.jsx";
import Button from "../../styledComponents/CustomButtons/Button";
import { ButtonBase } from "@material-ui/core";
import TextareaAutosize from "react-autosize-textarea";

import styles from "../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";

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

const Chat = ({
  classes,
  data,
  id,
  currentUser,
  subscribeToNewMessages,
  match,
  client
}) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const markAllAsSeen = useMutation(MARK_SEEN);
  const msgRef = useRef(null);

  //Flip flop this lil guy
  currentUser.verified = true;

  useEffect(() => {
    subscribeToNewMessages();
    if (!currentUser.verified) {
      setError({
        msg: "You must verify your account before you can send messages!",
        link: null,
        linkText: "Verify now?"
      });
    } else if (currentUser.permissions === "FREE") {
      getRemainingMessages();
    }
  }, []);
  useEffect(() => {
    if (msgRef.current) {
      msgRef.current.scrollTop = msgRef.current.scrollHeight;
    }
  }, [data.getConversation]);
  useEffect(() => {
    const unSeen =
      data &&
      data.getConversation &&
      data.getConversation.messages.filter(
        msg => !msg.seen && msg.from.id !== currentUser.id
      );

    if (unSeen && unSeen.length > 0) {
      markAllAsSeen({
        variables: {
          chatId: data.getConversation.id
        }
      });
    }
  });
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
  let messages =
    data.getConversation && data.getConversation.messages.length
      ? data.getConversation.messages
      : null;

  return (
    <div className={classes.chatBorder}>
      <div className={classes.chat} ref={msgRef}>
        {messages ? (
          messages.map(msg => {
            let fromMatch = msg.from.id === id;
            let unseen = !msg.seen && msg.from.id !== currentUser.id;
            let img = msg.from.img.find(img => img.default).img_url;
            return (
              <Media
                currentUser={!fromMatch}
                key={msg.id}
                avatar={img}
                title={
                  <span style={{ color: "#fafafa" }}>
                    {msg.from.firstName}
                    <small
                      style={{
                        fontWeight: unseen && "bold",
                        fontSize: "12px"
                      }}
                    >
                      · {moment(msg.createdAt).fromNow()}
                      {unseen ? (
                        <span style={{ color: "red", marginLeft: "6px" }}>
                          new
                        </span>
                      ) : null}
                    </small>
                  </span>
                }
                body={
                  <span>
                    <p style={{ wordBreak: "break-word", fontSize: "14px" }}>
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
          })
        ) : (
          <h4 style={{ color: "#fafafa", fontStyle: "italic" }}>
            No message history to show with {match.firstName}.<br /> Send a
            message to see what {match.firstName} is up4!
          </h4>
        )}
      </div>
      <Mutation
        mutation={SEND_MESSAGE_MUTATION}
        variables={{ id, message }}
        onCompleted={e => {
          console.log(e);
          NProgress.done();
        }}
        onError={e => {
          console.log(e);
          NProgress.done();
        }}
      >
        {sendMessage =>
          error ? (
            !error.link ? (
              <Verify />
            ) : (
              <div>
                <h4>{error.msg}</h4>
                <Button
                  onClick={() =>
                    Router.push("/profile?slug=billing", error.link)
                  }
                >
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
								className={classes.inputWidth}
								formControlProps={{
									fullWidth: true,
								}}
								inputProps={{
									multiline: true,
									rows: 6,
									placeholder: data.getConversation
										? `Respond to ${match.firstName}`
										: `Send ${match.firstName} a message.`,
									value: message,
									onChange: e => setMessage(e.target.value),
								}}
							/> */}

              <TextareaAutosize
                className={classes.textareaAutosize}
                onChange={e => setMessage(e.target.value)}
                placeholder={
                  data.getConversation
                    ? `Respond to ${match.firstName}`
                    : `Send ${match.firstName} a message.`
                }
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
    </div>
  );
};

export default withApollo(withStyles(styles)(Chat));
