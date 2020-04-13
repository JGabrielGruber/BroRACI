import React from 'react';
import PropTypes from 'prop-types';

import {
	Container, Typography, Grid, Button, Fade,
	FormControl, InputLabel, InputAdornment, IconButton, Input,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import ClearRounded from '@material-ui/icons/ClearRounded';

import Role from '../../models/Role.model';
import RoleItem from './RoleItem.component';
import Group from '../../models/Group.model';

class RoleControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAdd: false,
			title: '',
			selectedRole: null,
		};
	}

	handleAddRole = () => {
		this.setState((prevState) => ({
			isAdd: !prevState.isAdd,
		}));
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	}

	handleOver = (role) => {
		this.setState({
			selectedRole: role,
		});
	}

	handleSelectGroup = (group) => {
		const {
			selectedRole
		} = this.state;

		const {
			onSelectGroup,
		} = this.props;

		onSelectGroup(group, selectedRole);
	}

	render() {
		const {
			title, isAdd,
		} = this.state;

		const {
			roles, groups, onAdd, onRemove,
			onAddGroup, onRemoveGroup, onSelectGroup,
		} = this.props;

		return (
			<Container maxWidth="sm">
				<Grid container spacing={3} direction="column">
					<Grid item>
						<Typography>
							Cargos
						</Typography>
						<Typography variant="body2">
							{ `${roles.length} cargos` }
						</Typography>
					</Grid>
					{
						roles.map((role) => (
							<Grid item key={role.uid}>
								<RoleItem
									role={role}
									groups={groups}
									onRemove={onRemove}
									onAddGroup={onAddGroup}
									onRemoveGroup={onRemoveGroup}
									onSelectGroup={this.handleSelectGroup}
									onOver={this.handleOver}
								/>
							</Grid>
						))
					}
					{
						isAdd ? (
							<Fade in={isAdd}>
								<Grid item>
									<FormControl fullWidth>
										<InputLabel>Cargo</InputLabel>
										<Input
											id="title"
											value={title}
											onChange={this.handleChange}
											endAdornment={(
												<InputAdornment position="end">
													<IconButton onClick={this.handleAddRole}>
														<ClearRounded />
													</IconButton>
													<IconButton onClick={() => onAdd({ title })}>
														<DoneRoundedIcon />
													</IconButton>
												</InputAdornment>
											)}
										/>
									</FormControl>
								</Grid>
							</Fade>
						) : (
							<div />
						)
					}
					<Fade in={!isAdd}>
						<Grid item>
							<Button
								variant="outlined"
								color="primary"
								startIcon={(<AddIcon />)}
								onClick={this.handleAddRole}
								fullWidth
							>
								<Typography variant="body2">
									Adicionar Cargo
								</Typography>
							</Button>
						</Grid>
					</Fade>

				</Grid>
			</Container>
		);
	}
}

RoleControl.defaultProps = {
	roles: [],
	groups: [],
	onRemove: () => {},
};

RoleControl.propTypes = {
	roles: PropTypes.arrayOf(PropTypes.shape(Role)),
	groups: PropTypes.arrayOf(PropTypes.shape(Group)),
	onAdd: PropTypes.func.isRequired,
	onRemove: PropTypes.func,
	onAddGroup: PropTypes.func.isRequired,
	onRemoveGroup: PropTypes.func,
	onSelectGroup: PropTypes.func,
};

export default RoleControl;
