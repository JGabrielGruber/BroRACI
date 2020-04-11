import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import RoleControl from '../../components/roles/RoleControl.component';
import Categories from '../Categories';

export default {
	component: RoleControl,
	title: `${Categories.ROLES}/Role Control`,
	excludeStories: /.*Data$/,
};

export const rolesData = [
	{
		title: 'Administrador',
		group: {
			title: 'Administração',
		},
	},
];

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
	onAddGroup: action('onAddGroup'),
	onRemoveGroup: action('onRemoveGroup'),
	onSelectGroup: action('onSelectGroup'),
};

export const Default = () => <RoleControl {...actionsData} />;

export const WithRoles = () => (
	<RoleControl
		roles={rolesData}
		groups={groupsData}
		{...actionsData}
	/>
);
