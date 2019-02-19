import React, { useEffect, useState, Fragment } from 'react';
import gql from 'graphql-tag';
import Router from 'next/router';
import firebase from 'firebase/app';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../Queries/User';
import withStyles from '@material-ui/core/styles/withStyles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Mail from '@material-ui/icons/Mail';
import Icon from '@material-ui/core/Icon';
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '../../styledComponents/CustomButtons/Button';
import Card from '../../styledComponents/Card/Card';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardBody from '../../styledComponents/Card/CardBody';
import CustomInput from '../../styledComponents/CustomInput/CustomInput';
import ErrorModal from './ErrorModal';
import Styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles';

import { auth } from '../../utils/firebase';

// import { auth } from '../../utils/firebaseProd';

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
		firebaseSignin(idToken: $idToken) {
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
	const [passwordShowing, setPasswordShowing] = useState(true);
	const [user, setUser] = useState({ email: '', password: '' });
	const [modalShowing, setModalShowing] = useState(false);
	const [serverError, setServerError] = useState(undefined);

	const googlePopup = async (e, firebaseSignin) => {
		e.preventDefault();
		try {
			let provider = new firebase.auth.GoogleAuthProvider();
			const complete = await auth.signInWithPopup(provider);
			const idToken = await auth.currentUser.getIdToken(true);
			const success = await firebaseSignin({ variables: { idToken } });
			if (success.data) Router.push('/home');
		} catch (err) {
			console.log(err);
		}
	};
	const fbookPopup = async (e, firebaseSignin) => {
		e.preventDefault();
		try {
			let provider = new firebase.auth.FacebookAuthProvider();
			const complete = await auth.signInWithPopup(provider);
			const idToken = await auth.currentUser.getIdToken(true);
			const success = await firebaseSignin({ variables: { idToken } });
			if (success.data) Router.push('/home');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Mutation
			mutation={LOGIN_USER}
			variables={{ email: user.email, password: user.password }}
			refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			awaitRefetchQueries
		>
			{(signin, { error, loading, called }) => {
				console.log(error, loading, called);
				return (
					<Fragment>
						<Button round onClick={() => setModalShowing(true)}>
							Log In
						</Button>
						<Dialog
							classes={{
								root: classes.modalRoot,
								paper: classes.modal + ' ' + classes.modalLogin
							}}
							open={modalShowing}
							// TransitionComponent={Transition}
							keepMounted
							onClose={() => setModalShowing(false)}
							aria-labelledby="signup-modal-slide-title"
							aria-describedby="signup-modal-slide-description"
						>
							<Card plain className={classes.modalLoginCard}>
								<DialogTitle
									id="login-modal-slide-title"
									disableTypography
									className={classes.modalHeader}
								>
									<CardHeader
										plain
										color="primary"
										className={`${classes.textCenter} ${classes.cardLoginHeader}`}
									>
										{' '}
										<Button
											simple
											className={classes.modalCloseButton}
											key="close"
											aria-label="Close"
											onClick={() => setModalShowing(false)}
										>
											<Close className={classes.modalClose} />
										</Button>
										<h5 className={classes.cardTitleWhite}>Log in</h5>
										<div className={classes.socialLine}>
											<Mutation
												mutation={FIREBASE_LOGIN}
												refetchQueries={[{ query: CURRENT_USER_QUERY }]}
											>
												{(firebaseSignin, { loading, error }) => {
													if (error) setServerError(error);
													return (
														<>
															<Button
																justIcon
																link
																className={classes.socialLineButton}
																onClick={e => googlePopup(e, firebaseSignin)}
															>
																<i className="fab fa-google" />
															</Button>
															<Button
																justIcon
																link
																className={classes.socialLineButton}
																onClick={e => fbookPopup(e, firebaseSignin)}
															>
																<i className="fab fa-facebook-square" />
															</Button>

															<Button justIcon link className={classes.socialLineButton}>
																<i className="fab fa-instagram" />
															</Button>
														</>
													);
												}}
											</Mutation>
										</div>
									</CardHeader>
								</DialogTitle>
								<form
									onSubmit={async e => {
										e.preventDefault();
										await signin();
										Router.push('/home');
									}}
									onKeyPress={async event => {
										if (event.key === 'Enter') {
											await signin();
											Router.push('/home');
										}
									}}
								>
									<DialogContent id="login-modal-slide-description" className={classes.modalBody}>
										<p className={`${classes.description} ${classes.textCenter}`}>
											Or Be Classical
										</p>
										<CardBody className={classes.cardLoginBody}>
											<CustomInput
												id="login-modal-email"
												formControlProps={{
													fullWidth: true
												}}
												inputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<Mail className={classes.icon} />
														</InputAdornment>
													),
													placeholder: 'Email...',
													value: user.email,
													onChange: e => setUser({ ...user, email: e.target.value })
												}}
											/>
											<CustomInput
												id="login-modal-pass"
												formControlProps={{
													fullWidth: true
												}}
												inputProps={{
													endAdornment: (
														<InputAdornment position="end">
															<IconButton
																aria-label="Toggle password visibility"
																onClick={() => setPasswordShowing(!passwordShowing)}
															>
																{passwordShowing ? <Visibility /> : <VisibilityOff />}
															</IconButton>
														</InputAdornment>
													),
													startAdornment: (
														<InputAdornment position="start">
															<Icon className={classes.icon}>lock_outline</Icon>
														</InputAdornment>
													),
													placeholder: 'Password...',
													value: user.password,
													type: passwordShowing ? 'text' : 'password',
													onChange: e =>
														setUser({
															...user,
															password: e.target.value
														})
												}}
											/>
										</CardBody>
									</DialogContent>
									<DialogActions
										className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
									>
										<ButtonBase type="submit">
											<Button color="primary" simple size="lg" component="div">
												Get started
											</Button>
										</ButtonBase>
									</DialogActions>
								</form>
							</Card>
							<ErrorModal error={serverError} />
						</Dialog>
					</Fragment>
				);
			}}
		</Mutation>
	);
};

export default withStyles(Styles)(Login);
