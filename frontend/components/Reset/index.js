import React, { useState } from 'react';
import NProgress from 'nprogress';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../Queries/User';

const RESET_PASSWORD_MUTATION = gql`
	mutation RESET_PASSWORD_MUTATION(
		$resetToken: String!
		$password: String!
		$confirmPassword: String!
	) {
		resetPassword(
			resetToken: $resetToken
			password: $password
			confirmPassword: $confirmPassword
		) {
			id
			email
			name
		}
	}
`;

const Reset = ({ resetToken }) => {
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const resetPassword = useMutation(RESET_PASSWORD_MUTATION, {
		variables: { password, confirmPassword, resetToken },
		refetchQueries: [ { query: CURRENT_USER_QUERY } ],
		onCompleted: () => NProgress.done(),
		onError: () => NProgress.done(),
	});
	console.log(resetPassword);
	return (
		<form
			//method="post"
			onSubmit={async e => {
				e.preventDefault();
				NProgress.start();
				await resetPassword();
				setPassword('');
				setConfirmPassword('');
			}}
		>
			<fieldset disabled={false} aria-busy={false}>
				<h2>Reset Your Password</h2>

				<label htmlFor='password'>
					Password
					<input
						type='password'
						name='password'
						placeholder='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</label>

				<label htmlFor='confirmPassword'>
					Confirm Your Password
					<input
						type='password'
						name='confirmPassword'
						placeholder='confirmPassword'
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
					/>
				</label>

				<button type='submit'>Reset Your Password!</button>
			</fieldset>
		</form>
	);
};

export default Reset;
