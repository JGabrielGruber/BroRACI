import React from 'react';

import RoleRepository from '../repositories/Role.repository';
import RACIRepository from '../repositories/RACI.repository';
import RoleControl from '../components/roles/RoleControl.component';
import GroupRepository from '../repositories/Group.repository';

class RolerControlContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			raci: null,
			roles: [],
			groups: [],
		};
	}

	componentDidMount() {
		const {
			match,
		} = this.props;
		RACIRepository.syncById('raci', (key, raci) => {
			this.setState({
				raci,
			});
			if (raci) {
				raci.roles.map(
					(role, index) => RoleRepository.syncById(index, this.handleChangeRole, role.id),
				);
			}
		}, match.params.raci);
		GroupRepository.sync('groups', this.handleChange);
	}

	handleChange = (key, value, index) => {
		if (index) {
			const ar = this.state[key];
			ar[index] = value || undefined;
			this.setState({
				[key]: ar,
			});
		} else {
			this.setState({
				[key]: value || undefined,
			});
		}
	}


	handleChangeRole = (key, value) => {
		const {
			roles,
		} = this.state;
		roles[key] = value || undefined;
		this.setState({
			roles,
		});
	}

	handleAdd = async (data) => {
		const {
			raci,
		} = this.state;

		RoleRepository.add(data).then((item) => {
			raci.roles.push(item.ref);
			RACIRepository.update(raci);
		});
	}

	handleRemove = async (data) => {

	}

	handleAddGroup = async (data) => {
		GroupRepository.add(data);
	}

	handleRemoveGroup = async (data) => {

	}

	handleSelectGroup = async (group, role) => {
		GroupRepository.getById(group.uid).then((item) => {
			if (item) {
				role.group = item.data();
				RoleRepository.update(role);
			}
		});
	}

	render() {
		const {
			roles, groups,
		} = this.state;

		return (
			<RoleControl
				roles={roles}
				groups={groups}
				onAdd={this.handleAdd}
				onRemove={this.handleRemove}
				onAddGroup={this.handleAddGroup}
				onRemoveGroup={this.handleRemoveGroup}
				onSelectGroup={this.handleSelectGroup}
			/>
		);
	}
}

export default RolerControlContainer;
