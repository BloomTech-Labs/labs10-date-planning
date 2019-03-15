import React, { useState } from 'react';
import NProgress from 'nprogress';
import gql from 'graphql-tag';
import _ from 'lodash';
import withStyles from '@material-ui/core/styles/withStyles';
import { Paper, Chip } from '@material-ui/core';
import { MusicNote, LocalActivity, FitnessCenter } from '@material-ui/icons';

import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';

const CommonInterests = ({ match, user, classes }) => {
	let interests = user.interests.filter(x => match.interests.some(y => x.id === y.id));
	if (!interests.length) return <div />;
	return (
		<div className={classes.interests}>
			<h4 style={{ color: '#fafafa' }} className={classes.title}>
				Interests in common
			</h4>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					margin: '0 100px',
				}}
			>
				{interests.map(genre => (
					<Chip
						icon={
							genre.category === 'MUSIC' ? (
								<MusicNote />
							) : genre.category === 'SPORTS' ? (
								<FitnessCenter />
							) : (
								<LocalActivity />
							)
						}
						label={genre.name}
						key={genre.id}
						className={classes.chip}
						color='primary'
						variant='default'
					/>
				))}
			</div>
		</div>
	);
};

export default withStyles(style)(CommonInterests);
