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
	const sendToApi = async (data) => {
		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok) {
				onSuccess?.(result);
			} else {
				onError?.(result);
			}
		} catch (error) {
			console.error('Erro na submissão:', error);
			onError?.(error.message || 'Erro de rede');
		}
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData.entries());

		if (setExternalFormData) {
			setExternalFormData(data);
		}

		if (onSubmit) {
			onSubmit(data);
		}

		if (endpoint) {
			sendToApi(data);
		}
	};

	return (
		<form id={id} className={className} onSubmit={handleFormSubmit}>
			{children}
		</form>
	);
}
