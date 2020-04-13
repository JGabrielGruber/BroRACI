import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import UserGroup from '../../components/activities/UserGroup.component';
import Categories from '../Categories';
import ActivityControl from '../../components/activities/ActivityControl.component';
import { assignmentsData, rulesData } from './UserGroup.stories';
import { stepsData } from './Step.stories';

export default {
	component: UserGroup,
	title: `${Categories.ACTIVITIES}/Activity Control`,
	excludeStories: /.*Data$/,
};

export const activitiesData = [
	{
		uid: 'eeee',
		title: 'Criação do esboço',
		step: {
			uid: 'bbb',
			title: 'Esboço',
		},
		assignments: assignmentsData,
	},
	{
		uid: 'fff',
		title: 'Conclusão de tudo',
		step: {
			uid: 'ccc',
			title: 'Conclusão',
		},
		assignments: assignmentsData,
	},
];

export const actionsData = {
	onClick: action('onClick'),
	onAddStep: action('onAddStep'),
	onRemoveStep: action('onRemoveStep'),
	onSelectStep: action('onSelectStep'),
};

export const Default = () => (
	<ActivityControl
		activities={activitiesData}
		steps={stepsData}
		rules={rulesData}
		{...actionsData}
	/>
);
