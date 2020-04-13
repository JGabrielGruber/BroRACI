import React from 'react';

import ActivityRepository from '../repositories/Activity.repository';
import RACIRepository from '../repositories/RACI.repository';
import ActivityControl from '../components/activities/ActivityControl.component';
import RuleRepository from '../repositories/Rule.repository';
import StepRepository from '../repositories/Step.repository';
import UserRepository from '../repositories/User.repository';

class ActivityControlContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			raci: null,
			activities: [],
			rules: [],
			steps: [],
			users: [],
		};
	}

	componentDidMount() {
		const {
			match,
		} = this.props;
		RACIRepository.syncById('raci', (key, raci) => {
			this.setState({
				raci,
			});
			if (raci) {
				raci.activities.map(
					(acitivity, index) => ActivityRepository.syncById(
						index, this.handleChangeActivity, acitivity.id,
					),
				);
			}
		}, match.params.raci);
		StepRepository.sync('steps', this.handleChange);
		RuleRepository.sync('rules', this.handleChange);
		UserRepository.sync('users', this.handleChange);
	}

	handleChange = (key, value, index) => {
		if (index) {
			const ar = this.state[key];
			ar[index] = value || undefined;
			this.setState({
				[key]: ar,
			});
		} else {
			this.setState({
				[key]: value || undefined,
			});
		}
	}


	handleChangeActivity = (key, value) => {
		const {
			activities,
		} = this.state;
		activities[key] = value || undefined;
		this.setState({
			activities,
		});
	}

	handleAdd = async (data) => {
		const {
			raci,
		} = this.state;

		ActivityRepository.add(data).then((item) => {
			raci.activities.push(item.ref);
			RACIRepository.update(raci);
		});
	}

	handleRemove = async (data) => {

	}

	handleAddStep = async (data) => {
		StepRepository.add(data);
	}

	handleRemoveGroup = async (data) => {

	}

	handleSelectStep = async (acitivity, step) => {
		StepRepository.getById(step.uid).then((item) => {
			if (item) {
				acitivity.step = {...item.data(), uid: item.id };
				ActivityRepository.update(acitivity);
			}
		});
	}

	render() {
		const {
			activities, rules, steps, users,
		} = this.state;

		return (
			<ActivityControl
				activities={activities}
				rules={rules}
				steps={steps}
				users={users}
				onUpdate={this.handleAdd}
				onAddStep={this.handleAddStep}
				onSelectStep={this.handleSelectStep}
			/>
		);
	}
}

export default ActivityControlContainer;
