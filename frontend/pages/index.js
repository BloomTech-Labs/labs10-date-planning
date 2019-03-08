import "../static/scss/material-kit-pro-react.scss";
import JoinUs from "./joinus";
import User from "../components/Queries/User";
import { isLoggedIn } from "../utils/getLoggedIn";
import redirect from "../utils/redirect";
import Home from "./home";

const Index = () => (
	<User>
		{({ data, loading, error }) => {
			// console.log(data), "index data";
			if (loading) return <div>index</div>;
			if (error || !data.currentUser) return <JoinUs />;
			else return <Home />;
		}}
	</User>
);

Index.getInitialProps = async ctx => {
	let currentUser = null;
	if (!process.browser) {
		currentUser = await isLoggedIn(ctx);
	}
	console.log("somehow in index.js");
	// if (!currentUser && !process.browser) {
	// 	// console.log("inside redirect");
	// 	// If not signed in, send them somewhere more useful
	// 	redirect(ctx, "/joinus");
	// }

	return { data: currentUser };
};

export default Index;
