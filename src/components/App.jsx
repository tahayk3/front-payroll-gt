import { Button } from './ui/button'
import '../index.css'
import React, { useState } from 'react';
import SessionStorageHandler from '../services/session-storage'; 

const App = () => {
  const [nombre, setNombre] = useState("");
  const [nombreMostrar, setNombreMostrar] = useState("");

  const handler = new SessionStorageHandler();

  const handleInputChange = (e) => {
    const text = e.target.value;
    setNombre(text);
    console.log(text);
  }

  const handleSaveData = () => {
    handler.saveData("nombreUsuario", nombre);
  };

  const handleSetData = () => {
    handler.setData("nombreUsuario");
    const nombreMostrar = sessionStorage.getItem("nombreUsuario") || '';
    setNombreMostrar(nombreMostrar);
  };

  const handleRemoveData = () => {
    handler.removeData("nombreUsuario");
    setNombreMostrar('');
  };

  return (
    <div>
      <label>
        Ingresar nombre:
        <br />
        <input
          type="text"
          value={nombre}
          onChange={handleInputChange}
          style={{ border: '1px solid black', padding: '5px', borderRadius: '5px' }}
        />
      </label>
      <Button onClick={handleSaveData}>Guardar</Button>

      <br />
      <br />
      <br />
      <label>
        Valor guardado:
        <br />
        <input
          type="text"
          value={nombreMostrar}
          readOnly
          style={{ border: '1px solid black', padding: '5px', borderRadius: '5px' }}
        />
      </label>
      <Button onClick={handleSetData}>Recuperar valor del sessionStorage</Button>

      <br />
      <br />
      <Button onClick={handleRemoveData}>Eliminar valor del sessionStorage</Button>
    </div>
  );
};
export default App;