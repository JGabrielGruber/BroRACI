import React from 'react';

import OnlineUsers from '../components/OnlineUsers.component';

export default {
	component: OnlineUsers,
	title: 'OnlineUsers',
	excludeStories: /.*Data$/,
};

export const usersData = [
	{
		displayName: 'Josivaldo',
	},
	{
		displayName: 'Oliandro da Cigarra',
		photoUrl: '',
		state: 'HAS_IMAGE',
	},
	{
		displayName: 'Kowianha',
	},
];

export const Empty = () => <OnlineUsers />;

export const WithUsers = () => <OnlineUsers users={usersData} />;
