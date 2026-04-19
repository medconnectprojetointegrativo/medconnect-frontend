/**
 * Converte bytes para uma string legível (KB, MB, GB, etc.)
 * @param {number} bytes - O tamanho original em bytes
 * @param {number} decimals - Quantidade de casas decimais (padrão: 2)
 */
export const formatFileSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

    // Encontra o índice da unidade correta usando logaritmo
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};