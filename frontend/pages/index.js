import JoinUs from './joinus';
import User from '../components/Queries/User';
import { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';
import Home from './home';

const Index = ({ user }) => {
	if (!user) return <JoinUs />;
	else return <Home />;
};

Index.getInitialProps = async ctx => {
	let user = await isLoggedIn(ctx.apolloClient);

	if (!user.currentUser) {
		redirect(ctx, '/joinus');
	} else {
		redirect(ctx, '/home');
	}
	//console.log(!user.currentUser && router.pathname !== '/joinus');
	// if (!(user.currentUser && router.aspath != '/joinus')) {
	// 	redirect(ctx, '/joinus');
	// }
	return { user: user.currentUser };
};

export default Index;
