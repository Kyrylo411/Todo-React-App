import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';

import { TodoListPage, AuthPage, LoginPage } from './pages';
import ProtectedRoute from './components/PrivateRoute';
import { IsLogedIn } from './selectors/auth';
import NavBar from './components/NavBar';

const App: FC = () => {
	const isLogedIn = useSelector(IsLogedIn);
	return (
		<BrowserRouter>
			<NavBar />
			<Box>
				<Switch>
					<Route path={'/auth'} exact>
						<AuthPage />
					</Route>
					<Route path={'/login'} exact>
						<LoginPage />
					</Route>
					<ProtectedRoute
						isAuthenticated={isLogedIn}
						component={TodoListPage}
						exact
					/>
				</Switch>
			</Box>
		</BrowserRouter>
	);
};

export default App;
