import React, {Component} from "react";
import {FaTimesCircle} from "react-icons/fa";

/* Components */
import "./style.scss";

class Modal extends Component {
	state = {
		isVisible: this.props.isVisible
	};

	componentWillReceiveProps(nextProps) {
		this.setState({isVisible: nextProps.isVisible});
	}

	closeModal = () => {
		this.setState({isVisible: !this.props.isVisible});
	};

	render() {
		return (
			<div
				className={`modal ${this.state.isVisible ? " is-visible" : ""}`}
			>
				<button className="close-modal" onClick={this.closeModal}>
					<FaTimesCircle />
				</button>

				<div className="container">{this.props.children}</div>
			</div>
		);
	}
}

export default Modal;
