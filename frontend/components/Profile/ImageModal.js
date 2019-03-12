import React, { useState, Fragment } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { useQuery, useMutation } from 'react-apollo-hooks';
import withStyles from '@material-ui/core/styles/withStyles';
import {
	DialogTitle,
	Dialog,
	DialogContent,
	InputAdornment,
	IconButton,
	Paper,
	Icon,
} from '@material-ui/core';
import {
	Close,
	Delete,
	AddCircle,
	AddAPhoto,
	AddAPhotoOutlined,
	AddAPhotoRounded,
} from '@material-ui/icons';
import Button from '../../styledComponents/CustomButtons/Button';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import styles from '../../static/jss/Profile/settingsStyle';
import profileStandIn from '../../static/img/placeholder.jpg';
import { openUploadWidget } from '../../utils/cloudinary';

const modalHeader = {
	// backgroundColor: '#81d6e3',
	backgroundImage: 'linear-gradient(to top, #8ad2ff, #94d5fd, #9fd8fb, #a8daf9, #b2ddf7)',
	borderTopLeftRadius: '6px',
	borderTopRightRadius: '6px',
	paddingBottom: '15px',
	color: '#fafafa',
};

const UPDATE_DEFAULT_IMG_MUTATION = gql`
	mutation UPDATE_DEFAULT_IMG_MUTATION($id: String!) {
		updateDefaultImage(id: $id) {
			id
			img {
				img_url
				default
				id
			}
		}
	}
`;

const ADD_IMAGE_MUTATION = gql`
	mutation ADD_IMAGE_MUTATION($img_url: String!) {
		updateUser(data: { img: { create: { img_url: $img_url } } }) {
			id
			img {
				img_url
				default
				id
			}
		}
	}
`;

const DELETE_IMAGE_MUTATION = gql`
	mutation DELETE_IMAGE_MUTATION($id: ID) {
		updateUser(data: { img: { delete: [{ id: $id }] } }) {
			id
			img {
				img_url
				default
				id
			}
		}
	}
`;

const ImageModal = ({ classes, modal, showModal, user }) => {
	const setDefaultImg = useMutation(UPDATE_DEFAULT_IMG_MUTATION);
	const addImage = useMutation(ADD_IMAGE_MUTATION);
	const deleteImage = useMutation(DELETE_IMAGE_MUTATION);

	const handleUpload = () => {
		openUploadWidget((error, result) => {
			if (result.event === 'success') {
				addImage({
					variables: {
						img_url: result.info.secure_url,
					},
				});
			}
		});
	};
	let userImgs = user.img.sort((a, b) => (a.default ? -1 : b.default ? 1 : 0));

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginBottom: '20px',
				marginTop: '30px',
			}}
		>
			<GridContainer>
				<GridItem sm={6} md={4} lg={4}>
					<div
						className={classes.profileImgLg}
						style={{ backgroundImage: `url(${userImgs[0].img_url})` }}
					/>
				</GridItem>

				<GridItem sm={6} md={4} lg={4} style={{ paddingBottom: '15px' }}>
					<div
						className={classes.profileImgLg}
						style={{
							backgroundImage: `url(${userImgs[1]
								? userImgs[1].img_url
								: profileStandIn})`,
						}}
					>
						{userImgs[1] ? (
							<Fragment>
								<Button
									onClick={() =>
										setDefaultImg({ variables: { id: userImgs[1].id } })}
									className='view-all'
								>
									Make Default
								</Button>
								<IconButton
									onClick={() =>
										deleteImage({ variables: { id: userImgs[1].id } })}
									className='delete-img'
								>
									<Delete />
								</IconButton>
							</Fragment>
						) : (
							<div style={{ position: 'absolute', top: -15, right: -15 }}>
								<IconButton
									onClick={handleUpload}
									style={{ backgroundColor: '#4cb5ae', color: 'white' }}
								>
									<AddAPhotoRounded />
								</IconButton>
							</div>
						)}
					</div>
				</GridItem>
				<GridItem sm={6} md={4} lg={4} style={{ paddingBottom: '15px' }}>
					<div
						className={classes.profileImgLg}
						style={{
							marginBottom: '10px',
							backgroundImage: `url(${userImgs[2]
								? userImgs[2].img_url
								: profileStandIn})`,
						}}
					>
						{userImgs[2] ? (
							<Fragment>
								<Button
									className='view-all'
									color='rose'
									onClick={() =>
										setDefaultImg({ variables: { id: userImgs[2].id } })}
								>
									Make Default
								</Button>
								<IconButton
									onClick={() =>
										deleteImage({ variables: { id: userImgs[2].id } })}
									className='delete-img'
								>
									<Delete />
								</IconButton>
							</Fragment>
						) : (
							<div style={{ position: 'absolute', top: -15, right: -15 }}>
								<IconButton
									onClick={handleUpload}
									style={{ backgroundColor: '#4cb5ae', color: 'white' }}
								>
									<AddAPhotoRounded />
								</IconButton>
							</div>
						)}
					</div>
				</GridItem>
				<GridItem sm={6} md={4} lg={4} style={{ paddingTop: '15px' }}>
					<div
						className={classes.profileImgLg}
						style={{
							backgroundImage: `url(${userImgs[3]
								? userImgs[3].img_url
								: profileStandIn})`,
						}}
					>
						{userImgs[3] ? (
							<Fragment>
								<Button
									className='view-all'
									onClick={() =>
										setDefaultImg({ variables: { id: userImgs[3].id } })}
								>
									Make Default
								</Button>
								<IconButton
									onClick={() =>
										deleteImage({ variables: { id: userImgs[3].id } })}
									className='delete-img'
								>
									<Delete />
								</IconButton>
							</Fragment>
						) : (
							<div style={{ position: 'absolute', top: -15, right: -15 }}>
								<IconButton
									onClick={handleUpload}
									style={{ backgroundColor: '#4cb5ae', color: 'white' }}
								>
									<AddAPhotoRounded />
								</IconButton>
							</div>
						)}
					</div>
				</GridItem>
				<GridItem sm={6} md={4} lg={4} style={{ paddingTop: '15px' }}>
					<div
						className={classes.profileImgLg}
						style={{
							backgroundImage: `url(${userImgs[4]
								? userImgs[4].img_url
								: profileStandIn})`,
						}}
					>
						{userImgs[4] ? (
							<Fragment>
								<Button
									className='view-all'
									onClick={() =>
										setDefaultImg({ variables: { id: userImgs[4].id } })}
								>
									Make Default
								</Button>
								<IconButton
									onClick={() =>
										deleteImage({ variables: { id: userImgs[4].id } })}
									className='delete-img'
								>
									<Delete />
								</IconButton>
							</Fragment>
						) : (
							<div style={{ position: 'absolute', top: -15, right: -15 }}>
								<IconButton
									onClick={handleUpload}
									style={{ backgroundColor: '#4cb5ae', color: 'white' }}
								>
									<AddAPhotoRounded />
								</IconButton>
							</div>
						)}
					</div>
				</GridItem>
				<GridItem sm={6} md={4} lg={4} style={{ paddingTop: '15px' }}>
					<div
						className={classes.profileImgLg}
						style={{
							// position: 'relative',
							backgroundImage: `url(${userImgs[5]
								? userImgs[5].img_url
								: profileStandIn})`,
						}}
					>
						{userImgs[5] ? (
							<Fragment>
								<Button
									className='view-all'
									color='rose'
									onClick={() =>
										setDefaultImg({ variables: { id: userImgs[5].id } })}
								>
									Make Default
								</Button>
								<IconButton
									onClick={() =>
										deleteImage({ variables: { id: userImgs[5].id } })}
									className='delete-img'
								>
									<Delete />
								</IconButton>
							</Fragment>
						) : (
							<div style={{ position: 'absolute', top: -15, right: -15 }}>
								<IconButton
									onClick={handleUpload}
									style={{ backgroundColor: '#4cb5ae', color: 'white' }}
								>
									<AddAPhotoRounded />
								</IconButton>
							</div>
						)}
					</div>
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default withStyles(styles)(ImageModal);
