import { container } from '../material-kit-pro-react';
import customSelectStyle from '../material-kit-pro-react/customSelectStyle';
const styles = {
	container,
	...customSelectStyle,
	pageHeader: {
		minHeight: '100vh',
		height: 'auto',
		display: 'inherit',
		position: 'relative',
		margin: '0',
		padding: '0',
		border: '0',
		alignItems: 'center',
		'&:before': {
			// background: 'rgba(0, 0, 0, 0.5)',
		},
		'&:after': {
			// background: 'linear-gradient(60deg,rgba(76,181,174, 0.7),rgba(76,181,174, 0.9))',
		},
		'&:before,&:after': {
			position: 'absolute',
			// zIndex: '1',
			width: '100%',
			height: '100%',
			display: 'block',
			left: '0',
			top: '0',
			content: '""',
		},
	},
	selectLabel: {
		...customSelectStyle.selectLabel,
		color: '#fafafa',
	},
	stepper: {
		backgroundColor: 'transparent',
	},
	step: {
		color: '#fafafa !important',
		'& text': {
			fill: '#fafafa !important',
		},
	},
	active: {
		color: '#ff101f !important',
	},
	completed: {
		color: '#da6068 !important',
	},
	textArea: {
		'& textarea': {
			color: '#fafafa',
		},
		'& ::after': {
			borderBottomColor: '#ff101f',
		},
	},
};

export default styles;
