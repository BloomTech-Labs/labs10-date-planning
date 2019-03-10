import React, { useEffect, useState } from "react";
import Router from "next/router";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import NProgress from "nprogress";
import { useQuery } from "react-apollo-hooks";
import useInterval from "@rooks/use-interval";
import { withRouter } from "next/router";

import { Paper, Grid, Typography } from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";

import User, { CURRENT_USER_QUERY } from "../Queries/User";
import { ALL_CHATS_QUERY } from "../Queries/AllChats";

import ChatList from "./ChatList";
import MessageList from "./MessageList";
import profileStandIn from "../../static/img/placeholder.jpg";

Router.onRouteChangeComplete = () => {
  NProgress.done(true);
};

const styles = {};

const Messages = ({ classes, color, router, href, user }) => {
  const [selectedChatId, setSelectedChatId] = useState("");

  const { data, loading, refetch } = useQuery(ALL_CHATS_QUERY, {
    pollInterval: 600
  });

  const handleSelectMessage = chatId => {
    setSelectedChatId(chatId);
  };

  const formattedChats = (newMessages, user) => {
    return newMessages
      .filter(msg => msg.messages)
      .map(chatObj => {
        let len = chatObj.messages.length - 1;
        const { messages, users } = chatObj;
        let [usr] = users.filter(usr => usr.id !== user.id);
        let img = usr.img.length
          ? usr.img.find(img => img.default).img_url
          : profileStandIn;
        return {
          id: chatObj.id,
          from: usr.firstName,
          fromId: usr.id,
          text: messages[len].text,
          img: usr.imageThumbnail
        };
      });
  };

  // const newMessageCount = (newMessages, user) => {
  // 	return newMessages.reduce((count, mess) => {
  // 		let newcount = mess.messages.filter(msg => !msg.seen && msg.from.id !== user.id);

  // 		return [ ...count, ...newcount ];
  // 	}, []);
  // };
  const selectedChat = data.getUserChats
    ? data.getUserChats.filter(chat => chat.id === selectedChatId)
    : [];

  return (
    <Paper
      style={{
        display: "flex",
        // margin: "20px",
        // padding: "30px",
        backgroundColor: "#fafafa",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/brilliant.png")',
        margin: "30px 0"
      }}
    >
      <Grid style={{ minHeight: "700px" }} container>
        <Grid item sm={12} md={4} lg={4}>
          <Paper style={{ height: "100%", minWidth: "250px" }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                backgroundImage:
                  "linear-gradient(to right, #b2ddf7, #a8daf9, #9fd8fb, #94d5fd, #8ad2ff)",
                  textAlign: 'center',
                  padding: '15px',
                  borderTopLeftRadius: '6px',
                  color: 'white'
              }}
            >
              Slidin' in to your DMs
            </Typography>
            <ChatList
              userChats={data.getUserChats}
              currentUser={user}
              handleSelectMessage={handleSelectMessage}
            />
          </Paper>
        </Grid>
        <Grid item sm={12} md={8} lg={8}>
          <MessageList
            selectedChat={selectedChat}
            currentUser={user}
            selectedChatId={selectedChatId}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(withStyles(styles)(Messages));
