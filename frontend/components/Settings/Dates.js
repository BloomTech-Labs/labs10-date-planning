import React from 'react';
import Link from 'next/link';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
//styled components
import GridContainer from '../../styledComponents/Grid/GridContainer';
import SnackbarContent from '../../styledComponents/Snackbar/SnackbarContent.jsx';
import Button from '../../styledComponents/CustomButtons/Button';
//QM
import User from '../Queries/User';
//components
import Date from './Date';
//styles
import styles from '../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx';
import '../../styles/Settings/Snackbar.scss';

const Dates = ({ classes }) => {
	return (
		<User>
			{({ data: { currentUser } }) => {
				return (
					<div style={{ marginLeft: '34px' }} className={classes.container}>
						<GridContainer>
							{currentUser.events.length ? (
								currentUser.events.map(date => (
									<Date key={date.id} date={date} currentUser={currentUser} />
								))
							) : (
								<div>
									<p>You don't have any dates yet!</p>
								</div>
							)}
						</GridContainer>
						{currentUser.permissions[0] === 'FREE' && (
							<div className='Snackbar'>
								<SnackbarContent
									message={
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center',
											}}
										>
											<div>
												{' '}
												<b>
													You have{' '}
													<span>{5 - currentUser.events.length} </span>
													{currentUser.events.length === 1 ? (
														'date left.'
													) : (
														'dates left.'
													)}
												</b>
											</div>
											<Link href='/billing'>
												<Button className='Snackbar__button'>
													Go Premium?
												</Button>
											</Link>
										</div>
									}
									close
									color='info'
								/>
							</div>
						)}
					</div>
				);
			}}
		</User>
	);
};

export default withStyles(styles)(Dates);
