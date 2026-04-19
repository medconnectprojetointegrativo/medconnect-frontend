import style from './LateralNavigator.module.css';

import storage from '../../utils/localStorage';

import MEDCONNECT_LOGO from '/public-images/medconnect-full-logo-vertical.png';
import Menu from '../../assets/icons/Menu';
import { Link, useNavigate } from 'react-router';
import Hospital from '../../assets/icons/Hospital';
import House from '../../assets/icons/House';
import Exam from '../../assets/icons/Exam';
import Vaccine from '../../assets/icons/Vaccine';
import Calendar from '../../assets/icons/Calendar';
import { useState } from 'react';
import { appointmentRoutes, authenticationRoutes } from '../../routes/routesPaths';
import DoorExit from '../../assets/icons/DoorExit';

export default function LateralNavigator() {
	const options = [
		{
			key: 'home',
			label: 'Início',
			icon: <House />,
			path: '/home',
		},
		{
			key: 'appointment',
			label: 'Consultas',
			icon: <Hospital />,
			path: appointmentRoutes.searchLocationsPage,
		},
		{
			key: 'exams',
			label: 'Exames',
			icon: <Exam />,
			path: '/exams',
		},
		{
			key: 'vaccination',
			label: 'Vacinação',
			icon: <Vaccine />,
			path: '/vaccination',
		},
		{
			key: 'agenda',
			label: 'Agenda',
			icon: <Calendar />,
			path: '/agenda',
		},
	];

	const navigate = useNavigate();
	const lateralNavigatorVisibilityTag = 'lateral-navigator-visibility';
	const [isOpen, setIsOpen] = useState(
		storage.get(lateralNavigatorVisibilityTag),
	);

	function toggleMenu() {
		if (!isOpen) {
			storage.save(lateralNavigatorVisibilityTag, true);
			setIsOpen(storage.get(lateralNavigatorVisibilityTag));
		} else {
			storage.save(lateralNavigatorVisibilityTag, false);
			setIsOpen(storage.get(lateralNavigatorVisibilityTag));
		}
	}

	return (
		<nav
			className={`${style.navigator} ${isOpen ? style.navigatorOpen : style.navigatorClosed}`}
		>
			<div className={style.iconContainer} onClick={toggleMenu}>
				<Menu
					className={`${style.menuIcon} ${isOpen ? style.menuIconOpen : style.menuIconClosed}`}
				/>
			</div>

			<ul className={style.optionsList}>
				{options.map((option) => (
					<li
						className={`${style.listOption} ${isOpen && style.listOptionOpen}`}
						key={option.key} onClick={() => navigate(option.path)}
					>
							<span className={style.menuIcon}>
								{option.icon}
							</span>
							{isOpen && (
								<p
									className={`kanit-semibold ${style.menuLabel}`}
								>
									{option.label}
								</p>
							)}
					</li>
				))}
			</ul>

			<div className={style.iconContainer}>
				<Link className={style.link} to={authenticationRoutes.authenticationPage}>
					<span className={style.exitIcon}><DoorExit /></span>
					{isOpen && (
						<p className={`kanit-semibold ${style.menuLabel}`}>
							Sair
						</p>
					)}
				</Link>
			</div>
		</nav>
	);
}
