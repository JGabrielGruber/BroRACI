import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import Categories from '../Categories';
import Signup from '../../components/popups/Signup.component';

export default {
	component: Signup,
	title: `${Categories.POPUP}/Sign-Up`,
	excludeStories: /.*Data$/,
};

export const actionsData = {
	onBack: action('onBack'),
	onClose: action('onClose'),
	onPhoto: action('onPhoto'),
	onSignup: action('onSignup'),
};

export const Opened = () => <Signup open {...actionsData} />;
export const Closed = () => <Signup {...actionsData} />;
