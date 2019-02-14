import React, { useEffect, useState, Fragment } from 'react';
import Button from '../../styles/components/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import ModalStyles from '../../styles/components/Modal/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Mail from '@material-ui/icons/Mail';
import Face from '@material-ui/icons/Face';
import Card from '../../styles/components/Card/Card';
import CardHeader from '../../styles/components/Card/CardHeader';
import CardBody from '../../styles/components/Card/CardBody';
import DialogTitle from '@material-ui/core/DialogTitle';
import Close from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
import CustomInput from '../../styles/components/Input';
import DialogContent from '@material-ui/core/DialogContent';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

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

const Login = ({ classes }) => {
	const [ user, setUser ] = useState({ email: '', password: '' });
	const [ modalShowing, setModalShowing ] = useState(false);

	const login = () => {
		console.log(user);
	};
	return (
		<Mutation mutation={LOGIN_USER} variables={{ email: user.email, password: user.password }}>
			{(signin, { error, loading, called }) => {
				return (
					<Fragment>
						<Button round onClick={() => setModalShowing(true)}>
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
										{' '}
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
											<Button
												justIcon
												link
												className={classes.socialLineButton}
											>
												<i className='fab fa-facebook-square' />
											</Button>
											<Button
												justIcon
												link
												className={classes.socialLineButton}
											>
												<i className='fab fa-twitter' />
											</Button>
											<Button
												justIcon
												link
												className={classes.socialLineButton}
											>
												<i className='fab fa-google-plus-g' />
											</Button>
										</div>
									</CardHeader>
								</DialogTitle>
								<DialogContent
									id='login-modal-slide-description'
									className={classes.modalBody}
								>
									<form id='loginform' onSubmit={login}>
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
												id='login-modal-pass'
												formControlProps={{
													fullWidth: true,
												}}
												inputProps={{
													startAdornment: (
														<InputAdornment position='start'>
															<Icon className={classes.icon}>
																lock_outline
															</Icon>
														</InputAdornment>
													),
													placeholder: 'Password...',
													value: user.password,
													onChange: e =>
														setUser({
															...user,
															password: e.target.value,
														}),
												}}
											/>
										</CardBody>
									</form>
								</DialogContent>
								<DialogActions
									className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
								>
									<Button
										color='primary'
										simple
										size='lg'
										onClick={() => {
											signin();
											setModalShowing(false);
										}}
									>
										Get started
									</Button>
									<Button justIcon link className={classes.socialLineButton}>
										<i className='fab fa-twitter' />
									</Button>
									<Button justIcon link className={classes.socialLineButton}>
										<i className='fab fa-google-plus-g' />
									</Button>
								</DialogActions>
							</Card>
						</Dialog>
					</Fragment>
				);
			}}
		</Mutation>
	);
};

export default withStyles(ModalStyles)(Login);
