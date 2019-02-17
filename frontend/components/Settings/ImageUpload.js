import React, { useState } from 'react';
import UploadImage from '../../styledComponents/CustomUpload/ImageUpload';

const ImageUpload = () => {
	const handleUpload = async file => {
		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', 'up4');

		const res = await fetch('https://api.cloudinary.com/v1_1/dcwn6afsq/image/upload', {
			method: 'POST',
			body: data,
		});
		const image = await res.json();
	};
	return (
		<div style={{ marginLeft: '5px' }}>
			<UploadImage
				avatar
				addButtonProps={{ round: true }}
				changeButtonProps={{ round: true }}
				removeButtonProps={{ round: true, color: 'danger' }}
				handleUpload={file => handleUpload(file)}
			/>
		</div>
	);
};

export default ImageUpload;
