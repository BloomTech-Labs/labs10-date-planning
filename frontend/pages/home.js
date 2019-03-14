import JoinUs from "./joinus";
import Router from "next/router";
import Events from "../components/Home/Events";
import Header from "../components/Header";
import User, { isLoggedIn } from "../components/Queries/User";
import redirect from "../utils/redirect";

const Home = ({ query }) => {
	return (
		<User>
			{({ data, loading }) => {
				
				if (loading) return <div>home</div>;
				if (!data.currentUser) return <JoinUs />;
				else
					return (
						<>
							<Header color="primary" currentUser={data.currentUser} />
							<Events />
						</>
					);
			}}
		</User>
	);
};

// Home.getInitialProps = async ctx => {
// 	let user = await isLoggedIn(ctx.apolloClient);

// 	if (!user.currentUser) {
// 		console.log("no user logged in");
// 		// redirect(ctx, '/joinus');
// 	}
// 	// 	//if (ctx.query.welcome)
// 	// 	//console.log(!user.currentUser && router.pathname !== '/joinus');
// 	// 	// if (!(user.currentUser && router.aspath != '/joinus')) {
// 	// 	// 	redirect(ctx, '/joinus');
// 	// 	// }
// 	return {};
// };

export default Home;
