import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import Categories from '../Categories';
import Recovery from '../../components/popups/Recovery.component';

export default {
	component: Recovery,
	title: `${Categories.POPUP}/Recovery`,
	excludeStories: /.*Data$/,
};

export const actionsData = {
	onBack: action('onBack'),
	onClose: action('onClose'),
	onRecovery: action('onRecovery'),
};

export const Opened = () => <Recovery open {...actionsData} />;
export const Closed = () => <Recovery {...actionsData} />;
