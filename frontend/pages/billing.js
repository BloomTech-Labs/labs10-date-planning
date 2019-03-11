import Billing from '../components/Billing/Billing';

import User from '../components/Queries/User';
import { isLoggedIn } from '../components/Queries/User';
import JoinUs from './joinus';

const BillingPage = () => (
	<User>
		{({ loading, error, data }) => {
			if (loading) return <div>Loading...</div>;
			if (error || !data.currentUser) return <JoinUs />;

			else return (
				<>
					<Billing currentUser={data.currentUser} />
					{/* <TransactionList currentUser={currentUser} /> */}
				</>
			);
		}}
	</User>
);

// BillingPage.getInitialProps = async ctx => {
	
// 	let user = await isLoggedIn(ctx.apolloClient);

// 	if (!user) {
// 		redirect(ctx, '/joinus');
// 	}
// 	//console.log(!user.currentUser && router.pathname !== '/joinus');
// 	// if (!(user.currentUser && router.aspath != '/joinus')) {
// 	// 	redirect(ctx, '/joinus');
// 	// }
// 	return { };
// };

export default BillingPage;
