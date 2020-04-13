import React from 'react';

import UserRepository from '../repositories/User.repository';
import RACIRepository from '../repositories/RACI.repository';
import UserControl from '../components/users/UserControl.component';

class UserControlContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	handleAdd = async (data) => {
		const {
			raci,
		} = this.props;
		return UserRepository.getByEmail(data.email).then((user) => {
			if (user) {
				raci.users.push(user);
				RACIRepository.update(raci);
				return true;
			}
			return false;
		});
	}

	render() {
		const {
			users,
		} = this.props;

		return (
			<UserControl
				users={users}
				onAdd={this.handleAdd}
			/>
		);
	}
}

export default UserControlContainer;
