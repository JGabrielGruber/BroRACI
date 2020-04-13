import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import Categories from '../Categories';
import ActivityItem from '../../components/activities/ActivityItem.component';
import { assignmentsData, rulesData } from './UserGroup.stories';

export default {
	component: ActivityItem,
	title: `${Categories.ACTIVITIES}/Activity Item`,
	excludeStories: /.*Data$/,
};

export const activityData = {
	uid: 'eeee',
	title: 'Criação do esboço',
	step: {
		uid: 'bbb',
		title: 'Esboço',
	},
	assignments: assignmentsData,
};

export const stepsData = [
	{
		uid: 'aaa',
		title: 'Inicio',
	},
	{
		uid: 'bbb',
		title: 'Esboço',
	},
	{
		uid: 'ccc',
		title: 'Conclusão',
	},
];

export const actionsData = {
	onClick: action('onClick'),
	onAddStep: action('onAddStep'),
	onRemoveStep: action('onRemoveStep'),
	onSelectStep: action('onSelectStep'),
};

export const Default = () => (
	<ActivityItem
		activity={activityData}
		steps={stepsData}
		rules={rulesData}
		{...actionsData}
	/>
);
