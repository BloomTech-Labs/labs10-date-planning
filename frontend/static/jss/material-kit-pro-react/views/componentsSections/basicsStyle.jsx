import { container, title, mlAuto, mrAuto } from '../../../material-kit-pro-react';
import customCheckboxRadioSwitch from '../../../material-kit-pro-react/customCheckboxRadioSwitchStyle';
import customSelectStyle from '../../../material-kit-pro-react/customSelectStyle';

const drawerWidth = 240;

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
		marginTop: '30px',
		minHeight: '32px',
		textDecoration: 'none',
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
		padding: 20,
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
		margin: '4px',
	},
});

export default basicsStyle;
