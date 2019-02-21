export const isLoggedIn = async client => {
	console.log(client);
	let { data } = await client.query({
		query: CURRENT_USER_QUERY,
	});
	return data;
};
