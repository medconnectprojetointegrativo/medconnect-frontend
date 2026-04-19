import style from './RegisterPage.module.css';

import Stepper from '../../components/Stepper/Stepper';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { authenticationRoutes } from '../../routes/routesPaths';
import FormPage3 from './FormPage3';
import FormPage4 from './FormPage4';
import Check from '../../assets/icons/Check';
import Button from '../../components/Button/Button';

export default function RegisterPage() {
	const [activeStep, setActiveStep] = useState(0);
	const [formData, setFormData] = useState({});
	const steps = [
		'Informações Pessoais',
		'Documentação',
		'Contato',
		'Definição de Senha',
	];
	const formCompleted = activeStep === steps.length;
	const [showSuccessSection, setShowSuccessSection] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (formCompleted) {
			setShowSuccessSection(false);

			const interval = setInterval(() => {
				setShowSuccessSection(true);
			}, 2000);

			return () => clearTimeout(interval);
		}
	}, [formCompleted]);

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	return (
		<>
			{!formCompleted && (
				<main className={style.pageStructure}>
					<div className={style.pageHeader}>
						<ArrowLeft
							className={style.icons}
							onClick={() => {
								if (activeStep === 0 || activeStep < 0) {
									navigate(
										authenticationRoutes.authenticationPage,
									);
								} else {
									setActiveStep(activeStep - 1);
								}
							}}
						/>
						<p className="kanit-light text-primary ">
							Página de Cadastro
						</p>
						<span></span>
					</div>

					<Stepper
						steps={steps}
						currentStep={activeStep}
					/>

					<div className={style.formDisplayer}>
						{activeStep === 0 && (
							<FormPage1
								registerPageData={formData}
								setRegisterPageData={setFormData}
								activeStep={activeStep}
								setActiveStep={setActiveStep}
							/>
						)}

						{activeStep === 1 && (
							<FormPage2
								registerPageData={formData}
								setRegisterPageData={setFormData}
								activeStep={activeStep}
								setActiveStep={setActiveStep}
							/>
						)}

						{activeStep === 2 && (
							<FormPage3
								registerPageData={formData}
								setRegisterPageData={setFormData}
								activeStep={activeStep}
								setActiveStep={setActiveStep}
							/>
						)}

						{activeStep === 3 && (
							<FormPage4
								registerPageData={formData}
								setRegisterPageData={setFormData}
								activeStep={activeStep}
								setActiveStep={setActiveStep}
							/>
						)}
					</div>
				</main>
			)}

			{formCompleted && (
				<main className={style.registrationConfirmed}>
					<Check className={style.registrationConfirmedIcon} />
					<section
						className={`${style.successSection} ${showSuccessSection ? style.successSectionVisible : style.successSectionHidden}`}
					>
						<p className='kanit-bold'>Cadastro realizado com sucesso!</p>
						<p className='kanit-regular text-black'>
							Tudo pronto! Realize o Login na área inicial para entrar na sua conta.
						</p>
						<Button
							onClick={() =>
								navigate(
									authenticationRoutes.authenticationPage,
								)
							}
							variant="arrow"
							text="Início"
						/>
					</section>
				</main>
			)}
		</>
	);
}
