import React, { useState } from 'react';
import User from '../Queries/User';
import Location from '../Settings/Location';

import '../../styles/Profile/index.scss';
const Profile = () => {
	return (
		<User>
			{({ data: { currentUser }, client }) => (
				<div className='Profile-Header'>
					<div className='inner'>
						<img className='prof-img' src={currentUser.imageLarge} />
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								paddingLeft: '10px',
							}}
						>
							<h2>{currentUser.firstName}</h2>
							<Location user={currentUser} />
						</div>
					</div>
				</div>
			)}
		</User>
	);
};

export default Profile;
