import PropTypes from 'prop-types';
import Group from './Group.model';

const Role = () => ({
	uid: PropTypes.string,
	title: PropTypes.string,
	group: PropTypes.object(PropTypes.shape(Group)),
});

export default Role;
