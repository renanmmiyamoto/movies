import React, {Component} from "react";

import Page from "../Default";

import apiMovies from "../../services/api_movies";

import "./style.scss";

class Home extends Component {
	state = {
		errorMessage: "",
		errorModal: "",
		loading: false
	};

	render() {
		return (
			<Page currentPage="home" loading={this.state.loading}>
				<p>Em construção...</p>
			</Page>
		);
	}
}

export default Home;
