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
				RACIRepository.syncByUser('matrices', this.handleChange, u);
			});
		});
		if (match.params.raci) {
			RACIRepository.syncById('raci', this.handleChange, match.params.raci);
		}
	}

	handleChange = (key, value) => {
		this.setState({
			[key]: value || undefined,
		});
	}

	render() {
		const {
			stateLogin, user, raci, matrices,
		} = this.state;

		return (
			<App
				stateLogin={stateLogin}
				user={user}
				raci={raci}
				matrices={matrices}
				onLogin={UserRepository.login}
				onSignup={UserRepository.signup}
				onLogout={UserRepository.logout}
			/>
		);
	}
}

export default AppContainer;
