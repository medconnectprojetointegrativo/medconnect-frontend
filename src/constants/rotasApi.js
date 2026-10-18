export const API_ROUTES = {
    autenticacao: {
        login: '/autenticacao/login',
        cadastrar: '/autenticacao/cadastrar',
        validarToken: '/autenticacao/validar-token',
    },
    pacientes: {
        buscarPaciente: (id) => `/pacientes/${id}`
    },
    locais: {
        buscarTodosLocais: "/locais",
        buscarLocal: (id) => `/locais/${id}`
    },
    avaliacoes: {
        buscarMediaAvaliacaoLocal: (id) => `/locais/${id}/calcular-avaliacao`,
    }
};