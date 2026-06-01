// Style Import
import style from './LocationInformationPage.module.css';

// External Code Import
import { appointmentRoutes } from '../../routes/routesPaths';
import { useNavigate, useParams } from 'react-router';
import locationsData from '../../mocks/locationsData';
import professionalsData from '../../mocks/professionalsData';
import commentsData from '../../mocks/commentsData';
import { useState } from 'react';

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
import FilledLocation from '../../assets/icons/FilledLocation';
import { Carousel } from '../../components/Carousel/Carousel';
import { ReviewCard } from '../../components/ReviewCard/ReviewCard';

export default function LocationInformationPage() {
	const navigate = useNavigate();
	const { location_id } = useParams();

	const locationData = locationsData.find(
		(location) => location_id === location.id,
	);

	const scheduledAppointmentQuantity = 0;
	const [selectedAditionalInformation, setSelectedAditionalInformation] =
		useState('Profissionais');

	return (
		<MainPageTemplate>
			<PageIndicator
				pageName="Clínica"
				returnTo={() => navigate(appointmentRoutes.searchLocationsPage)}
				marginBottom="15px"
				marginTop="0"
			/>
			<section className={style.section}>
				<div className={style.mainInformation}>
					<div className={style.mainInformationContainer}>
						<img
							src={locationData.logo}
							alt={`Logo da clínica ${locationData.name}`}
							className={style.locationLogo}
						/>
						<div className={style.informationContainer}>
							<h2 className="kanit-semibold text-large">
								{locationData.name}
							</h2>
							<p className="text-small">{locationData.type}</p>
							<a
								href={locationData.mapsUrl}
								target="_blank"
								className={style.addressInformation}
							>
								<span>{locationData.address} </span>
								<span className="kanit-medium">
									{locationData.city} | {locationData.state}
								</span>
							</a>
							<p
								className={`${style.rating} kanit-medium text-small`}
							>
								Avaliação geral:
								<FilledStar className={style.star} />{' '}
								<span className="text-small kanit-bold text-yellow">
									{locationData.rating}
								</span>
							</p>
						</div>
					</div>

					<Divider
						direction="horizontal"
						size="450px"
						margin="30px"
					/>

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
					<p
						className="text-tiny kanit-regular"
						style={{ marginTop: '10px' }}
					>
						Você tem {scheduledAppointmentQuantity} procedimentos
						marcados neste local.
					</p>
				</div>

				<Divider direction="vertical" />

				<div className={style.aditionalInformations}>
					<ul className={style.aditionalInformationsSelection}>
						<li
							className={`${selectedAditionalInformation == 'Profissionais' && style.selectedAditionalInformation} ${selectedAditionalInformation == 'Profissionais' && 'kanit-bold'}`}
							onClick={() =>
								setSelectedAditionalInformation('Profissionais')
							}
						>
							Profissionais
						</li>
						<li
							className={`${selectedAditionalInformation == 'Fotos' && style.selectedAditionalInformation} ${selectedAditionalInformation == 'Fotos' && 'kanit-bold'}`}
							onClick={() =>
								setSelectedAditionalInformation('Fotos')
							}
						>
							Fotos
						</li>
						<li
							className={`${selectedAditionalInformation == 'Avaliações' && style.selectedAditionalInformation} ${selectedAditionalInformation == 'Avaliações' && 'kanit-bold'}`}
							onClick={() =>
								setSelectedAditionalInformation('Avaliações')
							}
						>
							Avaliações
						</li>
					</ul>

					{selectedAditionalInformation == 'Profissionais' && (
						<section className={style.aditionalInformationSection}>
							<ul className={style.professionalList}>
								{professionalsData.map((professional) => (
									<li className={style.professionalCard}>
										<img
											src={professional.imageUrl}
											alt=""
										/>
										<span className="kanit-medium text-small">
											{professional.name}
										</span>
										<span className="text-tiny">
											{professional.speciality}
										</span>
									</li>
								))}
							</ul>
						</section>
					)}

					{selectedAditionalInformation == 'Fotos' && (
						<section className={style.aditionalInformationSection}>
							<Carousel />
						</section>
					)}

					{selectedAditionalInformation == 'Avaliações' && (
						<section className={style.aditionalInformationSection}>
							<h2 className="text-medium kanit-semibold">
								Avaliações recentes
							</h2>
							{commentsData.map((comment) => (
								<ReviewCard commentData={comment} />
							))}
						</section>
					)}
				</div>
			</section>
		</MainPageTemplate>
	);
}
