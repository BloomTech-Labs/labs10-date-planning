import React, { useState, useEffect, Fragment, useRef } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { LIKED_BY_QUERY } from '../Queries/LikedBy';
import withStyles from '@material-ui/core/styles/withStyles';

const LikedBy = () => {
	const { data } = useQuery(LIKED_BY_QUERY);
	console.log(data);
	return <div>hi</div>;
};

export default LikedBy;
