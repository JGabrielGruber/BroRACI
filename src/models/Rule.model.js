import PropTypes from 'prop-types';

const Rule = () => ({
	uid: PropTypes.string,
	character: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	unique: PropTypes.bool,
	required: PropTypes.bool,
});

export default Rule;
