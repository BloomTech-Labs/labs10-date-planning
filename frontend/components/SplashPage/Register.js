import React, { useEffect, useState, Fragment } from 'react';
import Button from '../../styles/components/Button';
import Assignment from '@material-ui/icons/Assignment';
import GridContainer from '../../styles/components/Grid/GridContainer';
import GridItem from '../../styles/components/Grid/GridItem';
import Card from '../../styles/components/Card/Card';
import DialogTitle from '@material-ui/core/DialogTitle';
import Close from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import ModalStyles from '../../styles/components/Modal/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import DialogContent from '@material-ui/core/DialogContent';
import InfoArea from '../../styles/components/InfoArea';
import Timeline from '@material-ui/icons/Timeline';
import Code from '@material-ui/icons/Code';
import Group from '@material-ui/icons/Group';
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomInput from '../../styles/components/Input';
import Face from '@material-ui/icons/Face';
import Icon from '@material-ui/core/Icon';
import Email from '@material-ui/icons/Email';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Check from '@material-ui/icons/Check';

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
									<Button justIcon round color='twitter'>
										<i className='fab fa-twitter' />
									</Button>
									{` `}
									<Button justIcon round color='dribbble'>
										<i className='fab fa-dribbble' />
									</Button>
									{` `}
									<Button justIcon round color='facebook'>
										<i className='fab fa-facebook-f' />
									</Button>
									{` `}
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
											placeholder: 'First Name...',
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
												onClick={() => this.handleToggle(1)}
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
												I agree to the{' '}
												<a href='#pablo'>terms and conditions</a>.
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

export default withStyles(ModalStyles)(Register);
