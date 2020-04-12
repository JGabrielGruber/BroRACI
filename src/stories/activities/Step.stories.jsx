import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import UserGroup from '../../components/activities/UserGroup.component';
import Categories from '../Categories';
import Step from '../../components/activities/Step.component';

export default {
	component: UserGroup,
	title: `${Categories.ACTIVITIES}/Step`,
	excludeStories: /.*Data$/,
};

export const stepData = {
	uid: 'bbb',
	title: 'Esboço',
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
};

export const Default = () => (
	<Step
		step={stepData}
		steps={stepsData}
		{...actionsData}
	/>
);
