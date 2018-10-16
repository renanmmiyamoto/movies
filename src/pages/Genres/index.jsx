import React, {Component} from "react";

import Page from "../Default";

import apiMovies from "../../services/api_movies";

import "./style.scss";

class Genres extends Component {
	state = {
		errorMessage: "",
		errorModal: "",
		genres: [],
		loading: false
	};

	async componentWillMount() {
		this.setState({loading: true});

		try {
			const response = await apiMovies.get("/genre/movie/list", {});

			this.setState({
				genres: response.data.genres
			});
		} catch (error) {
			this.setState({errorMessage: error.data.status_message});
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({loading: false});
		}, 3000);
	}

	render() {
		return (
			<Page currentPage="genres" loading={this.state.loading}>
				<section className="list-genres">
					{this.state.genres.map(genre => (
						<article key={genre.id}>{genre.name}</article>
					))}
				</section>
			</Page>
		);
	}
}

export default Genres;
