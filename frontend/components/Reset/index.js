import React, { useState } from 'react';
import NProgress from 'nprogress';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Link from 'next/link';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { InputAdornment, IconButton, ButtonBase } from '@material-ui/core';
import { Visibility, VisibilityOff, Mail, Close, LockOutlined } from '@material-ui/icons';
//q&m
import { CURRENT_USER_QUERY } from '../Queries/User';
//styledcomponents
import GridContainer from '../../styledComponents/Grid/GridContainer.jsx';
import GridItem from '../../styledComponents/Grid/GridItem.jsx';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
import Card from '../../styledComponents/Card/Card.jsx';
import CardBody from '../../styledComponents/Card/CardBody.jsx';
import CardHeader from '../../styledComponents/Card/CardHeader.jsx';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
//styles
import Style from '../../static/jss/material-kit-pro-react/views/loginPageStyle.jsx';

const RESET_PASSWORD_MUTATION = gql`
	mutation RESET_PASSWORD_MUTATION(
		$resetToken: String!
		$password: String!
		$confirmPassword: String!
	) {
		resetPassword(
			resetToken: $resetToken
			password: $password
			confirmPassword: $confirmPassword
		) {
			id
			firstName
		}
	}
`;

const Reset = ({ resetToken, classes }) => {
	const [ passwordShowing, setPasswordShowing ] = useState(false);
	const [ confirmPasswordShowing, setConfirmPasswordShowing ] = useState(false);
	const [ password, setPassword ] = useState(undefined);
	const [ confirmPassword, setConfirmPassword ] = useState(undefined);
	const [ error, setError ] = useState(undefined);
	const [ completed, setCompleted ] = useState(false);
	const resetPassword = useMutation(RESET_PASSWORD_MUTATION, {
		variables: { password, confirmPassword, resetToken },
		refetchQueries: [ { query: CURRENT_USER_QUERY } ],
	});

	const handleSubmit = async e => {
		e.preventDefault();
		NProgress.start();
		if (password !== confirmPassword) {
			setError('Passwords do not match.');
			NProgress.done();
		} else if (!/^(?=.*\d).{8,}$/.test(password)) {
			setError('Must be at least 8 characters including a number.');
			NProgress.done();
		} else {
			try {
				let res = await resetPassword();
				if (res) {
					NProgress.done();
					setCompleted(true);
				}
			} catch (err) {
				setError(err.message.replace('GraphQL error: ', ''));
				NProgress.done();
			}
		}
	};
	return (
		<div>
			<div
				className={classes.pageHeader}
				style={{
					backgroundImage:
						'url(https://images.unsplash.com/photo-1541970074036-0d947644f856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
					backgroundSize: 'cover',
					backgroundPosition: 'top center',
				}}
			>
				<div className={classes.container}>
					<GridContainer justify='center'>
						<GridItem xs={12} sm={12} md={4}>
							<Card>
								{completed ? (
									<div>
										<h2>Reset successful!</h2>
										<Link href='/home'>
											<Button color='primary'>Go Home</Button>
										</Link>
									</div>
								) : (
									<form
										//method="post"
										className={classes.form}
										onSubmit={handleSubmit}
									>
										<CardBody signup>
											<h2>Reset Your Password</h2>

											<CustomInput
												error={error}
												formControlProps={{
													fullWidth: true,
												}}
												inputProps={{
													endAdornment: (
														<InputAdornment position='end'>
															<IconButton
																aria-label='Toggle password visibility'
																onClick={() =>
																	setPasswordShowing(
																		!passwordShowing,
																	)}
															>
																{!error &&
																	(passwordShowing ? (
																		<Visibility />
																	) : (
																		<VisibilityOff />
																	))}
															</IconButton>
														</InputAdornment>
													),
													startAdornment: (
														<InputAdornment position='start'>
															<LockOutlined
																className={classes.icon}
															/>
														</InputAdornment>
													),
													placeholder: 'Password...',
													value: password,
													type: passwordShowing ? 'text' : 'password',
													onChange: e => setPassword(e.target.value),
												}}
												labelText='Must be at least 8 characters including a number.'
												labelProps={{
													error: error ? true : false,
												}}
											/>
											<CustomInput
												error={error}
												formControlProps={{
													fullWidth: true,
												}}
												inputProps={{
													endAdornment: (
														<InputAdornment position='end'>
															<IconButton
																aria-label='Toggle password visibility'
																onClick={() =>
																	setConfirmPasswordShowing(
																		!confirmPasswordShowing,
																	)}
															>
																{!error &&
																	(confirmPasswordShowing ? (
																		<Visibility />
																	) : (
																		<VisibilityOff />
																	))}
															</IconButton>
														</InputAdornment>
													),
													startAdornment: (
														<InputAdornment position='start'>
															<LockOutlined
																className={classes.icon}
															/>
														</InputAdornment>
													),
													placeholder: 'Confirm Password...',
													value: confirmPassword,
													type: confirmPasswordShowing
														? 'text'
														: 'password',
													onChange: e =>
														setConfirmPassword(e.target.value),
												}}
												labelText={error}
												labelProps={{
													error: true,
												}}
											/>

											<ButtonBase
												type='submit'
												disabled={!password || !confirmPassword}
											>
												<Button
													color='primary'
													simple="true"
													disabled={!password || !confirmPassword}
													size='lg'
													component='div'
												>
													Reset
												</Button>
											</ButtonBase>
										</CardBody>
									</form>
								)}
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	);
};

export default withStyles(Style)(Reset);
