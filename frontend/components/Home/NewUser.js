import React, { useEffect, useState } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
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
import { BookmarkBorder, Close, CodeSharp } from '@material-ui/icons';
//QM
import User from '../Queries/User';
//components
import ImageUpload from '../Settings/ImageUpload';
//styled components
import Button from '../../styledComponents/CustomButtons/Button';
//styles
import Styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';

const NewUser = ({ classes }) => {
	const [ showing, setShowing ] = useState(true);
	const [ selectedDate, setSelectedDate ] = useState(null);
	const handleDateChange = date => {
		setSelectedDate(date);
	};

	useEffect(
		() => {
			if (selectedDate) {
				console.log(selectedDate.format());
			}
		},
		[ selectedDate ],
	);
	return (
		<User>
			{({ data: { currentUser } }) => (
				<Dialog
					classes={{
						root: classes.modalRoot,
						paper: classes.modal,
					}}
					open={showing}
					//TransitionComponent={Transition}
					//keepMounted
					onClose={() => setShowing(false)}
					aria-labelledby='classic-modal-slide-title'
					aria-describedby='classic-modal-slide-description'
				>
					<DialogTitle
						id='classic-modal-slide-title'
						disableTypography
						className={classes.modalHeader}
					>
						<Button
							simple
							className={classes.modalCloseButton}
							key='close'
							aria-label='Close'
							onClick={() => setShowing(false)}
						>
							{' '}
							<Close className={classes.modalClose} />
						</Button>
						<h4 className={classes.modalTitle}>Welcome {currentUser.firstName}!</h4>
						<DialogContent
							id='classic-modal-slide-description'
							className={classes.modalBody}
						>
							<ImageUpload />
							When were you born?
							<div>
								<MuiPickersUtilsProvider utils={MomentUtils}>
									<DatePicker
										label='Date of birth'
										value={selectedDate}
										disableFuture
										clearable
										openTo='year'
										format='MM/DD/YYYY'
										// format={this.props.getFormatString({
										//   moment: 'DD/MM/YYYY',
										//   dateFns: 'dd/MM/yyyy',
										// })}
										views={[ 'year', 'month', 'day' ]}
										onChange={handleDateChange}
									/>
								</MuiPickersUtilsProvider>
							</div>
						</DialogContent>
					</DialogTitle>
				</Dialog>
			)}
		</User>
	);
};

export default withStyles(Styles)(NewUser);
