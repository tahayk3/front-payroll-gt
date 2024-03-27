import React from "react";
import Uploader from "./Uploader";

function FileUploader() {

  //funcion para obtener nombre
  const handleFileName = (fileName) => {
    return fileName;
  };

  // Función para manejar la carga de la imagen
  const handleUpload = (url) => {
    onUpload(url);
  };

  return (
    <Uploader
      acceptedTypes={/\.pdf$/i}
      errorMessage="Por favor selecciona un archivo PDF."
      successMessage="La URL del archivo es: "
      handleFileName={handleFileName}
      onUpload={handleUpload}
    />
  );
}

export default FileUploader;