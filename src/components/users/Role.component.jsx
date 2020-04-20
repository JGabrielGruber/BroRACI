import React from 'react';
import PropTypes from 'prop-types';

import {
	Container, Button, Popover, List, ListItem, Typography,
} from '@material-ui/core';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

import RoleModel from '../../models/Role.model';


class Role extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			element: null,
		};
	}

	handlePopover = (event) => {
		event.persist();
		this.setState((prevState) => ({
			element: event.target,
			open: !prevState.open,
		}));
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	}

	handleSelect = (event, role) => {
		event.persist();
		const { onSelect } = this.props;
		if (role) {
			onSelect(role);
			this.setState({
				open: false,
			});
		}
	}

	render() {
		const {
			open, element,
		} = this.state;

		const {
			role, roles,
		} = this.props;

		return (
			<Container>
				<Button variant="outlined" endIcon={(<ArrowDropDownRoundedIcon />)} onClick={this.handlePopover}>
					{ role ? role.title : 'Cargo' }
				</Button>
				<Popover
					open={open}
					onClose={this.handlePopover}
					anchorEl={element}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
				>
					<List>
						{ roles.map((item) => (
							<ListItem key={item.uid} button onClick={(e) => this.handleSelect(e, item)}>
								<Typography>
									{`${item.title}`}
								</Typography>
							</ListItem>
						)) }
					</List>
				</Popover>
			</Container>
		);
	}
}

Role.defaultProps = {
	role: null,
	roles: [],
};

Role.propsType = {
	role: PropTypes.shape(RoleModel),
	roles: PropTypes.arrayOf(PropTypes.shape(RoleModel)),
	onSelect: PropTypes.func,
};

export default Role;
