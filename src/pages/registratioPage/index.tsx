import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../components/Page';
import CustomInput from '../../components/CustomInput';
import { Button, Box, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import { userRegistrationAction } from '../../redux/actions/actionCreators/authActionCreators';

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
	const handleAuthClick = () => {
		if (password === checkPassword && password && checkPassword && login) {
			dispatch(userRegistrationAction(login));
			history.push('/login');
		} else {
			alert('Check your login or password');
		}
		setLogin('');
		setPassword('');
		setCheckPassword('');
	};
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
