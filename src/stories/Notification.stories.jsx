import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import Notification from '../components/Notification.component';

export default {
	component: Notification,
	title: 'Notification',
	excludeStories: /.*Data$/,
};

export const actionsData = {
	onClick: action('onClick'),
};

export const Default = () => <Notification {...actionsData} />;

export const Few = () => <Notification amount={3} {...actionsData} />;

export const Lot = () => <Notification amount={20} {...actionsData} />;
