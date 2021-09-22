import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

type Props = {
  component: React.ReactNode;
  isLogedIn: boolean;
  redirectTo: string;
} & RouteProps;

const PrivateRoute: FC<Props> = ({
  component: Component,
  isLogedIn,
  redirectTo,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogedIn ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to={redirectTo} />
        );
      }}
    />
  );
};

export default PrivateRoute;
