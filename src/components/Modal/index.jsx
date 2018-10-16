import React, {Component} from "react";
import {FaTimesCircle} from "react-icons/fa";

/* Components */
import "./style.scss";

/****
 * FIXME:
 * MODAL ERRADO
 */

class Modal extends Component {
	modalElement = React.createRef();

	state = {
		isVisible: false
	};

	closeModal = e => {
		this.setState({isVisible: false});
	};

	componentWillReceiveProps(newProps) {
		if (newProps.isVisible === true) {
			this.setState({isVisible: true});
		}
	}

	render() {
		return (
			<div
				ref={this.modalElement}
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
