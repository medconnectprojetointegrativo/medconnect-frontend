// Style Import
import style from './RegisterPage.module.css';

// External Code Import
import { useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router';
import { authenticationRoutes } from '../../routes/routesPaths';

// Component Import
import FormPage0 from './FormPage0';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import FormPage3 from './FormPage3';
import Stepper from '../../components/Stepper/Stepper';
import Button from '../../components/Button/Button';
import PageIndicator from '../../components/PageIndicator/PageIndicator';

// Icon, Image and Video Import
import ArrowLeft from '../../assets/icons/ArrowLeft';
import Check from '../../assets/icons/Check';
import House from '../../assets/icons/House';

export default function RegisterPage() {
	const [activeFormStep, setActiveFormStep] = useState(0);
	const formSteps = [
		{ index: 0, label: 'Informações Pessoais' },
		{ index: 1, label: 'Contato' },
		{ index: 2, label: 'Documentação' },
		{ index: 3, label: 'Definição de Senha' },
	];
	const [formData, setFormData] = useState({});
	const formCompleted = activeFormStep === formSteps.length;

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

	return (
		<main className={style.page}>
			{!formCompleted && (
				<section className={style.sectionStructure}>
					<PageIndicator
						pageName="Cadastro"
						returnTo={() => {
							if (activeFormStep > 0)
								setActiveFormStep(activeFormStep - 1);
							if (activeFormStep <= 0)
								navigate(
									authenticationRoutes.authenticationPage,
								);
						}}
					>
						<div className={style.pageIndicatorExtraFunction} onClick={() => navigate(authenticationRoutes.authenticationPage)}>
							<House style={{ width: '20px', heigth: '20px' }} />
							<p className='kanit-regular text-tiny'>Sair</p>
						</div>
					</PageIndicator>

					<Stepper
						formSteps={formSteps}
						currentStep={activeFormStep}
					/>

					<div className={style.formDisplayer}>
						{activeFormStep === 0 && (
							<FormPage0
								pageData={formData}
								setPageData={setFormData}
								activeStep={activeFormStep}
								setActiveStep={setActiveFormStep}
							/>
						)}

						{activeFormStep === 1 && (
							<FormPage1
								pageData={formData}
								setPageData={setFormData}
								activeStep={activeFormStep}
								setActiveStep={setActiveFormStep}
							/>
						)}

						{activeFormStep === 2 && (
							<FormPage2
								pageData={formData}
								setPageData={setFormData}
								activeStep={activeFormStep}
								setActiveStep={setActiveFormStep}
							/>
						)}

						{activeFormStep === 3 && (
							<FormPage3
								pageData={formData}
								setPageData={setFormData}
								activeStep={activeFormStep}
								setActiveStep={setActiveFormStep}
							/>
						)}
					</div>
				</section>
			)}

			{formCompleted && (
				<main className={style.registrationConfirmed}>
					<Check className={style.registrationConfirmedIcon} />
					<section
						className={`${style.successSection} ${showSuccessSection ? style.successSectionVisible : style.successSectionHidden}`}
					>
						<p className="kanit-bold">
							Cadastro realizado com sucesso!
						</p>
						<p className="kanit-regular text-black">
							Tudo pronto! Realize o Login na área inicial para
							entrar na sua conta.
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
		</main>
	);
}
