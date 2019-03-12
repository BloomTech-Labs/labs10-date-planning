import { useState } from 'react';
import { useMutation as useHookMutation } from 'react-apollo-hooks';

export function useMutation(mutation, { onCompleted, onError, ...options } = {}) {
	const [ loading, setLoading ] = useState(false);
	const [ called, setCalled ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ data, setData ] = useState(null);

	const mutate = useHookMutation(mutation, options);

	const handler = async (...args) => {
		console.log(mutate);
		setLoading(true);
		setCalled(true);
		setError(null);
		setData(null);

		try {
			const { data } = await mutate(...args);
			console.log(data);
			setData(data);

			setLoading(false);

			if (onCompleted) {
				onCompleted(data);
			}

			return { data };
		} catch (e) {
			setLoading(false);
			setError(e);

			if (onError) {
				onError(e);
			}
		}
	};

	return [
		handler,
		{
			loading,
			called,
			error,
			data,
		},
	];
}
