import React from "react";
import "./style.scss";

const Button = ({type, className, text}) => (
	<div className="button-container">
		<button type={type} className={className}>
			{text}
		</button>
	</div>
);

export default Button;
