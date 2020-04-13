import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';
import TopBar from './topbar/TopBar.component';
import User from '../models/User.model';
import AccountMenu from './topbar/AccountMenu.component';
import NotificationMenu from './topbar/NotificationMenu.component';
import LoginComponent from './popups/Login.component';
import SignupComponent from './popups/Signup.component';
import RecoveryComponent from './popups/Recovery.component';
import RACI from '../models/RACI.model';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			accountMenuElement: null,
			notiticationMenuElement: null,
			isSideMenuOpen: false,
			isAccountMenuOpen: false,
			isNotitificationMenuOpen: false,
			isLoginPopupOpen: false,
			isSignupPopupOpen: false,
			isRecoveryPopupOpen: false,
		};
		this.accountMenuElementRef = React.createRef();
	}

	accountHandler = (event) => {
		console.log(event);
	}

	accountExitHandler = (event) => {
		console.log(event);
	}

	accountMenuHandler = (event) => {
		event.persist();
		this.setState((prevState) => ({
			accountMenuElement: event.target,
			isAccountMenuOpen: !prevState.isAccountMenuOpen,
		}));
	}

	notificationMenuHandler = (event) => {
		event.persist();
		this.setState((prevState) => ({
			notiticationMenuElement: event.target,
			isNotitificationMenuOpen: !prevState.isNotitificationMenuOpen,
		}));
	}

	sideMenuHandler = () => {
		this.setState((prevState) => ({
			isSideMenuOpen: !prevState.isSideMenuOpen,
		}));
	}

	loginHandler = () => {
		this.setState((prevState) => ({
			isLoginPopupOpen: !prevState.isLoginPopupOpen,
		}));
	}

	signupHandler = () => {
		this.loginHandler();
		this.setState((prevState) => ({
			isSignupPopupOpen: !prevState.isSignupPopupOpen,
		}));
	}

	recoveryHandler = () => {
		this.loginHandler();
		this.setState((prevState) => ({
			isRecoveryPopupOpen: !prevState.isRecoveryPopupOpen,
		}));
	}

	handleLogin = async (login) => {
		const {
			onLogin,
		} = this.props;
		const log = await onLogin(login);
		if (log) {
			this.loginHandler();
		}
	}

	handleSignup = async (signup) => {
		const {
			onSignup,
		} = this.props;
		const sign = await onSignup(signup);
		if (sign) {
			this.signupHandler();
			this.loginHandler();
		}
	}

	handlePhoto = (photo) => {
		console.log(photo);
		
	}

	handleRecovery = (recovery) => {
		console.log(recovery);
		
	}

	render() {
		const {
			accountMenuElement, notiticationMenuElement, isAccountMenuOpen,
			isNotitificationMenuOpen, isSideMenuOpen, isLoginPopupOpen,
			isSignupPopupOpen, isRecoveryPopupOpen,
		} = this.state;
		const {
			user, amountNotification, matrices, notifications, stateLogin, raci,
			onLogin,
		} = this.props;

		return (
			<Container ref={this.accountMenuElementRef}>
				<TopBar
					account={user}
					amountNotifications={amountNotification}
					stateLogin={stateLogin}
					title={raci.title}
					users={raci.users}
					onAccount={this.accountMenuHandler}
					onLogin={this.loginHandler}
					onNotification={this.notificationMenuHandler}
					onSideMenu={this.sideMenuHandler}
					isSideMenu={isSideMenuOpen}
				/>
				<AccountMenu
					element={accountMenuElement}
					matrices={matrices}
					open={isAccountMenuOpen}
					onAccount={this.accountHandler}
					onClose={this.accountMenuHandler}
					onExit={this.accountExitHandler}
				/>
				<NotificationMenu
					element={notiticationMenuElement}
					notifications={notifications}
					open={isNotitificationMenuOpen}
					onClose={this.notificationMenuHandler}
				/>
				<LoginComponent
					open={isLoginPopupOpen}
					onClose={this.loginHandler}
					onCreateA={this.signupHandler}
					onLogin={this.handleLogin}
					onPasswordR={this.recoveryHandler}
				/>
				<SignupComponent
					open={isSignupPopupOpen}
					onBack={this.signupHandler}
					onClose={() => {}}
					onSignup={this.handleSignup}
					onPhoto={this.handlePhoto}
				/>
				<RecoveryComponent
					open={isRecoveryPopupOpen}
					onBack={this.recoveryHandler}
					onClose={() => {}}
					onRecovery={this.handleRecovery}
				/>
			</Container>
		);
	}
}

App.defaultProps = {
	user: null,
	amountNotification: 0,
	matrices: [],
	notifications: [],
	stateLogin: 'NOT_LOGGED',
	raci: {
		title: 'Minha Matriz RACI',
		users: [],
	},
};

App.propTypes = {
	user: PropTypes.shape(User),
	amountNotification: PropTypes.number,
	matrices: PropTypes.arrayOf(PropTypes.shape({
		uid: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	})),
	notifications: PropTypes.arrayOf(PropTypes.shape({
		uid: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	})),
	stateLogin: PropTypes.string,
	raci: PropTypes.shape(RACI),
	onLogin: PropTypes.func.isRequired,
	onSignup: PropTypes.func.isRequired,
};

export default App;
