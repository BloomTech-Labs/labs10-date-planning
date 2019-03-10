import React, { useState } from 'react';
import NProgress from 'nprogress';

import classNames from 'classnames';
//MUI
import Location from '../Settings/Location';
import { Menu, LocalDining } from '@material-ui/icons';

import { MenuItem, Select, InputLabel, Drawer, IconButton, Paper } from '@material-ui/core';

import ImageModal from './ImageModal';
import Button from '../../styledComponents/CustomButtons/Button';
import getAge from '../../utils/getAge';
import withStyles from '@material-ui/core/styles/withStyles';
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';
import '../../styles/Profile/index.scss';
import Preferences from './Prefs';
import Bio from './Bio';
import Interests from './Interests';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
const Settings = ({ classes, currentUser }) => {
	const [ modal, showModal ] = useState(false);

	let profileImg = currentUser.img.find(img => img.default)
		? currentUser.img.find(img => img.default).img_url
		: profileStandIn;

	return (
		<div>
			<div className='Profile-Header'>
				<div className='inner'>
					<div className='prof-img' style={{ backgroundImage: `url(${profileImg})` }}>
						<Button className='view-all' onClick={() => showModal(true)}>
							View all
						</Button>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							margin: '0 20px',
						}}
					>
						<h2 style={{ color: '#fafafa' }}>
							{currentUser.firstName}{' '}
							<span style={{ padding: '0 0px' }}>&#8226;</span>{' '}
							{getAge(currentUser.dob)}
						</h2>
						<Location user={currentUser} />
					</div>
				</div>
			</div>
			<div className={classes.container}>
				<GridContainer>
					<GridItem md={8} lg={8}>
						<GridContainer>
							<GridItem md={6} lg={6}>
								<Bio currentUser={currentUser} />
							</GridItem>
							<GridItem md={6} lg={6}>
								<Preferences currentUser={currentUser} />
							</GridItem>
						</GridContainer>
						<ImageModal modal={modal} showModal={showModal} user={currentUser} />
					</GridItem>
					<GridItem md={4} lg={4}>
						<Interests currentUser={currentUser} />
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
};

export default withStyles(style)(Settings);
