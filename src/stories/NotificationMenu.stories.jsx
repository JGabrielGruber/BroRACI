import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import NotificationMenu from '../components/NotificationMenu.component';

export default {
	component: NotificationMenu,
	title: 'NotificationMenu',
	excludeStories: /.*Data$/,
};

export const menuData = {
	element: null,
};

export const notificationData = {
	notifications: [
		{
			uid: 'aaa',
			title: 'Teste',
			notRead: true,
		},
		{
			uid: 'bbb',
			title: 'Testado',
		},
		{
			uid: 'ccc',
			title: 'Também Testado',
		},
	],
};

export const actionsData = {
	onClose: action('onClose'),
};

export const Opened = () => <NotificationMenu {...menuData} open {...actionsData} />;

export const OpenedWithNotifications = () => (
	<NotificationMenu
		{...menuData}
		{...notificationData}
		open
		{...actionsData}
		onClick={action('onClick')}
	/>
);

export const Closed = () => <NotificationMenu {...menuData} {...actionsData} />;
