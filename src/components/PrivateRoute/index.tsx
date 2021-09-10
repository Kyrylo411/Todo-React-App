import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export type ProtectedRouteProps = {
	isAuthenticated: boolean;
} & RouteProps;

const ProtectedRoute: FC<ProtectedRouteProps> = ({
	component: Component,
	isAuthenticated,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return isAuthenticated ? (
					<Component {...props} {...rest} />
				) : (
					<Redirect to="/auth" />
				);
			}}
		/>
	);
};

export default ProtectedRoute;
