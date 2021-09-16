import React, { FC, useState } from 'react';
import { Box, Button, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import Page from '../../components/Page';
import CustomInput from '../../components/CustomInput';
import { useDispatch } from 'react-redux';
import { logInRequest } from '../../redux/actions/actionCreators/authActionCreators';
import { useHistory } from 'react-router-dom';

const LoginPage: FC = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const handlePasswordChange = (value: string) => {
		setPassword(value);
	};

	const handleLoginChange = (value: string) => {
		setLogin(value);
	};
	const hadleLoginClick = async (): Promise<void> => {
		dispatch(logInRequest({ login, password }));
		setLogin('');
		setPassword('');
		history.push('/todos');
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
				</Box>
				<Button
					className={classes.button}
					variant="outlined"
					color="primary"
					onClick={hadleLoginClick}
				>
					Sign In
				</Button>
			</Paper>
		</Page>
	);
};
export default LoginPage;
