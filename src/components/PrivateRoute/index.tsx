import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { IsLogedIn } from '../../selectors/auth';

export type ProtectedRouteProps = {
	component: React.ReactNode;
} & RouteProps;

const ProtectedRoute: FC<ProtectedRouteProps> = ({
	component: Component,
	...rest
}) => {
	const isLogedIn = useSelector(IsLogedIn);
	return (
		<Route
			{...rest}
			render={(props) => {
				return isLogedIn ? (
					<Component {...props} {...rest} />
				) : (
					<Redirect to="/auth" />
				);
			}}
		/>
	);
};

export default ProtectedRoute;
