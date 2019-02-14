import React, { useEffect, useState, Fragment } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Timeline from '@material-ui/icons/Timeline';
import Code from '@material-ui/icons/Code';
import Group from '@material-ui/icons/Group';
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

const Register = ({ classes }) => {
	const [ modalShowing, setModalShowing ] = useState(false);

	return (
		<Fragment>
			<Button round onClick={() => setModalShowing(true)}>
				Sign Up
			</Button>
			<Dialog
				classes={{
					root: classes.modalRoot,
					paper: classes.modal + ' ' + classes.modalSignup,
				}}
				open={modalShowing}
				// TransitionComponent={Transition}
				keepMounted
				onClose={() => setModalShowing(false)}
				aria-labelledby='signup-modal-slide-title'
				aria-describedby='signup-modal-slide-description'
			>
				<Card plain className={classes.modalSignupCard}>
					<DialogTitle
						id='signup-modal-slide-title'
						disableTypography
						className={classes.modalHeader}
					>
						<Button
							simple
							className={classes.modalCloseButton}
							key='close'
							aria-label='Close'
							onClick={() => setModalShowing(false)}
						>
							{' '}
							<Close className={classes.modalClose} />
						</Button>
						<h3 className={`${classes.cardTitle} ${classes.modalTitle}`}>Register</h3>
					</DialogTitle>
					<DialogContent
						id='signup-modal-slide-description'
						className={classes.modalBody}
					>
						<GridContainer>
							<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
								<InfoArea
									className={classes.infoArea}
									title='Marketing'
									description={
										<p>
											We've created the marketing campaign of the website. It
											was a very interesting collaboration.
										</p>
									}
									icon={Timeline}
									iconColor='rose'
								/>
								<InfoArea
									className={classes.infoArea}
									title='Fully Coded in HTML5'
									description={
										<p>
											We've developed the website with HTML5 and CSS3. The
											client has access to the code using GitHub.
										</p>
									}
									icon={Code}
									iconColor='primary'
								/>
								<InfoArea
									className={classes.infoArea}
									title='Built Audience'
									description={
										<p>
											There is also a Fully Customizable CMS Admin Dashboard
											for this product.
										</p>
									}
									icon={Group}
									iconColor='info'
								/>
							</GridItem>
							<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
								<div className={classes.textCenter}>
									<Button justIcon round color='google'>
										<i className='fab fa-google' />
									</Button>

									<Button justIcon round color='facebook'>
										<i className='fab fa-facebook-f' />
									</Button>
									<Button justIcon round color='instagram'>
										<i className='fab fa-instagram' />
									</Button>

									<h4 className={classes.socialTitle}>or be classical</h4>
								</div>
								<form className={classes.form}>
									<CustomInput
										formControlProps={{
											fullWidth: true,
											className: classes.customFormControlClasses,
										}}
										inputProps={{
											startAdornment: (
												<InputAdornment
													position='start'
													className={classes.inputAdornment}
												>
													<Face className={classes.inputAdornmentIcon} />
												</InputAdornment>
											),
											placeholder: 'Full Name...',
										}}
									/>
									<CustomInput
										formControlProps={{
											fullWidth: true,
											className: classes.customFormControlClasses,
										}}
										inputProps={{
											startAdornment: (
												<InputAdornment
													position='start'
													className={classes.inputAdornment}
												>
													<Email className={classes.inputAdornmentIcon} />
												</InputAdornment>
											),
											placeholder: 'Email...',
										}}
									/>
									<CustomInput
										formControlProps={{
											fullWidth: true,
											className: classes.customFormControlClasses,
										}}
										inputProps={{
											startAdornment: (
												<InputAdornment
													position='start'
													className={classes.inputAdornment}
												>
													<Icon className={classes.inputAdornmentIcon}>
														lock_outline
													</Icon>
												</InputAdornment>
											),
											placeholder: 'Password...',
										}}
									/>
									<FormControlLabel
										classes={{
											label: classes.label,
										}}
										control={
											<Checkbox
												tabIndex={-1}
												// onClick={() => handleToggle(1)}
												checkedIcon={
													<Check className={classes.checkedIcon} />
												}
												icon={<Check className={classes.uncheckedIcon} />}
												classes={{
													checked: classes.checked,
													root: classes.checkRoot,
												}}
											/>
										}
										label={
											<span>
												I agree to the <a href='#'>terms and conditions</a>.
											</span>
										}
									/>
									<div className={classes.textCenter}>
										<Button round color='primary'>
											Get started
										</Button>
									</div>
								</form>
							</GridItem>
						</GridContainer>
					</DialogContent>
				</Card>
			</Dialog>
		</Fragment>
	);
};

export default withStyles(Styles)(Register);
