import React from 'react';
import PropTypes from 'prop-types';

import {
	Grid, Typography, IconButton, Fade, Tooltip,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import Step from '../../models/Step.model';

class StepItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
		};
	}

	handleMouseOver = () => {
		this.setState({
			show: true,
		});
	};

	handleMouseOut = () => {
		this.setState({
			show: false,
		});
	};

	render() {
		const { show } = this.state;
		const { step, onClick, onRemove } = this.props;

		return (
			<Grid
				id="grid-step"
				container
				direction="row"
				alignItems="center"
				justify="space-between"
				spacing={2}
				onMouseOver={this.handleMouseOver}
				onFocus={this.handleMouseOver}
				onMouseOut={this.handleMouseOut}
				onBlur={this.handleMouseOut}
			>
				<Grid item onClick={onClick}>
					<Typography key={step.uid}>
						{step.title}
					</Typography>
				</Grid>
				<Fade in={show}>
					<Grid item>
						<Tooltip title="Remover Etapa" name="remove">
							<IconButton onClick={onRemove} size="small" name="remove">
								<DeleteIcon name="remove" />
							</IconButton>
						</Tooltip>
					</Grid>
				</Fade>
			</Grid>
		);
	}
}

StepItem.propTypes = {
	step: PropTypes.shape(Step).isRequired,
	onClick: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default StepItem;
