import React from 'react';
import PropTypes from 'prop-types';
import {
	Menu, MenuItem, Divider, Typography,
} from '@material-ui/core';

class AccountMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			matrices: [],
		};
	}

	componentDidMount() {
		const that = this;
		if (that.props.matrices.length > 0) {
			this.setState({ matrices: that.props.matrices });
		}
	}

	render() {
		const { matrices } = this.state;
		const {
			element, onClose, onAccount, onExit, onClick, open,
		} = this.props;

		return (
			<Menu
				id="menu-account"
				anchorEl={element}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={open}
				onClose={onClose}
			>
				<MenuItem onClick={onAccount}>Minha Conta</MenuItem>
				<Divider />
				{ matrices.length > 0 ? (
					<div>
						{ matrices.map((project) => (
							<MenuItem
								key={project.uid}
								onClick={onClick}
							>
								{project.title}
							</MenuItem>
						)) }
						<Divider />
					</div>
				) : (
					<div />
				)}

				<MenuItem onClick={onExit}>Sair</MenuItem>
			</Menu>
		);
	}
}

AccountMenu.defaultProps = {
	open: false,
	matrices: [],
};

AccountMenu.propTypes = {
	element: PropTypes.element.isRequired,
	onClose: PropTypes.func.isRequired,
	onAccount: PropTypes.func.isRequired,
	onExit: PropTypes.func.isRequired,
	onClick: PropTypes.func.isRequired,
	open: PropTypes.bool,
	matrices: PropTypes.arrayOf(PropTypes.shape({
		uid: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	})),
};

export default AccountMenu;
