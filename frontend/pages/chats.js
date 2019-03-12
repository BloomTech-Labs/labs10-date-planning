import User from '../components/Queries/User'
import JoinUs from './joinus'
import Chats from '../components/Profile/Chats/ChatList'

const ChatPage = () => (
	<User>
		{({ loading, error, data }) => {
			if (loading) return <div>Loading...</div>
			if (error || !data.currentUser) return <JoinUs />

			else return (
				<>
					<Chats user={data.currentUser} />
				</>
			);
		}}
	</User>
);

export default ChatPage;
