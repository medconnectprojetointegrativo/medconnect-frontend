// Style Import
import style from './LoginPage.module.css';

// External Code Import
import { useNavigate } from 'react-router';
import { authenticationRoutes, homePath } from '../../routes/routesPaths';

// Component Import
import Button from '../../components/Button/Button';
import Divider from '../../components/Divider/Divider';
import POSTForm from '../../components/POSTForm/POSTForm';
import CPFInput from '../../components/Inputs/CPFInput/CPFInput';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import PageIndicator from '../../components/PageIndicator/PageIndicator';

// Icon, Image and Video Import
import MEDCONNECT_FULL_LOGO_VERTICAL from '/public-images/medconnect-full-logo-vertical.png';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import Password from '../../assets/icons/Password';

export default function LoginPage() {
	const navigate = useNavigate();

	return (
		<main className={style.page}>
			<section className={style.sectionStructure}>
				<PageIndicator
					pageName="Login"
					returnTo={() =>
						navigate(authenticationRoutes.authenticationPage)
					}
				/>

				<img
					src={MEDCONNECT_FULL_LOGO_VERTICAL}
					width={250}
					alt="Logo MedConnect"
					className={style.img}
				/>

				<POSTForm
					endpoint=""
					id="login_form"
					className={style.loginForm}
				>
					<CPFInput name="CPF" />
					<TextInput
						type="password"
						name="password"
						label="Senha"
						placeholder="••••••••"
						icon={Password}
					/>
				</POSTForm>

				<div className={style.options}>
					<Button
						type="submit"
						form="login_form"
						variant="arrow"
						height="large"
						width="100%"
						text="Entrar"
						onClick={() => navigate(homePath)}
					/>
					<Divider direction="horizontal" />
					<Button
						variant="secondary"
						height="small"
						width="100%"
						text="Esqueci a senha"
						onClick={() => navigate()}
					/>
				</div>
			</section>
		</main>
	);
}
