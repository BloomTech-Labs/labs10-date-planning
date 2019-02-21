import Billing from '../components/Billing/Billing';
import TransactionList from '../components/Billing/TransactionList';
import DatesLeft from '../components/Billing/DatesLeft';
import Header from '../components/Header'
import User from '../components/Queries/User';
import UpFor from '../components/Billing/UpFor';
import { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';


const Home = () => (
	<User>
		{({ data: { currentUser } }) => {
			return (
				<>
				{/* //<Header color='transparent'/> */}
					{/* <DatesLeft currentUser={currentUser} /> */}
					<Billing currentUser={currentUser} />
					<TransactionList currentUser={currentUser} />
					<UpFor />
				</>
			);
		}}
	</User>
);

Home.getInitialProps = async ctx => {
	let user = await isLoggedIn(ctx.apolloClient);

	if (!user.currentUser) {
		redirect(ctx, '/joinus');
	}
	//console.log(!user.currentUser && router.pathname !== '/joinus');
	// if (!(user.currentUser && router.aspath != '/joinus')) {
	// 	redirect(ctx, '/joinus');
	// }
	return { user: user.currentUser };
};

export default Home;
