import React from 'react';
import { withRouter } from 'next/router';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Main from './Main';
import Gender from './Gender';
import GenderPrefs from './GenderPrefs';
import Age from './Age';
import AgePrefs from './AgePrefs';
import Location from './Location';
import Images from './Images';
import Bio from './Bio';

import style from '../../static/jss/material-kit-pro-react/views/signupPageStyle.jsx';

function getSteps() {
	return [
		'Welcome',
		'Gender',
		'Gender Preference',
		'Age',
		'Age Preference',
		'Location',
		'Images',
		'Bio',
	];
}

function getStepContent(stepIndex, user) {
	switch (stepIndex) {
		case 0:
			return <Main user={user} />;
		case 1:
			return <Gender />;
		case 2:
			return <GenderPrefs />;
		case 3:
			return <Age />;
		case 4:
			return <AgePrefs />;
		case 5:
			return <Location />;
		case 6:
			return <Images user={user} />;
		case 7:
			return <Bio />;
		default:
			return 'Unknown stepIndex';
	}
}

const Welcome = ({ classes, user, router: { query } }) => {
	console.log(user, query);
	const steps = getSteps();
	return (
		<div
			className={classes.pageHeader}
			style={{
				backgroundImage:
					'url(https://images.unsplash.com/photo-1473073957860-e6eb51b91b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)',
				backgroundSize: 'cover',
				backgroundPosition: 'top center',
			}}
		>
			<div
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
				className={classes.container}
			>
				{getStepContent(parseInt(query.slug), user)}
				<Stepper activeStep={parseInt(query.slug)} alternativeLabel>
					{steps.map(label => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
			</div>
		</div>
	);
};

export default withRouter(withStyles(style)(Welcome));
