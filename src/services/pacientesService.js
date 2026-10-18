import api from './axios';
import { API_ROUTES } from '../constants/rotasApi';

export const pacientesService = {
    buscarPaciente: async (id) => {
        const response = await api.get(API_ROUTES.pacientes.buscarPaciente(id));
        return response.data;
    },
};