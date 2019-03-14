import { container, title } from '../material-kit-pro-react';

const style = {
	title,
	container,

	profileHeader: {
		height: '200px',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.32)',
		marginBottom: '60px',
	},
	innerHeader: {
		margin: '0 auto',
		padding: '50px 60px 0',
		maxWidth: '1200px',
		display: 'flex',
		justifyContent: 'flex-start',
	},

	profileImg: {
		backgroundSize: '100%',
		height: '180px',
		width: '180px',
		borderRadius: '6px',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& .view-all': {
			display: 'none',
		},
		'&:hover': {
			'& .view-all': {
				display: 'block',
			},
		},
	},
	profileImgLg: {
		backgroundSize: '100%',
		height: '220px',
		position: 'relative',
		borderRadius: '6px',
		border: '1px solid #fafafa',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		'& .view-all': {
			display: 'none',
			backgroundColor: '#ff101f',
		},
		'& .delete-img': {
			display: 'none',
			position: 'absolute',
			bottom: 0,
			right: 0,
			color: '#fafafa',
			backgroundColor: 'rgba(0, 0, 0, 0.38)',
		},
		'&:hover': {
			'& .view-all': {
				display: 'block',
			},
			'& .delete-img': {
				display: 'block',
			},
		},
	},
	
};

export default style;
