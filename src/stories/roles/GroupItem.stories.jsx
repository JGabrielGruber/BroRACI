import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import GroupItem from '../../components/roles/GroupItem.component';
import Categories from '../Categories';

export default {
	component: GroupItem,
	title: `${Categories.ROLES}/Group Item`,
	excludeStories: /.*Data$/,
};

export const groupData = {
	title: 'Administração',
};

export const actionsData = {
	onClick: action('onAction'),
	onRemove: action('onRemove'),
};

export const Default = () => <GroupItem group={{ ...groupData }} {...actionsData} />;
