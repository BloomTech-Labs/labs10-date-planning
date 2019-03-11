import React, { useState, useEffect, Fragment, useRef } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { LIKED_BY_QUERY } from '../Queries/LikedBy';
import withStyles from '@material-ui/core/styles/withStyles';

const LikedBy = ({ user }) => {
	const { data } = useQuery(LIKED_BY_QUERY);
	console.log(data);
	if (!data.getLikedByList || !data.getLikedByList.length) return null;
	return (
		<div>
			{data.getLikedByList.map(usr => (
				<div
					style={{
						height: '50px',
						margin: '20px',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<img
						src={usr.img.find(x => x.default).img_url}
						style={{
							height: '100%',
							borderRadius: '6px',
							filter: user.permissions === 'FREE' ? 'blur(3px)' : 'blur(0)',
						}}
					/>
				</div>
			))}
			{user.permissions === 'FREE' && (
				<h5 style={{ color: '#fafafa' }}>
					{data.getLikedByList.length} user liked you!{' '}
					<span
						style={{ cursor: 'pointer', color: '#ff101f' }}
						onClick={() => console.log('hi')}
					>
						Go pro
					</span>{' '}
					to see them.
				</h5>
			)}
		</div>
	);
};

export default LikedBy;
