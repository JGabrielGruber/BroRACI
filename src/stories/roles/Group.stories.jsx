import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import Group from '../../components/roles/Group.component';
import Categories from '../Categories';

export default {
	component: Group,
	title: `${Categories.ROLES}/Group`,
	excludeStories: /.*Data$/,
};

export const groupData = {
	title: 'Administração',
};

export const groupsData = [
	{
		title: 'Administração',
	},
	{
		title: 'Gerencia',
	},
];

export const actionsData = {
	onAdd: action('onAdd'),
	onRemove: action('onRemove'),
	onSelect: action('onSelect'),
};

export const Default = () => <Group {...actionsData} />;

export const WithGroups = () => <Group groups={groupsData} {...actionsData} />;

export const WithSelectedGroup = () => (
	<Group
		group={groupData}
		groups={groupsData}
		{...actionsData}
	/>
);
