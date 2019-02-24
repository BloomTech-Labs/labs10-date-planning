import { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';
import Profile from '../components/Profile';
import Header from '../components/Header'

const ProfilePage = ({ user }) => {
	return <><Header color='warning'/><Profile /></>;
};

ProfilePage.getInitialProps = async ctx => {
	let user = await isLoggedIn(ctx.apolloClient);

	if (!user.currentUser) {
		redirect(ctx, '/joinus');
	}
	//console.log(!user.currentUser && router.pathname !== '/joinus');
	// if (!(user.currentUser && router.aspath != '/joinus')) {
	// 	redirect(ctx, '/joinus');
	// }
	return { user: user.currentUser };
};

export default ProfilePage;
