import React, { useState } from 'react';
import UploadImage from '../../styledComponents/CustomUpload/ImageUpload';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import User from '../Queries/User';
import { CURRENT_USER_QUERY } from '../Queries/User';

const UPLOAD_IMAGE_MUTATION = gql`
	mutation UPLOAD_IMAGE_MUTATION($thumbnail: String!, $image: String!) {
		updateImage(thumbnail: $thumbnail, image: $image) {
			id
			firstName
		}
	}
`;

const ImageUpload = () => {
	const handleUpload = async (file, uploadImage) => {
		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', 'upfor4');

		const res = await fetch('https://api.cloudinary.com/v1_1/dcwn6afsq/image/upload', {
			method: 'POST',
			body: data,
		});
		const image = await res.json();

		uploadImage({
			variables: { thumbnail: image.secure_url, image: image.eager[0].secure_url },
		});
	};
	return (
		<div style={{ marginLeft: '5px' }}>
			<User>
				{({ data: { currentUser } }) => (
					<Mutation
						mutation={UPLOAD_IMAGE_MUTATION}
						refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
					>
						{(uploadImage, { error, loading }) => (
							<UploadImage
								avatar
								image={currentUser.imageThumbnail}
								addButtonProps={{ round: true }}
								changeButtonProps={{ round: true }}
								removeButtonProps={{ round: true, color: 'danger' }}
								handleUpload={file => handleUpload(file, uploadImage)}
							/>
						)}
					</Mutation>
				)}
			</User>
		</div>
	);
};

export default ImageUpload;
