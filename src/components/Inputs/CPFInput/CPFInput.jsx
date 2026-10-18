import style from './CPFInput.module.css';
import IdentificationCard from '../../../assets/icons/IdentificationCard';
import { useRef } from 'react';

export default function CPFInput({
	name = 'CPF',
	value = '', // Valor vindo de fora
	onChange, // Callback disparado ao alterar
	...rest // Outras props como disabled, required, etc.
}) {
	const inputRef = useRef(null);

	const handleFocus = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	const applyCPFMask = (val) => {
		if (!val) return '';
		return val
			.replace(/\D/g, '')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,2})/, '$1-$2')
			.replace(/(-\d{2})\d+?$/, '$1')
			.slice(0, 14);
	};

	const handleCPFMask = (e) => {
		const rawValue = e.target.value;
		const maskedValue = applyCPFMask(rawValue);
		const unmaskedValue = rawValue.replace(/\D/g, '').slice(0, 11);

		if (onChange) {
			// Dispara o onChange devolvendo o evento modificado e o valor puro
			onChange({
				target: {
					name,
					value: maskedValue, // '000.000.000-00'
					rawValue: unmaskedValue, // '00000000000'
				},
			});
		}
	};

	return (
		<div className={style.inputContainer} onClick={handleFocus}>
			<div className={style.inputWrapper}>
				<span className={style.inputIcon}>
					<IdentificationCard size={24} />
				</span>

				<div className={style.inputContent}>
					<label
						className={`kanit-semibold text-tiny ${style.inputLabel}`}
					>
						CPF
					</label>
					<input
						type="text"
						className={`kanit-regular ${style.inputField}`}
						placeholder="000.000.000-00"
						value={applyCPFMask(value)}
						onChange={handleCPFMask}
						ref={inputRef}
						name={name}
						maxLength={14}
						{...rest}
					/>
				</div>
			</div>
		</div>
	);
}
