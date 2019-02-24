import Billing from '../components/Billing/Billing';
import TransactionList from '../components/Billing/TransactionList';
import User from '../components/Queries/User';
import JoinUs from './joinus';

const BillingPage = () => (
	<User>
		{({ loading, error, data: { currentUser } }) => {
			if (loading) return <div>Loading...</div>
			if (error || !currentUser) return <JoinUs />
			return (
				<>
					<Billing currentUser={currentUser} />
					<TransactionList currentUser={currentUser} />
				</>
			);
		}}
	</User>
);

export default BillingPage;
