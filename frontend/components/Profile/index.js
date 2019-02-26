import React, { useState } from 'react';

import { FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
import User from '../Queries/User';
import withStyles from '@material-ui/core/styles/withStyles';
import Location from '../Settings/Location';
import getAge from '../../utils/getAge';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import Dates from '../Settings/Dates';
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';
import '../../styles/Profile/index.scss';
const Profile = ({ classes }) => {
	const [ genderPref, setGenderPref ] = useState([]);

	return (
		<User>
			{({ data: { currentUser }, client }) => {
				console.log(currentUser);
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
						<div style={{ display: 'flex' }}>
							<CustomInput
								labelText='Write a lil about urself'
								id='textarea-input'
								formControlProps={{
									fullWidth: true,
								}}
								inputProps={{
									multiline: true,
									rows: 5,
								}}
							/>
							<div>
								<p>ur preferences</p>
								<FormControl fullWidth className={classes.selectFormControl}>
									<InputLabel
										htmlFor='multiple-select'
										className={classes.selectLabel}
									>
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
								</FormControl>
							</div>
						</div>
						<Dates />
					</div>
				);
			}}
		</User>
	);
};

export default withStyles(style)(Profile);
