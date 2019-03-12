import { title } from '../../material-kit-pro-react';
const mediaStyle = {
	media: {
		display: 'flex',
		// WebkitBoxAlign: 'start',
		// alignItems: 'flex-start',
		'& p': {
			color: '#999999',
			fontSize: '1rem',
			lineHeight: '1.6em',
		},
		'& $media $mediaBody': {
			paddingRight: '0px',
		},
	},
	reverse: {
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
	},
	mediaLink: {
		padding: '10px',
		float: 'left !important',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},
	mediaAvatar: {
		margin: '0 auto',
		width: '64px',
		height: '64px',
		overflow: 'hidden',
		borderRadius: '50%',
		marginRight: '15px',
		boxShadow:
			'0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2)',
		'& img': {
			width: '100%',
		},
	},
	otherBody: {
		paddingRight: '10px',
		WebkitBoxFlex: '1',
		flex: '1',
		textAlign: 'end',
	},
	mediaBody: {
		paddingRight: '10px',
		WebkitBoxFlex: '1',
		flex: '1',
	},
	mediaHeading: {
		...title,
		marginTop: '10px',
		marginBottom: '10px',
		'& small': {
			fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		},
	},
	mediaFooter: {
		// '& button, & a': {
		// 	marginBottom: '20px',
		// },
		'&:after': {
			display: 'table',
			content: '" "',
			clear: 'both',
		},
	},
};

export default mediaStyle;
