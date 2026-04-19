import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router';

// Páginas
import AuthenticationPage from '../pages/AuthenticationPage/AuthenticationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

import HomePage from '../pages/HomePage/HomePage';

import { authenticationRoutes, appointmentRoutes } from './routesPaths';
import SearchLocationsPage from '../pages/SearchLocationsPage/SearchLocationsPage';
import LocationDisplayer from '../components/LocationDisplayer/LocationDisplayer';
import LocationInformationPage from '../pages/LocationInformationPage/LocationInformationPage';
import MakeAppointmentPage from '../pages/MakeAppointmentPage/MakeAppointmentPage';



export default function AppRoutes() {
    return (
		<Routes>
			<Route
				path={authenticationRoutes.authenticationPage}
				element={<AuthenticationPage />}
			/>
			<Route
				path={authenticationRoutes.loginPage}
				element={<LoginPage />}
			/>
			<Route
				path={authenticationRoutes.registerPage}
				element={<RegisterPage />}
			/>

			<Route path="/home" element={<HomePage />} />

			<Route
				path={appointmentRoutes.searchLocationsPage}
				element={<SearchLocationsPage />}
			/>
			<Route path="/location/:location_id" element={<LocationInformationPage />} />
			<Route
				path="/location/:location_id/appointment"
				element={<MakeAppointmentPage />}
			/>

			<Route path="*" element={<Navigate to="/home" />} />
		</Routes>
	);
}
