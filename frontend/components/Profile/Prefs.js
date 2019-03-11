import React, { useState } from 'react';
import NProgress from 'nprogress';
import InputRange from 'react-input-range';
import _ from 'lodash';
//M&Q
import { useMutation } from '../Mutations/useMutation';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { MenuItem, Select, InputLabel, Paper, ClickAwayListener } from '@material-ui/core';
//components
import Button from '../../styledComponents/CustomButtons/Button';
import Card from '../../styledComponents/Card/Card';
//styles
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';

const Prefs = ({ classes, currentUser }) => {
	const [ selectOpen, setSelectOpen ] = useState(false);
	const [ agePref, setAgePref ] = useState({
		min: currentUser.minAgePref || 18,
		max: currentUser.maxAgePref || 50,
	});
	const [ genderPref, setGenderPref ] = useState(currentUser.genderPrefs || []);
	const [ updateUser ] = useMutation(UPDATE_USER_MUTATION, {
		onCompleted: () => NProgress.done(),
		onError: () => NProgress.done(),
	});
	return (
		<Paper className={classes.paper}>
			<h4 className={classes.title}>Preferences</h4>
			<InputLabel
				style={{ marginBottom: '15px' }}
				htmlFor='multiple-select'
				className={classes.selectLabel}
			>
				Interested in
			</InputLabel>
			<Select
				multiple
				open={selectOpen}
				SelectDisplayProps={{ style: { color: '#fafafa' } }}
				onOpen={() => setSelectOpen(true)}
				onClose={() => {
					setSelectOpen(false);
					if (!_.isEqual(genderPref, currentUser.genderPrefs)) {
						updateUser({ variables: { genderPrefs: genderPref } });
					}
				}}
				value={genderPref}
				onChange={e => setGenderPref(e.target.value)}
				MenuProps={{
					className: classes.selectMenu,
					classes: { paper: classes.selectPaper },
				}}
				classes={{ select: classes.select }}
				inputProps={{
					name: 'multipleSelect',
					id: 'multiple-select',
					style: { color: '#fafafa' },
				}}
			>
				<MenuItem
					classes={{
						root: classes.selectMenuItem,
						selected: classes.selectMenuItemSelectedMultiple,
					}}
					value='MALE'
				>
					Men
				</MenuItem>
				<MenuItem
					classes={{
						root: classes.selectMenuItem,
						selected: classes.selectMenuItemSelectedMultiple,
					}}
					value='FEMALE'
				>
					Women
				</MenuItem>
				<MenuItem
					classes={{
						root: classes.selectMenuItem,
						selected: classes.selectMenuItemSelectedMultiple,
					}}
					value='OTHER'
				>
					Other
				</MenuItem>
			</Select>
			{/* </FormControl> */}

			<InputLabel
				htmlFor='multiple-select'
				style={{ margin: '35px 0 35px' }}
				className={classes.selectLabel}
			>
				Between the ages of
			</InputLabel>
			<ClickAwayListener
				onClickAway={() => {
					if (
						currentUser.minAgePref !== agePref.min ||
						currentUser.maxAgePref !== agePref.max
					) {
						updateUser({
							variables: {
								minAgePref: agePref.min,
								maxAgePref: agePref.max,
							},
						});
					}
				}}
			>
				<div className={classes.inputRange}>
					<InputRange
						minLabel='range-label'
						maxLabel='range-label'
						maxValue={80}
						minValue={18}
						value={agePref}
						onChange={value => setAgePref(value)}
					/>
				</div>
			</ClickAwayListener>
			{/* <Button
				style={{ marginTop: '30px' }}
				onClick={() => {
					NProgress.start();
					updateUser({
						variables: {
							minAgePref: agePref.min,
							maxAgePref: agePref.max,
						},
					});
				}}
			>
				set ages
			</Button> */}
		</Paper>
	);
};

export default withStyles(style)(Prefs);
