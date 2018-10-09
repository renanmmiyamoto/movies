import React, {Component} from "react";

/* Components */
import Input, {validateEmail} from "~/components/Form/Input";
import Button from "~/components/Form/Button";

/* Others */
import {FaEnvelope, FaKey, FaUser} from "react-icons/fa";
import {Wave} from "~/components/Svg";
import "./style.scss";
import api from "~/services/api";

import Modal from "~/components/Modal";

class LoginPage extends Component {
	state = {
		errorMessage: "",
		login: {
			email: "",
			password: ""
		},
		currentForm: 0,
		modalVisible: false,
		resetPassword: {
			email: "",
			password: "",
			token: ""
		}
	};

	do_login = async e => {
		try {
			const response = await api.post("/auth/authenticate", {
				email: this.state.login.email,
				password: this.state.login.password
			});

			const {user, token} = response.data;

			console.log(user);
			console.log(token);
		} catch (response) {
			this.setState({errorMessage: response.data.error});

			if (response.data.error === "Invalid password") {
				e.target[1].classList.remove("valid-value");
				e.target[1].classList.add("invalid-value");
			}
		}
	};

	submitForm = e => {
		e.persist();
		e.preventDefault();

		if (this.state.login.email === "" || this.state.login.password === "") {
			e.target[0].classList.add("invalid-value");
			e.target[1].classList.add("invalid-value");
			this.setState({
				errorMessage: "Todos os campos são obrigatórios"
			});
		} else if (!validateEmail(this.state.login.email)) {
			this.setState({
				errorMessage: "E-mail inválido"
			});
			e.target[0].classList.add("invalid-value");
		} else if (this.state.login.password.length < 3) {
			e.target[0].classList.add("valid-value");
			e.target[1].classList.add("invalid-value");
			this.setState({
				errorMessage: "Senha com no mínimo 3 caracteres"
			});
		} else {
			e.target[0].classList.add("valid-value");
			e.target[1].classList.add("valid-value");
			this.setState({
				errorMessage: ""
			});

			this.do_login(e);
		}
	};

	chageForm = index => {
		this.setState({currentForm: index});
	};

	forgotPassword = async e => {
		e.persist();
		e.preventDefault();
		try {
			const response = await api.post("/auth/forgot_password", {
				email: this.state.login.email
			});

			console.log(response);

			this.setState({modalVisible: true});
		} catch (response) {
			this.setState({errorMessage: response.data.error});
		}
	};

	resetPassword = async e => {
		e.persist();
		e.preventDefault();

		try {
			const response = await api.post("/auth/reset_password", {
				email: this.state.resetPassword.email,
				password: this.state.resetPassword.password,
				token: this.state.resetPassword.token
			});

			console.log(response);
		} catch (response) {
			this.setState({errorMessage: response.data.error});
		}
	};

	componentWillUpdate(toUptade) {
		console.log(this.state.resetPassword);
	}

	render() {
		return (
			<div>
				<header>
					<h1>Movies</h1>
				</header>

				<main>
					<section
						className={`sec-login ${
							this.state.currentForm === 0 ? "current" : ""
						}`}
					>
						<h2 onClick={this.chageForm.bind(this, 0)}>Login</h2>

						<form className="login" onSubmit={this.submitForm}>
							<Input
								type="text"
								name="E-mail"
								icon={<FaEnvelope />}
								value={this.state.login.email}
								field="email"
								onChange={e => {
									this.setState({
										login: {
											...this.state.login,
											email: e.target.value
										}
									});
								}}
							/>

							<Input
								type="password"
								name="Senha"
								icon={<FaKey />}
								value={this.state.login.password}
								field="password"
								onChange={e => {
									this.setState({
										login: {
											...this.state.login,
											password: e.target.value
										}
									});
								}}
							/>

							<a
								href="/"
								onClick={e => {
									this.forgotPassword(e);
								}}
							>
								Forgot password?
							</a>

							{this.state.errorMessage && (
								<label className="errorMessage">
									{this.state.errorMessage}
								</label>
							)}

							<Button type="sumbit" text="Login" />

							<Wave />
						</form>
					</section>

					<section
						className={`sec-sign-up ${
							this.state.currentForm === 1 ? "current" : ""
						}`}
					>
						<h2 onClick={this.chageForm.bind(this, 1)}>Sign Up</h2>

						<form className="sign-up">
							<Input
								type="text"
								name="Nome Completo"
								icon={<FaUser />}
							/>

							<Input
								type="text"
								name="E-mail"
								icon={<FaEnvelope />}
							/>

							<Input
								type="password"
								name="Senha"
								icon={<FaKey />}
							/>

							<Input
								type="password"
								name="Confirma senha"
								icon={<FaKey />}
							/>

							<Button type="sumbit" text="Sign Up" />

							<Wave />
						</form>
					</section>

					<span className="arrow-select-current" />
				</main>

				<Modal
					isVisible={this.state.modalVisible}
					submitForm={e => {
						this.resetPassword(e);
					}}
				/>
			</div>
		);
	}
}

export default LoginPage;
