import React, { useState } from 'react';
import NProgress from 'nprogress';
import { UseQuery } from 'react-apollo-hooks';
//M&Q

import { useMutation } from '../Mutations/useMutation';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import { ALL_GENRE_QUERY } from '../Queries/Genres';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { Paper, Chip } from '@material-ui/core';
import { MusicNote, LocalActivity, FitnessCenter } from '@material-ui/icons';
//styledCS
import Accordion from '../../styledComponents/Accordion/Accordion.jsx';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import Button from '../../styledComponents/CustomButtons/Button';
//styles
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';

import { mis, music, sports, performing } from '../../utils/genres';

const Interests = ({ classes, currentUser }) => {
	const musicChips = (
		<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
			{music.map(genre => (
				<Chip
					icon={<MusicNote />}
					label={genre.name}
					key={genre.id}
					clickable
					className={classes.chip}
					color='primary'
					//onDelete={handleDelete}
					//deleteIcon={<DoneIcon />}
					variant='outlined'
				/>
			))}
		</div>
	);

	const sportChips = (
		<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
			{sports.map(genre => (
				<Chip
					key={genre.id}
					icon={<FitnessCenter />}
					label={genre.name}
					clickable
					className={classes.chip}
					color='primary'
					//onDelete={handleDelete}
					//deleteIcon={<DoneIcon />}
					variant='outlined'
				/>
			))}
		</div>
	);

	const performingChips = (
		<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
			{performing.map(genre => (
				<Chip
					key={genre.id}
					icon={<LocalActivity />}
					label={genre.name}
					clickable
					className={classes.chip}
					color='primary'
					//onDelete={handleDelete}
					//deleteIcon={<DoneIcon />}
					variant='outlined'
				/>
			))}
		</div>
	);

	return (
		<Paper className={classes.paper}>
			<h4 style={{ marginBottom: '5px' }} className={classes.title}>
				Interests
			</h4>
			<div>
				<Accordion
					active={[ 0, 1, 2 ]}
					open
					classes={{ expansionPanel: classes.darkBackground }}
					activeColor='default'
					collapses={[
						{
							title: 'Music',
							content: musicChips,
						},
						{
							title: 'Sports',
							content: sportChips,
						},
						{
							title: 'Performing Arts',
							content: performingChips,
						},
					]}
				/>
			</div>
		</Paper>
	);
};

export default withStyles(style)(Interests);
