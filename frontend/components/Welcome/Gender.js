import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';

import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';

const Gender = ({ user }) => {
	const handleSelect = (value, updateUser) => {
		NProgress.start();
		updateUser({ variables: { gender: value } });
	};
	return (
		<Mutation
			mutation={UPDATE_USER_MUTATION}
			onCompleted={() => {
				NProgress.done();
				Router.push(
					`/welcome?slug=2`,
					`/welcome/profile/gender/preferences`,
					{ shallow: true },
					{ scroll: false },
				);
			}}
		>
			{updateUser => (
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<h2>I am a...</h2>
					<Button style={{ zIndex: 1 }} onClick={() => handleSelect('MALE', updateUser)}>
						Man
					</Button>
					<Button
						style={{ zIndex: 1 }}
						onClick={() => handleSelect('FEMALE', updateUser)}
					>
						Woman
					</Button>
					<Button style={{ zIndex: 1 }} onClick={() => handleSelect('OTHER', updateUser)}>
						Non-Binary
					</Button>
				</div>
			)}
		</Mutation>
	);
};

export default Gender;
