// Style Import
import style from './HomePage.module.css';

// External Code Import
import { useNavigate } from 'react-router';
import { appointmentRoutes } from '../../routes/routesPaths';
import storage from '../../utils/localStorage';

// Component Import
import MainPageTemplate from '../../templates/MainPageTemplate/MainPageTemplate';
import Divider from '../../components/Divider/Divider';
import Button from '../../components/Button/Button';

// Icon, Image and Video Import
import Hospital from '../../assets/icons/Hospital';
import Exam from '../../assets/icons/Exam';
import Vaccine from '../../assets/icons/Vaccine';
import Calendar from '../../assets/icons/Calendar';


export default function HomePage() {
	const navigate = useNavigate();
	const actualTime = new Date();
	const localHour = actualTime.getHours();
	const greetings = () => {
		if (localHour >= 5 && localHour <= 11) return 'Bom dia!';
		if (localHour >= 12 && localHour <= 17) return 'Boa tarde!';
		if (
			(localHour >= 18 && localHour <= 23) ||
			(localHour >= 0 && localHour <= 4)
		)
			return 'Boa noite!';
	};

	storage.save('user-info', {
		first_name: 'Usuário',
	});

	return (
		<MainPageTemplate>
			<section className={style.section}>
				<div className={style.greetings}>
					<p className="kanit-regular text-medium">{greetings()}</p>
					<strong className="kanit-semibold text-medium">
						{storage.get('user-info').first_name},
					</strong>
					<p className="kanit-regular">como podemos ajudá-lo?</p>
				</div>

				<Divider direction="horizontal" className={style.divider} />

				<div className={style.options}>
					<Button
						text="Consultas"
						height="extraLarge"
						className={style.mainButton}
						onClick={() =>
							navigate(appointmentRoutes.searchLocationsPage)
						}
					/>
					<Button text="Exames" variant="secondary" height="large" />
					<Button
						text="Vacinação"
						variant="secondary"
						height="large"
					/>
					<Button text="Agenda" variant="secondary" height="large" />
				</div>
			</section>
		</MainPageTemplate>
	);
}
