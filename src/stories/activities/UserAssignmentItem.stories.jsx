import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies

import Categories from '../Categories';
import UserAssignmentItem from '../../components/activities/UserAssignmentItem.component';

export default {
	component: UserAssignmentItem,
	title: `${Categories.ACTIVITIES}/User Assignment Item`,
	excludeStories: /.*Data$/,
};

export const userData = {
	displayName: 'Testenildo',
	email: 'asda@asdasd.af',
	role: {
		title: 'Testador Geral',
		group: {
			title: 'Testadores',
		},
	},
};

export const Default = () => <UserAssignmentItem user={userData} />;
