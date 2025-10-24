export function guardarLocalStorage(llave, valor){
    localStorage.setItem(llave, JSON.stringify(valor))
}

export function consultarLocalStorage(llave){
    return JSON.parse(localStorage.getItem(llave))
}