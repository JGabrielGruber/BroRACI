import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import Search from '../components/Search.component';

export default {
	component: Search,
	title: 'Search',
	excludeStories: /.*Data$/,
};

export const actionsData = {
	onChange: action('onChange'),
};

export const Default = () => <Search {...actionsData} />;