import style from './Button.module.css';

import ChevronRight from '../../assets/icons/ChevronRight';

export default function Button({
	variant = 'standard',
	height = 'medium',
	width = '100%',
	icon: Icon,
	disabled = false,
	text = 'Insira um texto!',
	form,
	onClick,
	type,
	className,
}) {
	const variants = {
		standard: style.buttonStandard,
		secondary: style.buttonSecondary,
		arrow: style.buttonArrow,
	};

	const heights = {
		small: style.buttonSmall,
		medium: style.buttonMedium,
		large: style.buttonLarge,
		extraLarge: style.buttonExtraLarge
	};

	const iconSizes = {
		small: style.iconSmall,
		medium: style.iconMedium,
		large: style.iconLarge,
	};

	const textSize = {
		small: 'text-tiny',
		medium: 'text-tiny',
		large: 'text-standard',
		extraLarge: 'text-standard'
	};

	const buttonClassName = `${style.buttonBase} ${variants[variant]} ${heights[height]} `;

	let buttonText = (
		<p className={`kanit-semibold ${textSize[height]}`}>{text}</p>
	);
	let buttonIcon;
	if (Icon) buttonIcon = <Icon className={iconSizes[height]} />;

	const setButtonContent = () => {
		if (Icon) {
			return (
				<>
					{buttonIcon}
					{buttonText}
				</>
			);
		}

		if (variant === 'arrow') {
			return (
				<>
					{buttonText}
					<ChevronRight />
				</>
			);
		}

		return buttonText;
	};

	return (
		<button
			className={`${buttonClassName} ${className}`}
			style={{ width: width }}
			disabled={disabled}
			onClick={onClick}
			form={form}
			type={type}
		>
			{setButtonContent()}
		</button>
	);
}
