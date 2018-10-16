export const isAuthenticated = () => {
	if (localStorage.getItem("@MOVIES:token") !== null) {
		return true;
	}

	return false;
};

export const getUser = () => {
	return localStorage.getItem("@MOVIES:user");
};
