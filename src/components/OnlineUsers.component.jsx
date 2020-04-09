import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AccountAvatar from './AccountAvatar.component';
import User from '../models/User.model';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
	},
}));

export default function OnlineUsers({
	users,
}) {
	const classes = useStyles();

	return users || users.lenght === 0 ? (
		<div className={classes.root}>
			{users.map((user) => (
				<AccountAvatar key={user.uid} account={user} />
			))}
		</div>
	) : (<div />);
}

OnlineUsers.defaultProps = {
	users: [],
};

OnlineUsers.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape(User)),
};
