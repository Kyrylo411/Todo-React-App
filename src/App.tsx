import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { TodoListPage, AuthPage, LoginPage } from './pages';

const App: FC = () => {
	return (
		<BrowserRouter>
			<Box>
				<Box className="linkWrapper">
					<NavLink activeClassName="activeLink" to="/auth">
						регистрация
					</NavLink>
					<NavLink activeClassName="activeLink" to="/login">
						вход
					</NavLink>
					<NavLink activeClassName="activeLink" to="/todos">
						список дел
					</NavLink>
				</Box>
				<Switch>
					<Route path={'/auth'} exact>
						<AuthPage />
					</Route>
					<Route path={'/login'} exact>
						<LoginPage />
					</Route>
					<Route path={'/todos'} exact>
						<TodoListPage />
					</Route>
				</Switch>
			</Box>
		</BrowserRouter>
	);
};

export default App;
