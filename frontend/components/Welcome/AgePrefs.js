import React, { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import InputRange from 'react-input-range';
import withStyles from '@material-ui/core/styles/withStyles';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';
const GenderPrefs = ({ classes }) => {
	const [ agePref, setAgePref ] = useState({
		min: 18,
		max: 50,
	});

	return (
		<Mutation
			mutation={UPDATE_USER_MUTATION}
			variables={{
				minAgePref: agePref.min,
				maxAgePref: agePref.max,
			}}
			onCompleted={() => {
				NProgress.done();
				Router.push(
					`/welcome?slug=5`,
					`/welcome/profile/location`,
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
						<h2>Between the ages of...</h2>
						<div className={classes.inputRange} style={{ width: '100%' }}>
							<InputRange
								minLabel='range-label'
								maxLabel='range-label'
								maxValue={80}
								minValue={18}
								value={agePref}
								onChange={value => setAgePref(value)}
							/>
						</div>
						<Button
							color='danger'
							style={{ zIndex: '1' }}
							onClick={() => {
								NProgress.start();
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

export default withStyles(style)(GenderPrefs);
