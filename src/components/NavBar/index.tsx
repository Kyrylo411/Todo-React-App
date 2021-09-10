import React, { FC } from 'react';
import { Box, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { IsLogedIn } from '../../selectors/auth';
import { NavLink } from 'react-router-dom';
import { logOutAction } from '../../redux/actions/actionCreators/authActionCreators';
import { useStyles } from './styles';

const NavBar: FC = () => {
	const isLogedIn = useSelector(IsLogedIn);
	const dispatch = useDispatch();
	const hadleLogOutClick = () => {
		dispatch(logOutAction(false));
	};
	const classes = useStyles();

	return isLogedIn ? (
		<Box className="linkWrapper">
			<Button
				size="small"
				variant="outlined"
				color="secondary"
				onClick={hadleLogOutClick}
			>
				Log Out
			</Button>
			<NavLink
				className={classes.a}
				activeClassName={classes.activeLink}
				to="/todos"
			>
				Todo List
			</NavLink>
		</Box>
	) : (
		<Box className="linkWrapper">
			<NavLink
				className={classes.a}
				activeClassName={classes.activeLink}
				to="/auth"
			>
				Sign Up
			</NavLink>
			<NavLink
				className={classes.a}
				activeClassName={classes.activeLink}
				to="/login"
			>
				Sign in
			</NavLink>
		</Box>
	);
};
export default NavBar;
