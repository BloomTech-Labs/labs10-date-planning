import React, { useEffect, useState } from "react";
import Router from "next/router";
import gql from "graphql-tag";
import { Mutation, Query, withApollo } from "react-apollo";
import NProgress from "nprogress";
import { useQuery } from "react-apollo-hooks";
import useInterval from "@rooks/use-interval";
import { withRouter } from "next/router";

//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import { List, ListItem, Badge } from "@material-ui/core";
import { AccountCircle, Explore, Mail } from "@material-ui/icons";
import navbarsStyle from "../../static/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx";
//Q&M

import User, { CURRENT_USER_QUERY } from "../Queries/User";
import { ALL_CHATS_QUERY } from "../Queries/AllChats";
// styled components
// import GridContainer from '../../styledComponents/Grid/GridContainer.jsx';
// import GridItem from '../../styledComponents/Grid/GridItem.jsx';
import Header from "../../styledComponents/Header/Header.jsx";
// import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import CustomDropdown from "../../styledComponents/CustomDropdown/CustomDropdown.jsx";
import Button from "../../styledComponents/CustomButtons/Button.jsx";
//assets
// import image from '../../static/img/bg.jpg';
import profileStandIn from "../../static/img/placeholder.jpg";
import Logo from "./UpFor";

Router.onRouteChangeComplete = () => {
	NProgress.done(true);
};

const SIGNOUT_MUTATION = gql`
	mutation SIGNOUT_MUTATION {
		signout {
			message
		}
	}
`;
const Nav = ({ classes, color, router, href, currentUser, client }) => {
	// console.log(router, "navbar props");
	const { data, loading, refetch } = useQuery(ALL_CHATS_QUERY, {
		pollInterval: 60000
	});

	const handleClick = (e, signout, client) => {
		// e.preventDefault();
		console.log(e, "event name hopefully");
		if (e === "Sign out") {
			signout();
			Router.push("/joinus");
			client.cache.reset().then(() => {});
		} else {
			Router.push(`/billing`);
		}
	};

	const formattedChats = (newMessages, user) => {
		return newMessages
			.filter(msg => msg.messages)
			.map(chatObj => {
				let len = chatObj.messages.length - 1;
				const { messages, users } = chatObj;
				let [usr] = users.filter(usr => usr.id !== user.id);
				let img = usr.img.length ? usr.img.find(img => img.default).img_url : profileStandIn;
				return {
					id: chatObj.id,
					from: usr.firstName,
					fromId: usr.id,
					text: messages[len].text,
					img: img
				};
			});
	};

	const newMessageCount = (newMessages, user) => {
		return newMessages.reduce((count, mess) => {
			let newcount = mess.messages.filter(msg => !msg.seen && msg.from.id !== user.id);

			return [...count, ...newcount];
		}, []);
	};
	let chats = data.getUserChats ? formattedChats(data.getUserChats, currentUser) : [];
	let newMessages = data.getUserChats ? newMessageCount(data.getUserChats, currentUser) : [];
	let profileImage = currentUser && currentUser.img.find(img => img.default).img_url;
	return (
		<Header
			color={color}
			//brand={Logo}
			fixed={color === "transparent"}
			changeColorOnScroll={
				color === "transparent"
					? {
							height: 300,
							color: "warning"
					  }
					: null
			}
			links={
				<List className={classes.list + " " + classes.mlAuto}>
					<ListItem className={classes.listItem}>
						<Button
							className={classes.navLink}
							onClick={e => {
								e.preventDefault();
								Router.push("/");
							}}
							color="transparent"
						>
							<Explore /> Discover
						</Button>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Button
							className={classes.navLink}
							onClick={e => {
								e.preventDefault();
								Router.push("/profile");
							}}
							color="transparent"
						>
							<AccountCircle /> Me
						</Button>
					</ListItem>

					<ListItem style={{ bottom: "5px" }} className={classes.listItem}>
						<CustomDropdown
							left
							caret={false}
							hoverColor="dark"
							dropdownHeader={newMessages.length && newMessages.length + " new messages!"}
							buttonText={
								<Badge badgeContent={newMessages.length} color="error">
									<Mail />
								</Badge>
							}
							buttonProps={{
								className: classes.navLink + " " + classes.imageDropdownButton,
								color: "transparent"
							}}
							dropdownList={
								chats
									? chats.map(chat => (
											<div
												onClick={() =>
													Router.push(
														`${router.pathname}?user=${chat.fromId}`,
														`${router.pathname}?user=${chat.fromId}`,
														{ shallow: true },
														{ scroll: false }
													)
												}
												style={{
													display: "flex",
													padding: "5px"
													//   backgroundImage: newMessages.some(
													//     msg => msg.chat.id === chat.id
													//   )
													//     ? "linear-gradient(to right, #e2dae1, #e0cede, #dec3da, #dbb7d7, #d9abd3)"
													//     : "linear-gradient(to right, #fafafa, #fafafa)",
												}}
											>
												<img
													src={chat.img}
													style={{
														width: "40px",
														height: "40px",
														borderRadius: "50%",
														marginRight: "15px",
														boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
													}}
												/>
												<div>
													<div>{chat.from}</div>
													<div>{chat.text}</div>
												</div>
											</div>
									  ))
									: []
							}
						/>
					</ListItem>
					<Mutation
						mutation={SIGNOUT_MUTATION}
						refetchQueries={[{ query: CURRENT_USER_QUERY }]}
						awaitRefetchQueries
					>
						{(signout, { called }) => {
							{
								/* if (called) Router.push('/joinus'); */
							}
							return (
								<ListItem style={{ marginLeft: "10px" }} className={classes.listItem}>
									<CustomDropdown
										left
										caret={false}
										hoverColor="dark"
										dropdownHeader={currentUser && currentUser.firstName}
										buttonText={
											<img
												src={currentUser && profileImage ? profileImage : profileStandIn}
												className={classes.img}
												alt="profile"
											/>
										}
										buttonProps={{
											className: classes.navLink + " " + classes.imageDropdownButton,
											color: "transparent"
										}}
										dropdownList={["Billing", "Sign out"]}
										onClick={e => handleClick(e, signout, client)}
									/>
								</ListItem>
							);
						}}
					</Mutation>
				</List>
			}
		/>
	);
};

export default withApollo(withRouter(withStyles(navbarsStyle)(Nav)));
