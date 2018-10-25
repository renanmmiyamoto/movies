import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import "./style.scss";
import {
	FaStar,
	FaList,
	FaCompass,
	FaFilm,
	FaUsers,
	FaPowerOff
} from "react-icons/fa";

import profile from "./profile.jpg";
import Loading from "../../components/Svg/Loading";

import {isAuthenticated, getUser} from "../../services/auth";

class MenuSite extends Component {
	state = {
		loading: false,
		user: getUser()
	};

	logout = e => {
		e.preventDefault();

		localStorage.removeItem("@MOVIES:user");
		localStorage.removeItem("@MOVIES:token");

		this.setState({loading: true});
	};

	render() {
		const template = (
			<div className={this.props.className}>
				<nav>
					<section className="profile">
						<figure>
							<img src={profile} alt="Profile" />
						</figure>

						<div>
							<p className="name">{this.state.user.name}</p>
							<p className="email">{this.state.user.email}</p>
						</div>
					</section>

					<div>
						<a href="/home" title="Favorites">
							<FaStar />
							<span>Favorites</span>
						</a>

						<a href="/home" title="Watchlist">
							<FaList />
							<span>Watchlist</span>
						</a>

						<a href="/home" title="Discover">
							<FaCompass />
							<span>Discover</span>
						</a>

						<a href="/genres" title="Genres">
							<FaFilm />
							<span>Genres</span>
						</a>

						<a href="/home" title="Actors">
							<FaUsers />
							<span>Actors</span>
						</a>
					</div>

					<a href="/" title="Log Out" onClick={e => this.logout(e)}>
						<FaPowerOff />
						<span>Log Out</span>
					</a>
				</nav>

				<Loading isVisible={this.state.loading} />
			</div>
		);

		if (!isAuthenticated()) {
			return <Redirect to="/" />;
		} else {
			return template;
		}
	}
}

export default MenuSite;
