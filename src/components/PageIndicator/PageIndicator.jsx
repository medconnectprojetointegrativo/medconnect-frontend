import { useNavigate } from 'react-router';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import Heart from '../../assets/icons/Heart';
import style from './PageIndicator.module.css';

export default function PageIndicator({ pageName = 'Página', returnTo }) {
	const navigate = useNavigate();

	return (
		<div className={style.container}>
			<div className={style.column}>
				<ArrowLeft
					className={style.returnButton}
					onClick={() =>
						navigate(returnTo)
					}
				/>
			</div>

			<div className={style.column}>
				<h1 className={`kanit-light text-small ${style.pageName}`}>
					{pageName}
				</h1>
			</div>

			<div className={style.column}></div>
		</div>
	);
}
