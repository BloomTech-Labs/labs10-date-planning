import React, { Fragment } from 'react';
import Meta from './Meta';
import User from './Queries/User';
import Header from './Header';

const Page = ({ children }) => {
	return (
		<User>
			{({ data: { currentUser } }) => (
				<Fragment>
					<Meta />
					{currentUser && <Header />}

					<div>{children}</div>
				</Fragment>
			)}
		</User>
	);
};

export default Page;
