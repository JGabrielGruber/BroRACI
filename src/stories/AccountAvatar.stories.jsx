import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import AccountAvatar from '../components/AccountAvatar.component';

export default {
	component: AccountAvatar,
	title: 'AccountAvatar',
	excludeStories: /.*Data$/,
};

export const accountData = {
	name: 'Testenildo',
};

export const actionsData = {
	onClick: action('onClick'),
};

export const Default = () => <AccountAvatar account={{ ...accountData }} {...actionsData} />;

export const Image = () => (
	<AccountAvatar account={{ ...accountData, image: '', state: 'HAS_IMAGE' }} {...actionsData} />
);
