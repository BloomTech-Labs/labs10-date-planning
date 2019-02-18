import Splash from '../components/SplashPage';
import User from '../components/Queries/User';
import Home from './home';

const Index = () => (
	<User>
		{({ data }) => {
			console.log(data);
			return <>{data.currentUser ? <Home /> : <Splash />}</>;
		}}
	</User>
);

export default Index;
