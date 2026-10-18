import api from './axios';
import { API_ROUTES } from '../constants/rotasApi';

export const avaliacoesService = {
    buscarMediaAvaliacaoLocal: async (id) => {
        const response = await api.get(API_ROUTES.avaliacoes.buscarMediaAvaliacaoLocal(id));
        return response.data;
    },
};