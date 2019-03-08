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
	// console.log(ctx.req.headers, "ctx.req Index.getInit");
	// console.log("\n");
	// console.log(ctx.res.headers, "ctx.res Index.getInit");
	// console.log("\n");
	// console.log(ctx.apolloClient, "ctx.apolloClient Index.getInit");
	// console.log("\n");

	const blah = await isLoggedIn(ctx.apolloClient);
	// console.log(blah, "isLoggedIn index");
	// console.log(Object.keys(ctx), "ctx Index.getInit");
	// console.log(ctx);
	// if (!ctx.req.headers.cookie) {
	// 	// console.log("inside redirect");
	// 	// If not signed in, send them somewhere more useful
	// 	redirect(ctx, "/joinus");
	// }

	return {};
};

export default Index;
