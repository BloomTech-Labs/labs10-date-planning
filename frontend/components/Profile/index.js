import React, { useState } from 'react';
import { withApollo, Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import InputRange from 'react-input-range';
import { List, State, Map, Value, Toggle } from 'react-powerplug';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
//Q&M
import User, { CURRENT_USER_QUERY } from '../Queries/User';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
//components
import Location from '../Settings/Location';
import Dates from '../Settings/Dates';
//styledcomponents
import Button from '../../styledComponents/CustomButtons/Button';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
//utils
import getAge from '../../utils/getAge';
//styles
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';
import '../../styles/Profile/index.scss';
const Composed = adopt({
	user: ({ render }) => <Query query={CURRENT_USER_QUERY}>{render}</Query>,
	genderPref: ({ user, render }) => (
		<List initial={user.data.currentUser.genderPrefs}>{render}</List>
	),
	agePref: ({ user, render }) => (
		<State
			initial={{
				min: user.data.currentUser.minAgePref || 18,
				max: user.data.currentUser.maxAgePref || 50,
			}}
		>
			{render}
		</State>
	),
	biography: ({ user, render }) => (
		<Value initial={user.data.currentUser.biography || ''}>{render}</Value>
	),
	updateUser: ({ render }) => (
		<Mutation
			mutation={UPDATE_USER_MUTATION}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{render}
		</Mutation>
	),
});
const Profile = ({ classes }) => {
	return (
		<Composed>
			{({ user: { data: { currentUser } }, genderPref, agePref, biography, updateUser }) => {
				return (
					<div>
						<div className='Profile-Header'>
							<div className='inner'>
								<div
									className='prof-img'
									style={{ backgroundImage: `url(${currentUser.imageLarge})` }}
								/>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										paddingLeft: '10px',
									}}
								>
									<h2>
										{currentUser.firstName} | {getAge(currentUser.dob)}
									</h2>
									<Location user={currentUser} />
								</div>
							</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
							<div>
								<CustomInput
									labelText='Write a lil about urself'
									id='textarea-input'
									formControlProps={{
										fullWidth: true,
									}}
									inputProps={{
										multiline: true,
										rows: 5,
										value: biography.value,
										onChange: e => biography.set(e.target.value),
										placeholder: 'Write a lil about urself',
									}}
								/>
								<Button
									onClick={() => {
										NProgress.start();
										updateUser({ variables: { biography: biography.value } });
									}}
								>
									Submit
								</Button>
							</div>
							<div>
								<p>ur preferences</p>
								<div>
									<FormControl className={classes.selectFormControl}>
										<InputLabel
											htmlFor='multiple-select'
											className={classes.selectLabel}
										>
											Gender preferences
										</InputLabel>
										<Select
											multiple
											value={genderPref.list}
											onChange={e => genderPref.set(e.target.value)}
											MenuProps={{
												className: classes.selectMenu,
												classes: { paper: classes.selectPaper },
											}}
											classes={{ select: classes.select }}
											inputProps={{
												name: 'multipleSelect',
												id: 'multiple-select',
											}}
										>
											<MenuItem
												classes={{
													root: classes.selectMenuItem,
													selected:
														classes.selectMenuItemSelectedMultiple,
												}}
												value='MALE'
											>
												Men
											</MenuItem>
											<MenuItem
												classes={{
													root: classes.selectMenuItem,
													selected:
														classes.selectMenuItemSelectedMultiple,
												}}
												value='FEMALE'
											>
												Women
											</MenuItem>
											<MenuItem
												classes={{
													root: classes.selectMenuItem,
													selected:
														classes.selectMenuItemSelectedMultiple,
												}}
												value='OTHER'
											>
												Other
											</MenuItem>
										</Select>
										<Button
											onClick={() => {
												NProgress.start();
												updateUser({
													variables: {
														genderPrefs: genderPref.list,
													},
												});
											}}
										>
											Set Gender
										</Button>
									</FormControl>
									Age Range Preference
									<div style={{ marginTop: '20px', marginBottom: '20px' }}>
										<InputRange
											maxValue={100}
											minValue={18}
											value={agePref.state}
											onChange={value => agePref.setState(value)}
										/>
									</div>
									<Button
										onClick={() => {
											NProgress.start();
											updateUser({
												variables: {
													minAgePref: agePref.state.min,
													maxAgePref: agePref.state.max,
												},
											});
										}}
									>
										set ages
									</Button>
								</div>
							</div>
						</div>
						<Dates />
					</div>
				);
			}}
		</Composed>
	);
};

export default withStyles(style)(Profile);
