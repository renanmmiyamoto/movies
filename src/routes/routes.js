import LoginPage from "../pages/Login";
import Home from "../pages/Home";
import Genres from "../pages/Genres";

export const publicRoutes = [
	{
		path: "/",
		name: "Login",
		component: LoginPage,
		isPrivate: false
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
		isPrivate: true
	},
	{
		path: "/genres",
		name: "Genres",
		component: Genres,
		isPrivate: true
	},
	{
		path: "/genres/:id/:name",
		name: "Genres",
		component: Genres,
		isPrivate: true
	}
];
