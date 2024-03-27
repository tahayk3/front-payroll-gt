import React from 'react';

function Tabla({ columnas, datos }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border bg-blue-500 text-white">
        <thead>
          <tr>
            {columnas.map((columna, index) => (
              <th key={index} className="border p-2 bg-blue-700 text-white">{columna}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datos.map((fila, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-blue-300" : "bg-blue-200"}>
              {fila.map((dato, index) => (
                <td key={index} className="border p-2 text-black">{dato}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;