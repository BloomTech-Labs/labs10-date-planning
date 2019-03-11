import Welcome from "../components/Welcome";
import JoinUs from "./joinus";
import User from "../components/Queries/User";

const WelcomePage = props => (
	<User>
		{({ data, loading }) => {
			const { query } = props;
			console.log(props, "welcomepage props");
			if (loading) return <div>loading</div>;
			if (!data.currentUser) return <JoinUs />;
			else return <Welcome user={data.currentUser} slug={query.slug} />;
		}}
	</User>
);

WelcomePage.getInitialProps = ctx => {
	return { slug: ctx.req.params.slug };
};

export default WelcomePage;
