import JoinUs from './joinus';
import { Query, withApollo } from 'react-apollo';
import User from '../components/Queries/User';
import { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';
import Home from './home';

const Index = props => {
	console.log(props.client);
	//console.log(Object.keys(props));
	// if (!user) return <JoinUs />;
	return <Home />;
};

Index.getInitialProps = async (ctx, client) => {
	//console.log(client, Object.keys(ctx));
	//let user = await isLoggedIn(ctx.apolloClient);

	// if (!user) {
	// 	redirect(ctx, '/joinus');
	// } else {
	// 	redirect(ctx, '/home');
	// }
	//console.log(!user.currentUser && router.pathname !== '/joinus');
	// if (!(user.currentUser && router.aspath != '/joinus')) {
	// 	redirect(ctx, '/joinus');
	// }
	return {};
};

export default withApollo(Index);
