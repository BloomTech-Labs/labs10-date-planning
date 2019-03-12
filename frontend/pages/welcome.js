import Welcome from '../components/Welcome';
import JoinUs from './joinus';
import User from '../components/Queries/User';

const WelcomePage = ({ query }) => (
	<User>
		{({ data, loading }) => {
			if (loading) return <div>loading</div>;
			if (!data.currentUser) return <JoinUs />;
			else return <Welcome user={data.currentUser} slug={query.slug} />;
		}}
	</User>
);

// WelcomePage.getInitialProps = ctx => {
// 	// return { slug: ctx.req.params.slug };
// 	return {};
// };

export default WelcomePage;
