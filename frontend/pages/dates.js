import Settings from "../components/Settings";
import Header from "../components/Header";
import JoinUs from "./joinus";
import User from "../components/Queries/User";
import { isLoggedIn } from "../components/Queries/User";
import redirect from "../utils/redirect";

const SettingsPage = () => (
	<User>
		{({ data, loading }) => {
			if (loading) return <div>loading</div>;
			if (!data.currentUser) return <JoinUs />;
			else
				return (
					<>
						<Header color="warning" currentUser={data.currentUser} />
						<Settings />
					</>
				);
		}}
	</User>
);

// SettingsPage.getInitialProps = async ctx => {
// 	let user = await isLoggedIn(ctx.apolloClient);

// 	if (!user.currentUser) {
// 		redirect(ctx, '/joinus');
// 	}

// 	return { user: user.currentUser };
// };

export default SettingsPage;
