import Billing from '../components/Billing/Billing';
import TransactionList from '../components/Billing/TransactionList';
import DatesLeft from '../components/Billing/DatesLeft';
import Header from '../components/Header'
import User from '../components/Queries/User';

const Home = () => (
	<User>
		{({ data: { currentUser } }) => {
			return (
				<>
				{/* //<Header color='transparent'/> */}
					{/* <DatesLeft currentUser={currentUser} /> */}
					<Billing currentUser={currentUser} />
					<TransactionList currentUser={currentUser} />
				</>
			);
		}}
	</User>
);

export default Home;
