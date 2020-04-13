import PropTypes from 'prop-types';
import User from './User.model';
import Rule from './Rule.model';

const Assignment = () => ({
	uid: PropTypes.string,
	user: PropTypes.objectOf(PropTypes.shape(User)),
	rules: PropTypes.arrayOf(PropTypes.shape(Rule)),
});

export default Assignment;
