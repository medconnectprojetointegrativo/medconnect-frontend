import style from './SearchBar.module.css';

import { useState, useEffect } from 'react';

import FilledMagnifyingGlass from '../../assets/icons/FilledMagnifyingGlass';

export default function SearchBar({ input, output = () => {}, searchKey }) {
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		if (!searchTerm.trim()) {
			output(input);
			return;
		}

		const filteredData = input.filter((item) => {
			const valueToSearch =
				item[searchKey]?.toString().toLowerCase() || '';
			return valueToSearch.includes(searchTerm.toLowerCase());
		});

		output(filteredData);
	}, [searchTerm, input, searchKey, output]);

	return (
		<div className={style.container}>
			<input
				type="text"
				className={`${style.input} kanit-regular`}
				placeholder="Pesquisar Clínicas"
				onChange={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
			/>
			<span className={style.iconContainer}>
				<FilledMagnifyingGlass className={style.icon} />
			</span>
		</div>
	);
}
