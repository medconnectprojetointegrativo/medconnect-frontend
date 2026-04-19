import style from './DateInput.module.css';

import { useRef, useState } from 'react';

import Date from '../../../assets/icons/Date';

export default function DateInput({
	label = 'Data de Nascimento',
	placeholder = 'DD/MM/AAAA',
	value,
	onChange,
	name,
	icon: Icon = Date,
}) {
	const [date, setDate] = useState('');
	const inputRef = useRef(null);

	const applyDateMask = (value) => {
		value = value.replace(/\D/g, '').slice(0, 8);

		if (value.length >= 5) {
			value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
		} else if (value.length >= 3) {
			value = `${value.slice(0, 2)}/${value.slice(2)}`;
		}

		return value;
	};

	const handleDateMask = (e) => {
		const rawValue = e.target.value;
		const maskedValue = applyDateMask(rawValue);
		setDate(maskedValue);
	};

	return (
		<div
			className={style.inputContainer}
			onClick={() => inputRef.current?.focus()}
		>
			<div className={style.inputWrapper}>
				<span className={style.inputIcon}>
					<Icon size={24} />
				</span>

				<div className={style.inputContent}>
					<label
						className={`kanit-semibold text-tiny ${style.inputLabel}`}
					>
						{label}
					</label>
					<input
						type="text"
						name={name}
						ref={inputRef}
						value={date}
						placeholder={placeholder}
						onChange={handleDateMask}
						className={`kanit-regular ${style.inputField}`}
						maxLength={10}
					/>
				</div>
			</div>
		</div>
	);
}
