import PropTypes from 'prop-types';
import User from './User.model';
import Rule from './Rule.model';

const RACI = () => ({
	uid: PropTypes.string,
	title: PropTypes.string,
	admin: PropTypes.objectOf(PropTypes.shape(User)),
	users: PropTypes.arrayOf(PropTypes.shape(User)),
	activites: PropTypes.objectOf(PropTypes.shape(null)), // TODO: Adicionar Activitie
	rules: PropTypes.objectOf(PropTypes.shape(Rule)),
});

export default RACI;
