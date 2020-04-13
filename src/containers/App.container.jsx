import React from 'react';
import firebase from 'firebase';

import App from '../components/App.component';

import UserRepository from '../repositories/User.repository';
import RACIRepository from '../repositories/RACI.repository';

class AppContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			stateLogin: 'NOT_LOGGED',
			user: null,
			raci: undefined,
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
			stateLogin, user, raci,
		} = this.state;

		return (
			<App
				stateLogin={stateLogin}
				user={user}
				raci={raci}
				onLogin={UserRepository.login}
				onSignup={UserRepository.signup}
				onLogout={UserRepository.logout}
			/>
		);
	}
}

export default AppContainer;
