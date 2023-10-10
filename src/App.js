import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Formulario de Solicitud</h1>
      <Formulario />
    </div>
  );
}

export default App;
