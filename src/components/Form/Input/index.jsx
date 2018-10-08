import React, {Component} from "react";

import "./style.scss";

class Input extends Component {
	state = {
		className: !!this.props.className ? this.props.className : "",
		errorMessage: ""
	};

	changeValue = e => {
		let classes = !!this.props.className ? this.props.className : "";
		classes += e.target.value.length > 0 ? " has-value" : "";

		if (e.target.classList.contains("invalid-value")) {
			e.target.classList.remove("invalid-value");
		}

		this.setState({className: classes});
		this.setState({errorMessage: ""});
	};

	validateField = e => {
		const value = e.target.value;
		let error = {
			codResposta: 99,
			message: ""
		};

		switch (this.props.field) {
			case "email":
				if (!validateEmail(value)) {
					error.codResposta = 0;
					error.message = "E-mail inválido.";
				}
				break;
			case "password":
				if (value.length < 3) {
					error.codResposta = 0;
					error.message = "Senha com no mínimo 3 caracteres.";
				}
				break;

			default:
				error.codResposta = 99;
				error.message = "";
				break;
		}

		if (error.codResposta !== 99) {
			e.target.classList.add("invalid-value");
			this.setState({errorMessage: error.message});
		} else {
			e.target.classList.add("valid-value");
		}

		Array.from(e.target.form.elements).every(element => {
			if (element.tagName !== "BUTTON") {
				if (
					element.value === "" ||
					element.classList.contains("invalid-value")
				) {
					e.target.form
						.querySelector("button")
						.classList.add("disabled");
					return false;
				} else {
					e.target.form
						.querySelector("button")
						.classList.remove("disabled");
					return true;
				}
			} else {
				return false;
			}
		});
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
					field={this.props.field}
					onBlur={e => {
						this.props.field
							? this.validateField(e)
							: this.props.onBlur && this.props.onBlur(e);
						this.props.onBlur && this.props.onBlur(e);
					}}
				/>
				<p>{this.props.name}</p>
				{this.props.icon}

				{this.state.errorMessage && (
					<span className="error-field">
						{this.state.errorMessage}
					</span>
				)}
			</label>
		);
	}
}

export function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export default Input;
