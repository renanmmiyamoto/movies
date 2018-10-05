import React, {Component} from "react";

/* Components */
import Input from "~/components/Form/Input";
import Button from "~/components/Form/Button";

/* Others */
import {FaEnvelope, FaKey, FaUser} from "react-icons/fa";

class LoginPage extends Component {
	render() {
		return (
			<div>
				<header>
					<h1>Movies</h1>
				</header>

				<main>
					<section className="current">
						<h2>Login</h2>

						<form className="login">
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

							<Button type="sumbit" text="Login" />
						</form>
					</section>

					<section>
						<h2>Sign Up</h2>

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
				</main>
			</div>
		);
	}
}

export default LoginPage;
