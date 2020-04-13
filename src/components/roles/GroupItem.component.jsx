import React from 'react';
import PropTypes from 'prop-types';

import {
	Grid, Typography, IconButton, Fade, Tooltip,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import Group from '../../models/Group.model';

class GroupItem extends React.Component {
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
		const { group, onClick, onRemove } = this.props;

		return (
			<Grid
				id="grid-group"
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
				<Grid item onClick={onClick}>
					<Typography key={group.uid}>
						{group.title}
					</Typography>
				</Grid>
				<Fade in={show}>
					<Grid item>
						<Tooltip title="Remover Grupo" name="remove">
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

GroupItem.propTypes = {
	group: PropTypes.shape(Group).isRequired,
	onClick: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default GroupItem;
