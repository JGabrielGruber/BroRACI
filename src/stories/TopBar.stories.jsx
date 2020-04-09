import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import TopBar from '../components/TopBar.component';

export default {
	component: TopBar,
	title: 'TopBar',
	excludeStories: /.*Data$/,
};

export const accountData = {
	displayName: 'Testenaldo',
};

export const usersData = [
	{
		uid: 'josivaldo',
		displayName: 'Josivaldo',
	},
	{
		uid: 'oliandro',
		displayName: 'Oliandro da Cigarra',
		photoUrl: '',
		state: 'HAS_IMAGE',
	},
	{
		uid: 'kowianha',
		displayName: 'Kowianha',
	},
];

export const actionsData = {
	onSideMenu: action('onSideMenu'),
	onLogin: action('onLogin'),
	onAccount: action('onAccount'),
	onNotification: action('onNotification'),
	onSearch: action('onSearch'),
};

export const Default = () => <TopBar onLogin={actionsData.onLogin} />;

export const LoggedIn = () => (
	<TopBar
		title="Testelandia"
		account={accountData}
		users={usersData}
		onSideMenu={actionsData.onSideMenu}
		onAccount={actionsData.onAccount}
		onNotification={actionsData.onNotification}
		stateLogin="LOGGED"
	/>
);

export const LoggedInWithNotifications = () => (
	<TopBar
		title="Testelandia"
		account={accountData}
		users={usersData}
		amountNotifications={7}
		onSideMenu={actionsData.onSideMenu}
		onAccount={actionsData.onAccount}
		onNotification={actionsData.onNotification}
		onSearch={actionsData.onSearch}
		stateLogin="LOGGED"
	/>
);

export const LoggedInWithSideMenu = () => (
	<TopBar
		title="Testelandia"
		account={accountData}
		users={usersData}
		amountNotifications={7}
		onSideMenu={actionsData.onSideMenu}
		onAccount={actionsData.onAccount}
		onNotification={actionsData.onNotification}
		onSearch={actionsData.onSearch}
		stateLogin="LOGGED"
		isSideMenu
	/>
);
