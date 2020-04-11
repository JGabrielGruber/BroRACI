import React from 'react';
import PropTypes from 'prop-types';

import {
	Grid, Typography, IconButton, Fade, Tooltip, Popover,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import GroupModel from '../../models/Group.model';
import Role from '../../models/Role.model';
import Group from './Group.component';

class RoleItem extends React.Component {
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
		const {
			groups, role, onRemove, onAddGroup,
			onRemoveGroup, onSelectGroup,
		} = this.props;

		return (
			<Grid
				id="grid-role"
				container
				direction="row"
				alignItems="center"
				justify="space-between"
				spacing={2}
				onMouseOver={this.handleMouseOver}
				onFocus={this.handleMouseOver}
				onMouseOut={this.handleMouseOut}
				onBlur={this.handleMouseOut}
			>
				<Grid item>
					<Typography key={role.uid}>
						{role.title}
					</Typography>
				</Grid>
				<Grid item>
					<Group
						group={role.group}
						groups={groups}
						onAdd={onAddGroup}
						onRemove={onRemoveGroup}
						onSelect={onSelectGroup}
					/>
				</Grid>
				<Fade in={show}>
					<Grid item>
						<Tooltip title="Remover Cargo" name="remove">
							<IconButton onClick={onRemove} size="small" name="remove">
								<DeleteIcon name="remove" />
							</IconButton>
						</Tooltip>
					</Grid>
				</Fade>
			</Grid>
		);
	}
}

RoleItem.defaultProps = {
	groups: [],
};

RoleItem.propTypes = {
	groups: PropTypes.arrayOf(PropTypes.shape(GroupModel)),
	role: PropTypes.shape(Role).isRequired,
	onRemove: PropTypes.func.isRequired,
	onAddGroup: PropTypes.func.isRequired,
	onRemoveGroup: PropTypes.func.isRequired,
	onSelectGroup: PropTypes.func.isRequired,
};

export default RoleItem;
