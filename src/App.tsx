import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { TodoListPage, AuthPage, LoginPage } from './pages';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { IsLogedIn } from './redux/selectors/auth';
import { useEffect } from 'react';
import { checkIsLoggedIn } from './redux/actions/actionCreators/authActionCreators';
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemeProvider from './components/ThemeProvider';
import { Box } from '@material-ui/core';
import { useStyles } from './AppStyle';

export const App: FC = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(IsLogedIn);
  const classes = useStyles();

  useEffect(() => {
    const isLogedIn = !!localStorage.getItem('token');
    dispatch(checkIsLoggedIn(isLogedIn));
  }, []);

  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <BrowserRouter>
        <Box className={classes.boxWrapper}>
          <NavBar />
          <Switch>
            <PrivateRoute
              path="/auth"
              redirectTo="/todos"
              isLogedIn={!isLogedIn}
              component={AuthPage}
              exact
            />
            <Route path={'/login'} exact>
              <LoginPage />
            </Route>
            <PrivateRoute
              redirectTo="/auth"
              isLogedIn={isLogedIn}
              component={TodoListPage}
              exact
            />
            <Redirect to="/auth" />
          </Switch>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
