import React from 'react';
import PropTypes from 'prop-types';

import {
	InputBase, IconButton, Tooltip, Grid, Typography, Avatar, Container,
} from '@material-ui/core';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

import AccountAvatar from '../topbar/AccountAvatar.component';
import Assignment from '../../models/Assignment.model';
import Rule from '../../models/Rule.model';
import User from '../../models/User.model';

class UserGroup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			element: null,
		};
	}

	getUser(rule) {
		const { assignments } = this.props;
		let assignment; const
			list = [];
		for (let i = 0; i < assignments.length; i += 1) {
			assignment = assignments[i];
			if (assignment.rules.find((item) => item.uid === rule.uid)) {
				list.push(assignment.user);
			}
		}
		return list;
	}

	render() {
		const {
			assignments, rules, onChange,
		} = this.props;

		return (
			<Grid container direction="row">
				{ rules.map((rule) => (
					<Grid item key={rule.uid}>
						<Container>
							<Grid container direction="column" justify="center" alignItems="center">
								<Grid item>
									<UserAvatar users={this.getUser(rule)} />
								</Grid>
								<Grid item>
									<Typography variant="body2" color="textSecondary">
										{rule.name}
									</Typography>
								</Grid>
							</Grid>
						</Container>
					</Grid>
				)) }
			</Grid>
		);
	}
}

const UserAvatar = ({
	users,
}) => {
	const list = users;
	let avatar;
	if (list.length > 0 && list[0] !== undefined) {
		avatar = list[0].photoUrl ? (
			<Avatar src={list[0].photoUrl} />
		) : (
			<Avatar>
				{list[0].displayName.substring(0, 1)}
			</Avatar>
		);
		if (list.length === 1) {
			return avatar;
		}
		return (
			<Grid container direction="row" spacing={1}>
				<Grid item>
					{ avatar }
				</Grid>
				<Grid item>
					<Avatar>
						<MoreHorizRoundedIcon />
					</Avatar>
				</Grid>
			</Grid>
		);
	}
	return (
		<Avatar />
	);
};

UserGroup.defaultProps = {
	onChange: null,
};

UserGroup.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	assignments: PropTypes.arrayOf(PropTypes.shape(Assignment)).isRequired,
	rules: PropTypes.arrayOf(Rule).isRequired,
	onChange: PropTypes.func,
};

export default UserGroup;
