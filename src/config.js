const dataConfig = {
	dev: {
		base_url: "/"
	},
	prod: {
		base_url: "/movies/build"
	}
};

const config = {
	base_url:
		document.location.hostname.indexOf("localhost") !== -1
			? dataConfig.dev.base_url
			: dataConfig.prod.base_url
};

export default config;
