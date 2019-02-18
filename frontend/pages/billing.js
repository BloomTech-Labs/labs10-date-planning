import Sidebar from '../components/Sidebar';
import Billing from '../components/Billing/Billing';
import TransactionList from '../components/Billing/TransactionList';
import DatesLeft from '../components/Billing/DatesLeft';

import User from '../components/Queries/User';

const Home = () => (
	<User>
		{({ data: { currentUser } }) => {
			return (
				<div>
					{/* <DatesLeft currentUser={currentUser} /> */}
					<Billing currentUser={currentUser} />
					<TransactionList currentUser={currentUser} />
				</div>
			);
		}}
	</User>
);

export default Home;
