import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { SEND_VERIFICATION_MUTATION, CHECK_VERIFICATION_MUTATION } from './Mutations/verifyText';
import { useMutation } from './Mutations/useMutation';
import Button from '../styledComponents/CustomButtons/Button';

const Verify = () => {
	const [ verify, setVerify ] = useState(false);
	const [ verifySent, setVerifySent ] = useState(false);
	const [ verified, setVerified ] = useState(false);
	const [ phone, setPhone ] = useState('');
	const [ code, setCode ] = useState(undefined);
	console.log(phone);
	const [ verifyPhone ] = useMutation(SEND_VERIFICATION_MUTATION, {
		variables: { phone },
		onCompleted: () => {
			NProgress.done();
			setVerify(false);
			setVerifySent(true);
		},
		onError: err => {
			NProgress.done();
			alert(err.message);
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
			<Button simple white style={{ zIndex: 1 }} onClick={() => setVerify(true)}>
				Verify your phone number.
			</Button>
			{verify && (
				<div>
					<input
						style={{ zIndex: 7 }}
						//mask='(999) 999-9999'
						value={phone}
						onChange={e => {
							setPhone(e.target.value);
						}}
					/>
					<Button
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
				<div>
					<p>Verification text sent, please enter the code below. </p>
					<input
						style={{ zIndex: 1 }}
						//mask='9999'
						value={code}
						onChange={e => {
							setCode(e.target.value);
						}}
					/>
					<Button
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
			{verified && <div>You are now verified and can message other users.</div>}
		</div>
	);
};

export default Verify;
