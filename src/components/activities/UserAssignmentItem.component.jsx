import React from 'react';
import PropTypes from 'prop-types';

import {
	Grid, Typography, Container, Divider,
} from '@material-ui/core';

import User from '../../models/User.model';
import AccountAvatar from '../AccountAvatar.component';

function UserAssignmentItem({
	user,
}) {
	return (
		<Grid
			id="grid-user"
			container
			direction="row"
			alignItems="center"
		>
			<Grid item>
				<AccountAvatar account={user} />
			</Grid>
			<Grid item>
				<Typography>
					{user.displayName}
				</Typography>
				<Container style={{ padding: 0 }}>
					{ user.role ? (
						<Grid container direction="row" spacing={1}>
							<Grid item>
								<Typography variant="caption" color="textSecondary">
									{user.role.title}
								</Typography>
							</Grid>
							<Grid item>
								<Divider orientation="vertical" />
							</Grid>
							<Grid item>
								<Typography variant="caption" color="textSecondary">
									{user.role.group.title}
								</Typography>
							</Grid>
						</Grid>
					) : (
						<div />
					) }
				</Container>

			</Grid>
		</Grid>
	);
}

UserAssignmentItem.propTypes = {
	user: PropTypes.shape(User).isRequired,
};

export default UserAssignmentItem;
