import React, { Fragment } from 'react';
import Meta from './Meta';

const Page = ({ children }) => {
	return (
		<Fragment>
			<Meta />
			<div>{children}</div>
		</Fragment>
	);
};

export default Page;
