import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { TodoListPage, AuthPage, LoginPage } from './pages';
import ProtectedRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { logInAction } from './redux/actions/actionCreators/authActionCreators';

const App: FC = () => {
	// const dispatch = useDispatch();
	// const history = useHistory();

	// useEffect(() => {
	// 	if (localStorage.getItem('token') && localStorage.getItem('userId')) {
	// 		dispatch(logInAction(true));
	// 		// history.push('/todos');
	// 		// Redirect('/todos');
	// 		console.log(history);
	// 	}
	// }, []);

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
