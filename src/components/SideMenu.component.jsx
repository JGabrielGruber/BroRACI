import React from 'react';
import PropTypes, { func } from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Grid, Container } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ListSidebarItem from './ListSidebarItem.component';


const useStyles = makeStyles(() => ({
	spacer: {
		flexGrow: 1,
	},
	root: {
		display: 'flex',
	},
}));

export default function SideMenu({
	title,
	open,
	funcs,
	options,
	onClose,
	onSelectFuncs,
	onSelectOptions,
}) {
	return (
		<Drawer
			variant="persistent"
			anchor="left"
			open={open}
		>
			<Container>
				<Grid alignItems="center" container direction="row" justify="space-between" spacing={2}>
					<Grid item>
						<Typography variant="h4">
							{`${title}`}
						</Typography>
					</Grid>
					<Grid>
						<IconButton onClick={onClose}>
							<ArrowBackIosIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Container>
			<Divider />
			<ListSidebarItem
				{...funcs}
				onClick={onSelectFuncs}
			/>
			<Divider />
			<ListSidebarItem
				{...options}
				onClick={onSelectOptions}
			/>
		</Drawer>
	);
}

SideMenu.defaultProps = {
	title: '',
};

SideMenu.propTypes = {
	title: PropTypes.string,
	open: PropTypes.bool,
	funcs: PropTypes.object,
	options: PropTypes.object,
	onClose: PropTypes.func,
	onSelectFuncs: PropTypes.func,
	onSelectOptions: PropTypes.func,
};
