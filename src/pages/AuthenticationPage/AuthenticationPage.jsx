// Style Import
import style from './AuthenticationPage.module.css';

// External Code Import
import { useNavigate } from 'react-router';
import { authenticationRoutes } from '../../routes/routesPaths';

// Component Import
import Button from '../../components/Button/Button';
import Divider from '../../components/Divider/Divider';

// Icon, Image and Video Import
import MEDCONNECT_FULL_LOGO_VERTICAL from '/public-images/medconnect-full-logo-vertical.png';



export default function AuthenticationPage() {
	const navigate = useNavigate();

	return (
		<main className={style.pageStructure}>
			<img
				src={MEDCONNECT_FULL_LOGO_VERTICAL}
				width={300}
				alt="Logo MedConnect"
			/>

			<div className={style.welcomeText}>
				<p className="kanit-bold text-primary text-large">Bem-vindo!</p>
				<p className="kanit-regular text-primary text-standard">
					Como podemos te ajudar?
				</p>
			</div>

			<div className={style.options}>
				<Button
					variant="standard"
					height="large"
					width="100%"
					text="Login"
					onClick={() => navigate(authenticationRoutes.loginPage)}
				/>
				<Divider direction="horizontal" />
				<Button
					variant="secondary"
					height="large"
					width="100%"
					text="Cadastrar"
					onClick={() => navigate(authenticationRoutes.registerPage)}
				/>
			</div>
		</main>
	);
}
