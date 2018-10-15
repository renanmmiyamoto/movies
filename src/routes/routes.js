import LoginPage from "../pages/Login";
import Home from "../pages/Home";

export const publicRoutes = [
	{
		path: "/",
		name: "Login",
		component: LoginPage
	},
	{
		path: "/home",
		name: "Home",
		component: Home
	}
];
