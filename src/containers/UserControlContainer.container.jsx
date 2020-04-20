import React from 'react';

import UserRepository from '../repositories/User.repository';
import RACIRepository from '../repositories/RACI.repository';
import UserControl from '../components/users/UserControl.component';
import RoleRepository from '../repositories/Role.repository';

class UserControlContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			raci: undefined,
			users: [],
			roles: [],
		};
	}

	componentDidMount() {
		const {
			match,
		} = this.props;
		RACIRepository.syncById('raci', (key, raci) => {
			const {
				users,
			} = this.state;
			this.setState({
				raci,
			});
			if (raci) {
				raci.roles.map(
					(role, index) => RoleRepository.syncById(index, this.handleChangeRole, role.id),
				);
				raci.users.map(
					(user, index) => UserRepository.syncById(index, this.handleChangeUser, user.id),
				);
			}
		}, match.params.raci);
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

	handleChangeUser = (key, value) => {
		const {
			users,
		} = this.state;
		users[key] = value || undefined;
		this.setState({
			users,
		});
		if (users) {
			users.forEach(
				async (user, index) => { users[index].role = (await user.role.get()).data(); },
			);
		}
	}

	handleAdd = async (data) => {
		const {
			raci,
		} = this.state;
		return UserRepository.getByEmail(data.email).then((user) => {
			if (user) {
				raci.users.push(user);
				RACIRepository.update(raci);
				return true;
			}
			return false;
		});
	}

	handleSelectRole = async (user, role) => {
		RoleRepository.getById(role.uid).then((item) => {
			if (item) {
				user.role = item.ref;
				UserRepository.update(user);
			}
		});
	}

	render() {
		const {
			users, roles,
		} = this.state;

		return (
			<UserControl
				users={users}
				roles={roles}
				onAdd={this.handleAdd}
				onSelectRole={this.handleSelectRole}
			/>
		);
	}
}

export default UserControlContainer;
