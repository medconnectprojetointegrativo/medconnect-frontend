import { useNavigate } from 'react-router';
import style from './LocationDisplayer.module.css'

import MEDCONNECT_LOGO_WHITE from '/public-images/medconnect-full-logo-vertical-white.png';
import { appointmentRoutes } from '../../routes/routesPaths';
import FilledLocation from '../../assets/icons/FilledLocation';

export default function LocationDisplayer({location}) {
    const navigate = useNavigate();

    return (
		<div className={style.container} onClick={() => navigate(appointmentRoutes.locationPage(location.id))}>
			<img src={location.logo} alt="Logo do Local" className={style.locationImage} />

			<div>
				<h2 className={`kanit-semibold text-white ${style.locationName}`}>{location.name}</h2>
				<p className={`kanit-regular text-white ${style.locationDistance}`}>À {location.distance} de distância de você</p>
				<p className={`kanit-regular text-white ${style.locationAddress}`}><FilledLocation className={style.locationIcon}/>{location.address}</p>
			</div>
		</div>
	);
}