import Splash from '../components/SplashPage';
import { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';

const Index = () => <Splash />;

Index.getInitialProps = async ctx => {
	let user = await isLoggedIn(ctx.apolloClient);

	if (user.currentUser) {
		redirect(ctx, '/home');
	}
	//console.log(!user.currentUser && router.pathname !== '/joinus');
	// if (!(user.currentUser && router.aspath != '/joinus')) {
	// 	redirect(ctx, '/joinus');
	// }
	return { user: user.currentUser };
};

export default Index;
