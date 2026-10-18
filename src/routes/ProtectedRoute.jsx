import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { autenticacaoService } from '../services/autenticacaoService';
import storage from '../utils/localStorage'; // ou seu helper de storage
import { authenticationRoutes } from './routesPaths';

export const ProtectedRoute = () => {
	const { logout, setUser, user } = useAuth();
	const location = useLocation();

	// true enquanto a requisição de validação do token estiver rodando
	const [isValidating, setIsValidating] = useState(true);
	// true apenas se a API confirmar que o token continua válido
	const [isTokenValid, setIsTokenValid] = useState(false);

	useEffect(() => {
		let isMounted = true;

		const checkToken = async () => {
			const token = storage.get('TOKEN');

			try {
				// 2. Chama o endpoint do backend que valida a assinatura e expiração do JWT
				const response = await autenticacaoService.validarToken();

				if (response.statusCode == 200 && isMounted) {
					setIsTokenValid(true);

					if (!user) {
						const dadosUsuario = storage.get('USUARIO');
						setUser(JSON.parse(dadosUsuario));
					}
				}
			} catch (error) {
				// 3. Se a API recusar (token expirado ou adulterado), limpa a sessão
				if (isMounted) {
					setIsTokenValid(false);
					logout();
				}
			} finally {
				if (isMounted) {
					setIsValidating(false);
				}
			}
		};

		checkToken();

		return () => {
			isMounted = false;
		};
	}, [location.pathname]); // Valida na montagem e sempre que o usuário trocar de página

	// Exibe tela de carregamento enquanto a validação com a API está em andamento
	if (isValidating) {
		return (
			<div
				style={{
					display: 'grid',
					placeItems: 'center',
					height: '100vh',
				}}
			>
				<p>Validando sessão...</p>
			</div>
		);
	}

	// Se o backend aprovou o token, libera o acesso; caso contrário, redireciona para login
	return isTokenValid ? (
		<Outlet />
	) : (
		<Navigate to={authenticationRoutes.authenticationPage} replace state={{ from: location }} />
	);
};
