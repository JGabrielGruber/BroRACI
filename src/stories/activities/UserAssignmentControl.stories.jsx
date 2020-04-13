import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import Categories from '../Categories';
import UserAssignmentControl from '../../components/activities/UserAssignmentControl.component';
import { userData } from './UserAssignmentItem.stories';

export default {
	component: UserAssignmentControl,
	title: `${Categories.ACTIVITIES}/User Assignment Control`,
	excludeStories: /.*Data$/,
};

export const ruleData = {
	uid: 'aaa',
	title: 'Responsável',
};

export const usersData = [
	userData,
];

export const actionsData = {
	onAdd: action('onAdd'),
	onRemove: action('onRemove'),
	onSelect: action('onSelect'),
};

export const Default = () => (
	<UserAssignmentControl
		rule={ruleData}
		users={usersData}
		{...actionsData}
	/>
);
