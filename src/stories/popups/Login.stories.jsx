import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import Categories from '../Categories';
import Login from '../../components/popups/Login.component';

export default {
	component: Login,
	title: `${Categories.POPUP}/Log-In`,
	excludeStories: /.*Data$/,
};

export const actionsData = {
	onClose: action('onClose'),
	onCreateA: action('onCreateA'),
	onLogin: action('onLogin'),
	onPasswordR: action('onPasswordR'),
};

export const Opened = () => <Login open {...actionsData} />;
export const Closed = () => <Login {...actionsData} />;
