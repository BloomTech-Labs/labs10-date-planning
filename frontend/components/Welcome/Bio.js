import React, { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';

const Bio = ({ user }) => {
	const [ bio, setBio ] = useState('');
	return (
		<Mutation
			mutation={UPDATE_USER_MUTATION}
			variables={{ biography: bio }}
			onCompleted={() => {
				NProgress.done();
				Router.push(
					`/welcome?slug=8`,
					`/welcome/pro`,
					{ shallow: true },
					{ scroll: false },
				);
			}}
		>
			{updateUser => (
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<h2>Write something about yourself</h2>
					<CustomInput
						//labelText='About'
						id='textarea-input'
						inputProps={{
							multiline: true,
							rows: 5,
							value: bio,
							onChange: e => setBio(e.target.value),
							placeholder: 'Write a little about yourself',
						}}
					/>
					<Button
						disabled={!bio}
						onClick={() => {
							NProgress.start();
							updateUser();
						}}
					>
						Update
					</Button>
				</div>
			)}
		</Mutation>
	);
};

export default Bio;
