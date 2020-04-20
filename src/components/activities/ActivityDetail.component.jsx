import React from 'react';
import PropTypes from 'prop-types';

import {
	Container, Drawer, Typography, Grid, Divider, TextField, IconButton,
} from '@material-ui/core';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

import ActivityModel from '../../models/Activity.model';
import Rule from '../../models/Rule.model';
import StepModel from '../../models/Step.model';
import User from '../../models/User.model';
import UserAssignmentControl from './UserAssignmentControl.component';
import Step from './Step.component';

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
		event.persist();
		console.log(event);

		if (event.keyCode !== 13) {
			this.setState({
				[event.target.id]: event.target.value,
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
			activity, onUpdate,
		} = this.props;
		onUpdate({ ...activity, [event.target.id]: this.state[event.target.id] });
	}

	handleSelectStep = (step) => {
		const {
			activity, onSelectStep,
		} = this.props;
		onSelectStep(activity, step);
	};

	render() {
		const {
			title, description, isChange,
		} = this.state;

		const {
			activity, rules, steps, users, open, onClose,
			onAddAssignment, onRemoveAssignment, onSelectAssignment,
			onAddStep, onRemoveStep,
		} = this.props;

		if (activity) {
			return (
				<Drawer
					variant="persistent"
					anchor="right"
					open={open}
					onClose={onClose}
				>
					<Grid container direction="column" spacing={4}>
						<Grid item>
							<Step
								step={activity.step}
								steps={steps}
								onAdd={onAddStep}
								onRemove={onRemoveStep}
								onSelect={this.handleSelectStep}
							/>
						</Grid>
						<Grid item>
							<Container>
								<Grid container direction="row" justify="space-between">
									<Grid item xs>
										<Container>
											{
												isChange ? (
													<form id="title" onSubmit={this.handleUpdate}>
														<TextField
															id="title"
															fullWidth
															value={title}
															label="Título"
															onChange={this.handleChange}
														/>
													</form>
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
													<form id="description" onSubmit={this.handleUpdate}>
														<TextField
															id="description"
															multiline
															fullWidth
															value={description}
															label="Descrição"
															onKeyPress={this.handleUpdate}
															onChange={this.handleChange}
														/>
													</form>
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
				</Drawer>
			);
		}
		return (
			<Drawer
				variant="persistent"
				anchor="right"
				open={open}
				onClose={onClose}
			/>
		);
	}
}

ActivityDetail.defaultProps = {
	rules: [],
	steps: [],
	users: [],
	open: false,
};

ActivityDetail.propTypes = {
	activity: PropTypes.shape(ActivityModel).isRequired,
	rules: PropTypes.arrayOf(PropTypes.shape(Rule)),
	steps: PropTypes.arrayOf(PropTypes.shape(StepModel)),
	users: PropTypes.arrayOf(PropTypes.shape(User)),
	open: PropTypes.bool,
	onClose: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,
	onAddAssignment: PropTypes.func.isRequired,
	onRemoveAssignment: PropTypes.func.isRequired,
	onSelectAssignment: PropTypes.func.isRequired,
	onAddStep: PropTypes.func.isRequired,
	onRemoveStep: PropTypes.func.isRequired,
	onSelectStep: PropTypes.func.isRequired,
};

export default ActivityDetail;
