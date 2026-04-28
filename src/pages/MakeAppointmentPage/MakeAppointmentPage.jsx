// Style Import
import style from './MakeAppointmentPage.module.css';

// External Code Import
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import {
	appointmentRoutes,
	authenticationRoutes,
	homePath,
} from '../../routes/routesPaths';
import locationsData from '../../mocks/locationsData';

// Component Import
import MainPageTemplate from '../../templates/MainPageTemplate/MainPageTemplate';
import PageIndicator from '../../components/PageIndicator/PageIndicator';
import Divider from '../../components/Divider/Divider';
import SelectInput from '../../components/Inputs/SelectInput/SelectInput';
import Button from '../../components/Button/Button';

// Icon, Image and Video Import
import MEDCONNECT_WHITE_LOGO from '/public-images/medconnect-full-logo-vertical-white.png';
import INTEGRALE_ODONTO from '../../assets/images/INTEGRALE_ODONTO.jpg';
import Check from '../../assets/icons/Check';

export default function MakeAppointmentPage() {
	const navigate = useNavigate();
	const { location_id } = useParams();

	const locationData = locationsData.find(
		(location) => location_id === location.id,
	);

	const [appointmentCompleted, setAppointmentCompleted] = useState(false);
	const [showSuccessSection, setShowSuccessSection] = useState(false);

	const specialistOptions = [
		{ label: 'Dr. Arnaldo Silveira', value: '8m2pX' },
		{ label: 'Dra. Beatriz Cavalcante', value: '3n9vL' },
		{ label: 'Dr. Carlos Eduardo Menezes', value: 'k7T5r' },
		{ label: 'Dra. Daniela Guimarães', value: 'q1W4z' },
		{ label: 'Dr. Fábio de Oliveira', value: 'p9O2m' },
		{ label: 'Dra. Gabriela Vasconcelos', value: 'x5B8n' },
		{ label: 'Dr. Henrique Rocha', value: 't3V9c' },
		{ label: 'Dra. Isabela Fontes', value: 'y6N1k' },
	];

	const appointmentType = [
		{ label: 'Exame', value: 'exam' },
		{ label: 'Consulta', value: 'appointment' },
	];

	const appointmentDateType = [
		{
			label: 'Hoje, 19 de Abr - 08:30',
			value: '2026-04-19T08:30:00',
		},
		{
			label: 'Hoje, 19 de Abr - 10:00',
			value: '2026-04-19T10:00:00',
		},
		{
			label: 'Amanhã, 20 de Abr - 09:00',
			value: '2026-04-20T09:00:00',
		},
		{
			label: 'Amanhã, 20 de Abr - 14:30',
			value: '2026-04-20T14:30:00',
		},
		{
			label: 'Terça, 21 de Abr - 08:00',
			value: '2026-04-21T08:00:00',
		},
		{
			label: 'Terça, 21 de Abr - 11:00',
			value: '2026-04-21T11:00:00',
		},
		{
			label: 'Quarta, 22 de Abr - 16:30',
			value: '2026-04-22T16:30:00',
		},
	];

	useEffect(() => {
		if (appointmentCompleted) {
			setShowSuccessSection(false);

			const interval = setInterval(() => {
				setShowSuccessSection(true);
			}, 2000);

			return () => clearTimeout(interval);
		}
	}, [appointmentCompleted]);

	return (
		<>
			{appointmentCompleted === false && (
				<MainPageTemplate>
					<PageIndicator
						pageName="Marcar Consulta"
						returnTo={() => navigate(appointmentRoutes.locationPage(location_id))}
					/>
					<section>
						<div className={style.locationInformation}>
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
									Avaliação geral do local:{' '}
									{locationData.rating}
								</p>
							</article>
						</div>

						<Divider direction="horizontal" />

						<div className={style.options}>
							<SelectInput
								label="Especialista"
								options={specialistOptions}
							/>

							<SelectInput
								label="Tipo de procedimento"
								options={appointmentType}
							/>

							<SelectInput
								label="Horários disponíveis"
								options={appointmentDateType}
							/>

							<Button
								variant="arrow"
								text="Marcar"
								onClick={() => setAppointmentCompleted(true)}
							/>
						</div>
					</section>
				</MainPageTemplate>
			)}

			{appointmentCompleted === true && (
				<main className={style.appointmentConfirmed}>
					<Check className={style.appointmentConfirmedIcon} />
					<section
						className={`${style.successSection} ${showSuccessSection ? style.successSectionVisible : style.successSectionHidden}`}
					>
						<p className="kanit-bold">
							Consulta agendada com sucesso!
						</p>
						<Button
							onClick={() => navigate(homePath)}
							variant="arrow"
							text="Início"
						/>
					</section>
				</main>
			)}
		</>
	);
}
