import React from 'react';
import PropTypes from 'prop-types';

import {
	Container, Button, Popover, List, ListItem, Grid, Typography, IconButton,
} from '@material-ui/core';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import AddIcon from '@material-ui/icons/Add';

import GroupModel from '../../models/Group.model';
import GroupItem from './GroupItem.component';


class Group extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			element: null,
		};
	}

	handlePopover = (event) => {
		event.persist();
		this.setState((prevState) => ({
			element: event.target,
			open: !prevState.open,
		}));
	}

	handleRemove = (event, group) => {
		event.persist();
		const { onRemove } = this.props;
		if (group) {
			onRemove(group);
		}
	}

	handleSelect = (event, group) => {
		event.persist();
		const { onSelect } = this.props;
		if (group) {
			onSelect(group);
		}
	}

	render() {
		const {
			open, element,
		} = this.state;

		const {
			group, groups, onAdd,
		} = this.props;

		return (
			<Container>
				<Button variant="outlined" endIcon={(<ArrowDropDownRoundedIcon />)} onClick={this.handlePopover}>
					{ group ? group.title : 'Grupo' }
				</Button>
				<Popover
					open={open}
					onClose={this.handlePopover}
					anchorEl={element}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
				>
					<List>
						{ groups.map((item) => (
							<ListItem key={item.uid} button>
								<GroupItem
									group={item}
									onClick={(e) => this.handleSelect(e, item)}
									onRemove={(e) => this.handleRemove(e, item)}
								/>
							</ListItem>
						)) }
						<ListItem key="add-group" button onClick={onAdd}>
							<Grid
								id="grid-group"
								container
								direction="row"
								alignItems="center"
								spacing={1}
							>
								<Grid item>
									<AddIcon color="primary" />
								</Grid>
								<Grid item>
									<Typography variant="body1" color="primary">
										Adicionar Grupo
									</Typography>
								</Grid>
							</Grid>
						</ListItem>
					</List>
				</Popover>
			</Container>
		);
	}
}

Group.defaultProps = {
	group: null,
	groups: [],
};

Group.propsType = {
	group: PropTypes.shape(GroupModel),
	groups: PropTypes.arrayOf(PropTypes.shape(GroupModel)),
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
	onSelect: PropTypes.func,
};

export default Group;
