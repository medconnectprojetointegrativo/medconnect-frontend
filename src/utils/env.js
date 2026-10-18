// src/config/env.js

/**
 * Determina a URL base dependendo explicitamente do ambiente de execução.
 */
function determinarBaseUrlApi() {
    if (import.meta.env.VITE_API_BASE_URL) {
        return import.meta.env.VITE_API_BASE_URL;
    }

    // 2. Fallbacks de segurança baseados no modo de execução
    /* const isProd = import.meta.env.MODE === 'production';

    return isProd
        ? 'https://api.minhaempresa.com.br/api/v1'
        : 'http://localhost:3333/api/v1';
    */
}

export const dadosAmbiente = {
    ambienteProducao: import.meta.env.MODE === 'production',
    ambienteDesenvolvimento: import.meta.env.MODE === 'development',
    urlBaseApi: determinarBaseUrlApi(),
};