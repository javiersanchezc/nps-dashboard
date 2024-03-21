// Module1.js
import React, { useState } from 'react';

// Agrega el enlace al archivo CSS de Bootstrap desde el CDN
const bootstrapCDN = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";

const Module1 = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleTransformClick = () => {
    if (file) {
      const fileName = file.name;
      fetch(`http://localhost:4000/GetFiles?fileName=${fileName}`)
        .then(response => {
          if (response.ok) {
            // Aquí puedes manejar la respuesta si es necesario
            console.log('Solicitud exitosa');
          } else {
            // Aquí puedes manejar errores de la solicitud
            console.error('Error en la solicitud:', response.statusText);
          }
        })
        .catch(error => {
          // Aquí puedes manejar errores de red
          console.error('Error de red:', error);
        });
    } else {
      console.error('No se ha seleccionado ningún archivo.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <div className="card" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Transformar Archivos</h2>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>Módulo de Transformación de Archivos</p>
        <form style={{ display: 'grid', gap: '10px', alignItems: 'center' }}>
          <input  type="file" class="form-control-file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
          <div style={{ display: 'grid', justifyContent: 'center' }}>
            <button onClick={handleTransformClick} className="btn btn-primary" style={{ backgroundColor: 'blue', borderRadius: '10px', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)', width: 'fit-content' }}>Transformar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Module1;

// Agrega el enlace al archivo CSS de Bootstrap al final del archivo para que sea aplicado a todo el documento
const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = bootstrapCDN;
document.head.appendChild(linkElement);
