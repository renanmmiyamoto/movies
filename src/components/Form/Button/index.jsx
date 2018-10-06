import React from "react";
import "./style.scss";

const Button = ({type, className, text}) => (
	<div className="button-container">
		<button type={type} className={className}>
			<span>{text}</span>
		</button>
	</div>
);

export default Button;
