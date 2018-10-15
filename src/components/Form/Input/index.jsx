import React, {Component} from "react";

import "react-datepicker/dist/react-datepicker.css";
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
		} else if (e.target.classList.contains("valid-value")) {
			e.target.classList.remove("valid-value");
		}

		this.setState({className: classes});
		this.setState({errorMessage: ""});
	};

	maskedField = field => {
		let v = field.value;

		if (this.props.field === "date") {
			if (v.length === 2 || v.length === 5) {
				v = v + "/";
			}
		} else if (this.props.field === "phone") {
			if (v.length === 1) {
				v = "(" + v;
			}

			if (v.length === 3) {
				v = v + ") ";
				// length = 5
			}

			if (v.length === 10) {
				v = v + "-";
			}
		}

		field.value = v;
	};

	validateField = e => {
		const value = e.target.value;
		let error = {
			codResposta: 99,
			message: ""
		};

		if (value === "") {
			error.codResposta = 0;
			error.message = "Required field";
		} else {
			switch (this.props.field) {
				case "email":
					if (!validateEmail(value)) {
						error.codResposta = 0;
						error.message = "Invalid e-mail.";
					}
					break;
				case "password":
					if (value.length < 3) {
						error.codResposta = 0;
						error.message = "Password with at least 3 characters.";
					}
					break;
				case "confirm-password":
					if (value.length < 3) {
						error.codResposta = 0;
						error.message = "Password with at least 3 characters.";
					} else if (
						value !==
						e.target.parentNode.previousSibling.children[0].value
					) {
						error.codResposta = 0;
						error.message = "The passwords not macth";
					}
					break;
				case "date":
					if (!validateDate(value)) {
						error.codResposta = 0;
						error.message = "Invalid date.";
					}
					break;
				case "phone":
					if (!validatePhone(value)) {
						error.codResposta = 0;
						error.message = "Invalid phone number.";
					}
					break;

				default:
					error.codResposta = 99;
					error.message = "";
					break;
			}
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
					onKeyUp={e => {
						this.props.hasMask && this.maskedField(e.target);
					}}
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
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function validateDate(date) {
	const re = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
	return re.test(date);
}

export function validatePhone(phone) {
	const re = /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;
	return re.test(phone);
}

export default Input;
