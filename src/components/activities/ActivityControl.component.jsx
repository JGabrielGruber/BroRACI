import React from 'react';
import PropTypes from 'prop-types';

import {
	Container, List, Typography, Grid, Divider, Button, ListItem,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import ActivityModel from '../../models/Activity.model';
import Rule from '../../models/Rule.model';
import Step from '../../models/Step.model';
import ActivityItem from './ActivityItem.component';
import ActivityDetail from './ActivityDetail.component';

class ActivityControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedActivity: null,
			isDetailOpen: false,
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	}

	handleSelect = (activity) => {
		this.setState({
			selectedActivity: activity,
			isDetailOpen: true,
		});
	}

	handleClose = () => {
		this.setState({
			isDetailOpen: false,
		});
	}

	render() {
		const {
			selectedActivity, isDetailOpen,
		} = this.state;

		const {
			activities, rules, steps, users,
			onAddStep, onRemoveStep, onSelectStep,
			onUpdate,
		} = this.props;

		return (
			<Container>
				<Grid container>
					<Grid item md>
						<List>
							{ activities.map((activity, index) => (
								<ListItem key={activity.uid}>
									<ActivityItem
										activity={activity}
										rules={rules}
										steps={steps}
										index={index + 1}
										onClick={this.handleSelect}
										onAddStep={onAddStep}
										onRemoveStep={onRemoveStep}
										onSelectStep={onSelectStep}
									/>
									<Divider />
								</ListItem>
							)) }
							<ListItem key="button">
								<Button
									variant="outlined"
									color="primary"
									startIcon={(<AddIcon />)}
									onClick={() => this.handleSelect({
										title: '',
										description: '',
										step: {},
										assignments: [],
									})}
									fullWidth
								>
									<Typography variant="body2">
										Adicionar Atividade
									</Typography>
								</Button>
							</ListItem>
						</List>
					</Grid>
					<Grid item>
						<ActivityDetail
							open={isDetailOpen}
							activity={selectedActivity}
							rules={rules}
							steps={steps}
							onClose={this.handleClose}
							users={users}
							onUpdate={onUpdate}
							onAddAssignment={null}
							onRemoveAssignment={null}
							onSelectAssignment={null}
							onAddStep={onAddStep}
							onRemoveStep={onRemoveStep}
							onSelectStep={onSelectStep}
						/>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

ActivityControl.defaultProps = {
	activities: [],
	rules: [],
	steps: [],
};

ActivityControl.propTypes = {
	activities: PropTypes.arrayOf(PropTypes.shape(ActivityModel)),
	rules: PropTypes.arrayOf(PropTypes.shape(Rule)),
	steps: PropTypes.arrayOf(PropTypes.shape(Step)),
};

export default ActivityControl;
