class SessionService {
  constructor() {}

  set(clave, valor) {
    const valorString = JSON.stringify(valor);
    sessionStorage.setItem(clave, valorString);
    console.log('Valor guardado en sessionStorage bajo la clave "' + clave + '":', valor);
  }

  get(clave) {
    const valorString = sessionStorage.getItem(clave);
    if (valorString === null || valorString === "undefined") {
        console.log('No se encontró ningún valor en sessionStorage bajo la clave "' + clave + '"');
        return undefined;
    }
    try {
        const valorJSON = JSON.parse(valorString);
        console.log('Valor recuperado de sessionStorage bajo la clave "' + clave + '":', valorJSON);
        return valorJSON;
    } catch (error) {
        console.error('Error al analizar el valor JSON en sessionStorage bajo la clave "' + clave + '":', error);
        return undefined;
    }
}

  remove(clave) {
    sessionStorage.removeItem(clave);
    console.log('Se ha eliminado el valor de sessionStorage bajo la clave "' + clave + '"');
    console.log('Nuevo estado de sessionStorage:', sessionStorage);
  }

  removeAll() {
    sessionStorage.clear();
    console.log('Se han eliminado todas las claves de sessionStorage');
    console.log('Nuevo estado de sessionStorage:', sessionStorage);
  }
}

export default Object.freeze(new SessionService());
