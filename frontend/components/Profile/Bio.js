import React, { useState } from 'react';
import NProgress from 'nprogress';
//M&Q
import { useMutation } from '../Mutations/useMutation';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { Paper, InputLabel, ClickAwayListener } from '@material-ui/core';
//styledCS
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import Button from '../../styledComponents/CustomButtons/Button';
//styles
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';

const Bio = ({ classes, currentUser }) => {
	const [ bio, setBio ] = useState(currentUser.biography || '');
	const [ charsLeft, setCharsLeft ] = useState(350 - bio.length);
	const [ updateUser ] = useMutation(UPDATE_USER_MUTATION, {
		variables: { biography: bio },
		onCompleted: () => NProgress.done(),
		onError: () => NProgress.done(),
	});

	const handleInput = ({ target: { value } }) => {
		setBio(value);
		setCharsLeft(350 - value.length);
	};
	const handleClickAway = () => {
		if (bio !== currentUser.biography) {
			updateUser();
		}
	};
	return (
		<Paper
			style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}
			className={classes.paper}
		>
			<h4 style={{ marginBottom: '5px' }} className={classes.title}>
				About you
			</h4>
			<ClickAwayListener onClickAway={handleClickAway}>
				<CustomInput
					white
					formControlProps={{ style: { paddingTop: '15px', color: '#fafafa' } }}
					id='textarea-input'
					inputProps={{
						multiline: true,
						rows: 5,
						style: { height: '140px', color: '#fafafa' },
						maxLength: 350,
						value: `${charsLeft > 0 ? bio : bio.slice(0, 350)}`,
						onChange: e => {
							handleInput(e);
						},
						placeholder: 'Write a little about yourself',
					}}
				/>
			</ClickAwayListener>
			<InputLabel
				style={{
					marginBottom: '10px',
					textAlign: 'end',
					color: charsLeft <= 20 ? 'red' : 'auto',
				}}
				htmlFor='textarea-input'
				className={classes.selectLabel}
			>
				Chars left: {charsLeft}
			</InputLabel>
			{/* <Button
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
			</Button> */}
		</Paper>
	);
};

export default withStyles(style)(Bio);
