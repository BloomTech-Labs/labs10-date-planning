import React, { useState } from 'react';
import NProgress from 'nprogress';
import InputRange from 'react-input-range';
//M&Q
import { useMutation } from '../Mutations/useMutation';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { MenuItem, Select, InputLabel, Paper } from '@material-ui/core';
//components
import Button from '../../styledComponents/CustomButtons/Button';
//styles
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';

const Prefs = ({ classes, currentUser }) => {
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
		<Paper style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
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
				style={{ margin: '25px 0 35px' }}
				className={classes.selectLabel}
			>
				Between the ages of
			</InputLabel>
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

			<Button
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
			</Button>
		</Paper>
	);
};

export default withStyles(style)(Prefs);
