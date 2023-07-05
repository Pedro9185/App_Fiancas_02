function buscarDadosDoLocalStorage(chave: any) {
    const dadosJSON = localStorage.getItem(chave);
    if (dadosJSON) {
        const dadosConvertidos = JSON.parse(dadosJSON);
        return dadosConvertidos;
    }
    return [];
}

export default buscarDadosDoLocalStorage;
