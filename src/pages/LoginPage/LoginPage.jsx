import style from './LoginPage.module.css';

import Button from '../../components/Button/Button';
import Divider from '../../components/Divider/Divider';
import POSTForm from '../../components/POSTForm/POSTForm';
import CPFInput from '../../components/Inputs/CPFInput/CPFInput';
import TextInput from '../../components/Inputs/TextInput/TextInput';

import MEDCONNECT_FULL_LOGO_VERTICAL from '/public-images/medconnect-full-logo-vertical.png';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import Password from '../../assets/icons/Password';

import { useNavigate } from 'react-router';
import { authenticationRoutes, homePath } from '../../routes/routesPaths';


export default function LoginPage() {
	const navigate = useNavigate();

	return (
		<main className={style.pageStructure}>
			<div className={style.pageHeader}>
				<ArrowLeft
					className={style.icons}
					onClick={() =>
						navigate(authenticationRoutes.authenticationPage)
					}
				/>
				<p className="kanit-light text-primary ">Página de Login</p>
				<span></span>
			</div>

			<img
				src={MEDCONNECT_FULL_LOGO_VERTICAL}
				width={200}
				alt="Logo MedConnect"
				className={style.img}
			/>

			<POSTForm endpoint="/teste" id="login-form" className={style.loginForm}>
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
					form="login-form"
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
		</main>
	);
}
