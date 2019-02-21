import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
//MUI
import InputAdornment from '@material-ui/core/InputAdornment';
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
//QM
import { CURRENT_USER_QUERY } from '../Queries/User';
//styled components
import CustomInput from '../../styledComponents/CustomInput/CustomInput';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import Button from '../../styledComponents/CustomButtons/Button';
import GridItem from '../../styledComponents/Grid/GridItem';
//styles
import Styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles';

const SIMPLE_PASS_RESET = gql`
	mutation SIMPLE_PASS_RESET(
		$oldPassword: String!
		$newPassword1: String!
		$newPassword2: String!
	) {
		internalPasswordReset(
			oldPassword: $oldPassword
			newPassword1: $newPassword1
			newPassword2: $newPassword2
		) {
			id
			firstName
			lastName
			email
		}
	}
`;

const ResetPassword = props => {
	const [ password, setPassword ] = useState({
		oldPassword: '',
		newPassword1: '',
		newPassword2: '',
	});
	const handleChange = ({ target: { name, value } }) => {
		setPassword({ ...password, [name]: value });
	};

	const { classes } = props;
	return (
		<Mutation
			mutation={SIMPLE_PASS_RESET}
			variables={{ ...password }}
			refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
		>
			{(internalPasswordReset, { loading, error }) =>
				(
					<div>
						<p>{error}</p>
					</div>
				) && (
					<GridContainer justify='center'>
						<GridItem lg={7} style={{ margin: '0 auto' }}>
							<CustomInput
								formControlProps={{
									fullWidth: true,
									className: classes.customFormControlClasses,
								}}
								inputProps={{
									placeholder: 'Current password...',
									value: password.oldPassword,
									required: true,
									type: 'password',
									name: 'oldPassword',
									onChange: handleChange,
								}}
							/>
						</GridItem>
						<GridItem lg={7} style={{ margin: '0 auto' }}>
							<CustomInput
								formControlProps={{
									fullWidth: true,
									className: classes.customFormControlClasses,
								}}
								inputProps={{
									placeholder: 'New password...',
									value: password.newPassword1,
									required: true,
									type: 'password',
									name: 'newPassword1',
									onChange: handleChange,
								}}
							/>
						</GridItem>
						<GridItem lg={7} style={{ margin: '0 auto' }}>
							<CustomInput
								formControlProps={{
									fullWidth: true,
									className: classes.customFormControlClasses,
								}}
								inputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<Icon className={classes.icon}>lock_outline</Icon>
										</InputAdornment>
									),
									placeholder: 'Confirm Password...',
									value: password.newPassword2,
									required: true,
									type: 'password',
									name: 'newPassword2',
									onChange: handleChange,
								}}
							/>
							<Button
								color='primary'
								size='lg'
								disabled={loading}
								onClick={() => {
									internalPasswordReset();
									Router.push('/home');
								}}
							>
								Confirm Reset
							</Button>
						</GridItem>
					</GridContainer>
				)}
		</Mutation>
	);
};

export default withStyles(Styles)(ResetPassword);
