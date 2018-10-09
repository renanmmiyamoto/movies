import React, {Component} from "react";

import "./style.scss";

class Loading extends Component {
	render() {
		return (
			<div
				className={`loading ${
					this.props.isVisible === true ? "is-visible" : ""
				}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
					preserveAspectRatio="xMidYMid"
					className="lds-rolling"
					style={{background: "none"}}
				>
					<defs>
						<linearGradient
							id="gradientWave"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop
								offset="0%"
								style={{
									stopColor: "#b06fc7",
									stopOpacity: 1
								}}
							/>
							<stop
								offset="100%"
								style={{
									stopColor: "#6a9af5",
									stopOpacity: 1
								}}
							/>
						</linearGradient>
					</defs>
					<circle
						cx="50"
						cy="50"
						fill="none"
						ng-attr-stroke="{{config.color}}"
						ng-attr-stroke-width="{{config.width}}"
						ng-attr-r="{{config.radius}}"
						ng-attr-stroke-dasharray="{{config.dasharray}}"
						stroke="url(#gradientWave)"
						strokeWidth="10"
						r="35"
						strokeDasharray="164.93361431346415 56.97787143782138"
						transform="rotate(47.6381 50 50)"
					>
						<animateTransform
							attributeName="transform"
							type="rotate"
							calcMode="linear"
							values="0 50 50;360 50 50"
							keyTimes="0;1"
							dur="1s"
							begin="0s"
							repeatCount="indefinite"
						/>
					</circle>
				</svg>
			</div>
		);
	}
}

export default Loading;
