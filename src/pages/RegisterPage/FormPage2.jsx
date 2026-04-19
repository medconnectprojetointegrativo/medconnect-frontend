import style from './RegisterPage.module.css';

import { useEffect, useState } from 'react';

import POSTForm from '../../components/POSTForm/POSTForm';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import Button from '../../components/Button/Button';
import DateInput from '../../components/Inputs/DateInput/DateInput';
import SelectInput from '../../components/Inputs/SelectInput/SelectInput';
import FileUploader from '../../components/FileUploader/FileUploader';

export default function FormPage2({
	registerPageData,
	setRegisterPageData,
	activeStep,
	setActiveStep,
}) {
	const [localFormData, setLocalFormData] = useState(
		registerPageData.secondPageData || {},
	);

    const handleFilesChange = (selectedFiles) => {
		setLocalFormData((prev) => ({
			...prev,
			files: selectedFiles,
		}));
	};

	// Função de Validação (Será implementada no Back-End)
	function validateData(data) {
		setRegisterPageData({ ...registerPageData, secondPageData: localFormData.files });
		setLocalFormData(data);
        console.log(localFormData);
		setActiveStep(activeStep + 1);
	}

	return (
		<section className={style.registerFormPage}>
			<POSTForm
				id="second_register_page"
				className={style.registerFormPage1}
				onSubmit={validateData}
				setExternalFormData={setLocalFormData}
			>
                <FileUploader accept='.PDF' multiple={false} onFilesSelected={handleFilesChange}/>
			</POSTForm>
			<Button
				variant="arrow"
				width="100%"
				height="medium"
				form="second_register_page"
				text="Continuar"
				type="submit"
			/>
		</section>
	);
}
