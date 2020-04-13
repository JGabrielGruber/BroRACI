import React from 'react';
import PropTypes from 'prop-types';

import {
	Container, List, Drawer, Typography, Grid, Divider, Input, TextField, IconButton,
} from '@material-ui/core';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

import ActivityModel from '../../models/Activity.model';
import Rule from '../../models/Rule.model';
import Step from '../../models/Step.model';
import User from '../../models/User.model';
import UserAssignmentControl from './UserAssignmentControl.component';

class ActivityDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			isChange: false,
		};
	}

	handleChange = (event) => {
		if (event.keyCode !== 13) {
			this.setState({
				[event.target.id]: event.target.value + event.key,
			});
		} else {
			this.handleUpdate(event);
		}
	}

	handleModify = () => {
		const {
			activity,
		} = this.props;
		this.setState((prevState) => ({
			isChange: !prevState.isChange,
			title: activity.title,
			description: activity.description,
		}));
	}

	handleUpdate = (event) => {
		event.persist();
		event.preventDefault();
		const {
			onUpdate,
		} = this.props;
		if (event.keyCode === 13) {
			onUpdate({ [event.target.id]: this.state[event.target.id] });
		}
	}

	render() {
		const {
			title, description, isChange,
		} = this.state;

		const {
			activity, rules, steps, users,
			onAddAssignment, onRemoveAssignment, onSelectAssignment,
		} = this.props;

		return (
			<Container>
				<Grid container direction="column" spacing={4}>
					<Grid item>
						<Container>
							<Grid container direction="row" justify="space-between">
								<Grid item>
									<Container>
										{
											isChange ? (
												<TextField
													id="title"
													value={title}
													label="Título"
													onKeyUp={this.handleChange}
												/>
											) : (
												<Typography variant="h5">
													{`${activity.title}`}
												</Typography>
											)
										}
									</Container>
									<Container>
										{
											isChange ? (
												<TextField
													id="description"
													multiline
													value={description}
													label="Descrição"
													onKeyUp={this.handleChange}
												/>
											) : (
												<Typography variant="body2">
													{`${activity.description ? activity.description : ''}`}
												</Typography>
											)
										}
									</Container>
								</Grid>
								<Grid item>
									<Container>
										<IconButton onClick={this.handleModify}>
											<MoreHorizRoundedIcon />
										</IconButton>
									</Container>
								</Grid>
							</Grid>
						</Container>
					</Grid>
					{ rules.map((rule) => (
						<Grid item key={rule.uid}>
							<Divider light />
							<UserAssignmentControl
								rule={rule}
								assignments={activity.assignments}
								users={users}
								onAdd={onAddAssignment}
								onRemove={onRemoveAssignment}
								onSelect={onSelectAssignment}
							/>
						</Grid>
					)) }
				</Grid>
			</Container>
		);
	}
}

ActivityDetail.defaultProps = {
	rules: [],
	steps: [],
	users: [],
};

ActivityDetail.propTypes = {
	activity: PropTypes.shape(ActivityModel).isRequired,
	rules: PropTypes.arrayOf(PropTypes.shape(Rule)),
	steps: PropTypes.arrayOf(PropTypes.shape(Step)),
	users: PropTypes.arrayOf(PropTypes.shape(User)),
	onUpdate: PropTypes.func.isRequired,
	onAddAssignment: PropTypes.func.isRequired,
	onRemoveAssignment: PropTypes.func.isRequired,
	onSelectAssignment: PropTypes.func.isRequired,
};

export default ActivityDetail;
