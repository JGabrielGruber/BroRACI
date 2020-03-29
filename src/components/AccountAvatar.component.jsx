import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { Avatar, IconButton, Tooltip } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	blue: {
		color: theme.palette.getContrastText(blue[500]),
		backgroundColor: blue[500],
	},
}));

export default function AccountAvatar({
	account: {
		name,
		image,
		state,
	},
	onClick,
}) {
	const classes = useStyles();

	const avatar = state === 'HAS_IMAGE' ? (
		<Avatar alt={name} src={image} />
	) : (
		<Avatar alt={name} className={classes.blue}>
			{name.substring(0, 1)}
		</Avatar>
	);

	return (
		<Tooltip title={name} onClick={onClick ? () => onClick() : null}>
			{onClick ? (
				<IconButton>
					{avatar}
				</IconButton>
			) : (
				<span>
					<IconButton disabled>
						{avatar}
					</IconButton>
				</span>
			)}

		</Tooltip>

	);
}

AccountAvatar.defaultProps = {
	account: {
		name: '',
		image: '',
		state: '',
	},
	onClick: null,
};

AccountAvatar.propTypes = {
	account: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image: PropTypes.string,
		state: PropTypes.string,
	}),
	onClick: PropTypes.func,
};
