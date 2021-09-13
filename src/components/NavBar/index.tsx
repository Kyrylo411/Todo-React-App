import React, { FC } from 'react';
import { Box, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { IsLogedIn } from '../../selectors/auth';
import { NavLink } from 'react-router-dom';
import { logOutAction } from '../../redux/actions/actionCreators/authActionCreators';
import { useStyles } from './styles';
import { IMenuItem } from '../interfaces';
import api from '../../http';
import { AuthResponse } from '../../model/response/AuthResponse';

const NavBar: FC = () => {
	const isLogedIn = useSelector(IsLogedIn);
	const dispatch = useDispatch();

	const hadleLogOutClick = async (): Promise<void> => {
		await api.post<AuthResponse>('/auth/logout');
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		dispatch(logOutAction(false));
	};
	const classes = useStyles();

	const menuItems = isLogedIn
		? [{ to: '/todos', value: 'Todo List' }]
		: [
				{ to: '/auth', value: 'Sign Up' },
				{ to: '/login', value: 'Sign In' },
		  ];

	return (
		<Box className="linkWrapper">
			{isLogedIn ? (
				<Button
					size="small"
					variant="outlined"
					color="secondary"
					onClick={hadleLogOutClick}
				>
					Log Out
				</Button>
			) : null}
			{menuItems.map((item: IMenuItem) => {
				return (
					<NavLink
						className={classes.a}
						activeClassName={classes.activeLink}
						key={item.value}
						to={item.to}
					>
						{item.value}
					</NavLink>
				);
			})}
		</Box>
	);
};
export default NavBar;
