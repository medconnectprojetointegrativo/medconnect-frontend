// Style Import
import style from './RegisterPage.module.css';

// External Code Import
import { useEffect, useState } from 'react';

// Component Import
import POSTForm from '../../components/POSTForm/POSTForm';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import Button from '../../components/Button/Button';

export default function FormPage1({
	pageData,
	setPageData,
	activeStep,
	setActiveStep,
}) {
	const [localFormData, setLocalFormData] = useState(
		pageData.contact || {},
	);

	// Função de Validação (Será implementada no Back-End)
	function validateData(data) {
		setPageData({ ...pageData, contact: data });
		setLocalFormData(data);
		setActiveStep(activeStep + 1);
	}

	return (
		<section className={style.formSection}>
			<POSTForm
				id="contact_form"
				className={style.form}
				onSubmit={validateData}
				setExternalFormData={setLocalFormData}
			>
				<TextInput
					name="phone_number"
					placeholder="(**) ****-****"
					label="Telefone"
					form="contact_form"
				/>
				<TextInput
					name="email"
					placeholder="E-mail"
					label="E-mail"
					form="contact_form"
				/>
			</POSTForm>
			<Button
				variant="arrow"
				width="100%"
				height="medium"
				form="contact_form"
				text="Continuar"
				type="submit"
			/>
		</section>
	);
}
