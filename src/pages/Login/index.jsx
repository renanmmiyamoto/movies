import React, {Component} from "react";

/* Components */
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";

/* Others */
import {FaEnvelope, FaKey, FaUser, FaCalendar, FaMobile} from "react-icons/fa";
import {Wave} from "../../components/Svg";
import "./style.scss";
import api from "../../services/api";

import Modal from "../../components/Modal";
import Loading from "../../components/Svg/Loading";

class LoginPage extends Component {
	state = {
		errorMessage: "",
		errorModal: "",
		login: {
			email: "",
			password: ""
		},
		currentForm: 0,
		modalForgotPassword: false,
		modalResetPassword: false,
		resetPassword: {
			email: "",
			password: "",
			token: ""
		},
		loading: false,
		register: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
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

			this.setState({
				loading: false
			});
		} catch (response) {
			this.setState({
				errorMessage: response.data.error,
				loading: false
			});

			if (response.data.error === "Invalid password") {
				e.target[1].classList.remove("valid-value");
				e.target[1].classList.add("invalid-value");
			}
		}
	};

	submitLogin = e => {
		if (this.state.login.email === "" || this.state.login.password === "") {
			e.target[0].classList.add("invalid-value");
			e.target[1].classList.add("invalid-value");
			this.setState({
				errorMessage: "Todos os campos são obrigatórios"
			});
		} else {
			e.target[0].classList.add("valid-value");
			e.target[1].classList.add("valid-value");
			this.setState({
				errorMessage: "",
				loading: true
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
			await api.post("/auth/forgot_password", {
				email: this.state.resetPassword.email
			});

			this.setState({
				loading: false,
				modalForgotPassword: false,
				modalResetPassword: true,
				errorModal: ""
			});
		} catch (response) {
			this.setState({
				loading: false,
				errorModal: response.data.error
			});
		}
	};

	resetPassword = async e => {
		console.log(e);

		try {
			await api.post("/auth/reset_password", {
				email: this.state.resetPassword.email,
				password: this.state.resetPassword.password,
				token: this.state.resetPassword.token
			});

			this.setState({
				loading: false,
				modalResetPassword: false,
				errorModal: "",
				resetPassword: {
					email: "",
					password: "",
					token: ""
				}
			});
		} catch (response) {
			this.setState({errorModal: response.data.error});
		}
	};

	do_signUp = async () => {
		try {
			const response = await api.post("/auth/register", {
				name: this.state.register.name,
				email: this.state.register.email,
				password: this.state.register.password
			});

			const {user, token} = response.data;

			console.log(user);
			console.log(token);

			this.setState({
				loading: false
			});
		} catch (response) {
			console.log(response);

			this.setState({
				errorMessage: response.data.error,
				loading: false
			});
		}
	};

	submitSignUp = e => {
		if (
			this.state.register.email === "" ||
			this.state.register.password === ""
		) {
			e.target[0].classList.add("invalid-value");
			e.target[1].classList.add("invalid-value");
			e.target[2].classList.add("invalid-value");
			e.target[3].classList.add("invalid-value");
			this.setState({
				loading: false,
				errorMessage: "Todos os campos são obrigatórios"
			});
		} else if (
			this.state.register.password !== this.state.register.confirmPassword
		) {
			e.target[2].classList.remove("valid-value");
			e.target[3].classList.remove("valid-value");
			e.target[2].classList.add("invalid-value");
			e.target[3].classList.add("invalid-value");
			this.setState({
				loading: false,
				errorMessage: "The passwords do not match"
			});
		} else {
			e.target[0].classList.add("valid-value");
			e.target[1].classList.add("valid-value");
			e.target[2].classList.add("valid-value");
			e.target[3].classList.add("valid-value");
			this.setState({
				errorMessage: "",
				loading: true
			});

			this.do_signUp(e);
		}
	};

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

						<form
							className="login"
							onSubmit={e => {
								e.preventDefault();
								this.submitLogin(e);
							}}
						>
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
								name="Password"
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
									e.preventDefault();
									this.setState({modalForgotPassword: true});
								}}
							>
								Forgot password?
							</a>

							{this.state.errorMessage && (
								<label className="errorMessage">
									{this.state.errorMessage}
								</label>
							)}

							<Wave />

							<Button type="submit" text="Login" />
						</form>
					</section>

					<section
						className={`sec-sign-up ${
							this.state.currentForm === 1 ? "current" : ""
						}`}
					>
						<h2 onClick={this.chageForm.bind(this, 1)}>Sign Up</h2>

						<form
							className="sign-up"
							onSubmit={e => {
								e.preventDefault();
								this.setState({loading: true});
								this.submitSignUp(e);
							}}
						>
							<Input
								type="text"
								name="Nome Completo"
								icon={<FaUser />}
								value={this.state.register.name}
								field="name"
								onChange={e => {
									this.setState({
										register: {
											...this.state.register,
											name: e.target.value
										}
									});
								}}
							/>

							<Input
								type="text"
								name="E-mail"
								icon={<FaEnvelope />}
								value={this.state.register.email}
								field="email"
								onChange={e => {
									this.setState({
										register: {
											...this.state.register,
											email: e.target.value
										}
									});
								}}
							/>

							<Input
								type="password"
								name="Password"
								icon={<FaKey />}
								value={this.state.register.password}
								field="password"
								onChange={e => {
									this.setState({
										register: {
											...this.state.register,
											password: e.target.value
										}
									});
								}}
							/>

							<Input
								type="password"
								name="Confirm Password"
								icon={<FaKey />}
								value={this.state.register.confirmPassword}
								field="password"
								onChange={e => {
									this.setState({
										register: {
											...this.state.register,
											confirmPassword: e.target.value
										}
									});
								}}
							/>

							<Input
								type="number"
								name="Birth Date"
								icon={<FaCalendar />}
								value={this.state.register.bornDate}
								field="date"
								onChange={e => {
									this.setState({
										register: {
											...this.state.register,
											bornDate: e.target.value
										}
									});
								}}
							/>

							<Input
								type="number"
								name="Cellphone"
								icon={<FaMobile />}
								value={this.state.register.phone}
								field="date"
								onChange={e => {
									this.setState({
										register: {
											...this.state.register,
											phone: e.target.value
										}
									});
								}}
							/>

							{this.state.errorMessage && (
								<label className="errorMessage">
									{this.state.errorMessage}
								</label>
							)}

							<Wave />

							<Button type="submit" text="Sign Up" />
						</form>
					</section>

					<span className="arrow-select-current" />
				</main>

				<Modal isVisible={this.state.modalForgotPassword}>
					<h2>Forgot Password</h2>

					<p>Type your e-mail to reset password.</p>

					<form
						onSubmit={e => {
							this.setState({loading: true});
							this.forgotPassword(e);
						}}
					>
						<Input
							type="text"
							name="E-mail"
							icon={<FaEnvelope />}
							value={this.state.resetPassword.email}
							field="email"
							onChange={e => {
								this.setState({
									resetPassword: {
										...this.state.resetPassword,
										email: e.target.value
									}
								});
							}}
						/>

						{this.state.errorModal && (
							<label className="errorMessage">
								{this.state.errorModal}
							</label>
						)}

						<Button type="submit" text="OK" />
					</form>
				</Modal>

				<Modal isVisible={this.state.modalResetPassword}>
					<h2>Reset Password</h2>

					<p>
						We send a e-mail to {this.state.resetPassword.email}{" "}
						with a token. Please, fill in the fields below to reset
						your password.
					</p>

					<form
						onSubmit={e => {
							e.preventDefault();
							this.setState({loading: true});
							this.resetPassword(e);
						}}
					>
						<Input
							type="password"
							name="Nova senha"
							icon={<FaKey />}
							value={this.state.resetPassword.password}
							field="password"
							onChange={e => {
								this.setState({
									resetPassword: {
										...this.state.resetPassword,
										password: e.target.value
									}
								});
							}}
						/>

						<Input
							type="text"
							name="Token"
							icon={<FaKey />}
							value={this.state.resetPassword.token}
							field="token"
							onChange={e => {
								this.setState({
									resetPassword: {
										...this.state.resetPassword,
										token: e.target.value
									}
								});
							}}
						/>

						{this.state.errorModal && (
							<label className="errorMessage">
								{this.state.errorModal}
							</label>
						)}

						<Button type="submit" text="Resetar senha" />
					</form>
				</Modal>

				<Loading isVisible={this.state.loading} />
			</div>
		);
	}
}

export default LoginPage;
