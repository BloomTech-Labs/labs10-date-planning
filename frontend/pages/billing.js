import Billing from '../components/Billing/Billing';
import TransactionList from '../components/Billing/TransactionList';
import User from '../components/Queries/User';
import { isLoggedIn } from '../components/Queries/User';
import JoinUs from './joinus';

const BillingPage = () => (
	<User>
		{({ loading, error, data: { currentUser } }) => {
			if (loading) return <div>Loading...</div>;
			if (error || !currentUser) return <JoinUs />;

			return (
				<>
					<Billing currentUser={currentUser} />
					{/* <TransactionList currentUser={currentUser} /> */}
				</>
			);
		}}
	</User>
);

BillingPage.getInitialProps = async ctx => {
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

export default BillingPage;
