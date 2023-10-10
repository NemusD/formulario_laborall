import React from "react";

//Función Navbar
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src="../images/logo.png" alt="Logo MPM"></img>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/formulario">Formulario</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
