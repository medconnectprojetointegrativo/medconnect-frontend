// Style Import
import style from './SearchLocationsPage.module.css';

// External Code Import
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { homePath } from '../../routes/routesPaths';

// Services Import
import { locaisService } from '../../services/locaisService.js';

// Component Import
import LocationDisplayer from '../../components/LocationDisplayer/LocationDisplayer';
import PageIndicator from '../../components/PageIndicator/PageIndicator';
import MainPageTemplate from '../../templates/MainPageTemplate/MainPageTemplate';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';

export default function SearchLocationsPage() {
	const navigate = useNavigate();

	// Inicia com arrays vazios para evitar erros de renderização inicial
	const [locations, setLocations] = useState([]);
	const [filteredLocations, setFilteredLocations] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let isMounted = true;

		async function buscarDados() {
			try {
				setLoading(true);
				const response = await locaisService.buscarTodosLocais();

				if (isMounted && response?.data) {
					setLocations(response.data);
					setFilteredLocations(response.data);
				}
			} catch (error) {
				console.error('Erro ao carregar locais:', error);
			} finally {
				if (isMounted) setLoading(false);
			}
		}

		buscarDados();

		return () => {
			isMounted = false;
		};
	}, []);

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
					<SearchBar
						input={locations}
						output={setFilteredLocations}
						searchKey="name"
					/>
				</div>

				<div className={style.content}>
					{loading ? (
						<p>Carregando clínicas...</p>
					) : (
						<ul className={style.locationsList}>
							{filteredLocations.length > 0 ? (
								filteredLocations.map((location) => (
									<LocationDisplayer
										key={location.id_local}
										location={location}
									/>
								))
							) : (
								<p>Nenhuma clínica encontrada.</p>
							)}
						</ul>
					)}
				</div>
			</section>
		</MainPageTemplate>
	);
}
