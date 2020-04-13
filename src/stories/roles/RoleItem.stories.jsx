import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import RoleItem from '../../components/roles/RoleItem.component';
import Categories from '../Categories';

export default {
	component: RoleItem,
	title: `${Categories.ROLES}/Role Item`,
	excludeStories: /.*Data$/,
};

export const roleData = {
	title: 'Administrador Geral',
	group: null,
};

export const groupsData = [
	{
		title: 'Administração',
	},
	{
		title: 'Gerencia',
	},
];

export const groupData = {
	title: 'Administração',
};

export const actionsData = {
	onRemove: action('onRemove'),
	onAddGroup: action('onAddGroup'),
	onRemoveGroup: action('onRemoveGroup'),
	onSelectGroup: action('onSelectGroup'),
};

export const Default = () => <RoleItem role={{ ...roleData }} {...actionsData} />;
export const WithGroups = () => <RoleItem role={roleData} groups={groupsData} {...actionsData} />;
export const WithSelectedGroup = () => (
	<RoleItem
		role={{ ...roleData, group: groupData }}
		groups={groupsData}
		{...actionsData}
	/>
);
