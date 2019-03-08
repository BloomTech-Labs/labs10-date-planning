import { isLoggedIn } from "../utils/getLoggedIn";
import redirect from "../utils/redirect";
import User from "../components/Queries/User";
import Profile from "../components/Profile";
import Header from "../components/Header";

import JoinUs from "./joinus";

const ProfilePage = () => (
	<User>
		{({ data, loading, error }) => {
			if (data.currentUser)
				return (
					<>
						<Header color="warning" currentUser={data.currentUser} />
						<Profile currentUser={data.currentUser} />
					</>
				);
			else return <div>hi</div>;
		}}
	</User>
);

ProfilePage.getInitialProps = async ctx => {
	const user = await isLoggedIn(ctx);

	if (!user && !process.browser) {
		redirect(ctx, "/joinus");
	}
	//console.log(!user.currentUser && router.pathname !== '/joinus');
	// if (!(user.currentUser && router.aspath != '/joinus')) {
	// 	redirect(ctx, '/joinus');
	// }
	return { data: user };
};

export default ProfilePage;
