import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import UserGroup from '../../components/activities/UserGroup.component';
import Categories from '../Categories';

export default {
	component: UserGroup,
	title: `${Categories.ACTIVITIES}/User Group`,
	excludeStories: /.*Data$/,
};

export const assignmentsData = [
	{
		user: {
			displayName: 'Josivaldo',
		},
		rules: [
			{
				uid: 'aaa',
				name: 'Responsável',
			},
		],
	},
	{
		user: {
			displayName: 'Jubileu',
		},
		rules: [
			{
				uid: 'aaa',
				name: 'Responsável',
			},
			{
				uid: 'bbb',
				name: 'Aprovador',
			},
		],
	},
];

export const rulesData = [
	{
		uid: 'aaa',
		name: 'Responsável',
	},
	{
		uid: 'bbb',
		name: 'Aprovador',
	},
];

export const actionsData = {
	onClick: action('onClick'),
};

export const Default = () => (
	<UserGroup
		assignments={assignmentsData}
		rules={rulesData}
		{...actionsData}
	/>
);
