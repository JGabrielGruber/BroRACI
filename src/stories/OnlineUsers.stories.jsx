import React from 'react';

import OnlineUsers from '../components/OnlineUsers.component';

export default {
	component: OnlineUsers,
	title: 'OnlineUsers',
	excludeStories: /.*Data$/,
};

export const usersData = [
	{
		name: 'Josivaldo',
	},
	{
		name: 'Oliandro da Cigarra',
		image: '',
		state: 'HAS_IMAGE',
	},
	{
		name: 'Kowianha',
	},
];

export const Empty = () => <OnlineUsers />;

export const WithUsers = () => <OnlineUsers users={usersData} />;
