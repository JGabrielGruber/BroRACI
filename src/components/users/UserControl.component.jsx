import React from 'react';
import PropTypes from 'prop-types';

import {
	Container, Typography, Grid, Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import User from '../../models/User.model';
import UserItem from './UserItem.component';
import AddMemberComponent from '../popups/AddMember.component';
import Role from '../../models/Role.model';

class UserControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAddMemberOpen: false,
		};
	}

	handleAddMember = () => {
		this.setState((prevState) => ({
			isAddMemberOpen: !prevState.isAddMemberOpen,
		}));
	}

	render() {
		const {
			isAddMemberOpen,
		} = this.state;

		const {
			users, roles, onAdd, onRemove, onSelectRole,
		} = this.props;

		return (
			<Container maxWidth="sm">
				<Grid container spacing={3} direction="column">
					<Grid item>
						<Typography>
							Membros
						</Typography>
						<Typography variant="body2">
							{ `${users.length} membros` }
						</Typography>
					</Grid>
					{
						users.map((user) => (
							<Grid item key={user.uid}>
								<UserItem
									user={user}
									roles={roles}
									onRemove={onRemove}
									onSelectRole={onSelectRole}
								/>
							</Grid>
						))
					}
					<Grid item>
						<Button
							variant="outlined"
							color="primary"
							startIcon={(<AddIcon />)}
							onClick={this.handleAddMember}
						>
							<Typography variant="body2">
								Adicionar Membro
							</Typography>
						</Button>
					</Grid>
				</Grid>
				<AddMemberComponent open={isAddMemberOpen} onClose={this.handleAddMember} onAdd={onAdd} />
			</Container>
		);
	}
}

UserControl.defaultProps = {
	users: [],
	roles: [],
	onRemove: () => {},
	onSelectRole: () => {},
};

UserControl.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape(User)),
	roles: PropTypes.arrayOf(PropTypes.shape(Role)),
	onAdd: PropTypes.func.isRequired,
	onRemove: PropTypes.func,
	onSelectRole: PropTypes.func,
};

export default UserControl;
