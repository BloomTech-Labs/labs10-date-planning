import React, { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';

import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';

const GenderPrefs = () => {
	const [ genderPrefs, setGenderPrefs ] = useState([]);

	const handleSetGender = pref => {
		if (genderPrefs.find(x => x === pref)) {
			setGenderPrefs(genderPrefs.filter(x => x !== pref));
		} else {
			setGenderPrefs([ ...genderPrefs, pref ]);
		}
	};

	return (
		<Mutation
			mutation={UPDATE_USER_MUTATION}
			variables={{ genderPrefs }}
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
						<h2>I am interested in...</h2>
						<Button
							color='danger'
							genderPrefs
							simple={!genderPrefs.find(x => x === 'MALE')}
							style={{ zIndex: 1 }}
							onClick={() => handleSetGender('MALE')}
						>
							Men
						</Button>
						<Button
							color='danger'
							genderPrefs
							simple={!genderPrefs.find(x => x === 'FEMALE')}
							style={{ zIndex: 1 }}
							onClick={() => handleSetGender('FEMALE')}
						>
							Women
						</Button>
						<Button
							color='danger'
							genderPrefs
							simple={!genderPrefs.find(x => x === 'OTHER')}
							style={{ zIndex: 1 }}
							onClick={() => handleSetGender('OTHER')}
						>
							Non-Binary
						</Button>

						<Button
							color='danger'
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
				</div>
			)}
		</Mutation>
	);
};

export default GenderPrefs;
