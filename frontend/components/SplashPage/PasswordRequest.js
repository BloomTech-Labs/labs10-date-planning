import React, { useState, Fragment } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import NProgress from "nprogress";
import { Send, Close } from "@material-ui/icons";
import CustomInput from "../../styledComponents/CustomInput/CustomInput";
import Button from "../../styledComponents/CustomButtons/Button";

import withStyles from "@material-ui/core/styles/withStyles";
import Styles from "../../styles/Splash/PasswordRequest";

const REQUEST_RESET_MUTATION = gql`
	mutation REQUEST_RESET_MUTATION($email: String!) {
		requestReset(email: $email) {
			message
		}
	}
`;

const Reset = ({ classes }) => {
	const [reset, setReset] = useState(false);
	const [email, setEmail] = useState("");
	return (
		<Mutation
			mutation={REQUEST_RESET_MUTATION}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
			variables={{ email }}
		>
			{(requestReset, { data, error }) => {
				// console.log(data);
				if (error) {
					return (
						<Button color="rose" simple disabled>
							{error.message.replace("GraphQL error: ", "")}
						</Button>
					);
				} else if (data) {
					return (
						<p style={{ textAlign: "center" }}>A password reset link has been sent to {email}</p>
					);
				} else
					return (
						<Fragment>
							{!reset ? (
								<Button
									color="rose"
									simple
									onClick={e => {
										e.stopPropagation();
										setReset(true);
									}}
								>
									Forgot your password?
								</Button>
							) : (
								<div className={classes.input}>
									<CustomInput
										formControlProps={{
											fullWidth: true
										}}
										inputProps={{
											placeholder: "Enter your email",
											value: email,
											type: "email",
											onChange: e => setEmail(e.target.value)
										}}
									/>
									<Button
										justIcon
										round
										disabled={!email}
										onClick={() => {
											NProgress.start();
											requestReset();
										}}
									>
										{email ? <Send /> : <Close />}
									</Button>
								</div>
							)}
						</Fragment>
					);
			}}
		</Mutation>
	);
};
export default withStyles(Styles)(Reset);
