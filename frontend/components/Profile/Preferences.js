import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import InputRange from 'react-input-range';
import NProgress from 'nprogress';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import {
	FormControl,
	MenuItem,
	Select,
	InputLabel,
	Drawer,
	IconButton,
	Divider,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';
import '../../styles/Profile/index.scss';

const Preferences = ({ classes, user, drawerOpen, setDrawerOpen }) => {
	const [ agePref, setAgePref ] = useState({
		min: user.minAgePref || 18,
		max: user.maxAgePref || 50,
	});
	const [ genderPref, setGenderPref ] = useState(user.genderPrefs || []);
	const updateUser = useMutation(UPDATE_USER_MUTATION);
	console.log(user);
	return (
		<Drawer
			className={classes.drawer}
			variant='persistent'
			anchor='left'
			open={drawerOpen}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
					{drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</div>

			<InputLabel htmlFor='multiple-select' className={classes.selectLabel}>
				Gender preferences
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
			<Button
				style={{ marginBottom: '20px' }}
				onClick={() => {
					NProgress.start();
					updateUser({
						variables: {
							genderPrefs: genderPref,
						},
					});
				}}
			>
				Set Gender
			</Button>
			<div>
				<InputRange
					maxValue={100}
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
		</Drawer>
	);
};

export default withStyles(style)(Preferences);
