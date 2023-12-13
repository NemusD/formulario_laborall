import React from "react";

/*Función HeroSection*/
function HeroSection() {
    return (
        <header id="Hero-Section" className="d-flex align-item-center justify-content-center">
            <div className="container2 col-12">
                <div className="mx-auto col-12 col-md-7">
                    <h1 className="text-uppercase">Trabaja con nosotros</h1>
                    <p className="text-uppercase">Únete a nuestro equipo de trabajo</p>
                    <button type="button" className="btn btn-outline-info btn-sm text-uppercase" onClick={() => {
                        const formulario = document.getElementById("postulacion");
                        if (formulario) {
                            formulario.scrollIntoView({ behavior: "smooth" });
                        }
                    }}>Ir al formulario</button>
                </div>
            </div>
        </header>
    )
}

export default HeroSection;