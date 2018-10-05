import React from "react";

const Button = ({type, className, text}) => (
	<button type={type} className={className}>
		{text}
	</button>
);

export default Button;
