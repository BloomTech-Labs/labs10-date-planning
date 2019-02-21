import React, { Fragment } from 'react';
import Router from 'next/router';
import Meta from './Meta';
import User from './Queries/User';

const Page = ({ children }) => {
	return (
		<Fragment>
			<Meta />

			<div style={{ height: '100vh' }}>{children}</div>
		</Fragment>
	);
};

export default Page;
