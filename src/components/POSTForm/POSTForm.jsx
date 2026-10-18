import { useState } from 'react';

export default function POSTForm({
	endpoint,
	id,
	children,
	onSuccess,
	onError,
	className,
	onSubmit,
	setExternalFormData,
}) {
	return (
		<form id={id} className={className} onSubmit={onSubmit}>
			{children}
		</form>
	);
}
