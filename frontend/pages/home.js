import Sidebar from '../components/Sidebar';
import Events from '../components/Home/Events';
const Home = () => (
	<div>
		<Sidebar />
		<h1 style={{ textAlign: 'center' }}>Upcoming Events Near You</h1>
		<Events />
	</div>
);

export default Home;
