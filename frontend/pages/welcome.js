import Welcome from '../components/Welcome';

import User from '../components/Queries/User';

const WelcomePage = () => (
	<User>
		{({ data, loading }) => {
			if (loading) return <div>loading</div>;
			if (!data.currentUser) return <JoinUs />;
			else return <Welcome user={data.currentUser} />;
		}}
	</User>
);

export default WelcomePage;
