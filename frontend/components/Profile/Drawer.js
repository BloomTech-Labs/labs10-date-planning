import React, { useState } from 'react';
import Router, { withRouter } from 'next/router';

import { useQuery } from 'react-apollo-hooks';
import { useMutation } from '../Mutations/useMutation';
import InputRange from 'react-input-range';
import NProgress from 'nprogress';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import { Settings, Event, Payment, ChatBubbleOutline, AccountCircle } from '@material-ui/icons';
import {
	MenuItem,
	Select,
	InputLabel,
	Drawer,
	IconButton,
	ListItem,
	ListItemIcon,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';
// import '../../styles/Profile/index.scss';
import { Query } from 'react-apollo';

const Preferences = ({ classes, drawerOpen, setDrawerOpen, router: { query } }) => {
	return (
		<Drawer
			className={classes.drawer}
			variant='permanent'
			anchor='left'
			open={drawerOpen}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<ListItem>
				<IconButton
					onClick={() =>
						Router.push('/profile?slug=me', '/profile/me', { shallow: true })}
				>
					<AccountCircle color={query.slug === 'me' ? 'primary' : 'inherit'} />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton
					onClick={() =>
						Router.push('/profile?slug=chats', '/profile/chat', { shallow: true })}
				>
					<ChatBubbleOutline color={query.slug === 'chats' ? 'primary' : 'inherit'} />
				</IconButton>
			</ListItem>

			<ListItem>
				<IconButton
					onClick={() =>
						Router.push('/profile?slug=events', '/profile/events', { shallow: true })}
				>
					<Event color={query.slug === 'events' ? 'primary' : 'inherit'} />
				</IconButton>
			</ListItem>

			<ListItem>
				<IconButton
					onClick={() =>
						Router.push('/profile?slug=billing', '/profile/billing', { shallow: true })}
				>
					<Payment color={query.slug === 'billing' ? 'primary' : 'inherit'} />
				</IconButton>
			</ListItem>
		</Drawer>
	);
};

export default withRouter(withStyles(style)(Preferences));
