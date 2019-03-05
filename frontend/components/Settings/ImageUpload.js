import React, { useState, useRef } from 'react';
import gql from 'graphql-tag';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import AvatarEditor from 'react-avatar-editor';
//import 'cropperjs/dist/cropper.css';
//import AvatarImageCropper from 'react-avatar-image-cropper';

//import 'react-image-crop-component/style.css';
//QM
import User, { CURRENT_USER_QUERY } from '../Queries/User';
//styled components
import UploadImage from '../../styledComponents/CustomUpload/ImageUpload';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
//import "../../styles/Settings/ImageUpload.scss";
import defaultImage from '../../static/img/image_placeholder.jpg';
import { openUploadWidget } from '../../utils/cloudinary';

const UPLOAD_IMAGE_MUTATION = gql`
	mutation UPLOAD_IMAGE_MUTATION($thumbnail: String!, $image: String!) {
		updateImage(thumbnail: $thumbnail, image: $image) {
			id
			firstName
		}
	}
`;

const ImageUpload = () => {
	const handleUpload = async uploadImage => {
		openUploadWidget((error, result) => {
			if (result.event === 'success') {
				uploadImage({
					variables: {
						thumbnail: result.info.secure_url,
						image: result.info.eager[0].secure_url,
					},
				});
			}
		});
	};

	return (
		<div>
			<User>
				{({ data: { currentUser } }) => (
					<Mutation
						mutation={UPLOAD_IMAGE_MUTATION}
						refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
					>
						{(uploadImage, { error, loading }) => (
							<div className='fileinput text-center'>
								<div className={'thumbnail'}>
									<img
										src={
											currentUser.imageLarge ? (
												currentUser.imageLarge
											) : (
												defaultImage
											)
										}
										alt='...'
									/>
								</div>
								{currentUser.imageThumbnail === null ? (
									<Button onClick={() => handleUpload(uploadImage)}>
										Select image
									</Button>
								) : (
									<span>
										<Button onClick={() => handleUpload(uploadImage)}>
											Change
										</Button>
									</span>
								)}
							</div>
						)}
					</Mutation>
				)}
			</User>
		</div>
	);
};

export default ImageUpload;
