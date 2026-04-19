import React from 'react';

export default function Vaccine(props) {
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
				d="m17 3l4 4m-2-2l-4.5 4.5m-3-3l6 6m-1-1L10 18H6v-4l6.5-6.5m-5 5L9 14m1.5-4.5L12 11M3 21l3-3"
			></path>
		</svg>
	);
}
