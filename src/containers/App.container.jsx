import React from 'react';
import firebase from 'firebase';

import App from '../components/App.component';

import UserRepository from '../repositories/User.repository';
import RACIRepository from '../repositories/RACI.repository';
import RACI from '../models/RACI.model';

class AppContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			stateLogin: 'NOT_LOGGED',
			user: null,
			raci: undefined,
			matrices: [],
			users: [],
		};
	}

	componentDidMount() {
		const {
			match,
		} = this.props;

		firebase.auth().onAuthStateChanged((user) => {
			this.setState({
				stateLogin: user ? 'LOGGED' : 'NOT_LOGGED',
				user,
			});
			UserRepository.getByEmail(user.email).then((u) => {
				RACIRepository.syncByUser('matrices', this.handleChange, u.ref);
			});
		});
		if (match.params.raci) {
			RACIRepository.syncById('raci', (key, value) => {
				this.handleChange(key, value);
				const {
					raci,
				} = this.state;
				if (raci) {
					raci.users.map(
						(user, index) => UserRepository.syncById(index, this.handleChangeUser, user.id),
					);
				}
			}, match.params.raci);
		}
	}

	handleChange = (key, value) => {
		this.setState({
			[key]: value || undefined,
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
	}

	render() {
		const {
			stateLogin, user, raci, matrices, users,
		} = this.state;

		return (
			<App
				stateLogin={stateLogin}
				user={user}
				raci={raci}
				matrices={matrices}
				users={users}
				onLogin={UserRepository.login}
				onSignup={UserRepository.signup}
				onLogout={UserRepository.logout}
			/>
		);
	}
}

export default AppContainer;
