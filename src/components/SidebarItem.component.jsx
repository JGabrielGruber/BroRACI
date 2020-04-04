import React from 'react';
import PropTypes from 'prop-types';

import {
	ListItem, ListItemIcon, ListItemText, Typography, Icon,
} from '@material-ui/core';


export default function SidebarItem({
	item: {
		title,
		key,
		icon,
	},
	state,
	onClick,
}) {
	const color = state === 'SELECTED' ? 'primary' : 'inherit';
	return (
		<ListItem key={key} button onClick={onClick}>
			<ListItemIcon>
				<Icon color={color}>{icon}</Icon>
			</ListItemIcon>
			<ListItemText>
				<Typography color={color}>
					{title}
				</Typography>
			</ListItemText>
		</ListItem>
	);
}

SidebarItem.defaultProps = {
	item: {
		title: '',
		key: '',
		icon: (<div />),
	},
	state: 'NOT_SELECTED',
	onClick: null,
};

SidebarItem.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string.isRequired,
		key: PropTypes.string.isRequired,
		icon: PropTypes.object.isRequired,
	}),
	state: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};
