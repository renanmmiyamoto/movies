import React, {Component} from "react";

/* Components */
import Input, {validateEmail} from "~/components/Form/Input";
import Button from "~/components/Form/Button";

/* Others */
import {FaEnvelope, FaKey, FaUser} from "react-icons/fa";
import "./style.scss";

class LoginPage extends Component {
	state = {
		errorMessage: "",
		login: {
			email: "",
			password: ""
		},
		currentForm: 0
	};

	submitForm = e => {
		e.persist();
		e.preventDefault();

		if (this.state.login.email === "" || this.state.login.password === "") {
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
		}
	};

	chageForm = () => {};

	render() {
		return (
			<div>
				<header>
					<h1>Movies</h1>
				</header>

				<main>
					<section className="sec-login">
						<h2>Login</h2>

						<form className="login" onSubmit={this.submitForm}>
							<Input
								type="text"
								name="E-mail"
								icon={<FaEnvelope />}
								value={this.state.login.email}
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
								onChange={e => {
									this.setState({
										login: {
											...this.state.login,
											password: e.target.value
										}
									});
								}}
							/>

							<a href="">Forgot password?</a>

							{this.state.errorMessage && (
								<label className="errorMessage">
									{this.state.errorMessage}
								</label>
							)}

							<Button type="sumbit" text="Login" />
						</form>
					</section>

					<section className="sec-sign-up">
						<h2 onClick={this.chageForm}>Sign Up</h2>

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
						</form>
					</section>

					<span className="arrow-select-current" />
				</main>
			</div>
		);
	}
}

export default LoginPage;
