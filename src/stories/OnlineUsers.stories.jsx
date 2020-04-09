import React from 'react';

import OnlineUsers from '../components/OnlineUsers.component';

export default {
	component: OnlineUsers,
	title: 'OnlineUsers',
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
