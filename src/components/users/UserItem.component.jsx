import React from 'react';
import PropTypes from 'prop-types';

import {
	Grid, Typography, IconButton, Fade, Tooltip,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import User from '../../models/User.model';
import AccountAvatar from '../topbar/AccountAvatar.component';

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

	render() {
		const { show } = this.state;
		const { user, onRemove } = this.props;

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
		);
	}
}

UserItem.propTypes = {
	user: PropTypes.shape(User).isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default UserItem;
