export const isAuthenticated = () => {
	if (localStorage.getItem("@MOVIES:token") !== null) {
		return true;
	}

	return false;
};

export const getUser = () => {
	return JSON.parse(localStorage.getItem("@MOVIES:user"));
};
