import React, { FC, useCallback, memo } from 'react';
import { Form, Field } from 'react-final-form';

import { Box, Button, CircularProgress, Paper } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStyles } from './styles';
import CustomInput from '../../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { logInRequest } from '../../redux/actions/actionCreators/authActionCreators';
import { useHistory } from 'react-router-dom';
import { AuthError, AuthLoading } from '../../redux/selectors/auth';
import { IErrors, IValues } from '../../interfaices/auth';
import { useTheme } from '../../components/ThemeProvider';
import Page from '../../components/Page';

const LoginPage: FC = () => {
  const theme = useTheme();
  const loading = useSelector(AuthLoading);
  const classes = useStyles({ theme });
  const history = useHistory();
  const dispatch = useDispatch();

  const errorMessage = useSelector(AuthError);

  const handleLoginClick = useCallback((values: IValues) => {
    dispatch(
      logInRequest({
        data: { login: values.login.trim(), password: values.password },
        callback: () => history.push('/todos'),
      }),
    );
  }, []);

  const validation = (values: IValues) => {
    const errors: IErrors = {};
    if (!values.login) {
      errors.login = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  return (
    <Page>
      {loading ? (
        <CircularProgress />
      ) : (
        <Form
          onSubmit={handleLoginClick}
          validate={validation}
          render={({ handleSubmit }) => (
            <Paper className={classes.wrapper}>
              <form onSubmit={handleSubmit} className={classes.form}>
                <Box className={classes.inputWrapper}>
                  <Field name="login">
                    {({ input, meta }) => (
                      <div
                        className={
                          meta.error && meta.touched ? classes.error : ''
                        }
                      >
                        <CustomInput
                          type="text"
                          value={input.value}
                          placeholder={
                            meta.error && meta.touched ? 'Required!' : 'Login'
                          }
                          onChange={input.onChange}
                          onBlur={input.onBlur}
                        />
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {({ input, meta }) => (
                      <div
                        className={
                          meta.error && meta.touched ? classes.error : ''
                        }
                      >
                        <CustomInput
                          type="password"
                          value={input.value}
                          placeholder={
                            meta.error && meta.touched
                              ? 'Required!'
                              : 'Password'
                          }
                          onChange={input.onChange}
                          onBlur={input.onBlur}
                        />
                      </div>
                    )}
                  </Field>
                </Box>
                <Button
                  className={classes.button}
                  type="submit"
                  variant="outlined"
                  color="primary"
                >
                  Sign In
                </Button>
                {errorMessage ? (
                  <Alert severity="error">{errorMessage}</Alert>
                ) : null}
              </form>
            </Paper>
          )}
        />
      )}
    </Page>
  );
};
export default memo(LoginPage);
