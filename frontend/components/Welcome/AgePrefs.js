import React, { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import InputRange from 'react-input-range';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';
import '../../styles/Profile/index.scss';
const GenderPrefs = () => {
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
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						zIndex: 1,
					}}
				>
					<h2>I am interested in ...</h2>
					<InputRange
						maxValue={100}
						minValue={18}
						value={agePref}
						onChange={value => setAgePref(value)}
					/>
					<Button
						onClick={() => {
							NProgress.start();
							updateUser();
						}}
					>
						Set Preferences
					</Button>
				</div>
			)}
		</Mutation>
	);
};

export default GenderPrefs;
