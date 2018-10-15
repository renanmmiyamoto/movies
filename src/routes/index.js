import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {publicRoutes} from "./routes";
import config from "../config";

const Routes = () => (
	<BrowserRouter basename={config.base_url}>
		<Switch>
			{publicRoutes.map(route => (
				<Route key={route.path} {...route} exact />
			))}
		</Switch>
	</BrowserRouter>
);

export default Routes;
