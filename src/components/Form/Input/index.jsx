import React, {Component} from "react";

class Input extends Component {
	render() {
		return (
			<label>
				<p>{this.props.name}</p>
				{this.props.icon}
				<input
					type={this.props.type}
					className={this.props.className}
				/>
			</label>
		);
	}
}

export default Input;
