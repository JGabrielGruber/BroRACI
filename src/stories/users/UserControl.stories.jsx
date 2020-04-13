import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import UserControl from '../../components/users/UserControl.component';
import Categories from '../Categories';

export default {
	component: UserControl,
	title: `${Categories.USERS}/User Control`,
	excludeStories: /.*Data$/,
};

export const userData = [
	{
		displayName: 'Testenildo',
		email: 'asda@asdasd.af',
	},
];

export const actionsData = {
	onAdd: action('onAdd'),
	onRemove: action('onRemove'),
};

export const Default = () => <UserControl {...actionsData} />;

export const WithUsers = () => <UserControl users={userData} {...actionsData} />;
