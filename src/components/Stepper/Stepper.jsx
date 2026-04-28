import React from 'react';
import style from './Stepper.module.css';
import Check from '../../assets/icons/Check';
import Clock from '../../assets/icons/Clock';

export default function Stepper({
	formSteps = [
		{
			index: 0,
			label: 'Label 1',
			index: 1,
			label: 'Label 2',
		},
	],
	currentStep,
	align = 'center',
}) {
	const effectiveAlign = formSteps.length >= 3 ? align : 'center';

	return (
		<div className={style.stepper}>
			<div
				className={`${style.stepperContainer} ${style[effectiveAlign]}`}
			>
				{formSteps.map((step) => (
					<div
						key={step.index}
						className={`${style.step} ${step.index === currentStep ? style.active : ''} ${step.index < currentStep ? style.finished : ''} ${step.index > currentStep ? style.pending : ''}`}
					>
						{step.index === currentStep && (
							<Clock className={style.icon} />
						)}

						{step.index < currentStep && (
							<Check className={style.icon} />
						)}
					</div>
				))}
			</div>

			<p className="text-small kanit-medium text-primary">
				{formSteps[currentStep].label}
			</p>
		</div>
	);
}
