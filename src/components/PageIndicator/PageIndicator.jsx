import { useNavigate } from 'react-router';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import Heart from '../../assets/icons/Heart';
import style from './PageIndicator.module.css';

export default function PageIndicator({
	pageName = 'Página',
	returnTo,
	marginTop = '30px',
	marginBottom = '30px',
	children = <div className={style.column}></div>,
}) {
	return (
		<div
			className={style.container}
			style={{ marginTop: marginTop, marginBottom: marginBottom }}
		>
			<div className={style.returnButton}>
				<ArrowLeft
					onClick={() => returnTo()}
				/>
				<p className='kanit-regular text-tiny'>Voltar</p>
			</div>

			<div className={style.column}>
				<h1
					className={`kanit-light text-small text-primary ${style.pageName}`}
				>
					{pageName}
				</h1>
			</div>

			{children}
		</div>
	);
}
