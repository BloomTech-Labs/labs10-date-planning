import React, { useState } from 'react';
import classNames from 'classnames';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight } from '@material-ui/icons';
//components
import Sidebar from './Sidebar';
import Dates from './Dates';
//styles
import '../../styles/Settings/Index.scss';

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
				<Menu />
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
				<div className={classes.drawerHeader} style={{ marginTop: '70px' }}>
					<IconButton onClick={() => setDrawerOpen()}>
						{theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
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
