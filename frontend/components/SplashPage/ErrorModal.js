import React, { useEffect, useState } from 'react';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { Dialog, DialogContent, DialogActions } from '@material-ui/core';
//styledcomponents
import Button from '../../styledComponents/CustomButtons/Button';
//styles
import Styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';

const ErrorModal = ({ error, classes }) => {
	const [ modal, showModal ] = useState(false);
	useEffect(
		() => {
			if (error) {
				showModal(true);
			}
		},
		[ error ],
	);

	return (
		<Dialog
			classes={{
				root: classes.modalRoot,
				paper: classes.modal + ' ' + classes.modalSmall,
			}}
			open={modal}
			// TransitionComponent={Transition}
			//keepMounted
			onClose={() => showModal(false)}
			aria-labelledby='small-modal-slide-title'
			aria-describedby='small-modal-slide-description'
		>
			<DialogContent
				id='small-modal-slide-description'
				className={classes.modalBody + ' ' + classes.modalSmallBody}
			>
				<h5>{error && error.message.replace('GraphQL error: ', '')}</h5>
			</DialogContent>
			<DialogActions className={classes.modalFooter + ' ' + classes.modalFooterCenter}>
				<Button
					onClick={() => showModal(false)}
					color='danger'
					simple
					className={
						classes.modalSmallFooterFirstButton +
						' ' +
						classes.modalSmallFooterSecondButton
					}
				>
					Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default withStyles(Styles)(ErrorModal);
