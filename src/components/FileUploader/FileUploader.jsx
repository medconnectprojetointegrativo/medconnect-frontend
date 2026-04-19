// FileUploader.jsx
import { useState, useRef } from 'react';
import style from './FileUploader.module.css';
import { formatFileSize } from '../../utils/fileFormatter';

export default function FileUploader({ onFilesSelected, accept = '*', multiple = false }) {
	const [isDragging, setIsDragging] = useState(false);
	const [files, setFiles] = useState([]);
	const fileInputRef = useRef(null);

	// Manipula a seleção via clique
	const handleFileChange = (e) => {
		const selectedFiles = Array.from(e.target.files);
		updateFiles(selectedFiles);
	};

	// Funções de Drag & Drop
	const handleDragOver = (e) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = () => {
		setIsDragging(false);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragging(false);
		const droppedFiles = Array.from(e.dataTransfer.files);
		updateFiles(droppedFiles);
	};

	const updateFiles = (newFiles) => {
		const updatedList = multiple ? [...files, ...newFiles] : [newFiles[0]];
		setFiles(updatedList);

		// Callback para o componente pai
		if (onFilesSelected) {
			onFilesSelected(updatedList);
		}
	};

	return (
		<div className={style.wrapper}>
			<div
				className={`${style.container} ${isDragging ? style.dragging : ''}`}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				onClick={() => fileInputRef.current.click()}
			>
				<input
					type="file"
					className={style.inputHidden}
					ref={fileInputRef}
					onChange={handleFileChange}
					multiple={multiple}
					accept={accept}
				/>

				<div className={`${style.label} kanit-regular`}>
					<strong>
						{isDragging
							? 'Solte os arquivos aqui'
							: 'Arraste arquivos ou clique para selecionar'}
					</strong>
					<span>
						Arquivos suportados: <strong>{accept}</strong>
					</span>
				</div>
			</div>

			{/* Lista de arquivos selecionados */}
			{files.length > 0 && (
				<ul className={style.fileList}>
					{files.map((file, index) => (
						<li key={index} className={`${style.fileItem}`}>
							<span className={`kanit-bold font-medium ${style.fileItemName}`}>{file.name}</span>
							<small className='kanit-regular'>{formatFileSize(file.size, 2)}</small>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
