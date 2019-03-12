import Splash from "../components/SplashPage";
import { isLoggedIn } from "../components/Queries/User";
import redirect from "../utils/redirect";
import User from "../components/Queries/User";

const Index = () => (
	<User>
		{({ data, loading }) => {
			if (loading) return <div>hallo</div>;
			return <Splash />;
		}}
	</User>
);

// Index.getInitialProps = async ctx => {
// 	let user = await isLoggedIn(ctx.apolloClient);

// 	if (user.currentUser) {
// 		redirect(ctx, "/home");
// 	}
// 	// 	//console.log(!user.currentUser && router.pathname !== '/joinus');
// 	// 	// if (!(user.currentUser && router.aspath != '/joinus')) {
// 	// 	// 	redirect(ctx, '/joinus');
// 	// 	// }
// 	return {};
// };

export default Index;
