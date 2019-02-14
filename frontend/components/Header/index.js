import withStyles from '@material-ui/core/styles/withStyles';
import navbarsStyle from '../../static/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Search from '@material-ui/icons/Search';
import Email from '@material-ui/icons/Email';
import Face from '@material-ui/icons/Face';
import Settings from '@material-ui/icons/Settings';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Explore from '@material-ui/icons/Explore';
// core components
import GridContainer from '../../styledComponents/Grid/GridContainer.jsx';
import GridItem from '../../styledComponents/Grid/GridItem.jsx';
import Header from '../../styledComponents/Header/Header.jsx';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import CustomDropdown from '../../styledComponents/CustomDropdown/CustomDropdown.jsx';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
import image from '../../static/img/bg.jpg';
import profileImage from '../../static/img/faces/avatar.jpg';

const Nav = ({ classes }) => (
	<Header
		brand='Navbar with notifications'
		color='primary'
		links={
			<List className={classes.list + ' ' + classes.mlAuto}>
				<ListItem className={classes.listItem}>
					<Button
						href='#pablo'
						className={classes.navLink}
						onClick={e => e.preventDefault()}
						color='transparent'
					>
						Discover
					</Button>
				</ListItem>
				<ListItem className={classes.listItem}>
					<Button
						href='#pablo'
						className={classes.navLink}
						onClick={e => e.preventDefault()}
						color='transparent'
					>
						Wishlist
					</Button>
				</ListItem>
				<ListItem className={classes.listItem}>
					<Button
						href='#pablo'
						className={classes.notificationNavLink}
						onClick={e => e.preventDefault()}
						color='rose'
						justIcon
						round
					>
						<Email />
					</Button>
				</ListItem>
				<ListItem className={classes.listItem}>
					<CustomDropdown
						left
						caret={false}
						hoverColor='dark'
						dropdownHeader='Dropdown Header'
						buttonText={
							<img src={profileImage} className={classes.img} alt='profile' />
						}
						buttonProps={{
							className: classes.navLink + ' ' + classes.imageDropdownButton,
							color: 'transparent',
						}}
						dropdownList={[ 'Dates', 'Billing', 'Settings', 'Sign out' ]}
						onClick={e => console.log(e)}
					/>
				</ListItem>
			</List>
		}
	/>
);

export default withStyles(navbarsStyle)(Nav);
