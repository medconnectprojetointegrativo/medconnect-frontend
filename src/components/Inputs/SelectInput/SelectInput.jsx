import style from './SelectInput.module.css';
import { useState, useRef, useEffect } from 'react';
import ChevronDown from '../../../assets/icons/ChevronDown';
import User from '../../../assets/icons/User';

export default function SelectInput({
	label = 'Select Input',
	name, // Adicionada a prop 'name' para o formulário
	options = [
		{ label: 'Opção 1', value: '1' },
		{ label: 'Opção 2', value: '2' },
	],
	icon: Icon = User,
	placeholder,
	onChange,
	required = false, // Opcional: para validação nativa
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const selectRef = useRef(null);

	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
		if (onChange) onChange(option.value);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div className={style.container} ref={selectRef}>
			<select
				name={name}
				value={selectedOption ? selectedOption.value : ''}
				required={required}
				onChange={() => {}}
				style={{ display: 'none' }}
			>
				<option value="">{placeholder}</option>
				{options.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>

			{/* Interface Visual do Componente */}
			<div className={style.inputContainer} onClick={toggleDropdown}>
				<div
					className={`${style.inputWrapper} ${isOpen ? style.open : ''}`}
				>
					<span
						className={`${style.inputIcon} ${isOpen ? style.open : ''}`}
					>
						<Icon size={24} />
					</span>

					<div className={style.inputContent}>
						<label
							className={`kanit-semibold text-tiny ${style.inputLabel}`}
						>
							{label}
						</label>

						<div className={`kanit-regular ${style.inputField}`}>
							{selectedOption
								? selectedOption.label
								: placeholder}
						</div>
					</div>

					<ChevronDown
						size={24}
						className={`${style.arrow} ${isOpen ? style.open : ''} ${isOpen ? style.arrowOpen : ''}`}
					/>
				</div>
			</div>

			{isOpen && (
				<ul className={style.optionsList}>
					{options.map((option) => (
						<li
							key={option.value}
							className={`${style.optionItem} kanit-light text-tiny`}
							onClick={() => handleOptionClick(option)}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
