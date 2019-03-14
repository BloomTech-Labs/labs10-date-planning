import React from 'react';
import Router, { Link } from 'next/router';
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
					`/welcome/profile/age`,
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
							// alignItems: "center",
							justifyContent: 'center',
							backgroundColor: 'rgb(0,0,0,.6)',

							padding: '90px',

							//   border: '2px solid #ff101f',
							borderRadius: '6px',
						}}
					>
						<h2>I am a...</h2>
						<Button
							color='danger'
							style={{ zIndex: 1 }}
							onClick={() => handleSelect('MALE', updateUser)}
						>
							Man
						</Button>
						<Button
							color='danger'
							style={{ zIndex: 1 }}
							onClick={() => handleSelect('FEMALE', updateUser)}
						>
							Woman
						</Button>
						<Button
							color='danger'
							style={{ zIndex: 1 }}
							onClick={() => handleSelect('OTHER', updateUser)}
						>
							Non-Binary
						</Button>
					</div>
				</div>
			)}
		</Mutation>
	);
};

export default Gender;
