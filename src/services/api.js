import {create} from "apisauce";

const api = create({
	baseURL: "http://localhost:3001/api"
});

api.addResponseTransform(response => {
	if (!response.ok) throw response;
});

export default api;
