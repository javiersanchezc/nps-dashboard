// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Importa el archivo de estilos para el Sidebar

const Sidebar = ({ onSelectModule }) => {
  const [selectedModule, setSelectedModule] = useState(null);

  const handleModuleClick = (moduleId) => {
    setSelectedModule(moduleId);
    onSelectModule(moduleId);
  };

  return (
    <aside className="sidebar-container nav flex-column">
      <div className="card" style={{ width: '250px' }}>
        <ul className="list-group list-group-flush">
          <li onClick={() => handleModuleClick(1)} className={`list-group-item ${selectedModule === 1 ? 'active' : ''}`}>TRASFORMAR ARCHIVOS</li>
          <li onClick={() => handleModuleClick(2)} className={`list-group-item ${selectedModule === 2 ? 'active' : ''}`}>CARGAR ARCHIVOS</li>
          <li onClick={() => handleModuleClick(3)} className={`list-group-item ${selectedModule === 3 ? 'active' : ''}`}>EJECUCION API</li>
          
          {/* Agrega más elementos del menú según sea necesario */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
