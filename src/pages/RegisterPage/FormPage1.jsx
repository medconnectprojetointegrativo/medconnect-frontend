import style from './RegisterPage.module.css';

import { useEffect, useState } from 'react';

import POSTForm from '../../components/POSTForm/POSTForm';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import Button from '../../components/Button/Button';
import DateInput from '../../components/Inputs/DateInput/DateInput';
import SelectInput from '../../components/Inputs/SelectInput/SelectInput';

export default function FormPage1({
	registerPageData,
	setRegisterPageData,
	activeStep,
	setActiveStep,
}) {
	const [localFormData, setLocalFormData] = useState(
		registerPageData.firstPageData || {},
	);

	// Função de Validação (Será implementada no Back-End)
	function validateData(data) {
		setRegisterPageData({...registerPageData, firstPageData: data});
		setLocalFormData(data);
		setActiveStep(activeStep + 1);
	}

	const sexOptions = [
		{ value: 'M', label: 'Masculino' },
		{ value: 'F', label: 'Feminino' },
	];

	return (
		<section className={style.registerFormPage}>
			<POSTForm
				id="first_register_page"
				className={style.registerForm}
				onSubmit={validateData}
				setExternalFormData={setLocalFormData}
			>
				<TextInput
					name="first_name"
					placeholder="Nome"
					label="Nome"
					form="first_register_page"
				/>
				<TextInput
					name="last_name"
					placeholder="Sobrenome"
					label="Sobrenome"
					form="first_register_page"
				/>
				<DateInput
					name="birthday"
					placeholder="DD/MM/AAAA"
					label="Data de nascimento"
					form="first_register_page"
				/>
				<SelectInput
					name="sex"
					options={sexOptions}
					label="Sexo"
					form="first_register_page"
				/>
			</POSTForm>
			<Button
				variant="arrow"
				width="100%"
				height="medium"
				form="first_register_page"
				text="Continuar"
				type="submit"
			/>
		</section>
	);
}
