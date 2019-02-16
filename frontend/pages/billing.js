import Sidebar from '../components/Sidebar';
import Billing from '../components/Billing/Billing';
import TransactionList from '../components/Billing/TransactionList';

const Home = () => (
	<div>
		<Billing />
		<TransactionList />
	</div>
);

export default Home;
