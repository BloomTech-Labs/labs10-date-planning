import React, { Fragment } from 'react';
import Meta from './Meta';
import User from './Queries/User';

const Page = ({ children }) => {
	return (
		<User>
			{({ data: { currentUser } }) => (
				<Fragment>
					<Meta />

					<div style={{ height: '100vh' }}>{children}</div>
				</Fragment>
			)}
		</User>
	);
};

export default Page;
