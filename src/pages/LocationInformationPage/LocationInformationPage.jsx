// Style Import
import style from './LocationInformationPage.module.css';

// External Code Import
import { appointmentRoutes } from '../../routes/routesPaths';
import { useNavigate, useParams } from 'react-router';
import locationsData from '../../mocks/locationsData';

// Component Import
import MainPageTemplate from '../../templates/MainPageTemplate/MainPageTemplate';
import Divider from '../../components/Divider/Divider';
import PageIndicator from '../../components/PageIndicator/PageIndicator';
import Button from '../../components/Button/Button';
import WhatsAppButton from '../../components/Button/WhatsAppButton';

// Icon, Image and Video Import
import MEDCONNECT_WHITE_LOGO from '/public-images/medconnect-full-logo-vertical-white.png';
import INTEGRALE_ODONTO from '../../assets/images/INTEGRALE_ODONTO.jpg';
import FilledStar from '../../assets/icons/FilledStar';

export default function LocationInformationPage() {
	const navigate = useNavigate();
	const { location_id } = useParams();

	const locationData = locationsData.find(
		(location) => location_id === location.id,
	);

	return (
		<MainPageTemplate>
			<section className={style.section}>
				<div className={style.pageIndicator}>
					<PageIndicator
						pageName="Clínica"
						returnTo={() =>
							navigate(appointmentRoutes.searchLocationsPage)
						}
						marginBottom="15px"
						marginTop="0"
					/>
				</div>

				<div className={style.mainInformation}>
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
						<p
							className={`${style.rating} kanit-medium text-small`}
						>
							Avaliação geral do local:{' '}
							<FilledStar className={style.star} />{' '}
							<strong className={style.ratingValue}>
								{locationData.rating}
							</strong>
						</p>
					</article>
					<Divider direction="horizontal" size="300px" />
					<div className={style.options}>
						<Button
							text="Marcar consulta"
							height="large"
							onClick={() =>
								navigate(
									appointmentRoutes.makeAppointmentPage(
										location_id,
									),
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
