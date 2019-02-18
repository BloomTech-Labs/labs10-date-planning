import React, { useState } from 'react';
import Downshift from 'downshift';
import { ApolloConsumer } from 'react-apollo';
import { LOCATION_SUGGESTION_QUERY } from '../Queries/LocationSuggestion';
import Input from '../../styledComponents/CustomInput/CustomInput';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Button from '../../styledComponents/CustomButtons/Button';
import MenuItem from '@material-ui/core/MenuItem';

const Search = ({ getEvents }) => {
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
						<div>
							<Input
								inputProps={{
									placeholder: 'Search for a city name...',
									...getInputProps(),
								}}
								formControlProps={{ style: { paddingTop: '12px' } }}
							/>
							<Button
								justIcon
								round
								disabled={!selectedItem}
								onClick={() => {
									let city = input.slice(0, -5);
									console.log(city);
									getEvents({
										location: city,
										alt: city,
										page: 1,
										categories: [],
										dates: [],
									});
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
											<MenuItem {...getItemProps({ item: result.city })}>
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
