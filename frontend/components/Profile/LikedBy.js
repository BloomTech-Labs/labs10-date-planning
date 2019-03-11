import React, { useState, useEffect, Fragment, useRef } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { LIKED_BY_QUERY } from '../Queries/LikedBy';
import withStyles from '@material-ui/core/styles/withStyles';

const LikedBy = () => {
	const { data } = useQuery(LIKED_BY_QUERY);
	console.log(data);
	if (!data.getLikedByList || !data.getLikedByList.length) return null;
	return (
		<div style={{ display: 'flex' }}>
			{data.getLikedByList.map(usr => (
				<div style={{ height: '50px', margin: '20px' }}>
					<img
						src={usr.img.find(x => x.default).img_url}
						style={{ height: '100%', borderRadius: '6px' }}
					/>
				</div>
			))}
		</div>
	);
};

export default LikedBy;
