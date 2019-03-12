import React, { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '../../styledComponents/CustomButtons/Button';
import '../../styles/Profile/index.scss';
import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';
import defaultImage from '../../static/img/placeholder.jpg';
import { openUploadWidget } from '../../utils/cloudinary';

const UPLOAD_IMAGE_MUTATION = gql`
	mutation UPLOAD_IMAGE_MUTATION($default: Boolean, $img_url: String!) {
		updateUser(data: { img: { create: { default: $default, img_url: $img_url } } }) {
			id
			img {
				img_url
				default
			}
		}
	}
`;
const GenderPrefs = ({ user }) => {
	const handleUpload = async uploadImage => {
		openUploadWidget((error, result) => {
			if (result.event === 'success') {
				NProgress.start();
				uploadImage({
					variables: {
						default: true,
						img_url: result.info.secure_url,
					},
				});
			}
		});
	};

	return (
		<Mutation
			mutation={UPLOAD_IMAGE_MUTATION}
			onCompleted={() => {
				NProgress.done();
			}}
		>
			{uploadImage => (
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
							zIndex: '1',
						}}
					>
						<h2>Upload an Image.</h2>
						<div className={'thumbnail'}>
							{user.img.length ? <img src={user.img[0].img_url} alt='...' /> : null}
						</div>
						<div style={{ display: 'flex' }}>
							<Button
								color='danger'
								onClick={() => {
									handleUpload(uploadImage);
								}}
							>
								{user.img.length ? 'Change' : 'Upload'}
							</Button>
							{user.img.length && (
								<Button
									color='danger'
									onClick={() =>
										Router.push(
											`/welcome?slug=7`,
											`/welcome/profile/about`,
											{ shallow: true },
											{ scroll: false },
										)}
								>
									Next
								</Button>
							)}
						</div>
					</div>
				</div>
			)}
		</Mutation>
	);
};

export default withStyles(styles)(GenderPrefs);
