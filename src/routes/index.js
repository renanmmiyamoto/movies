import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {publicRoutes} from "./routes";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			{publicRoutes.map(route => (
				<Route key={route.path} {...route} exact />
			))}
		</Switch>
	</BrowserRouter>
);

export default Routes;
