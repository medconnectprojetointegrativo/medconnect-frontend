// Style Import
import style from './LoginPage.module.css';

// React Hooks
import { useState } from 'react';

// External Code Import
import { useNavigate, useLocation } from 'react-router';
import { authenticationRoutes, homePath } from '../../routes/routesPaths';
import { useAuth } from '../../contexts/AuthContext';

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
	const location = useLocation();
	const { login } = useAuth();

	const [cpf, setCpf] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	// Destino: rota anterior que o usuário tentou acessar ou homePath
	const from = location.state?.from?.pathname || homePath;

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError('');
		setIsLoading(true);

		try {
			const cleanCpf = cpf.replace(/\D/g, '');

			await login({login: cleanCpf, senha: password});
			navigate(from, { replace: true });
		} catch (err) {
			setError(
				err?.response?.data?.message ||
					'CPF ou senha inválidos. Tente novamente.',
			);
		} finally {
			setIsLoading(false);
		}
	};

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
					id="login_form"
					className={style.loginForm}
					onSubmit={handleSubmit}
				>
					<CPFInput
						name="CPF"
						value={cpf}
						onChange={(e) => setCpf(e.target.value)}
						required
					/>
					<TextInput
						type="password"
						name="password"
						label="Senha"
						placeholder="••••••••"
						icon={Password}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					{error && (
						<p
							style={{
								color: '#e53e3e',
								fontSize: '0.875rem',
								marginTop: '0.5rem',
								textAlign: 'center',
							}}
						>
							{error}
						</p>
					)}
				</POSTForm>

				<div className={style.options}>
					<Button
						type="submit"
						form="login_form"
						variant="arrow"
						height="large"
						width="100%"
						text={isLoading ? 'Entrando...' : 'Entrar'}
						disabled={isLoading}
					/>
					<Divider direction="horizontal" />
					<Button
						type="button"
						variant="secondary"
						height="small"
						width="100%"
						text="Esqueci a senha"
						onClick={() =>
							navigate(
								authenticationRoutes.forgotPasswordPage ||
									'/recuperar-senha',
							)
						}
					/>
				</div>
			</section>
		</main>
	);
}
