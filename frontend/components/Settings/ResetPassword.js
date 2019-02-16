import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import gql from 'graphql-tag';
import Styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles';
import CustomInput from '../../styledComponents/CustomInput/CustomInput';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import Button from '../../styledComponents/CustomButtons/Button';
import { CURRENT_USER_QUERY } from '../Queries/User';

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
	const { classes } = props;
	const [password, setPassword] = useState({ oldPassword: '', newPassword1: '', newPassword2: '' });
	return (
		<Mutation
			mutation={SIMPLE_PASS_RESET}
			variables={{ ...password }}
			refetchQueries={[{ query: CURRENT_USER_QUERY }]}
		>
			{(internalPasswordReset, { loading, error }) => (
				<GridContainer justify="column">
					<GridItem xs={6} style={{ margin: '0 auto' }}>
						<CustomInput
							labelText="Old Password"
							type="password"
							name="oldpassword"
							required
							id="material"
							formControlProps={{
								fullWidth: true
							}}
							inputProps={{
								placeholder: 'Current password...',
								value: password.oldPassword,
								onChange: ({ target: { name, value } }) =>
									setPassword({
										...password,
										[name]: value
									})
							}}
						/>
					</GridItem>
					<GridItem xs={6} style={{ margin: '0 auto' }}>
						<CustomInput
							labelText="New Password"
							type="password"
							name="newPassword1"
							required
							id="material"
							formControlProps={{
								fullWidth: true
							}}
							inputProps={{
								placeholder: 'New password...',
								value: password.newPassword1,
								onChange: ({ target: { name, value } }) =>
									setPassword({
										...password,
										[name]: value
									})
							}}
						/>
					</GridItem>
					<GridItem xs={8} style={{ margin: '0 auto' }}>
						<CustomInput
							labelText="Confirm Password"
							type="password"
							name="newPassword2"
							required
							id="material"
							formControlProps={{
								fullWidth: true
							}}
							inputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Icon className={classes.icon}>lock_outline</Icon>
									</InputAdornment>
								),
								placeholder: 'Confirm Password...',
								value: password.newPassword2,
								onChange: ({ target: { name, value } }) =>
									setPassword({
										...password,
										[name]: value
									})
							}}
						/>
						<Button
							color="primary"
							size="lg"
							disabled={loading || error}
							onClick={() => {
								internalPasswordReset();
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
