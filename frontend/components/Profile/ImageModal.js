import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import withStyles from '@material-ui/core/styles/withStyles';
import { DialogTitle, Dialog, DialogContent, InputAdornment, IconButton } from '@material-ui/core';
import {
	BookmarkBorder,
	Close,
	Send,
	Favorite,
	FavoriteBorder,
	NotInterested,
} from '@material-ui/icons';
import Button from '../../styledComponents/CustomButtons/Button';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';
import profileStandIn from '../../static/img/placeholder.jpg';
const modalHeader = {
	// backgroundColor: '#81d6e3',
	backgroundImage: 'linear-gradient(to top, #8ad2ff, #94d5fd, #9fd8fb, #a8daf9, #b2ddf7)',
	borderTopLeftRadius: '6px',
	borderTopRightRadius: '6px',
	paddingBottom: '15px',
	color: '#fafafa',
};

const ImageModal = ({ classes, modal, showModal }) => {
	return (
		<Dialog
			classes={{
				root: classes.modalRoot,
				paper: classes.modalLarge,
			}}
			open={modal}
			// TransitionComponent={Transition}
			//keepMounted
			scroll='body'
			onClose={() => showModal(false)}
			aria-labelledby='notice-modal-slide-title'
			aria-describedby='notice-modal-slide-description'
			//style={{ height: '700px' }}
		>
			<DialogTitle
				id='notice-modal-slide-title'
				disableTypography
				className={classes.modalHeader}
				style={modalHeader}
			>
				<Button
					simple
					className={classes.modalCloseButton}
					key='close'
					aria-label='Close'
					onClick={e => {
						e.stopPropagation();
						showModal(false);
					}}
				>
					{' '}
					<Close style={{ color: '#fafafa' }} className={classes.modalClose} />
				</Button>
			</DialogTitle>
			<DialogContent
				style={{ zIndex: 3, display: 'flex' }}
				id='notice-modal-slide-description'
				classes={{ root: 'dialogContent' }}
				className={classes.modalBody}
			>
				<GridContainer>
					<GridItem sm={6} md={4} lg={4}>
						<img src={profileStandIn} />
					</GridItem>
					<GridItem sm={6} md={4} lg={4}>
						<img src={profileStandIn} />
					</GridItem>
					<GridItem sm={6} md={4} lg={4}>
						<img src={profileStandIn} />
					</GridItem>
					<GridItem sm={6} md={4} lg={4}>
						<img src={profileStandIn} />
					</GridItem>
					<GridItem sm={6} md={4} lg={4}>
						<img src={profileStandIn} />
					</GridItem>
					<GridItem sm={6} md={4} lg={4}>
						<img src={profileStandIn} />
					</GridItem>
				</GridContainer>
			</DialogContent>
		</Dialog>
	);
};

export default withStyles(styles)(ImageModal);
