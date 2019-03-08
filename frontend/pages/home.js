import JoinUs from "./joinus";
import Router from "next/router";
import Events from "../components/Home/Events";
import Header from "../components/Header";
import User from "../components/Queries/User";
import { isLoggedIn } from "../utils/getLoggedIn";
// import User from "../components/Queries/User";
// import { isLoggedIn } from "../utils/getLoggedIn";
import redirect from "../utils/redirect";

const Home = ({ query }) => {
	return (
		<User>
			{({ data, loading }) => {
				// console.log(data, "home render props");
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
	const currentUser = await isLoggedIn(ctx);
	console.log(currentUser, "result from isLoggedIn Home.getInit");
	if (!currentUser && !process.browser) {
		console.log("inside redirect fml");
		// If not signed in, send them somewhere more useful
		redirect(ctx, "/joinus");
	}

	return { data: currentUser };
};

export default Home;
