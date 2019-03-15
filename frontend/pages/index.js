import JoinUs from './joinus';
import User from '../components/Queries/User';
import { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';
import Home from './home';
import Welcome from './welcome';

const Index = () => (
	<User>
		{({ data, loading, error }) => {
			if (loading) return <div>index</div>;
			if (error || !data.currentUser) return <JoinUs />;
			if (!data.currentUser.gender) return <Welcome query={{ slug: 0 }} />;
			else return <Home />;
		}}
	</User>
);

Index.getInitialProps = async ctx => {
	let user = await isLoggedIn(ctx.apolloClient);
	console.log('init props', user);
	// if (!user.currentUser) {
	// 	console.log("no user Index.getInitProps");
	// 	// redirect(ctx, '/joinus');
	// }
	// // else {
	// 	redirect(ctx, '/home');
	// }
	return {};
};

export default Index;
