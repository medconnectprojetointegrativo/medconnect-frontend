// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import storage from '../utils/localStorage';
import { autenticacaoService } from '../services/autenticacaoService';
import { pacientesService } from '../services/pacientesService';
import { useNavigate } from 'react-router';
import { authenticationRoutes } from '../routes/routesPaths';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Recupera dados salvos ao recarregar a página
		const storedUser = storage.get('DADOS-USUARIO');
		const storedToken = storage.get('TOKEN');

		if (storedUser && storedToken) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false);
	}, []);

	const login = async (credenciais) => {
		let response = await autenticacaoService.login(credenciais);

		const { token } = response.data;
		storage.save('TOKEN', token);

		response = await autenticacaoService.validarToken();
		const dadosUsuario = response.data;

		let dadosPaciente;
		if (dadosUsuario.funcao == 'PACIENTE') {
			response = await pacientesService.buscarPaciente(
				dadosUsuario.id_paciente,
			);
			const { nome, sobrenome } = response.data;
			dadosPaciente = { nome, sobrenome };
		}

		const dadosUsuarioCompleto = { ...dadosUsuario, ...dadosPaciente };

		setUser(dadosUsuarioCompleto);
		storage.save('USUARIO', JSON.stringify(dadosUsuarioCompleto));
	};

	const logout = () => {
		setUser(null);
		storage.remove('USUARIO');
		storage.remove('TOKEN');

		navigate(authenticationRoutes.authenticationPage);
	};

	return (
		<AuthContext.Provider
			value={{ user, loading, login, logout, setUser }}
		>
			{children}
		</AuthContext.Provider>
	);
};

// Hook personalizado para facilitar o uso nos componentes
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth deve ser usado dentro de um AuthProvider');
	}
	return context;
};
