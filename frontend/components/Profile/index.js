import React, { useState } from 'react';
import User from '../Queries/User';
import Location from '../Settings/Location';
import getAge from '../../utils/getAge';

import '../../styles/Profile/index.scss';
const Profile = () => {
	return (
		<User>
			{({ data: { currentUser }, client }) => {
				console.log(currentUser);
				return (
					<div className='Profile-Header'>
						<div className='inner'>
							<div
								className='prof-img'
								style={{ backgroundImage: `url(${currentUser.imageLarge})` }}
							/>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									paddingLeft: '10px',
								}}
							>
								<h2>
									{currentUser.firstName} | {getAge(currentUser.dob)}
								</h2>
								<Location user={currentUser} />
							</div>
						</div>
					</div>
				);
			}}
		</User>
	);
};

export default Profile;
