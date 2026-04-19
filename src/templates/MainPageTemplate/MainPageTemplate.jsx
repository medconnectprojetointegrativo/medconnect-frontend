import style from './MainPageTemplate.module.css'

import LateralNavigator from "../../components/LateralNavigator/LateralNavigator";

import MEDCONNECT_HORIZONTAL_LOGO from '/public-images/medconnect-full-logo-horizontal.png';
import ProfileDisplayer from '../../components/ProfileDisplayer/ProfileDisplayer';

export default function MainPageTemplate({children}) {
    return (
		<main className={style.main}>
			<LateralNavigator />
			<div className={style.pageTemplate}>
				<header className={style.header}>
                    <img src={MEDCONNECT_HORIZONTAL_LOGO} alt="Logo MedConnect" />
					<ProfileDisplayer />
				</header>

				<div className={style.pageLoader}>{children}</div>
			</div>
		</main>
	);
}