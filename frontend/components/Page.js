import React, { Component } from 'react';
import Meta from './Meta';

const Page = ({ children }) => {
	return (
		<div>
			<Meta />

			<div>{children}</div>
		</div>
	);
};

export default Page;
