import JoinUs from './joinus';
import Events from '../components/Home/Events';
import Header from '../components/Header'
import { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';

const Home = ({ user }) => {
	console.log({ user })
	if (!user) return <JoinUs />
	return (
	<>
	<Header color='primary'/>
		<Events />
	</>
);}

Home.getInitialProps = async ctx => {
	let user = await isLoggedIn(ctx.apolloClient);

	// if (!user.currentUser) {
	// 	redirect(ctx, '/joinus');
	// }
	//console.log(!user.currentUser && router.pathname !== '/joinus');
	// if (!(user.currentUser && router.aspath != '/joinus')) {
	// 	redirect(ctx, '/joinus');
	// }
	return { user: user.currentUser };
};


export default Home;
