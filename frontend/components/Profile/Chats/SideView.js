import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import moment from "moment";
import { Badge, Divider } from "@material-ui/core";
import styles from "../../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";

const Chat = ({ chat, setChat, selectedChat, classes }) => {
<<<<<<< HEAD
	const isSelected = selectedChat ? chat.id === selectedChat.id : false;
	return (
		<div
			onClick={() => setChat(chat.id)}
			style={{
				display: 'flex',
				marginBottom: '20px',
				padding: isSelected ? '10px 15px' : '12px 17px',
				borderRadius: '2px',
				border: isSelected
					?  '2px solid #b2ddf7'
					: 'none',
			}}
		>
			<Badge badgeContent={chat.newMsgs} color='error'>
				<img
					src={chat.img}
					style={{
						width: '90px',
						height: '90px',
						borderRadius: '6px',
					}}
				/>
			</Badge>
			<div
				style={{
					marginLeft: '15px',
					wordBreak: 'break-word',
					width: '200px',
				}}
			>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<h4 style={{ margin: '0', color: '#fafafa' }} className={classes.title}>
						{chat.from}
					</h4>
					<small>{moment(chat.time).fromNow()}</small>
				</div>
				<p
					style={{
						maxHeight: '50px',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						color: '#fafafa',
					}}
				>
					{chat.text}
				</p>
			</div>
		</div>
	);
=======
  const isSelected = selectedChat ? chat.id === selectedChat.id : false;
  return (
    <div
      onClick={() => setChat(chat.id)}
      style={{
        display: "flex",
        marginBottom: "20px",
        padding: isSelected ? "10px 15px" : "12px 17px",
        borderRadius: "2px",
        border: isSelected ? "1px solid #4cb5ae" : "none",
        backgroundColor: isSelected ? "#373737" : '#1f1e1e',
        backgroundImage: isSelected ?
          "url(https://www.transparenttextures.com/patterns/dark-fish-skin.png)" : 'none'
      }}
    >
      <Badge badgeContent={chat.newMsgs} color="error">
        <img
          src={chat.img}
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "6px"
          }}
        />
      </Badge>
      <div
        style={{
          marginLeft: "15px",
          wordBreak: "break-word",
          width: "200px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4
            style={{ margin: "0", color: "#fafafa" }}
            className={classes.title}
          >
            {chat.from}
          </h4>
          <small>{moment(chat.time).fromNow()}</small>
        </div>
        <p
          style={{
            maxHeight: "50px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "#fafafa"
          }}
        >
          {chat.text}
        </p>
      </div>
    </div>
  );
>>>>>>> a63e5b3d780d76d5065e80f4fc04a44bdcbffc77
};

export default withStyles(styles)(Chat);
