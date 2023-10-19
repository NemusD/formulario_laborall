import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
