import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import DashboardIcon from '@material-ui/icons/Dashboard';


import SidebarItem from '../components/SidebarItem.component';

export default {
	component: SidebarItem,
	title: 'SidebarItem',
	excludeStories: /.*Data$/,
};

export const itemData = {
	title: 'Matriz',
	key: 'matrix',
	icon: (<DashboardIcon />),
};

export const actionsData = {
	onClick: action('onClick'),
};

export const Default = () => <SidebarItem item={{ ...itemData }} {...actionsData} />;

export const Selected = () => <SidebarItem item={{ ...itemData, state: 'SELECTED' }} {...actionsData} />;
