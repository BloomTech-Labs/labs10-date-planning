import JoinUs from "./joinus";
import Router from "next/router";
import Events from "../components/Home/Events";
import Header from "../components/Header";
import User, { isLoggedIn } from "../components/Queries/User";
// import User from "../components/Queries/User";
// import { isLoggedIn } from "../utils/getLoggedIn";
import redirect from "../utils/redirect";

const Home = ({ query }) => {
	return (
		<User>
			{({ data, loading }) => {
				console.log(data, "home render props");
				if (loading) return <div>home</div>;
				if (!data.currentUser) return <JoinUs />;
				else
					return (
						<>
							<Header color="primary" currentUser={data.currentUser} />
							<Events newUser={query && query.welcome} />
						</>
					);
			}}
		</User>
	);
};

Home.getInitialProps = async ctx => {
	const blah = await isLoggedIn(ctx.apolloClient);
	console.log(ctx.apolloClient.cache, "cache Home.get");
	console.log(ctx.apolloClient.query, "query Home.get");
	console.log(blah, "result from isLoggedIn Home.getInit");
	// if (!ctx.req.headers.cookies) {
	// 	console.log("inside redirect");
	// 	// If not signed in, send them somewhere more useful
	// 	redirect(ctx, "/joinus");
	// }

	return {};
};

export default Home;
