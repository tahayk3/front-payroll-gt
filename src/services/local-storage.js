
import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
    /*
        Obtener el valor almacenado en el localStorage para la clave proporcionada.
        Comprobar si el valor recuperado del localStorage es null o undefined, si cumple devolver el defaulValue
        Si no, entonces devolver el valor analizado 
       */
    const saved = localStorage.getItem(key);
    if (saved === null || typeof saved === 'undefined') {
        return defaultValue; // Si es así, devolvemos el valor por defecto
    }
    const initial = JSON.parse(saved);
    console.log("Valor del item en localStorage: " + initial)
    return initial || defaultValue;
}


export const useLocalStorage = (key, defaultValue) => {
    /*Hook 
    inicalizar con el valor del getStorageValue
    actualizar cuando los valores cambian o eliminar la clave en caso es null-undefined
    opcion de remover la clave
    devolver el valor, la funcion para actualizar y la funcion para eliminar
    */

    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        if (value === null || typeof value === 'undefined') {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    const removeItem = () => {
        localStorage.removeItem(key);
        setValue(defaultValue);
    };

    return [value, setValue, removeItem];
};