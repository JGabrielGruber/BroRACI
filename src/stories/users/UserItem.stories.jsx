import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import UserItem from '../../components/users/UserItem.component';
import Categories from '../Categories';

export default {
	component: UserItem,
	title: `${Categories.USERS}/User Item`,
	excludeStories: /.*Data$/,
};

export const userData = {
	displayName: 'Testenildo',
	email: 'asda@asdasd.af',
};

export const actionsData = {
	onRemove: action('onRemove'),
};

export const Default = () => <UserItem user={{ ...userData }} {...actionsData} />;
