import api from './axios';
import { API_ROUTES } from '../constants/rotasApi';

export const locaisService = {
    buscarTodosLocais: async () => {
        const response = await api.get(API_ROUTES.locais.buscarTodosLocais);
        return response.data;
    },
    buscarLocal: async (id) => {
        const response = await api.get(API_ROUTES.locais.buscarLocal(id));
        return response.data;
    },
};