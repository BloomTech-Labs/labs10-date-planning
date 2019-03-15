import { container, title, main, mainRaised } from '../../material-kit-pro-react';

const landingPageStyle = {
	container: {
		color: '#FFFFFF',
		...container,
		zIndex: '2',
		//Addition
		paddingTop: '20px',
	},
	title: {
		...title,
		display: 'inline-block',
		position: 'relative',
		marginTop: '30px',
		minHeight: '32px',
		color: '#FFFFFF',
		textDecoration: 'none',
	},
	subtitle: {
		fontSize: '1.313rem',
		maxWidth: '500px',
		margin: '10px auto 0',
	},
	main: {
		...main,
	},
	mainRaised: {
		...mainRaised,
	},
	block: {
		color: 'inherit',
		padding: '0.9375rem',
		fontWeight: '500',
		fontSize: '12px',
		textTransform: 'uppercase',
		borderRadius: '3px',
		textDecoration: 'none',
		position: 'relative',
		display: 'block',
	},
	inlineBlock: {
		display: 'inline-block',
		padding: '0px',
		width: 'auto',
	},
	list: {
		marginBottom: '0',
		padding: '0',
		marginTop: '0',
	},
	section: {
		padding: '70px 0 0',
	},
	left: {
		float: 'left!important',
		display: 'block',
	},
	right: {
		padding: '15px 0',
		margin: '0',
		float: 'right',
	},
	icon: {
		width: '18px',
		height: '18px',
		top: '3px',
		position: 'relative',
	},
	//Addition
	logo: {
		maxHeight: '406px',
		maxWidth: '670px',
		width: '100%',
	},
	tagline: {
		backgroundColor: 'rgba(0,0,0,0.4)',
		padding: '17px',
		borderRadius: '20px',
		margin: '10px auto',
	},
	registerButton: {
		backgroundImage: 'linear-gradient(to right, #f6655a, #f9574c, #fc473e, #fe332f, #ff101f)',
	},
	loginButton: {
		backgroundColor: '#81d6e3',
	},
};

export default landingPageStyle;
