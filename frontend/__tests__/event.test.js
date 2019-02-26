import Event from '../components/Home/Event.js';
import { shallow } from 'enzyme';

const fakeEvent = {
	id: '1111',
	votes: 5,
	title: 'Awesome Event',
	description: 'very awesome',
	attending: [ '123', '456' ],
	location: 'Cool Place',
	startTime: '14:30:00.000Z',
	category: 'MUSIC',
};

describe('<Event/>', () => {
	it('renders and displays properly', () => {
		const wrapper = shallow(<Event event={fakeEvent} />);
		//console.log(wrapper)
	});
});
