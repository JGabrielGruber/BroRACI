import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {
	Modal, Container, TextField, Button, Grid, FormControl,
	Card, CardContent, CardHeader, IconButton, CardActions,
	Backdrop, Fade,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const styles = (theme) => ({
	root: {
		height: '100%',
	},
	avatar: {
		color: theme.palette.secondary.contrastText,
		backgroundColor: theme.palette.secondary.main,
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
});

class Recovery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { onAdd } = this.props;

		onAdd({
			...this.state,
		});

		return false;
	}

	handleClose = (event) => {
		event.preventDefault();
		const { onClose } = this.props;
		if (event.target.id === 'back-grid') {
			onClose(event);
		}
	}

	render() {
		const {
			email,
		} = this.state;

		const {
			classes, open, onClose,
		} = this.props;

		return (
			<Modal
				open={open}
				onClose={onClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Grid
						id="back-grid"
						container
						justify="center"
						alignItems="center"
						className={classes.root}
					>
						<Container maxWidth="xs">
							<Card>
								<form onSubmit={this.handleSubmit}>
									<CardHeader
										title="Adicionar Membro"
										action={(
											<IconButton onClick={onClose}>
												<CloseIcon />
											</IconButton>
										)}
									/>
									<CardContent>
										<FormControl fullWidth>
											<TextField
												variant="outlined"
												margin="normal"
												required
												fullWidth
												id="email"
												label="E-mail da Conta"
												name="email"
												autoComplete="email"
												autoFocus
												value={email}
												onChange={this.handleChange}
											/>
										</FormControl>
									</CardContent>
									<CardActions>
										<Button
											type="submit"
											fullWidth
											variant="contained"
											color="primary"
										>
											Adicionar
										</Button>
									</CardActions>
								</form>
							</Card>
						</Container>
					</Grid>
				</Fade>
			</Modal>
		);
	}
}

Recovery.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onAdd: PropTypes.func.isRequired,
};

export default withStyles(styles)(Recovery);
