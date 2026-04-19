import LocationDisplayer from '../../components/LocationDisplayer/LocationDisplayer';
import PageIndicator from '../../components/PageIndicator/PageIndicator';
import { homePath } from '../../routes/routesPaths';
import MainPageTemplate from '../../templates/MainPageTemplate/MainPageTemplate';
import style from './SearchLocationsPage.module.css';
import INTEGRALE_ODONTO from '../../assets/images/INTEGRALE_ODONTO.jpg'

export default function SearchLocationsPage() {
	const locationsData = [
		{
			id: '7K9vR',
			name: 'Integrale Odontologia',
			logo: INTEGRALE_ODONTO,
			distance: '10 KM',
			address: 'R. 33, 437 - Centro, Goianésia - GO',
		},
	];

	return (
		<MainPageTemplate>
			<section className={style.section}>
				<PageIndicator
					pageName="Procurar Clínicas"
					returnTo={homePath}
				/>

				<div className={style.content}>
					<h1 className="kanit-semibold">Clínicas</h1>

					<ul>
						{locationsData.map((locationData) => (
							<LocationDisplayer
								key={locationData.id}
								location={locationData}
							/>
						))}
					</ul>
				</div>
			</section>
		</MainPageTemplate>
	);
}
