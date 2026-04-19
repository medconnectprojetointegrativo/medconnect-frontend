import style from './LocationInformationPage.module.css';

import MainPageTemplate from '../../templates/MainPageTemplate/MainPageTemplate';
import Divider from '../../components/Divider/Divider';
import PageIndicator from '../../components/PageIndicator/PageIndicator';
import MEDCONNECT_WHITE_LOGO from '/public-images/medconnect-full-logo-vertical-white.png';
import Button from '../../components/Button/Button';
import WhatsAppButton from '../../components/Button/WhatsAppButton';
import { appointmentRoutes } from '../../routes/routesPaths';
import { useNavigate } from 'react-router';
import INTEGRALE_ODONTO from '../../assets/images/INTEGRALE_ODONTO.jpg';

export default function LocationInformationPage() {
	const navigate = useNavigate();
	const id = '7K9vR';
	const locationData = {
		id: '7K9vR',
		name: 'Integrale Odontologia',
		type: 'Clínica Odontológica',
		rating: '4.8',
		logo: INTEGRALE_ODONTO,
	};

	return (
		<MainPageTemplate>
			<section className={style.section}>
				<div className={style.mainInformation}>
					<PageIndicator
						pageName="Clínica"
						returnTo={appointmentRoutes.searchLocationsPage}
					/>
					<img
						src={locationData.logo}
						alt="Logo do Local"
						className={style.logo}
					/>
					<article className={style.information}>
						<p className="kanit-semibold text-large">
							{locationData.name}
						</p>
						<p className="kanit-regular text-small">
							{locationData.type}
						</p>
						<p className="kanit-medium text-small">
							Avaliação geral do local: {locationData.rating}
						</p>
					</article>
					<Divider direction="horizontal" size="300px" />
					<div className={style.options}>
						<Button
							text="Marcar consulta"
							height="large"
							onClick={() =>
								navigate(
									appointmentRoutes.makeAppointmentPage(id),
								)
							}
						/>
						<WhatsAppButton variant="secondary" />
					</div>
				</div>

				<Divider direction="vertical" />

				<div></div>
			</section>
		</MainPageTemplate>
	);
}
