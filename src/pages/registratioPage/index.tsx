import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Page from '../../components/Page';
import CustomInput from '../../components/CustomInput';
import { Button, Box, Paper, CircularProgress } from '@material-ui/core';
import { useStyles } from './styles';
import { registrationRequest } from '../../redux/actions/actionCreators/authActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLoading } from '../../redux/selectors/auth';

const AuthPage: FC = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState('');
	const history = useHistory();
	const classes = useStyles();
	const dispatch = useDispatch();
	const loading = useSelector(AuthLoading);
	const disabled = !(
		login &&
		password &&
		checkPassword &&
		password === checkPassword
	);

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
		if (login && password) {
			dispatch(
				registrationRequest({
					data: { login, password },
					callback: () => history.push('/login'),
				}),
			);
			setLogin('');
			setPassword('');
			setCheckPassword('');
		}
	};

	return (
		<Page>
			{loading ? (
				<CircularProgress />
			) : (
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
						disabled={disabled}
					>
						Sign Up
					</Button>
				</Paper>
			)}
		</Page>
	);
};
export default AuthPage;
