// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Module1 from './components/Module1';
import Module2 from './components/Module2'; // Importa otros módulos según sea necesario
import Module3 from './components/Module3';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedModule, setSelectedModule] = useState(null);

  const handleSelectModule = (moduleId) => {
    setSelectedModule(moduleId);
  };

  const renderSelectedModule = () => {
    switch (selectedModule) {
      case 1:
        return <Module1 />;
      case 2:
        return <Module2 />;
      case 3:
        return <Module3 />; // Renderiza el nuevo módulo
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar onSelectModule={handleSelectModule} />
        <main>
          {renderSelectedModule()}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
