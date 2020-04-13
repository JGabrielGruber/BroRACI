/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import AccountMenu from '../../components/topbar/AccountMenu.component';
import Categories from '../Categories';

export default {
	component: AccountMenu,
	title: `${Categories.TOPBAR}/Account Menu`,
	excludeStories: /.*Data$/,
};

export const menuData = {
	element: null,
};

export const matrixData = {
	matrices: [
		{
			uid: 'aaa',
			title: 'Teste',
		},
	],
};

export const actionsData = {
	onClose: action('onClose'),
	onAccount: action('onAccount'),
	onExit: action('onExit'),
};

export const Opened = () => <AccountMenu {...menuData} open {...actionsData} />;

export const OpenedWithMatrix = () => (
	<AccountMenu
		{...menuData}
		{...matrixData}
		open
		{...actionsData}
		onClick={action('onClick')}
	/>
);

export const Closed = () => <AccountMenu {...menuData} {...actionsData} />;
