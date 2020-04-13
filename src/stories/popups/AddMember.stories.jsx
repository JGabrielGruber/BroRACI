import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import Categories from '../Categories';
import AddMember from '../../components/popups/AddMember.component';

export default {
	component: AddMember,
	title: `${Categories.POPUP}/AddMember`,
	excludeStories: /.*Data$/,
};

export const actionsData = {
	onClose: action('onClose'),
	onAdd: action('onAdd'),
};

export const Opened = () => <AddMember open {...actionsData} />;
export const Closed = () => <AddMember {...actionsData} />;
