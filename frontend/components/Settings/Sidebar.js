import React from 'react';
import ImageUpload from './ImageUpload';
import Location from './Location';
import defaultImage from '../../static/img/image_placeholder.jpg';
import User from '../Queries/User';
import ResetPassword from './ResetPassword';
import Divider from '@material-ui/core/Divider';

import '../../styles/Settings/Sidebar.scss'

const Sidebar = () => {
	return (
		<User>
			{({ data }) => (
				<div className='Sidebar'>
					<h4>{`${data.currentUser.firstName} ${data.currentUser.lastName}`}</h4>
					<ImageUpload />
					<Divider />
					<Location user={data.currentUser} />
				</div>
			)}
		</User>
	);
};

export default Sidebar;
