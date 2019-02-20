import React from 'react';
import Sidebar from './Sidebar';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import Dates from './Dates';
import withStyles from '@material-ui/core/styles/withStyles';
import blogsStyle from '../../static/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx';

const Settings = ({ classes }) => {
	return (
		<div style={{ height: '100%' }}>
			<GridContainer >
				<GridItem container justify='center' md={4} lg={4}>
					<Sidebar />
				</GridItem>
				<GridItem md={8} lg={8}>
					<Dates />
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default withStyles(blogsStyle)(Settings);
