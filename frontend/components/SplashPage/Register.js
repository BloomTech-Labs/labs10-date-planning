import React, { useEffect, useState, Fragment } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import firebase from 'firebase/app';
import Router from 'next/router';
import withStyles from '@material-ui/core/styles/withStyles';

import { CURRENT_USER_QUERY } from '../Queries/User';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ButtonBase from '@material-ui/core/ButtonBase';

import MusicNote from '@material-ui/icons/MusicNote';
import TheaterMasks from '../../static/icons/TheatreMask';
import Restaurant from '@material-ui/icons/Restaurant';
import Face from '@material-ui/icons/Face';
import Icon from '@material-ui/core/Icon';
import Email from '@material-ui/icons/Email';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';

import Button from '../../styledComponents/CustomButtons/Button';
import Card from '../../styledComponents/Card/Card';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import CustomInput from '../../styledComponents/CustomInput/CustomInput';
import InfoArea from '../../styledComponents/InfoArea/InfoArea';

import Styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles';

import Terms from '../../components/SplashPage/Terms';
// import { auth } from '../../utils/firebase';
import { auth } from '../../utils/firebaseProd';

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
		firebaseSignup(idToken: $idToken) {
			token
			user {
				id
				firstName
				email
			}
		}
	}
`;

const Register = ({ classes }) => {
	const [modalShowing, setModalShowing] = useState(false);
	const [termsShowing, setTermsShowing] = useState(false);
	const [terms, setTerms] = useState(false);
	const [user, setUser] = useState({
		name: undefined,
		email: undefined,
		password: undefined
	});
	const [err, setError] = useState({
		name: undefined,
		email: undefined,
		password: undefined
	});

	const handleChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value });
	};

	const firebaseAuth = async (e, firebaseSignup, company) => {
		// e.preventDefault();
		if (company === 'google') {
			let provider = new firebase.auth.GoogleAuthProvider();
			const complete = await auth.signInWithPopup(provider);
			const idToken = await auth.currentUser.getIdToken(true);
			const success = await firebaseSignup({ variables: { idToken } });
		} else if (company === 'facebook') {
			let provider = new firebase.auth.FacebookAuthProvider();
			const complete = await auth.signInWithPopup(provider);
			const idToken = await auth.currentUser.getIdToken(true);
			const success = await firebaseSignup({ variables: { idToken } });
		} else {
			// INSTAGRAM WILL GO HERE BUT WILL NEED DIFFERENT FUNCTION
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
					lastName: nameArray[1]
				}
			}).catch(err => console.log(err));
			if (newUser) Router.push('/home');
		}
	};

	return (
		<Fragment>
			<Button round onClick={() => setModalShowing(true)}>
				Sign Up
			</Button>
			<Dialog
				classes={{
					root: classes.modalRoot,
					paper: classes.modal + ' ' + classes.modalSignup
				}}
				open={modalShowing}
				// TransitionComponent={Transition}
				keepMounted
				onClose={() => {
					setModalShowing(false);
				}}
				aria-labelledby="signup-modal-slide-title"
				aria-describedby="signup-modal-slide-description"
			>
				{
					<Card plain className={classes.modalSignupCard}>
						{termsShowing ? (
							<Terms setTermsShowing={setTermsShowing} />
						) : (
							<div>
								<DialogTitle
									id="signup-modal-slide-title"
									disableTypography
									className={classes.modalHeader}
								>
									<Button
										simple
										className={classes.modalCloseButton}
										key="close"
										aria-label="Close"
										onClick={() => setModalShowing(false)}
									>
										{' '}
										<Close className={classes.modalClose} />
									</Button>
									<h3 className={`${classes.cardTitle} ${classes.modalTitle}`}>Register</h3>
								</DialogTitle>
								<DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
									<GridContainer>
										<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
											<InfoArea
												className={classes.infoArea}
												title="Concerts"
												description={
													<p>
														Find shows near you according to your tastes and get notified when your
														favorite performers are in town.
													</p>
												}
												icon={MusicNote}
												iconColor="rose"
											/>
											<InfoArea
												className={classes.infoArea}
												title="Comedy and Theater"
												description={
													<p>
														Get the scoop on nearby comedy and theatrical events as well as other
														kind of live performances.
													</p>
												}
												icon={TheaterMasks}
												iconColor="primary"
											/>
											<InfoArea
												className={classes.infoArea}
												title="Epicurean Adventures"
												description={
													<p>
														Be the first to make a reservation at nearby restaurant grand openings
														or prix fixe events.
													</p>
												}
												icon={Restaurant}
												iconColor="info"
											/>
										</GridItem>
										<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
											<div className={classes.textCenter}>
												<Mutation
													mutation={FIREBASE_SIGNUP}
													refetchQueries={[{ query: CURRENT_USER_QUERY }]}
												>
													{(signup, { loading, error }) => (
														<>
															<Button
																justIcon
																round
																color="google"
																onClick={e => firebaseAuth(e, signup, 'google')}
															>
																<i className="fab fa-google" />
															</Button>

															<Button
																justIcon
																round
																color="facebook"
																onClick={e => firebaseAuth(e, signup, 'facebook')}
															>
																<i className="fab fa-facebook-f" />
															</Button>
															<Button
																justIcon
																round
																color="instagram"
																onClick={e => firebaseAuth(e, signup)}
															>
																<i className="fab fa-instagram" />
															</Button>
														</>
													)}
												</Mutation>

												<h4 className={classes.socialTitle}>or be classical</h4>
											</div>
											<Mutation
												mutation={REGISTER_USER}
												refetchQueries={[{ query: CURRENT_USER_QUERY }]}
											>
												{(signup, { error, loading }) => (
													<form
														className={classes.form}
														onKeyPress={event => {
															if (event.key === 'Enter') {
																handleSubmit(event, signup);
															}
														}}
													>
														<fieldset
															style={{ border: 'none' }}
															disabled={loading}
															aria-busy={loading}
														>
															<CustomInput
																error={err.name}
																id="name"
																formControlProps={{
																	fullWidth: true,
																	className: classes.customFormControlClasses
																}}
																inputProps={{
																	startAdornment: (
																		<InputAdornment
																			position="start"
																			className={classes.inputAdornment}
																		>
																			<Face className={classes.inputAdornmentIcon} />
																		</InputAdornment>
																	),
																	placeholder: 'Full Name...',
																	autoComplete: 'name',
																	autoFocus: true,
																	required: true,
																	name: 'name',
																	value: user.name,
																	onChange: handleChange
																}}
																labelText={err.name}
																labelProps={{
																	error: true
																}}
															/>
															<CustomInput
																error={err.email}
																id="email"
																formControlProps={{
																	fullWidth: true,
																	className: classes.customFormControlClasses
																}}
																inputProps={{
																	startAdornment: (
																		<InputAdornment
																			position="start"
																			className={classes.inputAdornment}
																		>
																			<Email className={classes.inputAdornmentIcon} />
																		</InputAdornment>
																	),
																	placeholder: 'Email...',
																	required: true,
																	name: 'email',
																	value: user.email,
																	onChange: handleChange
																}}
																label={err.email}
																labelProps={{
																	error: true
																}}
															/>
															<CustomInput
																error={err.password}
																id="password"
																formControlProps={{
																	fullWidth: true,
																	className: classes.customFormControlClasses
																}}
																inputProps={{
																	startAdornment: (
																		<InputAdornment
																			position="start"
																			className={classes.inputAdornment}
																		>
																			<Icon className={classes.inputAdornmentIcon}>
																				lock_outline
																			</Icon>
																		</InputAdornment>
																	),
																	placeholder: 'Password...',
																	autoComplete: 'new-password',
																	required: true,
																	name: 'password',
																	value: user.password,
																	onChange: handleChange,
																	error: err.password
																}}
																label={err.password}
																labelProps={{
																	error: true
																}}
															/>
															<FormControlLabel
																classes={{
																	label: classes.label
																}}
																control={
																	<Checkbox
																		tabIndex={-1}
																		checked={terms}
																		required={true}
																		onClick={() => setTerms(!terms)}
																		checkedIcon={<Check className={classes.checkedIcon} />}
																		icon={<Check className={classes.uncheckedIcon} />}
																		classes={{
																			checked: classes.checked,
																			root: classes.checkRoot
																		}}
																	/>
																}
																label={
																	<span>
																		I agree to the{' '}
																		<a onClick={() => setTermsShowing(true)} href="#">
																			terms and conditions
																		</a>
																		.
																	</span>
																}
															/>
															<div className={classes.textCenter}>
																<ButtonBase type="submit">
																	<Button round color="primary" component="div">
																		Get Started
																	</Button>
																</ButtonBase>{' '}
															</div>
														</fieldset>
													</form>
												)}
											</Mutation>
										</GridItem>
									</GridContainer>
								</DialogContent>
							</div>
						)}
					</Card>
				}
			</Dialog>
		</Fragment>
	);
};

export default withStyles(Styles)(Register);
