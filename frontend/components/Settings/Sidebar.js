import React from 'react';
import ImageUpload from './ImageUpload';
import Location from './Location';
import defaultImage from '../../static/img/image_placeholder.jpg';
import User from '../Queries/User';
import ResetPassword from './ResetPassword';

const Sidebar = () => {
	return (
		<User>
			{({ data }) => (
				<div>
					<h4>{`${data.currentUser.firstName} ${data.currentUser.lastName}`}</h4>
					<ImageUpload />
					<Location user={data.currentUser} />
				</div>
			)}
		</User>
	);
};

export default Sidebar;
