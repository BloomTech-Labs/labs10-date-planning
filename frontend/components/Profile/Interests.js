import React, { useState } from 'react';
import NProgress from 'nprogress';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
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

const UPDATE_INTERESTS_MUTATION = gql`
	mutation UPDATE_INTERESTS_MUTATION($id: ID) {
		updateUser(data: { interests: { connect: { id: $id } } }) {
			id
			interests {
				id
				name
			}
		}
	}
`;
const DELETE_INTERESTS_MUTATION = gql`
	mutation DELETE_INTERESTS_MUTATION($id: ID) {
		updateUser(data: { interests: { disconnect: { id: $id } } }) {
			id
			interests {
				id
				name
			}
		}
	}
`;

const Interests = ({ classes, currentUser }) => {
	const { data } = useQuery(ALL_GENRE_QUERY);
	const [ addInterest ] = useMutation(UPDATE_INTERESTS_MUTATION);
	const [ deleteInterest ] = useMutation(DELETE_INTERESTS_MUTATION);
	console.log(currentUser);
	const musicChips = (
		<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
			{data.genres ? (
				data.genres.filter(genre => genre.category === 'MUSIC').map(genre => {
					let interested = currentUser.interests.find(i => i.id === genre.id);
					return (
						<Chip
							icon={<MusicNote />}
							label={genre.name}
							key={genre.id}
							clickable
							className={interested ? classes.interestedChip : classes.chip}
							onClick={() =>
								interested
									? deleteInterest({ variables: { id: genre.id } })
									: addInterest({ variables: { id: genre.id } })}
							color='primary'
							variant={interested ? 'default' : 'outlined'}
						/>
					);
				})
			) : (
				[]
			)}
		</div>
	);

	const sportChips = (
		<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
			{data.genres ? (
				data.genres.filter(genre => genre.category === 'SPORTS').map(genre => {
					let interested = currentUser.interests.find(i => i.id === genre.id);
					return (
						<Chip
							key={genre.id}
							icon={<FitnessCenter />}
							label={genre.name}
							clickable
							className={interested ? classes.interestedChip : classes.chip}
							color='primary'
							onClick={() =>
								interested
									? deleteInterest({ variables: { id: genre.id } })
									: addInterest({ variables: { id: genre.id } })}
							variant={interested ? 'default' : 'outlined'}
						/>
					);
				})
			) : (
				[]
			)}
		</div>
	);

	const performingChips = (
		<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
			{data.genres ? (
				data.genres.filter(genre => genre.category === 'ARTS_THEATRE').map(genre => {
					let interested = currentUser.interests.find(i => i.id === genre.id);
					return (
						<Chip
							key={genre.id}
							icon={<LocalActivity />}
							label={genre.name}
							clickable
							className={interested ? classes.interestedChip : classes.chip}
							color='primary'
							onClick={() =>
								interested
									? deleteInterest({ variables: { id: genre.id } })
									: addInterest({ variables: { id: genre.id } })}
							variant={interested ? 'default' : 'outlined'}
						/>
					);
				})
			) : (
				[]
			)}
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
