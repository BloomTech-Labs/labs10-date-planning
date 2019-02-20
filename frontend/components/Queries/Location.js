import React, { useState, useEffect } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const CURRENT_LOCATION_QUERY = gql`
	query($latitude: Float!, $longitude: Float!) {
		getLocation(latitude: $latitude, longitude: $longitude) {
			city
		}
	}
`;

const Location = ({ children }) => {
	const [location, setLocation] = useState({});

	useEffect(() => {
		// setLocation({ longitude: -122.3321, latitude: 47.6062 });
		navigator.geolocation.getCurrentPosition(position => {
			let { latitude, longitude } = position.coords;

			setLocation({ latitude, longitude });
		});
	}, []);

	if (location.latitude && location.longitude) {
		return (
			<Query query={CURRENT_LOCATION_QUERY} variables={location}>
				{payload => children(payload)}
			</Query>
		);
	} else return children({ data: {} });
};
Location.propTypes = {
	children: PropTypes.func.isRequired
};

export default Location;
export { CURRENT_LOCATION_QUERY };
