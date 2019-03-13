import { container, title, mlAuto, mrAuto } from '../../../material-kit-pro-react';
import customCheckboxRadioSwitch from '../../../material-kit-pro-react/customCheckboxRadioSwitchStyle';
import customSelectStyle from '../../../material-kit-pro-react/customSelectStyle';

const drawerWidth = 'auto';

const basicsStyle = theme => ({
	mlAuto,
	mrAuto,
	container,
	...customSelectStyle,
	...customCheckboxRadioSwitch,
	sections: {
		padding: '70px 0',
	},
	title: {
		...title,
		marginTop: '10px',
		minHeight: '32px',
		textDecoration: 'none',
		color: '#fafafa',
	},
	space50: {
		height: '50px',
		display: 'block',
	},
	space70: {
		height: '70px',
		display: 'block',
	},
	icons: {
		width: '17px',
		height: '17px',
		color: '#FFFFFF',
	},

	//Appended styles from docs
	selectLabel: {
		...customSelectStyle.selectLabel,
		color: '#fafafa',
	},
	select: {
		...customSelectStyle.select,
		color: '#fafafa',
	},

	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		// padding: 10,
		paddingTop: '100px',
		zIndex: 1000,
		backgroundColor: '#2d2d2d80',

		'& svg': {
			color : '#fafafa'
		}
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	chip: {
		margin: '5px',
		fontSize: '12px',
	},
	interestedChip: {
		margin: '5px',
		fontSize: '12px',
		color: '#fafafa',
	},
	inputRange: {
		marginBottom: '13px',
		'& .input-range__slider': {
			appearance: 'none',
			background: '#ff101f',
			border: '1px solid #ff101f',
			borderRadius: '100%',
			cursor: 'pointer',
			display: 'block',
			height: '1rem',
			marginLeft: '-0.5rem',
			marginTop: '-0.65rem',
			outline: 'none',
			position: 'absolute',
			top: '50%',
			transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
			width: '1rem',
		},
		'& .input-range__slider:active': {
			transform: 'scale(1.3)',
		},
		'& .input-range__slider:focus': {
			boxShadow: '0 0 0 5px rgba(63, 81, 181, 0.2)',
		},
		'& .input-range--disabled .input-range__slider': {
			background: '#cccccc',
			border: '1px solid #cccccc',
			boxShadow: 'none',
			transform: 'none',
		},

		'& .input-range__slider-container': {
			transition: 'left 0.3s ease-out',
		},

		'& .input-range__label': {
			color: '#aaaaaa',
			fontFamily: '"Helvetica Neue", san-serif',
			fontSize: '0.8rem',
			transform: 'translateZ(0)',
			whiteSpace: 'nowrap',
		},

		'& .input-range__label--min & .input-range__label--max': {
			bottom: '-1.4rem',
			position: 'absolute',
		},

		// '& .input-range__label--min': {
		// 	left: 0,
		// },

		// '& .input-range__label--max': {
		// 	right: 0,
		// },

		'& .input-range__label--value': {
			position: 'absolute',
			top: '-1.8rem',
		},

		'& .input-range__label-container': {
			left: '-50%',
			position: 'relative',
		},
		'& .input-range__label--max .input-range__label-container': {
			left: '50%',
		},

		'& .input-range__track': {
			background: '#eeeeee',
			borderRadius: '0.3rem',
			cursor: 'pointer',
			display: 'block',
			height: '0.3rem',
			position: 'relative',
			transition: 'left 0.3s ease-out, width 0.3s ease-out',
		},
		'& .input-range--disabled .input-range__track': {
			background: '#eeeeee',
		},

		'& .input-range__track--background': {
			left: 0,
			marginTop: '-0.15rem',
			position: 'absolute',
			right: 0,
			top: '50%',
		},

		'& .input-range__track--active': {
			backgroundImage:
				'linear-gradient(to right, #cabac8, #df9bbe, #f6749d, #ff4768, #ff101f)',
			// background: #ff101f;
		},

		'& .input-range': {
			height: '1rem',
			position: 'relative',
			width: '100%',
		},
		'& .input-range__label--max .input-range__label-container': {
			display: 'none',
		},
		'& .input-range__label--min .input-range__label-container': {
			display: 'none',
		},
	},
	paper: {
		background: 'transparent',
		border: '2px solid #4cb5ae',
		display: 'flex',
		flexDirection: 'column',
		padding: '20px',
		backgroundColor: 'rgba(0,0,0,0.32)',
		'& ::before': {
			borderBottom: '1px solid #fafafa',
		},
		'& svg': {
			fill: '#fafafa',
		},
		// backgroundImage:
		//   "url(https://www.transparenttextures.com/patterns/dark-matter.png)"
	},
	paper2: {
		background: 'transparent',
		border: '2px solid #b2ddf7',
		display: 'flex',
		flexDirection: 'column',
		padding: '20px',
		backgroundColor: 'rgba(0,0,0,0.32)',
		'& ::before': {
			borderBottom: '1px solid #fafafa',
		},
		'& svg': {
			fill: '#fafafa',
		},
	},
	darkBackground: {
		background: 'transparent',
		color: '#fafafa',
	},
});

export default basicsStyle;
