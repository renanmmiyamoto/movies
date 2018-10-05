import React, {Component} from "react";

import "./style.scss";

class Input extends Component {
	state = {
		className: !!this.props.className ? this.props.className : ""
	};

	changeValue = e => {
		let classes = !!this.props.className ? this.props.className : "";
		classes += e.target.value.length > 0 ? " has-value" : "";

		if (e.target.classList.contains("invalid-value")) {
			e.target.classList.remove("invalid-value");
		}

		this.setState({className: classes});
	};

	render() {
		return (
			<label>
				<input
					type={this.props.type}
					className={this.state.className}
					onChange={e => {
						this.changeValue(e);
						this.props.onChange(e);
					}}
				/>
				<p>{this.props.name}</p>
				{this.props.icon}
			</label>
		);
	}
}

export function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export default Input;
