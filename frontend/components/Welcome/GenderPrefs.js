import React, { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';

import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';

const GenderPrefs = () => {
	const [ genderPrefs, setGenderPrefs ] = useState([]);

	return (
		<Mutation
			mutation={UPDATE_USER_MUTATION}
			variables={{ genderPrefs }}
			onCompleted={() => {
				NProgress.done();
				Router.push(
					`/welcome?slug=3`,
					`/welcome/profile/age`,
					{ shallow: true },
					{ scroll: false },
				);
			}}
		>
			{updateUser => (
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<h2>I am interested in...</h2>
					<Button
						style={{ zIndex: 1 }}
						onClick={() => setGenderPrefs([ ...genderPrefs, 'MALE' ])}
					>
						Men
					</Button>
					<Button
						style={{ zIndex: 1 }}
						onClick={() => setGenderPrefs([ ...genderPrefs, 'FEMALE' ])}
					>
						Women
					</Button>
					<Button
						style={{ zIndex: 1 }}
						onClick={() => setGenderPrefs([ ...genderPrefs, 'OTHER' ])}
					>
						Non-Binary
					</Button>
					<p>Selected: {genderPrefs.toString()}</p>
					<Button
						style={{ zIndex: 1 }}
						disabled={!genderPrefs.length}
						onClick={() => {
							NProgress.start();
							updateUser();
						}}
					>
						Next
					</Button>
				</div>
			)}
		</Mutation>
	);
};

export default GenderPrefs;
