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
				Router.push(
					`/welcome?slug=7`,
					`/welcome/profile/about`,
					{ shallow: true },
					{ scroll: false },
				);
			}}
		>
			{uploadImage => (
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<h2>Upload an Image.</h2>
					<div className={'thumbnail'}>
						{user.img.length ? <img src={user.img[0].img_url} alt='...' /> : null}
					</div>
					<Button
						onClick={() => {
							handleUpload(uploadImage);
						}}
					>
						Upload Image
					</Button>
				</div>
			)}
		</Mutation>
	);
};

export default withStyles(styles)(GenderPrefs);
