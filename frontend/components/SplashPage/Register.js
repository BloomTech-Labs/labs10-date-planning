import React, { useEffect, useState, Fragment } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import firebase from 'firebase/app';
import Router from 'next/router';
import NProgress from 'nprogress';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import {
	DialogTitle,
	Dialog,
	DialogContent,
	InputAdornment,
	Checkbox,
	FormControlLabel,
	ButtonBase,
	IconButton,
	Icon,
} from '@material-ui/core';
import {
	Visibility,
	VisibilityOff,
	MusicNote,
	Restaurant,
	Face,
	Email,
	Check,
	Close,
	LockOutlined,
} from '@material-ui/icons';
//Q&M
import { CURRENT_USER_QUERY } from '../Queries/User';
//Components
import ErrorModal from './ErrorModal';
import Terms from '../../components/SplashPage/Terms';
import Transition from '../Transistion';
//styled components
import Button from '../../styledComponents/CustomButtons/Button';
import Card from '../../styledComponents/Card/Card';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import CustomInput from '../../styledComponents/CustomInput/CustomInput';
import InfoArea from '../../styledComponents/InfoArea/InfoArea';
//assets
import TheaterMasks from '../../static/icons/TheatreMask';
import Futbol from '../../static/icons/futbol-solid.js';
//styles
import Styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles';
//utils
import { auth } from '../../utils/firebase';

const REGISTER_USER = gql`
	mutation REGISTER_USER(
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
	) {
		signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
			id
			firstName
			lastName
			email
		}
	}
`;
const FIREBASE_SIGNUP = gql`
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

const Register = ({ classes, showing, setShowing }) => {
	const [ passwordShowing, setPasswordShowing ] = useState(false);
	// const [showing, setModalShowing] = useState(false);
	const [ termsShowing, setTermsShowing ] = useState(false);
	const [ terms, setTerms ] = useState(false);
	const [ user, setUser ] = useState({
		name: undefined,
		email: undefined,
		password: undefined,
	});
	const [ err, setError ] = useState({
		name: undefined,
		email: undefined,
		password: undefined,
	});
	const [ serverError, setServerError ] = useState(undefined);
	const handleChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value });
	};

	useEffect(
		() => {
			if (err.password) {
				setError({ ...err, password: undefined });
			}
		},
		[ user.password ],
	);

	const firebaseSignup = async (e, firebaseAuth, company) => {
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
	const handleSubmit = async (e, signup) => {
		e.preventDefault();
		let nameArray = user.name.split(' ');
		if (nameArray.length < 2) {
			setError({ ...err, name: 'First name and last name required.' });
		} else {
			let newUser = await signup({
				variables: {
					email: user.email,
					password: user.password,
					firstName: nameArray[0],
					lastName: nameArray[1],
				},
			});
		}
	};

	const handleError = error => {
		NProgress.done();
		if (error.message.includes('unique')) {
			setError({ ...err, email: 'A user with this email already exists.' });
		} else if (error.message.includes('Password')) {
			setError({ ...err, password: error.message });
		} else {
			setServerError(error);
		}
	};

	return (
		<Fragment>
			<GridItem xs={6} sm={6} md={6} lg={6}>
				<div className={`${classes.section} cd-section`} id='javascriptComponents'>
					<Dialog
						classes={{
							root: classes.modalRoot,
							paper: classes.modal + ' ' + classes.modalSignup,
							container: classes.modalContainer,
						}}
						open={showing}
						TransitionComponent={Transition}
						keepMounted
						onClose={() => {
							setShowing(false);
						}}
						aria-labelledby='signup-modal-slide-title'
						aria-describedby='signup-modal-slide-description'
					>
						<Card plain className={classes.modalSignupCard + ' ' + classes.register}>
							{termsShowing ? (
								<Terms setTermsShowing={setTermsShowing} />
							) : (
								<div>
									<DialogTitle
										id='signup-modal-slide-title'
										disableTypography
										className={classes.modalHeader}
									>
										<Button
											simple='true'
											className={classes.modalCloseButton}
											key='close'
											aria-label='Close'
											onClick={() => setShowing(false)}
										>
											{' '}
											<Close className={classes.modalClose} />
										</Button>
										<h3
											className={`${classes.cardTitle} ${classes.modalTitle}`}
										>
											Register
										</h3>
									</DialogTitle>
									<DialogContent
										id='signup-modal-slide-description'
										className={classes.modalBody}
									>
										<GridContainer>
											<GridItem
												xs={12}
												sm={5}
												md={5}
												className={classes.mlAuto}
											>
												<InfoArea
													className={classes.infoArea}
													title='Music'
													description={
														<p>
															From the biggest acts in town to more
															intimate venues, find out who's playing
															in your area.
														</p>
													}
													icon={MusicNote}
													iconColor='rose'
												/>
												<InfoArea
													className={classes.infoArea}
													title='Theater'
													description={
														<p>
															Comedy, musicals, classical productions.
															Discover the productions on offer near
															you.
														</p>
													}
													icon={TheaterMasks}
													iconColor='primary'
												/>
												<InfoArea
													className={classes.infoArea}
													title='Sports'
													description={
														<p>Sports ball. If you're into that.</p>
													}
													icon={Futbol}
													iconColor='info'
												/>
											</GridItem>
											<GridItem
												xs={12}
												sm={5}
												md={5}
												className={classes.mrAuto}
											>
												<div className={classes.textCenter}>
													<Mutation
														mutation={FIREBASE_SIGNUP}
														refetchQueries={[
															{ query: CURRENT_USER_QUERY },
														]}
														awaitRefetchQueries
														onError={error => {
															NProgress.done();
															setServerError(error);
														}}
														onCompleted={() => {
															NProgress.done();
															Router.push(
																'/welcome?slug=0',
																'/welcome/profile/getstarted',
															);
														}}
													>
														{(firebaseAuth, { called }) => {
															if (called) NProgress.start();
															return (
																<Fragment>
																	<Button
																		justIcon
																		round='true'
																		color='google'
																		onClick={e =>
																			firebaseSignup(
																				e,
																				firebaseAuth,
																				'google',
																			)}
																	>
																		<i className='fab fa-google' />
																	</Button>

																	<Button
																		justIcon
																		round='true'
																		color='facebook'
																		onClick={e =>
																			firebaseSignup(
																				e,
																				firebaseAuth,
																				'facebook',
																			)}
																	>
																		<i className='fab fa-facebook-f' />
																	</Button>
																	<Button
																		justIcon
																		round='true'
																		color='instagram'
																		onClick={e =>
																			firebaseSignup(
																				e,
																				firebaseAuth,
																				'twitter',
																			)}
																	>
																		<i className='fab fa-twitter' />
																	</Button>
																</Fragment>
															);
														}}
													</Mutation>

													<h4 className={classes.socialTitle}>
														or be classical
													</h4>
												</div>
												<Mutation
													mutation={REGISTER_USER}
													refetchQueries={[
														{ query: CURRENT_USER_QUERY },
													]}
													onCompleted={() => {
														NProgress.done();
														Router.push(
															'/welcome?slug=0',
															'/welcome/profile/getstarted',
														);
													}}
													onError={handleError}
													awaitRefetchQueries
												>
													{(signup, { loading, called }) => {
														if (called) NProgress.start();

														return (
															<form
																disabled
																className={classes.form}
																onSubmit={e =>
																	handleSubmit(e, signup)}
															>
																<fieldset
																	style={{ border: 'none' }}
																	disabled={loading}
																	aria-busy={loading}
																>
																	<CustomInput
																		error={err.name}
																		id='name'
																		formControlProps={{
																			fullWidth: true,
																			className:
																				classes.customFormControlClasses,
																		}}
																		inputProps={{
																			startAdornment: (
																				<InputAdornment
																					position='start'
																					className={
																						classes.inputAdornment
																					}
																				>
																					<Face
																						className={
																							classes.inputAdornmentIcon
																						}
																					/>
																				</InputAdornment>
																			),
																			placeholder:
																				'Full Name...',
																			autoComplete: 'name',
																			autoFocus: true,
																			required: true,
																			name: 'name',
																			value: user.name,
																			onChange: handleChange,
																		}}
																		labelText={err.name}
																		labelProps={{
																			error: true,
																		}}
																	/>
																	<CustomInput
																		error={err.email}
																		id='email'
																		formControlProps={{
																			fullWidth: true,
																			className:
																				classes.customFormControlClasses,
																		}}
																		inputProps={{
																			startAdornment: (
																				<InputAdornment
																					position='start'
																					className={
																						classes.inputAdornment
																					}
																				>
																					<Email
																						className={
																							classes.inputAdornmentIcon
																						}
																					/>
																				</InputAdornment>
																			),
																			placeholder: 'Email...',
																			required: true,
																			name: 'email',
																			value: user.email,
																			onChange: handleChange,
																		}}
																		labelText={err.email}
																		labelProps={{
																			error: true,
																		}}
																	/>
																	<CustomInput
																		error={err.password}
																		id='password'
																		formControlProps={{
																			fullWidth: true,
																			className:
																				classes.customFormControlClasses,
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
																								<Visibility
																								/>
																							) : (
																								<VisibilityOff
																								/>
																							))}
																					</IconButton>
																				</InputAdornment>
																			),
																			startAdornment: (
																				<InputAdornment
																					position='start'
																					className={
																						classes.inputAdornment
																					}
																				>
																					<LockOutlined
																						className={
																							classes.inputAdornmentIcon
																						}
																					/>
																				</InputAdornment>
																			),
																			placeholder:
																				'Password...',
																			autoComplete:
																				'new-password',
																			required: true,
																			name: 'password',
																			type: passwordShowing
																				? 'text'
																				: 'password',
																			value: user.password,
																			onChange: handleChange,
																			error:
																				err.password &&
																				true,
																		}}
																		labelText='Must be at least 8 characters including a number.'
																		labelProps={{
																			error: err.password
																				? true
																				: false,
																		}}
																	/>
																	<FormControlLabel
																		classes={{
																			label: classes.label,
																		}}
																		control={
																			<Checkbox
																				tabIndex={-1}
																				checked={terms}
																				required={true}
																				onClick={() =>
																					setTerms(
																						!terms,
																					)}
																				checkedIcon={
																					<Check
																						className={
																							classes.checkedIcon +
																							' ' +
																							classes.registerCheck
																						}
																					/>
																				}
																				icon={
																					<Check
																						className={
																							classes.uncheckedIcon +
																							' ' +
																							classes.registerCheck
																						}
																					/>
																				}
																				classes={{
																					checked:
																						classes.checked,
																					root:
																						classes.checkRoot,
																				}}
																			/>
																		}
																		label={
																			<span
																				style={{
																					color:
																						'#fafafa',
																				}}
																			>
																				I agree to the{' '}
																				<a
																					onClick={() =>
																						setTermsShowing(
																							true,
																						)}
																					href='#'
																				>
																					terms and
																					conditions and
																					privacy policy
																				</a>
																				.
																			</span>
																		}
																	/>
																	<div
																		className={
																			classes.textCenter
																		}
																	>
																		<ButtonBase type='submit'>
																			<Button
																				className={
																					classes.registerModalButton
																				}
																				round='true'
																				// disabled
																				disabled={!terms}
																				color='primary'
																				component='div'
																			>
																				Get Started
																			</Button>
																		</ButtonBase>{' '}
																	</div>
																</fieldset>
															</form>
														);
													}}
												</Mutation>
											</GridItem>
										</GridContainer>
									</DialogContent>
								</div>
							)}
						</Card>

						<ErrorModal error={serverError} />
					</Dialog>
				</div>
			</GridItem>
		</Fragment>
	);
};

export default withStyles(Styles)(Register);
