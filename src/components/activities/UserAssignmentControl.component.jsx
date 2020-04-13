import React from 'react';
import PropTypes from 'prop-types';

import {
	Container, List, ListItem,
	Grid, Typography, IconButton, Fade, Button, Popover, ListItemText,
} from '@material-ui/core';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';

import UserModel from '../../models/User.model';
import Rule from '../../models/Rule.model';
import UserAssignmentItem from './UserAssignmentItem.component';
import Assignment from '../../models/Assignment.model';

class UserAssignmentControl extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isChange: false,
			isAdd: false,
			element: null,
		};
	}

	getUsers() {
		const { assignments, rule } = this.props;
		let assignment;
		const list = [];
		for (let i = 0; i < assignments.length; i += 1) {
			assignment = assignments[i];
			if (assignment.rules.find((item) => item.uid === rule.uid)) {
				list.push(assignment.user);
			}
		}
		return list;
	}

	handlePopover = (event) => {
		event.persist();
		this.setState((prevState) => ({
			element: event.target,
			isAdd: !prevState.isAdd,
		}));
	}

	handleModify = () => {
		this.setState((prevState) => ({
			isChange: !prevState.isChange,
		}));
	}

	handleAdd = (user) => {
		const {
			rule, onAdd,
		} = this.props;
		this.setState((prevState) => ({
			isAdd: !prevState.isAdd,
		}));
		onAdd(rule, user);
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	}

	handleRemove = (event, user) => {
		event.persist();
		const { onRemove } = this.props;
		if (user) {
			onRemove(user);
		}
	}

	handleSelect = (event, user) => {
		event.persist();
		const { isChange } = this.state;
		const { onSelect } = this.props;
		if (user && !isChange) {
			onSelect(user);
		}
	}

	render() {
		const {
			isChange, isAdd, element,
		} = this.state;

		const {
			rule, users,
		} = this.props;

		return (
			<Container>
				<Grid container direction="column">
					<Grid item>
						<Container>
							<Grid container direction="row" justify="space-between" alignItems="center">
								<Grid item>
									<Typography variant="body2" color="textSecondary">
										{`${rule.name}`}
									</Typography>
								</Grid>
								<Grid item>
									<IconButton onClick={this.handleModify}>
										<MoreHorizRoundedIcon />
									</IconButton>
								</Grid>
							</Grid>
						</Container>
					</Grid>
					<Grid item>
						<List>
							{
								this.getUsers().map((user) => (
									<ListItem
										button={!isChange}
										key={user.uid}
										onClick={(e) => this.handleSelect(e, user)}
									>
										<UserAssignmentItem user={user} />
										<Fade in={isChange}>
											<IconButton onClick={(e) => this.handleRemove(e, user)}>
												<DeleteOutlinedIcon />
											</IconButton>
										</Fade>
									</ListItem>
								))
							}
							{ isChange ? (
								<Fade in={!isAdd}>
									<Grid item>
										<Button
											variant="outlined"
											color="primary"
											startIcon={(<AddIcon />)}
											onClick={this.handlePopover}
											fullWidth
										>
											<Typography variant="body2">
												{`Adicionar ${rule.name}`}
											</Typography>
										</Button>
									</Grid>
								</Fade>
							) : (<div />)}
						</List>
						<Popover
							anchorEl={element}
							open={isAdd}
							onClose={this.handlePopover}
						>
							<List>
								{
									users.map((user) => (
										<ListItem button onClick={() => this.handleAdd(user)}>
											<ListItemText primary={user.displayName} secondary={user.role ? user.role.title : ''} />
										</ListItem>
									))
								}
							</List>
						</Popover>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

UserAssignmentControl.defaultProps = {
	users: [],
};

UserAssignmentControl.propsType = {
	assignments: PropTypes.arrayOf(PropTypes.shape(Assignment)).isRequired,
	rule: PropTypes.shape(Rule).isRequired,
	users: PropTypes.arrayOf(PropTypes.shape(UserModel)),
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
	onSelect: PropTypes.func,
};

export default UserAssignmentControl;
