import React, { useState } from 'react';
import NProgress from 'nprogress';
//M&Q
import { useMutation } from '../Mutations/useMutation';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { Paper } from '@material-ui/core';
//styledCS
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import Button from '../../styledComponents/CustomButtons/Button';
//styles
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';

const Bio = ({ classes, currentUser }) => {
	const [ bio, setBio ] = useState(currentUser.biography || '');
	const [ updateUser ] = useMutation(UPDATE_USER_MUTATION, {
		onCompleted: () => NProgress.done(),
		onError: () => NProgress.done(),
	});
	return (
		<Paper style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
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
	);
};

export default withStyles(style)(Bio);
