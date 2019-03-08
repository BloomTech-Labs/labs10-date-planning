import React, { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import { Paper, MenuItem } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Input from '../../styledComponents/CustomInput/CustomInput';
import Styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';
import { LOCATION_SUGGESTION_QUERY } from '../Queries/LocationSuggestion';
import Downshift from 'downshift';

const GenderPrefs = ({ classes }) => {
	const [ location, setLocation ] = useState('');
	const [ items, setItems ] = useState([]);

	const handleLocationChange = selectedItem => {
		setLocation(selectedItem.slice(0, -5));
	};
	return (
		<Mutation
			mutation={UPDATE_USER_MUTATION}
			variables={{ location }}
			onCompleted={() => {
				NProgress.done();
				Router.push(
					`/welcome?slug=6`,
					`/welcome/profile/images`,
					{ shallow: true },
					{ scroll: false },
				);
			}}
		>
			{(updateUser, { client }) => (
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<h2>I am located in</h2>
					<Downshift
						inputValue={location}
						onChange={handleLocationChange}
						onInputValueChange={async e => {
							setLocation(e);
							const { data } = await client.query({
								query: LOCATION_SUGGESTION_QUERY,
								variables: { city: e },
							});

							setItems(data.locationSearch);
						}}
					>
						{({ getInputProps, getItemProps, isOpen }) => (
							<div className={classes.downshiftContainer}>
								<Input
									inputProps={{
										placeholder: 'Search for a city name...',
										...getInputProps(),
									}}
									formControlProps={{
										style: {
											paddingTop: '12px',
											width: '80%',
										},
									}}
								/>

								{isOpen ? (
									<Paper className={classes.downshiftPaper}>
										{items.map((result, index) => {
											return (
												<MenuItem
													key={index}
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
					<Button
						onClick={() => {
							NProgress.start();
							updateUser();
						}}
					>
						Set Preferences
					</Button>
				</div>
			)}
		</Mutation>
	);
};

export default withStyles(Styles)(GenderPrefs);
