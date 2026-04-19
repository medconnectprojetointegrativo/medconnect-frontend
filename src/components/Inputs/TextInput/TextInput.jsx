import style from './TextInput.module.css';

import User from '../../../assets/icons/User';
import Eye from '../../../assets/icons/Eye';
import EyeClosed from '../../../assets/icons/EyeClosed';

import { useRef, useState } from 'react';

export default function TextInput({
	label = 'Inserir label',
	placeholder = 'Alterar placeholder',
	value,
	onChange,
	name,
	type = 'text',
	icon: Icon = User,
}) {
	const inputRef = useRef(null);
	const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

	const togglePasswordVisibility = (e) => {
		e.stopPropagation();
		setShowPassword(!showPassword);
	};

	const inputType = type === 'password' && showPassword ? 'text' : type;

	return (
		<div className={style.inputContainer} onClick={handleFocus}>
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
						type={inputType}
						className={`kanit-regular ${style.inputField}`}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						ref={inputRef}
						name={name}
					/>
				</div>

				{type === 'password' && (
					<button
						type="button"
						className={style.toggleShowPasswordButton}
						onClick={togglePasswordVisibility}
						tabIndex="-1"
					>
						{showPassword ? (
							<Eye size={20} />
						) : (
							<EyeClosed size={20} />
						)}
					</button>
				)}
			</div>
		</div>
	);
}
