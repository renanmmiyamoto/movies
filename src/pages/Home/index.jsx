import React, {Component} from "react";
import "./style.scss";
import {FaBars, FaUser} from "react-icons/fa";
import apiMovies from "../../services/api_movies";

import Loading from "../../components/Svg/Loading";

class Home extends Component {
	state = {
		errorMessage: "",
		errorModal: "",
		loading: false,
		genres: []
	};

	async componentWillMount() {
		this.setState({loading: true});

		try {
			const response = await apiMovies.get("/genre/movie/list", {});

			this.setState({
				loading: false,
				genres: response.data.genres
			});
		} catch (error) {
			this.setState({errorMessage: error.data.status_message});
		}
	}

	render() {
		return (
			<div className="page-home">
				<header>
					<FaBars />
					<h1>Movies</h1>
					<FaUser />
				</header>

				<main>
					<section className="sec-genres">
						{this.state.genres.map(genre => (
							<article key={genre.id}>{genre.name}</article>
						))}
					</section>
				</main>

				<Loading isVisible={this.state.loading} />
			</div>
		);
	}
}

export default Home;
