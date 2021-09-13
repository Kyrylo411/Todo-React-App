import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { TodoListPage, AuthPage, LoginPage } from './pages';
import ProtectedRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';

const App: FC = () => {
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
					<ProtectedRoute component={TodoListPage} exact />
				</Switch>
			</Box>
		</BrowserRouter>
	);
};

export default App;
