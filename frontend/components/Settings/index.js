import React from 'react';
import Sidebar from './Sidebar';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import Dates from './Dates';
import withStyles from '@material-ui/core/styles/withStyles';
import blogsStyle from '../../static/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx';

const Settings = ({ classes }) => {
	return (
		<div className={classes.blog}>
			<GridContainer style={{ margin: 0 }}>
				<GridItem md={3} lg={2}>
					<Sidebar />
				</GridItem>
				<GridItem md={9} lg={10}>
					<Dates />
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default withStyles(blogsStyle)(Settings);
