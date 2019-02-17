import React, { useState } from 'react';
import Downshift from 'downshift';
import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';
import Input from '../../styledComponents/CustomInput/CustomInput';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Button from '../../styledComponents/CustomButtons/Button';

const LOCATION_SUGGESTION_QUERY = gql`
	query LOCATION_SUGGESTION_QUERY($city: String!) {
		locationSearch(city: $city) {
			city
		}
	}
`;

const Search = ({ refetch }) => {
	const [ input, setInput ] = useState('');
	const [ items, setItems ] = useState([]);
	const onChange = selectedItem => {
		console.log(selectedItem);
		setInput(selectedItem.city);
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
							<Button justIcon round>
								<SearchIcon />
							</Button>

							{isOpen ? (
								<Paper
									style={{
										position: 'absolute',
										zIndex: 2,
										padding: '8px 12px',
										width: '200px',
									}}
								>
									{items.map((result, index) => {
										return (
											<div {...getItemProps({ item: result.city })}>
												{result.city}
											</div>
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
