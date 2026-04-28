// Style Import
import style from './MainPageTemplate.module.css';

// External Code Import
import { homePath } from '../../routes/routesPaths';
import { useNavigate } from 'react-router';

// Component Import
import LateralNavigator from '../../components/LateralNavigator/LateralNavigator';
import ProfileDisplayer from '../../components/ProfileDisplayer/ProfileDisplayer';

// Icon, Image and Video Import
import MEDCONNECT_HORIZONTAL_LOGO from '/public-images/medconnect-full-logo-horizontal.png';

export default function MainPageTemplate({ children }) {
	const navigate = useNavigate();

	return (
		<main className={style.main}>
			<LateralNavigator />
			<div className={style.pageTemplate}>
				<header className={style.header}>
					<img
						src={MEDCONNECT_HORIZONTAL_LOGO}
						alt="Logo MedConnect"
						className={style.logo}
						onClick={() => navigate(homePath)}
					/>
					<ProfileDisplayer />
				</header>

				<div className={style.pageLoader}>{children}</div>
			</div>
		</main>
	);
}
