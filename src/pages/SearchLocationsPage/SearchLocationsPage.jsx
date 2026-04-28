// Style Import
import style from './SearchLocationsPage.module.css';

// External Code Import
import { homePath } from '../../routes/routesPaths';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import locationsData from '../../mocks/locationsData.js'

// Component Import
import LocationDisplayer from '../../components/LocationDisplayer/LocationDisplayer';
import PageIndicator from '../../components/PageIndicator/PageIndicator';
import MainPageTemplate from '../../templates/MainPageTemplate/MainPageTemplate';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';


export default function SearchLocationsPage() {
	const navigate = useNavigate();
	const locations = locationsData;
	const [filteredLocations, setFilteredLocations] = useState(locationsData);

	return (
		<MainPageTemplate>
			<section className={style.section}>
				<PageIndicator
					pageName="Clínicas"
					returnTo={() => navigate(homePath)}
					marginTop="0"
					marginBottom="0"
				/>

				<div className={style.actions}>
					<SearchBar input={locations} output={setFilteredLocations} searchKey="name"/>
				</div>

				<div className={style.content}>
					<ul className={style.locationsList}>
						{filteredLocations.map((locationData) => (
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
