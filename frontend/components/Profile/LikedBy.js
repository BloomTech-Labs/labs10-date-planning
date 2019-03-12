import React, { useState, useEffect, Fragment, useRef } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import Router from 'next/router';
import { LIKED_BY_QUERY } from '../Queries/LikedBy';
import withStyles from '@material-ui/core/styles/withStyles';

const LikedBy = ({ user, setSelected }) => {
	const { data } = useQuery(LIKED_BY_QUERY);

	const hidden = user.permissions === 'FREE';
	if (!data.getLikedByList || !data.getLikedByList.length) return null;
	return (
		<div>
			{hidden ? (
				<h5 style={{ color: '#fafafa' }}>
					{data.getLikedByList.length} user liked you!{' '}
					<span
						style={{ cursor: 'pointer', color: '#ff101f' }}
						onClick={() =>
							Router.push('/profile?slug=billing', '/profile/billing', {
								shallow: true,
							})}
					>
						Go pro
					</span>{' '}
					to see them.
				</h5>
			) : (
				<h5 style={{ color: '#fafafa' }}>{data.getLikedByList.length} user liked you!</h5>
			)}
			{data.getLikedByList.map(usr => (
				<div
					style={{
						height: '60px',
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
							cursor: hidden ? 'default' : 'pointer',
							filter: hidden ? 'blur(3px)' : 'blur(0)',
						}}
						onClick={() => {
							if (!hidden) {
								setSelected(usr);
							}
						}}
					/>
				</div>
			))}
		</div>
	);
};

export default LikedBy;
