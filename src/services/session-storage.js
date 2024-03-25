import  { Component } from 'react';

class SessionStorageHandler extends Component {
  constructor(props) {
    super(props);
  }

  saveData(clave, valor) {
    sessionStorage.setItem(clave, valor);
    console.log(sessionStorage);
    alert('Valor guardado en sessionStorage bajo la clave "' + clave + '": ' + valor);
  }

  setData(clave) {
    const valorMostrar = sessionStorage.getItem(clave) || '';
    alert('Valor recuperado de sessionStorage bajo la clave "' + clave + '": ' + valorMostrar);
  }

  removeData(clave) {
    sessionStorage.removeItem(clave);
    alert('Se ha eliminado el valor de sessionStorage bajo la clave "' + clave + '"');
  }
}

export default SessionStorageHandler;
