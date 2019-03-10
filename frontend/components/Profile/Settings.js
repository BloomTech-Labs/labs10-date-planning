import React, { useState } from 'react';
import { useMutation } from '../Mutations/useMutation';
import InputRange from 'react-input-range';
import NProgress from 'nprogress';
import { Value } from 'react-powerplug';
import classNames from 'classnames';
//MUI
import Location from '../Settings/Location';
import { Menu, LocalDining } from '@material-ui/icons';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import { MenuItem, Select, InputLabel, Drawer, IconButton, Paper } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ImageModal from './ImageModal';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';
import getAge from '../../utils/getAge';
import withStyles from '@material-ui/core/styles/withStyles';
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';
import '../../styles/Profile/index.scss';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
const Settings = ({ classes, currentUser }) => {
	const [ modal, showModal ] = useState(false);
	const [ agePref, setAgePref ] = useState({
		min: currentUser.minAgePref || 18,
		max: currentUser.maxAgePref || 50,
	});
	const [ genderPref, setGenderPref ] = useState(currentUser.genderPrefs || []);
	const [ bio, setBio ] = useState(currentUser.biography || '');
	const [ updateUser ] = useMutation(UPDATE_USER_MUTATION, {
		onCompleted: () => NProgress.done(),
		onError: () => NProgress.done(),
	});

	let profileImg = currentUser.img.find(img => img.default)
		? currentUser.img.find(img => img.default).img_url
		: profileStandIn;

	return (
		<div>
			<ImageModal modal={modal} showModal={showModal} user={currentUser} />
			<div className='Profile-Header'>
				<IconButton
					// color="inherit"
					style={{ color: 'white' }}
					aria-label='Open drawer'
					onClick={() => setDrawerOpen(!drawerOpen)}
					className={classNames(classes.menuButton)}
				>
					<Menu />
				</IconButton>
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
					<GridItem md={4} lg={4}>
						<Paper
							style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}
						>
							<h4 className={classes.title}>About you</h4>
							<CustomInput
								//labelText='About'
								id='textarea-input'
								inputProps={{
									multiline: true,
									rows: 5,
									value: bio,
									onChange: e => setBio(e.target.value),
									placeholder: 'Write a little about yourself',
								}}
							/>
							<Button
								style={{ marginBottom: '20px' }}
								onClick={() => {
									NProgress.start();
									updateUser({
										variables: {
											biography: bio,
										},
									});
								}}
							>
								Set Bio
							</Button>
						</Paper>
					</GridItem>
					<GridItem md={4} lg={4}>
						<Paper
							style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}
						>
							<h4 className={classes.title}>Preferences</h4>
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
						</Paper>
					</GridItem>
					<GridItem md={4} lg={4}>
						<Paper
							style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}
						>
							{' '}
							<h4 className={classes.title}>Interests</h4>
						</Paper>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
};

export default withStyles(style)(Settings);
