import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import AccountAvatar from '../../components/topbar/AccountAvatar.component';
import Categories from '../Categories';

export default {
	component: AccountAvatar,
	title: `${Categories.TOPBAR}/Account Avatar`,
	excludeStories: /.*Data$/,
};

export const accountData = {
	displayName: 'Testenildo',
};

export const actionsData = {
	onClick: action('onClick'),
};

export const Default = () => <AccountAvatar account={{ ...accountData }} {...actionsData} />;

export const Image = () => (
	<AccountAvatar account={{ ...accountData, photoUrl: '', state: 'HAS_IMAGE' }} {...actionsData} />
);

export const WithoutAction = () => (
	<AccountAvatar account={{ ...accountData, photoUrl: '', state: 'HAS_IMAGE' }} />
);
