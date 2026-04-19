import style from './RegisterPage.module.css';

import { useEffect, useState } from 'react';

import POSTForm from '../../components/POSTForm/POSTForm';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import Button from '../../components/Button/Button';

import Password from '../../assets/icons/Password';
import Check from '../../assets/icons/Check';
import Warning from '../../assets/icons/Warning';
import ErrorFull from '../../assets/icons/ErrorFull';

export default function FormPage4({
	registerPageData,
	setRegisterPageData,
	activeStep,
	setActiveStep,
}) {
	const [localFormData, setLocalFormData] = useState(
		registerPageData.fourthPageData || {},
	);
	const [password, setPassword] = useState('');
	const [confirmationPassword, setConfirmationPassword] = useState('');

	function checkContainsCapitalLetter(value) {
		const regex = /[A-Z]/;
		const containsCapitalLetter = regex.test(value);
		return containsCapitalLetter;
	}
	function checkContainsLowercaseLetter(value) {
		const regex = /[a-z]/;
		const containsLowercaseLetter = regex.test(value);
		return containsLowercaseLetter;
	}
	function checkContainsNumber(value) {
		const regex = /\d/;
		const containsContainsNumber = regex.test(value);
		return containsContainsNumber;
	}
	function checkSpecialCharacter(value) {
		const regex = /(?=.*[!@#$%&*])/;
		const containsSpecialCharacter = regex.test(value);
		return containsSpecialCharacter;
	}

	const passwordRequirements = [
		{ label: '8 caracteres', isValid: password.length >= 8 },
		{
			label: 'Uma letra maiúscula.',
			isValid: checkContainsCapitalLetter(password),
		},
		{
			label: 'Uma letra minúscula.',
			isValid: checkContainsLowercaseLetter(password),
		},
		{ label: 'Um número.', isValid: checkContainsNumber(password) },
		{
			label: 'Um caractere especial (!@#$%&*).',
			isValid: checkSpecialCharacter(password),
		},
	];

	const passwordIsValid = passwordRequirements.every(
		(requirement) => requirement.isValid,
	);
	const passwordsMatch = password === confirmationPassword;

	// Função de Validação (Será implementada no Back-End)
	function validateData(data) {
		if (passwordIsValid && passwordsMatch) {
			setRegisterPageData({ ...registerPageData, fourthPageData: data });
			setLocalFormData(data);
			setActiveStep(activeStep + 1);
		}
	}

	return (
		<section className={style.registerFormPage}>
			<POSTForm
				id="fourth_register_page"
				className={style.registerForm}
				onSubmit={validateData}
				setExternalFormData={setLocalFormData}
			>
				<TextInput
					name="password"
					placeholder="********"
					label="Senha"
					form="fourth_register_page"
					type="password"
					icon={Password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<TextInput
					name="confirmation_password"
					placeholder="********"
					label="Confirmar senha"
					form="fourth_register_page"
					type="password"
					icon={Password}
					onChange={(e) => setConfirmationPassword(e.target.value)}
				/>
			</POSTForm>

			<section>
				<p className="kanit-regular">
					Sua senha deve conter no mínimo:
				</p>
				<ul>
					{passwordRequirements.map((requirement, index) => (
						<li
							key={index}
							style={{
								color: requirement.isValid
									? '#2ecc71'
									: '#e74c3c',
								listStyle: 'none',
								lineHeight: '1',
								display: 'flex',
								justifyContent: 'start',
								alignItems: 'center',
								gap: '5px',
							}}
							className="kanit-regular"
						>
							{requirement.isValid ? <Check /> : <ErrorFull />}
							{requirement.label}
						</li>
					))}
				</ul>
			</section>

			<Button
				variant="arrow"
				width="100%"
				height="medium"
				form="fourth_register_page"
				text="Continuar"
				type="submit"
			/>
		</section>
	);
}
