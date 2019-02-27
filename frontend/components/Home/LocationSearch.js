import React, { useState } from 'react';
import Downshift from 'downshift';
import { ApolloConsumer } from 'react-apollo';
//MUI
import { Paper, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
//Q&M
import { LOCATION_SUGGESTION_QUERY } from '../Queries/LocationSuggestion';
//styled components
import Input from '../../styledComponents/CustomInput/CustomInput';
import Button from '../../styledComponents/CustomButtons/Button';

const Search = ({ setLocation }) => {
	const [ input, setInput ] = useState('');
	const [ items, setItems ] = useState([]);
	const onChange = selectedItem => {
		setInput(selectedItem);
	};

	return (
		<ApolloConsumer>
			{client => (
				<Downshift
					inputValue={input}
					onChange={onChange}
					onInputValueChange={async e => {
						setInput(e);
						const { data } = await client.query({
							query: LOCATION_SUGGESTION_QUERY,
							variables: { city: e },
						});

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
						<div>
							<Input
								inputProps={{
									placeholder: 'Search for a city name...',
									...getInputProps(),
								}}
								formControlProps={{ style: { paddingTop: '12px', width: '78%' } }}
							/>
							<Button
								justIcon
								round
								disabled={!selectedItem}
								onClick={() => {
									let city = input.slice(0, -5);

									setLocation(city);
								}}
							>
								<SearchIcon />
							</Button>

							{isOpen ? (
								<Paper
									style={{
										position: 'absolute',
										zIndex: 2,

										width: '200px',
									}}
								>
									{items.map((result, index) => {
										return (
											<MenuItem
												key={index}
												{...getItemProps({ item: result.city })}
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
			)}
		</ApolloConsumer>
	);
};

export default Search;
