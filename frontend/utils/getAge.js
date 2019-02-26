import moment from 'moment';
export default function(birthday) {
	// birthday is a date
	return moment().diff(birthday, 'years');
}
