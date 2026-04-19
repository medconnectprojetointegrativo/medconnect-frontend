import React from 'react';
import style from './Stepper.module.css';
import Check from '../../assets/icons/Check';
import Clock from '../../assets/icons/Clock';

const Stepper = ({ steps, currentStep, align = 'center' }) => {
	const effectiveAlign = steps.length >= 3 ? align : 'center';

	return (
		<div className={style.stepper}>
			<div
				className={`${style.stepperContainer} ${style[effectiveAlign]}`}
			>
				{steps.map((step, index) => (
					<div
						key={index}
						className={`${style.step} ${index === currentStep ? style.active : ''} ${index < currentStep ? style.finished : ''} ${index > currentStep ? style.pending : ''}`}
					>
						{index === currentStep && (
							<Clock className={style.icon} />
						)}

						{index < currentStep && (
							<Check className={style.icon} />
						)}
					</div>
				))}
			</div>

			<p className='text-small kanit-medium text-primary'>{steps[currentStep]}</p>
		</div>
	);
};

export default Stepper;
