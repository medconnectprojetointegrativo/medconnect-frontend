import style from './CPFInput.module.css';

import IdentificationCard from '../../../assets/icons/IdentificationCard';

import { useRef, useState } from 'react';

export default function CPFInput({
    name = "CPF"
}) {
    const [CPF, setCPF] = useState('');
    const inputRef = useRef(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const applyCPFMask = (value) => {
		return value
            .replace(/\D/g, '')
			.replace(/(\d{3})(\d)/, '$1.$2') // Primeiro ponto
			.replace(/(\d{3})(\d)/, '$1.$2') // Segundo ponto
			.replace(/(\d{3})(\d{1,2})/, '$1-$2') // Hífen (sem o $)
			.replace(/(-\d{2})\d+?$/, '$1') // Garante que não entram mais de 2 dígitos após o hífen
			.slice(0, 14);
	};

    const handleCPFMask = (e) => {
        const rawValue = e.target.value;
        const maskedValue = applyCPFMask(rawValue);
        setCPF(maskedValue);
    }


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
                        placeholder={'000.000.000-00'}
                        value={CPF}
                        onChange={handleCPFMask}
                        ref={inputRef}
                        name={name}
                        maxLength={14}
                    />
                </div>
            </div>
        </div>
    );
}
