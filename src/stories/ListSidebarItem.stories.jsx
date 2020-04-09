import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BallotIcon from '@material-ui/icons/Ballot';

import ListSidebarItem from '../components/ListSidebarItem.component';

export default {
	component: ListSidebarItem,
	title: 'ListSidebarItem',
	excludeStories: /.*Data$/,
};

export const itemData = {
	items: [{
		title: 'Matriz',
		key: 'matrix',
		icon: (<DashboardIcon />),
	}, {
		title: 'Lista',
		key: 'Lista',
		icon: (<BallotIcon />),
	}],
	title: 'Teste',
};
export const actionsData = {
	onClick: action('onClick'),
};

export const Default = () => <ListSidebarItem {...itemData} {...actionsData} />;

export const WithSelected = () => (
	<ListSidebarItem
		{...
			{
				...itemData,
				items: [
					...itemData.items, {
						title: 'Cargos',
						key: 'Cargos',
						icon: (<BallotIcon />),
						state: 'SELECTED',
					},
				],
			}}
		{...actionsData}
	/>
);
