import React, { useState } from 'react';
import gql from 'graphql-tag';

import { useMutation } from '../Mutations/useMutation';

import { DialogTitle, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';

import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import Button from '../../styledComponents/CustomButtons/Button';
import Transition from '../Transistion';

import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';

const REPORT_USER = gql`
	mutation REPORT_USER($message: String!, $id: String!) {
		reportUser(message: $message, id: $id) {
			message
		}
	}
`;

const ReportUser = ({ user, open, setOpen, classes }) => {
	const [ message, setMessage ] = useState('');
	const [ reportUser ] = useMutation(REPORT_USER, { variables: { message, id: user.id } });
	// //const subject = `Report User ${userToReport.id}`;
	// //const message = `Tell us your concern about this user:%0D%0A`;
	// const bodySpace = `%0D%0A%0D%0A%0D%0A-----------------------`;
	// const reportedBy = `%0D%0AReported by: ${currentUser.id}`;

	// const body = message + bodySpace + reportedBy;

	return (
		<Dialog
			classes={{
				root: classes.modalRoot,
				paper: classes.modal,
			}}
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={() => setOpen(false)}
			aria-labelledby='classic-modal-slide-title'
			aria-describedby='classic-modal-slide-description'
		>
			<DialogTitle
				id='classic-modal-slide-title'
				disableTypography
				className={classes.modalHeader}
			>
				{' '}
				<h4 className={classes.modalTitle}>Report {user.firstName}</h4>
				<Button
					simple
					className={classes.modalCloseButton}
					key='close'
					aria-label='Close'
					onClick={() => setOpen(false)}
				>
					{' '}
					<Close className={classes.modalClose} />
				</Button>
			</DialogTitle>
			<DialogContent id='classic-modal-slide-description' className={classes.modalBody}>
				<CustomInput
					formControlProps={{
						fullWidth: true,
					}}
					inputProps={{
						multiline: true,
						rows: 6,
						placeholder: 'Please provide as much detail as possible.',
						value: message,
						onChange: e => setMessage(e.target.value),
					}}
				/>

				<DialogActions className={classes.modalFooter}>
					<Button onClick={() => reportUser()} color='danger' simple>
						Report
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
};

export default withStyles(styles)(ReportUser);

// return (
//   <div>
//     <a href={`mailto:support@up4.life?subject=${subject}&body=${body}`}>Report</a>
//   </div>
// )
