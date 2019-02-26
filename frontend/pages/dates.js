import Settings from '../components/Settings';
import Header from '../components/Header'
import JoinUs from './joinus';
import { isLoggedIn } from '../components/Queries/User';
import redirect from '../utils/redirect';

const SettingsPage = ({user}) => {
  
return (<><Header color='warning'/><Settings /></>);
}

SettingsPage.getInitialProps = async ctx => {
	let user = await isLoggedIn(ctx.apolloClient);

	if (!user.currentUser) {
		redirect(ctx, '/joinus');
	}

	return { user: user.currentUser };
};

export default SettingsPage;

// hmm
