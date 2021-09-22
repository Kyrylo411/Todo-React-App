import React, { FC } from 'react';
import { Form, Field } from 'react-final-form';

import { useHistory } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { Button, Box, Paper, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStyles } from './styles';
import { registrationRequest } from '../../redux/actions/actionCreators/authActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { AuthError, AuthLoading } from '../../redux/selectors/auth';
import { IErrors, IValues } from '../../interfaices/auth';
import { useTheme } from '../../components/ThemeProvider';
import Page from '../../components/Page';

const AuthPage: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(AuthLoading);
  const errorMessage = useSelector(AuthError);

  const handleAuthClick = async (values: IValues): Promise<void> => {
    dispatch(
      registrationRequest({
        data: {
          login: values.login,
          password: values.password,
        },
        callback: () => history.push('/login'),
      }),
    );
  };

  return (
    <Page>
      {loading ? (
        <CircularProgress />
      ) : (
        <Form
          onSubmit={handleAuthClick}
          validate={(values: IValues) => {
            const errors: IErrors = {};
            if (!values.login) {
              errors.login = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            } else if (values.password.length <= 3) {
              errors.password = 'more than 3 symbols';
            }
            if (!values.confirm) {
              errors.confirm = 'Required';
            } else if (values.confirm !== values.password) {
              errors.confirm = 'Must match';
            }
            return errors;
          }}
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
                        {meta.error && meta.touched && (
                          <span className={classes.span}>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="confirm">
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
                              : 'Confirm password'
                          }
                          onChange={input.onChange}
                          onBlur={input.onBlur}
                        />
                        {meta.error && meta.touched && (
                          <span className={classes.span}>{meta.error}</span>
                        )}
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
                  Sign Up
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
export default AuthPage;
