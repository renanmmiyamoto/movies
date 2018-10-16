import React, {Component} from "react";
import {FaStream, FaSearch} from "react-icons/fa";

import MenuSite from "../../components/MenuSite";
import Loading from "../../components/Svg/Loading";

import {isAuthenticated} from "../../services/auth";

class Page extends Component {
	state = {
		errorMessage: "",
		errorModal: "",
		loading: false,
		menuIsOpen: false
	};

	componentWillMount() {
		this.setState({loading: true});
	}

	componentDidMount() {
		this.setState({loading: false});
	}

	render() {
		return (
			<div className={`page-${this.props.currentPage}`}>
				{isAuthenticated() && (
					<MenuSite
						className={`menu-site ${
							this.state.menuIsOpen ? "is-visible" : ""
						}`}
					/>
				)}

				<div
					className="content"
					onClick={() => {
						if (this.state.menuIsOpen) {
							this.setState({menuIsOpen: false});
						}
					}}
				>
					<header>
						{isAuthenticated() && (
							<FaStream
								onClick={() => {
									this.setState({menuIsOpen: true});
								}}
							/>
						)}

						<h1>Movies</h1>

						{isAuthenticated() && <FaSearch />}
					</header>

					<main>{this.props.children}</main>
				</div>

				<Loading isVisible={this.props.loading} />
			</div>
		);
	}
}

export default Page;
