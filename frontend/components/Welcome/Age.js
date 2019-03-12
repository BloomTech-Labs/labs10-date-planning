import React, { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import { MuiPickersUtilsProvider, InlineDatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
//import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
//import DatePicker from 'material-ui-pickers/DatePicker/DatePicker';
import MomentUtils from '@date-io/moment';
//import BasePicker from 'material-ui-pickers/_shared/BasePicker';

//import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import moment from 'moment';
import { Paper } from '@material-ui/core/';

import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';

const GenderPrefs = () => {
	const [ selectedDate, setSelectedDate ] = useState(null);

	return (
		<Mutation
			mutation={UPDATE_USER_MUTATION}
			variables={{ dob: selectedDate }}
			onCompleted={() => {
				NProgress.done();
				Router.push(
					`/welcome?slug=4`,
					`/welcome/profile/age/preferences`,
					{ shallow: true },
					{ scroll: false },
				);
			}}
		>
			{updateUser => (
				<div
					style={{
						height: '100%',
						width: '100%',
						color: 'white',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'rgb(0,0,0,.6)',
							padding: '40px',
							//   border: '2px solid #ff101f',
							borderRadius: '6px',
						}}
					>
						<h2>When were you born?</h2>

						<MuiPickersUtilsProvider utils={MomentUtils}>
							{/* <BasePicker value={selectedDate} onChange={setSelectedDate}>
							{({
								date,
								handleAccept,
								handleChange,
								handleClear,
								handleDismiss,
								handleSetTodayDate,
								handleTextFieldChange,
								pick12hOr24hFormat,
							}) => ( */}
							<Paper style={{ overflow: 'hidden', zIndex: 1 }}>
								<InlineDatePicker
									label='Date of birth'
									value={selectedDate}
									disableFuture
									minDate={moment().subtract(100, 'years')}
									maxDate={moment().subtract(18, 'years')}
									clearable
									openTo='year'
									format='MM/DD/YYYY'
									views={[ 'year', 'month', 'day' ]}
									onChange={date => setSelectedDate(date.format())}
								/>
							</Paper>
							{/* )}
						</BasePicker> */}
						</MuiPickersUtilsProvider>

						<Button
							style={{ zIndex: 1 }}
							color='danger'
							disabled={!selectedDate}
							onClick={() => {
								updateUser();
							}}
						>
							Next
						</Button>
					</div>
				</div>
			)}
		</Mutation>
	);
};

export default GenderPrefs;
