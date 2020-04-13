import React from 'react';
import PropTypes from 'prop-types';
import {
	Grid, Container, Typography, Button,
} from '@material-ui/core';

import Step from './Step.component';
import ActivityModel from '../../models/Activity.model';
import StepModel from '../../models/Step.model';
import UserGroup from './UserGroup.component';
import Rule from '../../models/Rule.model';

export default function ActivityItem({
	activity,
	steps,
	rules,
	onClick,
	onAddStep,
	onRemoveStep,
	onSelectStep,
	index,
}) {
	const handleSelectStep = (step) => {
		onSelectStep(activity, step);
	};

	return (
		<Container maxWidth="md">
			<Grid container direction="row" spacing={3} alignItems="center">
				<Grid item>
					<Step
						step={activity.step}
						steps={steps}
						onAdd={onAddStep}
						onRemove={onRemoveStep}
						onSelect={handleSelectStep}
					/>
				</Grid>
				<Grid item xs>
					<Button style={{ textTransform: 'none' }} fullWidth onClick={() => onClick(activity)}>
						<Container>
							<Grid container justify="space-between" alignItems="center">
								<Grid item>
									<Typography variant="h5">
										{activity.title}
									</Typography>
								</Grid>
								<Grid item>
									<UserGroup assignments={activity.assignments} rules={rules} />
								</Grid>
							</Grid>
						</Container>
					</Button>
				</Grid>
				<Grid item>
					<Typography variant="body2" color="textSecondary">
						{`#${index}`}
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}

ActivityItem.defaultProps = {
	index: 1,
	onAddStep: null,
	onRemoveStep: null,
	onSelectStep: null,
};

ActivityItem.propTypes = {
	activity: PropTypes.shape(ActivityModel).isRequired,
	steps: PropTypes.arrayOf(StepModel).isRequired,
	rules: PropTypes.arrayOf(Rule).isRequired,
	onClick: PropTypes.func.isRequired,
	onAddStep: PropTypes.func,
	onRemoveStep: PropTypes.func,
	onSelectStep: PropTypes.func,
	index: PropTypes.number,
};
