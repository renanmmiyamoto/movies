import React, {Component} from "react";
import apiMovies from "../../services/api_movies";
import "./styles.scss";

class ListMovies extends Component {
	state = {
		paramsMovies: this.props.paramsMovies,
		movies: [],
		infoResults: {}
	};

	componentDidMount() {
		this.getMovies();
	}

	getMovies = async () => {
		try {
			const response = await apiMovies.get("/discover/movie", {
				...this.state.paramsMovies
			});

			console.log(response.data);

			const {results, ...infoResults} = response.data;

			this.setState({
				movies: results,
				infoResults
			});

			console.log(this.state.movies);
			console.log(this.state.infoResults);
		} catch (error) {
			this.setState({errorMessage: error.data.status_message});
		}
	};

	render() {
		const {movies} = this.state;

		return (
			<section className="list-movies">
				{movies.map(movie => (
					<article key={movie.id} className="item">
						<img
							src={`https://image.tmdb.org/t/p/w500/${
								movie.poster_path
							}`}
							alt={movie.title}
						/>
						<h2>{movie.title}</h2>
					</article>
				))}
			</section>
		);
	}
}

export default ListMovies;
