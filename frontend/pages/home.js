import JoinUs from './joinus';
import Router from 'next/router'
import Events from '../components/Home/Events';
import Header from '../components/Header';
import User, { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';

const Home = ({ query }) => {
	console.log(query)
	return (
	<User>
		{({ data, loading, error }) => {
			console.log(data)
			if (loading) return <div>loading</div>;
			if (error || !data.currentUser) return <JoinUs />;
			else return (
				<>
					<Header color='primary' />
					<Events  newUser={query && query.welcome} />
				</>
			);
		}}
	</User>
	)
};

// Home.getInitialProps = async ctx => {
// 	let user = await isLoggedIn(ctx.apolloClient);

// 	if (!user) {
// 		redirect(ctx, '/joinus');
// 	}
// 	//if (ctx.query.welcome)
// 	//console.log(!user.currentUser && router.pathname !== '/joinus');
// 	// if (!(user.currentUser && router.aspath != '/joinus')) {
// 	// 	redirect(ctx, '/joinus');
// 	// }
// 	return { };
// };

export default Home;
