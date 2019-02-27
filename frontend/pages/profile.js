import { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';
import User from '../components/Queries/User';
import Profile from '../components/Profile';
import Header from '../components/Header';
import JoinUs from './joinus';

const ProfilePage = () => (
	<User>
		{({ data, loading }) => {
			if (loading) return <div>loading</div>;
			if (!data.currentUser) return <JoinUs />;
			else return <><Header color='warning'/><Profile /></>;
		}}
	</User>
);

// ProfilePage.getInitialProps = async ctx => {
// 	let user = await isLoggedIn(ctx.apolloClient);

// 	if (!user) {
// 		redirect(ctx, '/joinus');
// 	}
// 	//console.log(!user.currentUser && router.pathname !== '/joinus');
// 	// if (!(user.currentUser && router.aspath != '/joinus')) {
// 	// 	redirect(ctx, '/joinus');
// 	// }
// 	return {  };
// };

export default ProfilePage;
