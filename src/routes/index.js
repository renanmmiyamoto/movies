import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {publicRoutes} from "./routes";
import config from "../config";

import {isAuthenticated} from "../services/auth";

const PrivateRoute = ({component: Component, ...rest}) => (
	<Route
		{...rest}
		render={props =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{pathname: "/", state: {from: props.location}}} />
			)
		}
	/>
);

const Routes = () => (
	<BrowserRouter basename={config.base_url}>
		<Switch>
			{publicRoutes.map(
				route =>
					route.isPrivate ? (
						<PrivateRoute key={route.path} {...route} exact />
					) : (
						<Route key={route.path} {...route} exact />
					)
			)}
		</Switch>
	</BrowserRouter>
);

export default Routes;
