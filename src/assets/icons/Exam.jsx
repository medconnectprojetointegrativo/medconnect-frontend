import React from 'react';

export default function Exam(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24px"
			height="24px"
			viewBox="0 0 48 48"
			{...props}
		>
			<defs>
				<mask id="SVGCc0HrtcT">
					<g
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={4}
					>
						<path
							fill="#fff"
							stroke="#fff"
							d="M39 4H11a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
						></path>
						<path stroke="#000" d="M17 30h14m-14 6h7"></path>
						<path
							fill="#fff"
							stroke="#000"
							d="M17 12h14v10H17z"
						></path>
					</g>
				</mask>
			</defs>
			<path
				fill="currentColor"
				d="M0 0h48v48H0z"
				mask="url(#SVGCc0HrtcT)"
			></path>
		</svg>
	);
}
