import { Button } from './ui/button'
import '../index.css'
import React, { useState } from 'react';
import { useLocalStorage } from "../services/local-storage";

const App = () => {
  const [inputText, setInputText, removeItem] = useLocalStorage("nombreUsuario", '');
  const [nombre, setNombre] = useState("");
  const [nombreMostrar, setNombreMostra] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value
    setNombre(text);
    console.log(text);
  }

  const saveData = (event) => {
    setInputText(nombre);
    alert('Valor del input guardado en el almacenamiento local: ');
  }
  const setData = () => {
    setNombreMostra(inputText);
    alert("Se mostro el valor guardado");
  };
  const removeData = () => {
    //Forma 1 de eliminar el item
    //    setInputText("");
    //forma 2 de eliminar item
    removeItem();
    setNombreMostra("");
    alert("El valor del localStorage se ha eliminado");
  };

  return (
    <div className='text-center text-2xl '>
      <label>
        Ingresar nombre:
        <br />
        <input
          type="text"
          onChange={handleInputChange}
          style={{ border: '1px solid black', padding: '5px', borderRadius: '5px' }}
        />
      </label>
      <Button onClick={saveData} >Guardar</Button>


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
      <Button onClick={setData}>Recuperar valor del localStorage</Button>

      <br />
      <br />
      <Button onClick={removeData}>Eliminar valor del localStorage</Button>
    </div>
  )
}

export default App