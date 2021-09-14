import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Page from '../../components/Page';
import CustomInput from '../../components/CustomInput';
import { Button, Box, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import api from '../../http';
import { logInAction } from '../../redux/actions/actionCreators/authActionCreators';
import { useDispatch } from 'react-redux';
import { AuthResponse } from '../../interfaices/authResponse';

const AuthPage: FC = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	const handlePasswordChange = (value: string) => {
		setPassword(value);
	};
	const handleCheckPasswordChange = (value: string) => {
		setCheckPassword(value);
	};
	const handleLoginChange = (value: string) => {
		setLogin(value);
	};

	const handleAuthClick = async (): Promise<void> => {
		try {
			await api.post<AuthResponse>('/auth/registration', {
				login,
				password,
			});
			setLogin('');
			setPassword('');
			setCheckPassword('');
			history.push('/login');
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		if (localStorage.getItem('token') && localStorage.getItem('userId')) {
			dispatch(logInAction(true));
			history.push('/todos');
		}
	}, []);

	return (
		<Page>
			<Paper className={classes.wrapper}>
				<Box className={classes.inputWrapper}>
					<CustomInput
						required={true}
						type="text"
						value={login}
						isFocus={true}
						placeholder="login"
						onChange={handleLoginChange}
					/>
					<CustomInput
						required={true}
						type="password"
						value={password}
						isFocus={false}
						placeholder="password"
						onChange={handlePasswordChange}
					/>
					<CustomInput
						required={true}
						type="password"
						value={checkPassword}
						isFocus={false}
						placeholder="check password"
						onChange={handleCheckPasswordChange}
					/>
				</Box>
				<Button
					className={classes.button}
					variant="outlined"
					color="primary"
					onClick={handleAuthClick}
				>
					Sign Up
				</Button>
			</Paper>
		</Page>
	);
};
export default AuthPage;
