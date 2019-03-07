import React, { useState } from 'react';
import { withApollo, Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import { withRouter } from 'next/router';
import { Value } from 'react-powerplug';
import classNames from 'classnames';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

//Q&M
import { CURRENT_USER_QUERY } from '../Queries/User';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
//components
import Location from '../Settings/Location';
import Dates from '../Settings/Dates';
import Preferences from './Preferences';
import UserModal from '../Home/UserModal';
import ImageModal from './ImageModal';
//styledcomponents
import Button from '../../styledComponents/CustomButtons/Button';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
//utils
import getAge from '../../utils/getAge';
//styles
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';
import '../../styles/Profile/index.scss';
const Composed = adopt({
	user: ({ render }) => <Query query={CURRENT_USER_QUERY}>{render}</Query>,

	biography: ({ user, render }) => (
		<Value initial={user.data.currentUser.biography || ''}>{render}</Value>
	),
	updateUser: ({ render }) => (
		<Mutation
			mutation={UPDATE_USER_MUTATION}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{render}
		</Mutation>
	),
});
const Profile = ({ classes, theme, router }) => {
	const [ drawerOpen, setDrawerOpen ] = useState(false);
	const [ modal, showModal ] = useState(false);
	return (
		<Composed>
			{({ user: { data: { currentUser } }, biography, updateUser }) => {
				let profileImg =
					currentUser.img.find(img => img.default) &&
					currentUser.img.find(img => img.default).img_url;
				return (
					<div className='Profile__background'>
						<ImageModal modal={modal} showModal={showModal} user={currentUser} />
						{router.query.user && <UserModal user={router.query.user} />}
						<Preferences
							user={currentUser}
							drawerOpen={drawerOpen}
							setDrawerOpen={setDrawerOpen}
						/>
						<div className='Profile-Header'>
							<IconButton
								// color="inherit"
								style={{ color: 'white' }}
								aria-label='Open drawer'
								onClick={() => setDrawerOpen(!drawerOpen)}
								className={classNames(classes.menuButton)}
							>
								<Menu />
							</IconButton>
							<div className='inner'>
								<div
									className='prof-img'
									style={{ backgroundImage: `url(${profileImg})` }}
								>
									<Button className='view-all' onClick={() => showModal(true)}>
										View all
									</Button>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										margin: '0 20px',
									}}
								>
									<h2 style={{ color: '#fafafa' }}>
										{currentUser.firstName}{' '}
										<span style={{ padding: '0 0px' }}>&#8226;</span>{' '}
										{getAge(currentUser.dob)}
									</h2>
									<Location user={currentUser} />
								</div>
							</div>
						</div>

						<GridContainer>
							<GridItem sm={12} md={6} lg={6}>
								<Dates />
							</GridItem>
							<div>{/* <FormControl className={classes.selectFormControl}> */}</div>

							{/* </GridContainer> */}
							{/* <Dates /> */}
						</GridContainer>
					</div>
				);
			}}
		</Composed>
	);
};

export default withRouter(withStyles(style)(Profile));
