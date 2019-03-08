import Splash from "../components/SplashPage";
import { isLoggedIn } from "../utils/getLoggedIn";
import { withApollo } from "react-apollo";
import redirect from "../utils/redirect";
import User from "../components/Queries/User";
import Home from "./home";

const Index = () => (
	<User>
		{({ data, loading }) => {
			if (loading) return <div>hallo</div>;
			return <Splash />;
			//else return <Home />;
		}}
	</User>
);

Index.getInitialProps = async ctx => {
	const user = await isLoggedIn(ctx);
	console.log(user, "hey im here (step1)");

	if (user) {
		console.log("user in joinus page");
		redirect(ctx, "/home");
	}
	//console.log(!user.currentUser && router.pathname !== '/joinus');
	// if (!(user.currentUser && router.aspath != '/joinus')) {
	// 	redirect(ctx, '/joinus');
	// }
	return { data: user };
};

export default Index;
