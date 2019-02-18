import Splash from '../components/SplashPage';
import User from '../components/Queries/User';
import Home from './home';

const Index = () => (
	<User>{({ data: { currentUser } }) => <>{currentUser ? <Home /> : <Splash />}</>}</User>
);

export default Index;
