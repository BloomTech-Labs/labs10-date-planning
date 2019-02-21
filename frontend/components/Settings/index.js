import React, { useState } from 'react';
import Sidebar from './Sidebar';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import Dates from './Dates';
import withStyles from '@material-ui/core/styles/withStyles';
import blogsStyle from '../../static/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx';

import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Button from '../../styledComponents/CustomButtons/Button.jsx';

import '../../styles/Settings/index.scss';
import { isAbsolute } from 'path';

const drawerWidth = 240;

const styles = theme => ({
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
		position: 'absolute',
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
		padding: '0 10px',
		zIndex: 1099,
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
});

const Settings = ({ classes, theme }) => {
	const [ drawerOpen, setDrawerOpen ] = useState(false);

	return (
		<div className={classes.root}>
			{/* <Button onClick={() => setDrawerOpen(!drawerOpen)} /> */}
			<IconButton
				// color="inherit"
				aria-label='Open drawer'
				onClick={() => setDrawerOpen(!drawerOpen)}
				className={classNames(classes.menuButton, drawerOpen && classes.hide)}
			>
				<MenuIcon />
			</IconButton>

			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={drawerOpen}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={() => setDrawerOpen()}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<Sidebar />
			</Drawer>
			<Dates />
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(Settings);
