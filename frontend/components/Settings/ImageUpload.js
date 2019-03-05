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

//import "../../styles/Settings/ImageUpload.scss";

const UPLOAD_IMAGE_MUTATION = gql`
	mutation UPLOAD_IMAGE_MUTATION($thumbnail: String!, $image: String!) {
		updateImage(thumbnail: $thumbnail, image: $image) {
			id
			firstName
		}
	}
`;

const ImageUpload = () => {
	const [ image, setImage ] = useState(null);
	const [ showing, setShowing ] = useState(false);
	const imgRef = useRef(null);
	const handleUpload = async (file, uploadImage) => {
		setShowing(true);
		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', 'upfor4');

		const res = await fetch('https://api.cloudinary.com/v1_1/dcwn6afsq/image/upload', {
			method: 'POST',
			body: data,
		});
		const image = await res.json();
		setImage(image.secure_url);
		// uploadImage({
		// 	variables: {
		// 		thumbnail: image.secure_url,
		// 		image: image.eager[0].secure_url,
		// 	},
		// });
	};

	const crop = ref => {
		// image in dataUrl
		if (imgRef.current) {
			console.log(imgRef.current);
		}
	};
	return (
		<div>
			<User>
				{({ data: { currentUser } }) => (
					<Mutation
						mutation={UPLOAD_IMAGE_MUTATION}
						refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
					>
						{(uploadImage, { error, loading }) =>
							!showing ? (
								<UploadImage
									// avatar
									className='hi'
									image={currentUser.imageThumbnail}
									addButtonProps={{ round: false }}
									changeButtonProps={{ round: false }}
									removeButtonProps={{ round: false, color: 'danger' }}
									handleUpload={file => handleUpload(file)}
								/>
							) : (
								<AvatarEditor
									image={image}
									ref={imgRef}
									width={300}
									height={300}
									border={50}
									color={[ 255, 255, 255, 0.6 ]} // RGBA
									scale={1}
									onImageChange={crop}
									rotate={0}
								/>
							)}
					</Mutation>
				)}
			</User>
		</div>
	);
};

export default ImageUpload;
{
	/* !image ? (
								<UploadImage
									// avatar
									className='hi'
									image={currentUser.imageThumbnail}
									addButtonProps={{ round: false }}
									changeButtonProps={{ round: false }}
									removeButtonProps={{ round: false, color: 'danger' }}
									handleUpload={file => handleUpload(file)}
								/>
							) : ( */
}
{
	/* )} */
}
{
	/* <Cropper
										src={image}
										width='400px'
										height='400px'
										styles={{ maxWidth: '400px', maxHeight: '400px' }}
										ref={cropRef}
										beforeImgload={() => NProgress.start()}
										onImgLoad={() => NProgress.done()}
									/>
								</div> */
}
{
	/* */
}
