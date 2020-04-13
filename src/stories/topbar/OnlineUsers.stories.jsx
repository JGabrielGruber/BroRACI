import React from 'react';

import OnlineUsers from '../../components/topbar/OnlineUsers.component';
import Categories from '../Categories';

export default {
	component: OnlineUsers,
	title: `${Categories.TOPBAR}/Online Users`,
	excludeStories: /.*Data$/,
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

export const Empty = () => <OnlineUsers />;

export const WithUsers = () => <OnlineUsers users={usersData} />;
