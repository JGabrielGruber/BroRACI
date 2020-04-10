import PropTypes from 'prop-types';
import { Step } from '@material-ui/core';
import Assignment from './Assignment.model';

const Activity = () => ({
	uid: PropTypes.string,
	title: PropTypes.string,
	step: PropTypes.objectOf(PropTypes.shape(Step)),
	assignments: PropTypes.arrayOf(PropTypes.shape(Assignment)),
});

export default Activity;
