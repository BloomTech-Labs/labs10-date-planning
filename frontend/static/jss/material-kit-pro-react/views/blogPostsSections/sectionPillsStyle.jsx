import { cardTitle } from '../../../material-kit-pro-react';

import tooltipsStyle from '../../../material-kit-pro-react/tooltipsStyle';

const sectionPillsStyle = {
	...tooltipsStyle,
	section: {
		backgroundPosition: '50%',
		backgroundSize: 'cover',
		padding: '70px 0',
	},
	textCenter: {
		textAlign: 'center',
	},
	category: {
		color: 'rgba(255, 255, 255, 0.7) !important',
		marginTop: '10px',
	},
	cardTitle: {
		...cardTitle,
		color: '#FFFFFF !important',
	},
	icons: {
		width: '1.1rem',
		height: '1.1rem',
		position: 'relative',
		display: 'inline-block',
		top: '0',
		marginTop: '-1em',
		marginBottom: '-1em',
		marginRight: '4px',
		verticalAlign: 'middle',
	},
	tabSpace: {
		padding: '20px 0 50px',
	},
};

export default sectionPillsStyle;
