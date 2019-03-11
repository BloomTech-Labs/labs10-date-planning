import { container } from '../material-kit-pro-react';
const style = {
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
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		'& .view-all': {
			display: 'none',
		},
		'& .delete-img': {
			display: 'none',
			position: 'absolute',
			bottom: 0,
			right: 0,
		},
		'&:hover': {
			'& .view-all & .delete-img': {
				display: 'block',
			},
		},
	},
};

export default style;
