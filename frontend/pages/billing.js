import Billing from '../components/Billing/Billing';
import TransactionList from '../components/Billing/TransactionList';
import DatesLeft from '../components/Billing/DatesLeft';
import Header from '../components/Header'
import User from '../components/Queries/User';
import UpFor from '../components/Billing/UpFor';

const Home = () => (
	<User>
		{({ data: { currentUser } }) => {
			return (
				<>
				<Header />
					{/* <DatesLeft currentUser={currentUser} /> */}
					<Billing currentUser={currentUser} />
					<TransactionList currentUser={currentUser} />
					<UpFor />
				</>
			);
		}}
	</User>
);

export default Home;
