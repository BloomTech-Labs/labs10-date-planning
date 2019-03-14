import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { SEND_VERIFICATION_MUTATION, CHECK_VERIFICATION_MUTATION } from './Mutations/verifyText';
import { useMutation } from './Mutations/useMutation';
import { withStyles } from '@material-ui/core';

import styles from '../static/jss/Welcome/welcomeStyles.js';

import Button from '../styledComponents/CustomButtons/Button';
import CustomInput from '../styledComponents/CustomInput/CustomInput.jsx';

const Verify = ({ classes }) => {
	const [ verify, setVerify ] = useState(false);
	const [ verifySent, setVerifySent ] = useState(false);
	const [ verified, setVerified ] = useState(false);
	const [ phone, setPhone ] = useState('');
	const [ code, setCode ] = useState(undefined);
	const [ err, setError ] = useState(undefined);

	const handleError = err => {
		NProgress.done();
		if (err.message.includes('Field name = phone')) {
			setError({ message: 'Please enter a valid phone number.' });
			alert('Please enter a valid phone number.');
		}
	};
	const [ verifyPhone ] = useMutation(SEND_VERIFICATION_MUTATION, {
		variables: { phone },
		onCompleted: () => {
			NProgress.done();
			setVerify(false);
			setVerifySent(true);
		},
		onError: err => {
			handleError(err);
		},
	});
	const [ checkVerify ] = useMutation(CHECK_VERIFICATION_MUTATION, {
		variables: { phone, code },
		onCompleted: () => {
			NProgress.done();
			setVerifySent(false);
			setVerified(true);
		},
		onError: err => {
			NProgress.done();
			alert(err.message);
		},
	});

	return (
		<div>
			{!verifySent && !verified ? (
				<div style={{ zIndex: 1, cursor: 'pointer' }} onClick={() => setVerify(true)}>
					Verify your phone number to send and recieve messages.
				</div>
			) : null}
			{verify && (
				<div className={classes.verifyInput}>
					<CustomInput
						inputProps={{
							type: 'tel',
							pattern: '^(+d{1,2}s)?(?d{3})?[s.-]?d{3}[s.-]?d{4}$',
							value: phone,
							onChange: e => {
								setPhone(e.target.value);
							},
						}}
					/>
					<Button
						color='danger'
						style={{ zIndex: 2 }}
						onClick={() => {
							NProgress.start();
							verifyPhone();
						}}
					>
						Send Text
					</Button>
				</div>
			)}
			{verifySent && (
				<div className={classes.verifyInput}>
					<p>Verification text sent, please enter the code below. </p>
					<CustomInput
						inputProps={{
							value: code,
							onChange: e => {
								setCode(e.target.value);
							},
						}}
					/>
					<Button
						color='danger'
						onClick={() => {
							NProgress.start();
							checkVerify();
						}}
						style={{ zIndex: 1 }}
					>
						Verify
					</Button>
				</div>
			)}
			{verified && (
				<div style={{ textAlign: 'center' }}>
					You are now verified and can message other users.
				</div>
			)}
		</div>
	);
};

export default withStyles(styles)(Verify);
