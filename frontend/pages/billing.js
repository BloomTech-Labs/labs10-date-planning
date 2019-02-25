import Billing from '../components/Billing/Billing';
import TransactionList from '../components/Billing/TransactionList';
import User from '../components/Queries/User';
import JoinUs from './joinus';

const BillingPage = () => (
				<>
					<Billing currentUser={currentUser} />
					<TransactionList currentUser={currentUser} />
				</>		
}

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
