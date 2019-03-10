import React, { useState } from 'react';

import { withRouter } from 'next/router';

import classNames from 'classnames';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

//Q&M

//components

import MenuDrawer from './Drawer';
import UserModal from '../UserModal/';
import Dates from './Dates';
import Messages from './Messages';
import Settings from './Settings';
import Billing from './Pricing';
//styledcomponents

//utils

//styles
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';
import '../../styles/Profile/index.scss';

function getContent(slug, user) {
	switch (slug) {
		case 'me':
			return <Settings currentUser={user} />;
		case 'events':
			return <Dates user={user} />;
		case 'chats':
			return <Messages user={user} />;
		case 'billing':
			return <Billing currentUser={user} />;
		default:
			return <Settings currentUser={user} />;
	}
}

const Profile = ({ classes, theme, router: { query }, currentUser }) => {
	const [ drawerOpen, setDrawerOpen ] = useState(false);

	return (
		<div className='Profile__background'>
			{query.user && <UserModal user={query.user} currentUser={currentUser} />}
			<MenuDrawer user={currentUser} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
			<IconButton
				// color="inherit"
				style={{ color: 'white', position: 'absolute' }}
				aria-label='Open drawer'
				onClick={() => setDrawerOpen(!drawerOpen)}
				className={classNames(classes.menuButton)}
			>
				<Menu />
			</IconButton>
			{getContent(query.slug, currentUser)}
		</div>
	);
};

export default withRouter(withStyles(style)(Profile));
