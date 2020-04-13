import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import Categories from '../Categories';
import ActivityDetail from '../../components/activities/ActivityDetail.component';
import { assignmentsData, rulesData } from './UserGroup.stories';
import { stepsData } from './Step.stories';

export default {
	component: ActivityDetail,
	title: `${Categories.ACTIVITIES}/Activity Detail`,
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

export const usersData = [
	{
		uid: 'aaa',
		displayName: 'Testenaldo',
	},
	{
		uid: 'bbb',
		displayName: 'Josivaldo',
	},
];

export const actionsData = {
	onUpdate: action('onUpdate'),
	onAddAssignment: action('onAddAssignment'),
	onRemoveAssignment: action('onRemoveAssignment'),
	onSelectAssignment: action('onSelectAssignment'),
};

export const Default = () => (
	<ActivityDetail
		open
		activity={activityData}
		rules={rulesData}
		steps={stepsData}
		users={usersData}
		{...actionsData}
	/>
);
