import React from "react";

const ArrowCurrentPage = () => (
	<svg viewBox="0 0 268.832 268.832" xmlns="http://www.w3.org/2000/svg">
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
			d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5 c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678 c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z"
		/>
	</svg>
);

export default ArrowCurrentPage;
