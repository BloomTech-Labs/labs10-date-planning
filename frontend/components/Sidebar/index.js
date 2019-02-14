import React from 'react';

const style = {
	position: 'fixed',
	left: 0,
	height: '100vh',
	borderRight: '1px solid black',
	width: '200px',
	display: 'flex',
	flexDirection: 'column',
};
const Sidebar = () => {
	return (
		<div style={style}>
			<a>Dates</a>
			<a>Billing</a>
			<a>Settings</a>
		</div>
	);
};

export default Sidebar;
