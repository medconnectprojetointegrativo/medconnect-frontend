import style from './RegisterPage.module.css';

import { useEffect, useState } from 'react';

import POSTForm from '../../components/POSTForm/POSTForm';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import Button from '../../components/Button/Button';

export default function FormPage3({
	registerPageData,
	setRegisterPageData,
	activeStep,
	setActiveStep,
}) {
	const [localFormData, setLocalFormData] = useState(
		registerPageData.thirdPageData || {},
	);

	// Função de Validação (Será implementada no Back-End)
	function validateData(data) {
		setRegisterPageData({ ...registerPageData, thirdPageData: data });
		setLocalFormData(data);
		setActiveStep(activeStep + 1);
	}

	return (
		<section className={style.registerFormPage}>
			<POSTForm
				id="third_register_page"
				className={style.registerForm}
				onSubmit={validateData}
				setExternalFormData={setLocalFormData}
			>
				<TextInput
					name="phone_number"
					placeholder="(**) ****-****"
					label="Telefone"
					form="third_register_page"
				/>
				<TextInput
					name="email"
					placeholder="E-mail"
					label="E-mail"
					form="third_register_page"
				/>
			</POSTForm>
			<Button
				variant="arrow"
				width="100%"
				height="medium"
				form="third_register_page"
				text="Continuar"
				type="submit"
			/>
		</section>
	);
}
