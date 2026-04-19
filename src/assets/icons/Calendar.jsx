import React from 'react';

export default function Calendar(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"
			></path>
			<path fill="currentColor" d="M5 5h14v3h-14Z"></path>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			>
				<path d="M7 4v-2M17 4v-2"></path>
				<path d="M7 11h10"></path>
				<path d="M7 15h7"></path>
			</g>
		</svg>
	);
}
