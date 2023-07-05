function armazenarDadosUsuarioLocalStorage(chave: any, valor: any) {
    const valorJSON = JSON.stringify(valor);
    localStorage.setItem(chave, valorJSON);
}

export default armazenarDadosUsuarioLocalStorage;
