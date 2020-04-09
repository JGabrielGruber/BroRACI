import PropTypes from 'prop-types';

const User = () => ({
	_id: PropTypes.string,
	displayName: PropTypes.string,
	email: PropTypes.string,
	photoUrl: PropTypes.string,
	phoneNumber: PropTypes.string,
	roles: [],
});

export default User;
