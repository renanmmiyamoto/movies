import React, {Component} from "react";
import {Link} from "react-router-dom";

import Page from "../Default";
import ListMovies from "../../components/ListMovies";
import apiMovies from "../../services/api_movies";
import "./style.scss";

class Genres extends Component {
	state = {
		errorMessage: "",
		errorModal: "",
		genres: [],
		loading: false
	};

	componentWillMount() {
		const {id} = this.props.match.params;

		if (!id) {
			this.listGenres();
		}
	}

	componentDidMount() {
		this.setState({loading: false});
	}

	listGenres = async () => {
		this.setState({loading: true});

		try {
			const response = await apiMovies.get("/genre/movie/list", {});

			this.setState({
				genres: response.data.genres
			});
		} catch (error) {
			this.setState({errorMessage: error.data.status_message});
		}
	};

	render() {
		const {loading, genres} = this.state;

		if (this.props.match.params.id) {
			return (
				<Page currentPage="genres" loading={loading}>
					<ListMovies
						paramsMovies={{
							with_genres: this.props.match.params.id
						}}
					/>

					{this.state.errorMessage && (
						<p className="errorMessage">
							{this.state.errorMessage}
						</p>
					)}
				</Page>
			);
		} else {
			return (
				<Page currentPage="genres" loading={loading}>
					<section className="list-genres">
						{genres.map(genre => (
							<Link key={genre.id} to={`/genres/${genre.id}`}>
								{genre.name}
							</Link>
						))}
					</section>

					{this.state.errorMessage && (
						<p className="errorMessage">
							{this.state.errorMessage}
						</p>
					)}
				</Page>
			);
		}
	}
}

export default Genres;
