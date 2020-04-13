import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import Search from '../../components/topbar/Search.component';
import Categories from '../Categories';

export default {
	component: Search,
	title: `${Categories.TOPBAR}/Search`,
	excludeStories: /.*Data$/,
};

export const changeAction = action('onChange');

export const Default = () => <Search onChange={changeAction} />;
