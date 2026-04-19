import style from './Button.module.css';

import ChevronRight from '../../assets/icons/ChevronRight';
import WhatsApp from '../../assets/icons/WhatsApp';

export default function WhatsAppButton({
    variant = 'standard',
    height = 'large',
    width = '100%',
    disabled = false,
    onClick,
    className,
}) {
    const variants = {
        standard: style.whatsAppButtonStandard,
        secondary: style.whatsAppButtonSecondary,
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
		extraLarge: 'text-standard',
	};

    const buttonClassName = `${style.buttonBase} ${variants[variant]} ${heights[height]} `;

    return (
		<button
			className={`${buttonClassName} ${className}`}
			style={{ width: width }}
			disabled={disabled}
			onClick={onClick}
		>
			<WhatsApp className={iconSizes[height]} />
			<p className={`kanit-semibold ${textSize[height]}`}>WhatsApp</p>
		</button>
	);
}
