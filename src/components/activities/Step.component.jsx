import React from 'react';
import PropTypes from 'prop-types';

import {
	Container, Button, Popover, List, ListItem,
	Grid, Typography, IconButton, Fade, FormControl,
	InputLabel, Input, InputAdornment, Tooltip, CircularProgress,
} from '@material-ui/core';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import AddIcon from '@material-ui/icons/Add';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import StepModel from '../../models/Step.model';
import StepItem from './StepItem.component';


class Step extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			isAdd: false,
			element: null,
			title: '',
		};
	}

	handlePopover = (event) => {
		event.persist();
		this.setState((prevState) => ({
			element: event.target,
			open: !prevState.open,
		}));
	}

	handleAdd = () => {
		this.setState((prevState) => ({
			isAdd: !prevState.isAdd,
		}));
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	}

	handleRemove = (event, step) => {
		event.persist();
		const { onRemove } = this.props;
		if (step) {
			onRemove(step);
		}
	}

	handleSelect = (event, step) => {
		event.persist();
		const { onSelect } = this.props;
		if (step) {
			onSelect(step);
		}
	}

	getProgress = (step) => {
		const { steps } = this.props;
		const index = steps.indexOf(steps.find((item, i) => (item.uid === step.uid)));
		return ((index + 1) * 100) / (steps.length + 1);
	}

	render() {
		const {
			open, isAdd, element, title,
		} = this.state;

		const {
			step, steps, onAdd,
		} = this.props;

		return (
			<Container>
				<Tooltip title={step ? step.title : 'Etapa'}>
					<IconButton onClick={this.handlePopover}>
						<CircularProgress variant="static" value={this.getProgress(step)} thickness={10} />
					</IconButton>
				</Tooltip>
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
						{ steps.map((item) => (
							<ListItem key={item.uid} button>
								<StepItem
									step={item}
									onClick={(e) => this.handleSelect(e, item)}
									onRemove={(e) => this.handleRemove(e, item)}
								/>
							</ListItem>
						)) }
						{
							isAdd ? (
								<ListItem key="form-step">
									<Fade in={isAdd}>
										<Grid item>
											<FormControl fullWidth>
												<InputLabel>Etapa</InputLabel>
												<Input
													id="title"
													value={title}
													onChange={this.handleChange}
													endAdornment={(
														<InputAdornment position="end">
															<IconButton onClick={this.handleAdd}>
																<ClearRoundedIcon />
															</IconButton>
															<IconButton onClick={() => onAdd({ title })}>
																<DoneRoundedIcon />
															</IconButton>
														</InputAdornment>
													)}
												/>
											</FormControl>
										</Grid>
									</Fade>
								</ListItem>
							) : (
								<div />
							)
						}
						<ListItem key="add-step" button onClick={this.handleAdd}>
							<Grid
								id="grid-step"
								container
								direction="row"
								alignItems="center"
								spacing={1}
							>
								<Grid item>
									<AddIcon color="primary" />
								</Grid>
								<Grid item>
									<Typography variant="body1" color="primary">
										Adicionar Etapa
									</Typography>
								</Grid>
							</Grid>
						</ListItem>
					</List>
				</Popover>
			</Container>
		);
	}
}

Step.defaultProps = {
	step: null,
	steps: [],
};

Step.propsType = {
	step: PropTypes.shape(StepModel),
	steps: PropTypes.arrayOf(PropTypes.shape(StepModel)),
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
	onSelect: PropTypes.func,
};

export default Step;
