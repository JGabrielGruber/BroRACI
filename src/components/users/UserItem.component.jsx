import React from 'react';
import PropTypes from 'prop-types';

import {
	Grid, Typography, IconButton, Fade, Tooltip, Container,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import User from '../../models/User.model';
import RoleModel from '../../models/User.model';
import AccountAvatar from '../topbar/AccountAvatar.component';
import Role from './Role.component';

class UserItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
		};
	}

	handleMouseOver = () => {
		this.setState({
			show: true,
		});
	};

	handleMouseOut = () => {
		this.setState({
			show: false,
		});
	};

	handleSelectRole = (role) => {
		const {
			user, onSelectRole,
		} = this.props;
		onSelectRole(user, role);
	}

	render() {
		const { show } = this.state;
		const {
			user, roles, onRemove,
		} = this.props;

		return (
			<Grid
				id="grid-user"
				container
				direction="row"
				alignItems="center"
				justify="space-between"
				onMouseOver={this.handleMouseOver}
				onFocus={this.handleMouseOver}
				onMouseOut={this.handleMouseOut}
				onBlur={this.handleMouseOut}
			>
				<Grid item>
					<Grid container direction="row">
						<Grid item>
							<AccountAvatar account={user} />
						</Grid>
						<Grid item>
							<Typography>
								{user.displayName}
							</Typography>
							<Typography variant="caption" color="textSecondary">
								{user.email}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Grid container direction="row" justify="space-between">
						<Grid item>
							<Role role={user.role} roles={roles} onSelect={this.handleSelectRole} />
						</Grid>
						<Fade in={show}>
							<Grid item>
								<Tooltip title="Remover Usuário">
									<IconButton onClick={onRemove}>
										<DeleteIcon />
									</IconButton>
								</Tooltip>
							</Grid>
						</Fade>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

UserItem.defaultProps = {
	roles: [],
};

UserItem.propTypes = {
	user: PropTypes.shape(User).isRequired,
	roles: PropTypes.arrayOf(PropTypes.shape(RoleModel)),
	onRemove: PropTypes.func.isRequired,
	onSelectRole: PropTypes.func.isRequired,
};

export default UserItem;
