import React, {Component} from "react";
import {FaEnvelope, FaKey, FaTimesCircle} from "react-icons/fa";

/* Components */
import Input from "~/components/Form/Input";
import Button from "~/components/Form/Button";
import "./style.scss";

class Modal extends Component {
	state = {
		user: {
			email: "",
			password: "",
			token: ""
		},
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

				<div className="container">
					<h2>Título do modal</h2>

					<p>
						Enviamos um e-mail para você com um token. Digite-o no
						campo abaixo para resetar sua senha.
					</p>

					<form
						onSubmit={e => {
							this.props.submitForm(e);
						}}
					>
						<Input
							type="text"
							name="E-mail"
							icon={<FaEnvelope />}
							value={this.state.user.email}
							field="email"
							onChange={e => {
								this.setState({
									login: {
										...this.state.user,
										email: e.target.value
									}
								});
							}}
						/>

						<Input
							type="password"
							name="Senha"
							icon={<FaKey />}
							value={this.state.user.password}
							field="email"
							onChange={e => {
								this.setState({
									login: {
										...this.state.user,
										password: e.target.value
									}
								});
							}}
						/>

						<Input
							type="text"
							name="Token"
							icon={<FaKey />}
							value={this.state.user.token}
							field="token"
							onChange={e => {
								this.setState({
									login: {
										...this.state.user,
										token: e.target.value
									}
								});
							}}
						/>

						<Button type="sumbit" text="Resetar senha" />
					</form>
				</div>
			</div>
		);
	}
}

export default Modal;
