import React, { useState } from 'react';
import Danger from '../../styledComponents/Typography/Danger';
import NearMe from '@material-ui/icons/NearMe';
import Button from '../../styledComponents/CustomButtons/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import Close from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import Downshift from 'downshift';
import { CURRENT_USER_QUERY } from '../Queries/User';
import { LOCATION_SUGGESTION_QUERY } from '../Queries/LocationSuggestion';
import { ApolloConsumer, Mutation } from 'react-apollo';
import { UPDATE_LOCATION_MUTATION } from '../Mutations/updateLocation';
import Input from '../../styledComponents/CustomInput/CustomInput';
import WhereToVote from '@material-ui/icons/WhereToVote';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const Location = ({ user, classes }) => {
	const [ modal, showModal ] = useState(false);
	const [ input, setInput ] = useState('');
	const [ items, setItems ] = useState([]);
	const onChange = selectedItem => {
		console.log(selectedItem);
		setInput(selectedItem);
	};

	return (
		<div>
			<Danger style={{ display: 'flex', alignItems: 'center' }}>
				<h6 style={{ margin: 0 }}>
					{user.location ? user.location : 'Set your default location'}
				</h6>
				<Button justIcon simple round onClick={() => showModal(true)}>
					<NearMe />
				</Button>
			</Danger>
			<Dialog
				classes={{
					root: classes.modalRoot,
					paper: classes.modal,
				}}
				open={modal}
				// TransitionComponent={Transition}
				//keepMounted
				onClose={() => showModal(false)}
			>
				<DialogTitle
					id='notice-modal-slide-title'
					disableTypography
					className={classes.modalHeader}
				>
					{' '}
					<Button
						simple
						className={classes.modalCloseButton}
						key='close'
						aria-label='Close'
						onClick={e => {
							e.stopPropagation();
							showModal(false);
						}}
					>
						{' '}
						<Close className={classes.modalClose} />
					</Button>
					<h4 className={classes.modalTitle}>Update Location</h4>
				</DialogTitle>
				<DialogContent>
					<ApolloConsumer>
						{client => (
							<Mutation
								mutation={UPDATE_LOCATION_MUTATION}
								variables={{ city: input.slice(0, -5) }}
								refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
								onCompleted={() => showModal(false)}
							>
								{(updateLocation, { error, loading, called }) => {
									return (
										<Downshift
											inputValue={input}
											onChange={onChange}
											onInputValueChange={async e => {
												setInput(e);
												const { data } = await client.query({
													query: LOCATION_SUGGESTION_QUERY,
													variables: { city: e },
												});
												console.log(data);
												setItems(data.locationSearch);
											}}
										>
											{({
												getInputProps,
												getItemProps,

												isOpen,

												highlightedIndex,
												selectedItem,
											}) => (
												<div style={{ width: '100%' }}>
													<Input
														inputProps={{
															placeholder:
																'Search for a city name...',
															...getInputProps(),
														}}
														formControlProps={{
															style: {
																paddingTop: '12px',
																width: '90%',
															},
														}}
													/>
													<Button
														justIcon
														round
														disabled={!selectedItem}
														onClick={() => {
															updateLocation();
														}}
													>
														<WhereToVote />
													</Button>

													{isOpen ? (
														<Paper
															style={{
																position: 'absolute',
																zIndex: 2,

																width: '90%',
															}}
														>
															{items.map((result, index) => {
																return (
																	<MenuItem
																		{...getItemProps({
																			item: result.city,
																		})}
																	>
																		{result.city}
																	</MenuItem>
																);
															})}
														</Paper>
													) : null}
												</div>
											)}
										</Downshift>
									);
								}}
							</Mutation>
						)}
					</ApolloConsumer>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default withStyles(styles)(Location);
