import React, { useEffect, useState, Fragment } from 'react';
import gql from 'graphql-tag';
import Router from 'next/router';
import firebase from 'firebase/app';
import { Mutation } from 'react-apollo';
import NProgress from 'nprogress';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import {
	ButtonBase,
	Dialog,
	DialogActions,
	InputAdornment,
	DialogTitle,
	DialogContent,
	IconButton,
	Icon,
} from '@material-ui/core';
import { Visibility, VisibilityOff, Mail, Close } from '@material-ui/icons';
//components
import ErrorModal from './ErrorModal';
import ResetRequest from './PasswordRequest';
//styled components
import Button from '../../styledComponents/CustomButtons/Button';
import Card from '../../styledComponents/Card/Card';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardBody from '../../styledComponents/Card/CardBody';
import CustomInput from '../../styledComponents/CustomInput/CustomInput';
//q&m
import { CURRENT_USER_QUERY } from '../Queries/User';
//styles
import Styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles';
//utils
import { auth } from '../../utils/firebase';
import Reset from './PasswordRequest';

const LOGIN_USER = gql`
	mutation LOGIN_USER($email: String!, $password: String!) {
		signin(email: $email, password: $password) {
			id
			firstName
			lastName
			email
		}
	}
`;
const FIREBASE_LOGIN = gql`
	mutation FIREBASE_LOGIN($idToken: String!) {
		firebaseAuth(idToken: $idToken) {
			token
			user {
				id
				firstName
				email
			}
		}
	}
`;

const Login = ({ classes }) => {
	const [ passwordShowing, setPasswordShowing ] = useState(false);
	const [ user, setUser ] = useState({ email: '', password: '' });
	const [ err, setError ] = useState({
		email: undefined,
		password: undefined,
	});
	const [ modalShowing, setModalShowing ] = useState(false);
	const [ serverError, setServerError ] = useState(undefined);

	useEffect(
		() => {
			if (err.password) {
				setError({ email: undefined, password: undefined });
			}
		},
		[ user.password ],
	);
	const firebaseLogin = async (e, firebaseAuth, company) => {
		e.preventDefault();
		try {
			let provider;
			switch (company) {
				case 'google':
					provider = new firebase.auth.GoogleAuthProvider();
					break;
				case 'facebook':
					provider = new firebase.auth.FacebookAuthProvider();
					break;
				case 'twitter':
					provider = new firebase.auth.TwitterAuthProvider();
					break;
				default:
					provider = undefined;
			}
			await auth.signInWithPopup(provider);
			const idToken = await auth.currentUser.getIdToken(true);
			await firebaseAuth({ variables: { idToken } });
		} catch (err) {
			console.log(err);
		}
	};

	const handleError = error => {
		NProgress.done();
		if (error.message.replace('GraphQL error: ', '') === 'Invalid Password!') {
			setError({ password: error.message.replace('GraphQL error: ', '') });
		} else {
			setServerError(error);
		}
	};
	return (
		<Fragment>
			<Button color='danger' onClick={() => setModalShowing(true)}>
				Log In
			</Button>
			<Dialog
				classes={{
					root: classes.modalRoot,
					paper: classes.modal + ' ' + classes.modalLogin,
				}}
				open={modalShowing}
				// TransitionComponent={Transition}
				keepMounted
				onClose={() => setModalShowing(false)}
				aria-labelledby='signup-modal-slide-title'
				aria-describedby='signup-modal-slide-description'
			>
				<Card plain className={classes.modalLoginCard}>
					<DialogTitle
						id='login-modal-slide-title'
						disableTypography
						className={classes.modalHeader}
					>
						<CardHeader
							plain
							color='primary'
							className={`${classes.textCenter} ${classes.cardLoginHeader}`}
						>
							<Button
								simple
								className={classes.modalCloseButton}
								key='close'
								aria-label='Close'
								onClick={() => setModalShowing(false)}
							>
								<Close className={classes.modalClose} />
							</Button>
							<h5 className={classes.cardTitleWhite}>Log in</h5>
							<div className={classes.socialLine}>
								<Mutation
									mutation={FIREBASE_LOGIN}
									refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
									awaitRefetchQueries
									onError={handleError}
									onCompleted={() => Router.push('/home')}
								>
									{(firebaseAuth, { called }) => {
										if (called) NProgress.start();
										return (
											<Fragment>
												<Button
													justIcon
													link
													className={classes.socialLineButton}
													onClick={e =>
														firebaseLogin(e, firebaseAuth, 'google')}
												>
													<i className='fab fa-google' />
												</Button>
												<Button
													justIcon
													link
													className={classes.socialLineButton}
													onClick={e =>
														firebaseLogin(e, firebaseAuth, 'facebook')}
												>
													<i className='fab fa-facebook-square' />
												</Button>

												<Button
													justIcon
													link
													className={classes.socialLineButton}
													onClick={e =>
														firebaseLogin(e, firebaseAuth, 'twitter')}
												>
													<i className='fab fa-twitter' />
												</Button>
											</Fragment>
										);
									}}
								</Mutation>
							</div>
						</CardHeader>
					</DialogTitle>
					<Mutation
						mutation={LOGIN_USER}
						variables={{ email: user.email, password: user.password }}
						refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
						onError={handleError}
						onCompleted={() => Router.push('/home')}
						awaitRefetchQueries
					>
						{(signin, { called }) => {
							if (called) NProgress.start();
							return (
								<form
									onSubmit={async e => {
										e.preventDefault();
										console.log(user);
										await signin({
											variables: {
												user: user.email,
												password: user.password,
											},
										});
									}}
								>
									<DialogContent
										id='login-modal-slide-description'
										className={classes.modalBody}
									>
										<p
											className={`${classes.description} ${classes.textCenter}`}
										>
											Or Be Classical
										</p>
										<CardBody className={classes.cardLoginBody}>
											<CustomInput
												id='login-modal-email'
												formControlProps={{
													fullWidth: true,
												}}
												inputProps={{
													startAdornment: (
														<InputAdornment position='start'>
															<Mail className={classes.icon} />
														</InputAdornment>
													),
													placeholder: 'Email...',
													value: user.email,
													onChange: e =>
														setUser({ ...user, email: e.target.value }),
												}}
											/>
											<CustomInput
												error={err.password}
												id='login-modal-pass'
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
																{!err.password &&
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
															<Icon className={classes.icon}>
																lock_outline
															</Icon>
														</InputAdornment>
													),
													placeholder: 'Password...',
													value: user.password,
													type: passwordShowing ? 'text' : 'password',
													onChange: e =>
														setUser({
															...user,
															password: e.target.value,
														}),
												}}
												labelText={err.password}
												labelProps={{
													error: true,
												}}
											/>
										</CardBody>
									</DialogContent>
									<DialogActions
										className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
									>
										<ButtonBase type='submit'>
											<Button
												color='primary'
												simple
												disabled={!user.email || !user.password}
												size='lg'
												component='div'
											>
												Get started
											</Button>
										</ButtonBase>
									</DialogActions>
								</form>
							);
						}}
					</Mutation>
					<Reset />
				</Card>
				<ErrorModal error={serverError} />
			</Dialog>
		</Fragment>
	);
};

export default withStyles(Styles)(Login);
