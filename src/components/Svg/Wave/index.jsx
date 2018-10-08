import React from "react";

const Wave = () => (
	<svg
		className="wave-bottom"
		viewBox="0 0 300 110"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient id="gradientWave" x1="0%" y1="0%" x2="100%" y2="0%">
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
		<path
			fill="url(#gradientWave)"
			d="M 0 50 Q 40 10 90 40 Q 160 80 220 70 Q 270 60 300 30 L 300 150 L 0 150 L 0 50"
		/>
	</svg>
);

export default Wave;
