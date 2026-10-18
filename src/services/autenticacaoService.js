
import api from './axios';
import { API_ROUTES } from '../constants/rotasApi';

export const autenticacaoService = {
    login: async (credenciais) => {
        const response = await api.post(API_ROUTES.autenticacao.login, credenciais);
        return response.data;
    },

    validarToken: async () => {
        const response = await api.post(API_ROUTES.autenticacao.validarToken);
        return response.data;
    },
};