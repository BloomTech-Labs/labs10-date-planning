import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";
import { SEND_MESSAGE_MUTATION } from "../Mutations/sendMessage";
import { GET_CONVERSATION_QUERY } from "../Queries/getConvo";
import { ALL_CHATS_QUERY } from "../Queries/AllChats";
import moment from "moment";
import NProgress from "nprogress";

import Button from "../../styledComponents/CustomButtons/Button";
import CustomInput from "../../styledComponents/CustomInput/CustomInput.jsx";
import Media from "../../styledComponents/Media/Media.jsx";
import {
  BookmarkBorder,
  Close,
  Send,
  Favorite,
  FavoriteBorder,
  NotInterested
} from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";

const MessageList = ({
  classes,
  selectedChat,
  currentUser,
  selectedChatId
}) => {
  const [message, setMessage] = useState("");

  let friend;
  if (selectedChat.length > 0) {
    friend = selectedChat[0].users.filter(
      user => user.id !== currentUser.id
    )[0];
  }

  if (selectedChat.length === 0) return <div />;
  return (
    <Query query={GET_CONVERSATION_QUERY} variables={{ id: friend.id }}>
      {({ data: { getConversation } }) => {
        if (!getConversation) return <div>loading</div>;
        return (
          <div
            style={{
              flexGrow: 1,
              marginLeft: "40px",
              height: "100%",
              position: "relative"
            }}
          >
            <div className={classes.messageList}>
              {getConversation.messages.map(message => {
                let img = message.from.img.find(img => img.default).img_url;

                return (
                  <Media
                    currentUser={
                      currentUser && message.from.id === currentUser.id
                    }
                    key={message.id}
                    avatar={img}
                    title={
                      <span>
                        {message.from.firstName}{" "}
                        <small>· {moment(message.createdAt).fromNow()}</small>
                      </span>
                    }
                    body={
                      <span
                        style={{ maxWidth: "300px", wordBreak: "break-word" }}
                      >
                        <p>{message.text}</p>
                      </span>
                    }
                  />
                );
              })}
            </div>
            {selectedChatId && (
              <>
                {" "}
                <Mutation
                  mutation={SEND_MESSAGE_MUTATION}
                  variables={{ id: friend.id, message: message }}
                  onCompleted={() => NProgress.done()}
                  onError={() => NProgress.done()}
                  // awaitRefetchQueries
                  // refetchQueries={[
                  //   { query: GET_CONVERSATION_QUERY, variables: { id: friend.id } },
                  //   { query: ALL_CHATS_QUERY}
                  // ]}
                >
                  {sendMessage => (
                    <Media
                      style={{position: 'absolute', bottom: 0, width: '100%', left: '-5px', borderTop: '2px solid #bdbdbd'}}
                      avatar={currentUser.img.find(img => img.default).img_url}
                      body={
                        <CustomInput
                          id="logged"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 6,
                            placeholder: `Respond to ${friend.firstName}`,
                            value: message,
                            onChange: e => setMessage(e.target.value)
                          }}
                          
                        />
                      }
                      footer={
                        <Button
                          color="primary"
                          justIcon
                          className={classes.floatRight}
                          onClick={async () => {
                            NProgress.start();
                            sendMessage();

                            setMessage("");
                          }}
                        >
                          <Send />
                        </Button>
                      }
                    />
                  )}
                </Mutation>
              </>
            )}
          </div>
        );
      }}
    </Query>
  );
};

export default withStyles(styles)(MessageList);
