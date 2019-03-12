import React, { Fragment } from 'react';
import Meta from './Meta';

const Page = ({ children }) => {
	return (
		<Fragment>
			<Meta />
			<div style={{ height: '100%' }}>{children}</div>
		</Fragment>
	);
};

export default Page;
