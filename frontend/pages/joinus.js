import Splash from '../components/SplashPage';
import { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';
import User from '../components/Queries/User';
import Home from './home';

const Index = () => (
	<User>
		{({ data, loading }) => {
			if (loading) return <div>loading</div>;
			return <Splash />;
			//else return <Home />;
		}}
	</User>
);

// Index.getInitialProps = async ctx => {
// 	let user = await isLoggedIn(ctx.apolloClient);

// 	if (user) {
// 		redirect(ctx, '/home');
// 	}
// 	//console.log(!user.currentUser && router.pathname !== '/joinus');
// 	// if (!(user.currentUser && router.aspath != '/joinus')) {
// 	// 	redirect(ctx, '/joinus');
// 	// }
// 	return {};
// };

export default Index;
