import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Button from '../../styledComponents/CustomButtons/Button';
import Logo from '../Header/UpFor';
import Verify from '../verifyPhone';

const Main = ({ user }) => {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				color: 'white',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'rgb(0,0,0,.6)',
					padding: '40px',
					//   border: '2px solid #ff101f',
					borderRadius: '6px',
				}}
			>
				<h2 style={{ display: 'flex' }}>
					<span style={{ marginRight: '26px' }}>Welcome to</span>
					{<Logo />}
					<span style={{ marginLeft: '6px' }}>{user.firstName}!</span>
				</h2>
				<h3>Tell us a little about yourself...</h3>
				<Button
					color='danger'
					style={{ zIndex: 1 }}
					onClick={() => {
						Router.push(
							`/welcome?slug=1`,
							`/welcome/profile/gender`,
							{ shallow: true },
							{ scroll: false },
						);
					}}
				>
					Get Started
				</Button>
				<Verify />
			</div>
		</div>
	);
};

export default Main;
