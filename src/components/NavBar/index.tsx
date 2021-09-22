import React, { FC } from 'react';
import { Box, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { IsLogedIn } from '../../redux/selectors/auth';
import { NavLink } from 'react-router-dom';
import { logOutRequest } from '../../redux/actions/actionCreators/authActionCreators';
import { useStyles } from './styles';
import { useTheme } from '../ThemeProvider';
import { useCallback } from 'react';

interface IMenuItem {
  to: string;
  value: string;
}

const NavBar: FC = () => {
  const isLogedIn = useSelector(IsLogedIn);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleLogOutClick = useCallback(() => {
    dispatch(logOutRequest());
  }, []);
  const classes = useStyles({ theme });

  const menuItems = isLogedIn
    ? [{ to: '/todos', value: 'Todo List' }]
    : [
        { to: '/auth', value: 'Sign Up' },
        { to: '/login', value: 'Sign In' },
      ];

  return (
    <Box className={classes.linkWrapper}>
      {isLogedIn ? (
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={handleLogOutClick}
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
