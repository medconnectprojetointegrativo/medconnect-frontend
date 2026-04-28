// Style Import
import style from './RegisterPage.module.css';

// External Code Import
import { useEffect, useState } from 'react';

// Component Import
import POSTForm from '../../components/POSTForm/POSTForm';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import Button from '../../components/Button/Button';
import DateInput from '../../components/Inputs/DateInput/DateInput';
import SelectInput from '../../components/Inputs/SelectInput/SelectInput';

// Icon, Image and Video Import
import FilledIntersexSymbol from '../../assets/icons/FilledIntersexSymbol'

export default function FormPage0({
	pageData,
	setPageData,
	activeStep,
	setActiveStep,
}) {
	const [localFormData, setLocalFormData] = useState(
		pageData.personalInformation || {},
	);

	// Função de Validação (Será implementada no Back-End)
	function validateData(data) {
		setPageData({ ...pageData, personalInformation: data });
		setLocalFormData(data);
		setActiveStep(activeStep + 1);
	}

	const sexOptions = [
		{ value: 'M', label: 'Masculino' },
		{ value: 'F', label: 'Feminino' },
	];

	return (
		<section className={style.formSection}>
			<POSTForm
				id="personal_information_form"
				className={style.form}
				onSubmit={validateData}
				setExternalFormData={setLocalFormData}
			>
				<TextInput
					name="first_name"
					placeholder="Nome"
					label="Nome"
					form="personal_information_form"
				/>
				<TextInput
					name="last_name"
					placeholder="Sobrenome"
					label="Sobrenome"
					form="personal_information_form"
				/>
				<DateInput
					name="birthday"
					placeholder="DD/MM/AAAA"
					label="Data de nascimento"
					form="personal_information_form"
				/>
				<SelectInput
					name="sex"
					options={sexOptions}
					label="Sexo"
					form="personal_information_form"
					icon={FilledIntersexSymbol}
				/>
			</POSTForm>
			<Button
				variant="arrow"
				width="100%"
				height="medium"
				form="personal_information_form"
				text="Continuar"
				type="submit"
			/>
		</section>
	);
}
