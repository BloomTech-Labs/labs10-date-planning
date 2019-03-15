import React, { useEffect, useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Router from 'next/router';
import Close from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '../../styledComponents/CustomButtons/Button';
import Styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';

const ErrorModal = ({ modal, showModal, classes }) => {
	return (
		<Dialog
			classes={{
				root: classes.modalRoot,
				paper: classes.modal + ' ' + classes.modalSmall,
			}}
			open={Object.keys(modal).length > 0}
			// TransitionComponent={Transition}
			//keepMounted
			onClose={() => showModal({})}
			aria-labelledby='small-modal-slide-title'
			aria-describedby='small-modal-slide-description'
		>
			<DialogTitle
				id='notice-modal-slide-title'
				disableTypography
				className={classes.modalHeader}
			>
				{' '}
				<Button
					simple="true"
					className={classes.modalCloseButton}
					key='close'
					aria-label='Close'
					onClick={e => {
						e.stopPropagation();
						showModal({});
					}}
				>
					{' '}
					<Close className={classes.modalClose} />
				</Button>
			</DialogTitle>
			<DialogContent
				id='small-modal-slide-description'
				style={{ marginTop: 0, paddingTop: 0 }}
				className={classes.modalBody + ' ' + classes.modalSmallBody}
			>
				{!modal.error && <h2>Event Added!</h2>}
				{!modal.message && <h5>{Object.values(modal)[0]}</h5>}
			</DialogContent>
			<DialogActions className={classes.modalFooter + ' ' + classes.modalFooterCenter}>
				{!modal.error && (
					<Button
						onClick={() => Router.push('/dates')}
						color='primary'
						className={
							classes.modalSmallFooterFirstButton +
							' ' +
							classes.modalSmallFooterSecondButton
						}
					>
						Go to your events
					</Button>
				)}
				{/* {!modal.message && (
					<Button
						onClick={() => Router.push('/billing')}
						color='rose'
						className={
							classes.modalSmallFooterFirstButton +
							' ' +
							classes.modalSmallFooterSecondButton
						}
					>
						Go Pro?
					</Button>
				)} */}
			</DialogActions>
		</Dialog>
	);
};

export default withStyles(Styles)(ErrorModal);
