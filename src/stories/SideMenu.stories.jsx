import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import SideMenu from '../components/SideMenu.component';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BallotIcon from '@material-ui/icons/Ballot';

export default {
	component: SideMenu,
	title: 'SideMenu',
	excludeStories: /.*Data$/,
};

export const titleData = {
	title: 'BroRACI',
};

export const funcsData = {
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

export const optionsData = {
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
	onClose: action('onClose'),
	onSelectFuncs: action('onSelectFuncs'),
	onSelectOptions: action('onSelectOptions'),
};

export const Default = () => <SideMenu />;

export const Openned = () => (
	<SideMenu 
	open
	title={titleData.title}
	funcs={funcsData}
	options={optionsData}
	{...actionsData}
	/>
);
