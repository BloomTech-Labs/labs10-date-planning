import React, { useState, useRef } from 'react';
import gql from 'graphql-tag';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';

//QM
import User, { CURRENT_USER_QUERY } from '../Queries/User';
//styled components
import UploadImage from '../../styledComponents/CustomUpload/ImageUpload';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
//import "../../styles/Settings/ImageUpload.scss";
import defaultImage from '../../static/img/image_placeholder.jpg';
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

const ImageUpload = () => {
	const handleUpload = async uploadImage => {
		openUploadWidget((error, result) => {
			if (result.event === 'success') {
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
		<div>
			<User>
				{({ data: { currentUser } }) => {
					let profileImg =
						currentUser.img.find(img => img.default) &&
						currentUser.img.find(img => img.default).img_url;
					console.log(profileImg);
					return (
						<Mutation
							mutation={UPLOAD_IMAGE_MUTATION}
							refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
						>
							{(uploadImage, { error, loading, data }) => {
								console.log(error, loading, data);
								return (
									<div className='fileinput text-center'>
										<div className={'thumbnail'}>
											<img
												src={profileImg ? profileImg : defaultImage}
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
								);
							}}
						</Mutation>
					);
				}}
			</User>
		</div>
	);
};

export default ImageUpload;
