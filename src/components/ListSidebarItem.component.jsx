import React from 'react';
import PropTypes from 'prop-types';

import {
	List, ListSubheader,
} from '@material-ui/core';
import SidebarItem from './SidebarItem.component';


export default function ListSidebarItem({
	items,
	title,
	onClick,
}) {
	return (
		<List
			aria-labelledby="nested-list-subheader"
			subheader={title ? (
				<ListSubheader>
					{title}
				</ListSubheader>
			) : (<div />)}
		>
			{items.map((item) => <SidebarItem item={item} />) }
		</List>
	);
}

ListSidebarItem.defaultProps = {
	items: [],
	title: null,
	onClick: null,
};

ListSidebarItem.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		key: PropTypes.string.isRequired,
		icon: PropTypes.object.isRequired,
		state: PropTypes.string,
	})),
	title: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};
