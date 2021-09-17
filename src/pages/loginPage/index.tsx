import React, { FC, useState } from 'react';
import { Box, Button, CircularProgress, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import Page from '../../components/Page';
import CustomInput from '../../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { logInRequest } from '../../redux/actions/actionCreators/authActionCreators';
import { useHistory } from 'react-router-dom';
import { AuthLoading } from '../../redux/selectors/auth';

const LoginPage: FC = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const loading = useSelector(AuthLoading);
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const disabled = !(login && password);
	const handlePasswordChange = (value: string) => {
		setPassword(value);
	};

	const handleLoginChange = (value: string) => {
		setLogin(value);
	};
	const handleLoginClick = async (): Promise<void> => {
		dispatch(
			logInRequest({
				data: { login, password },
				callback: () => history.push('/todos'),
			}),
		);
		setLogin('');
		setPassword('');
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
					</Box>
					<Button
						className={classes.button}
						variant="outlined"
						color="primary"
						onClick={handleLoginClick}
						disabled={disabled}
					>
						Sign In
					</Button>
				</Paper>
			)}
		</Page>
	);
};
export default LoginPage;
