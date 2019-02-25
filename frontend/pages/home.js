import JoinUs from './joinus';
import Events from '../components/Home/Events';
import Header from '../components/Header'
import { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';

const Home = ({ user, query }) => {
	console.log(query)
	if (!user) return <JoinUs />
	return (
	<>
	<Header color='primary'/>
		<Events newUser={query.welcome}/>
	</>
);}

Home.getInitialProps = async ctx => {
	let user = await isLoggedIn(ctx.apolloClient);
	console.log(ctx.query)
	if (!user.currentUser) {
		redirect(ctx, '/joinus');
	}
	//if (ctx.query.welcome)
	//console.log(!user.currentUser && router.pathname !== '/joinus');
	// if (!(user.currentUser && router.aspath != '/joinus')) {
	// 	redirect(ctx, '/joinus');
	// }
	return { user: user.currentUser };
};


export default Home;
