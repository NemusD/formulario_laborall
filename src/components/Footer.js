import React from "react";

//Función Footer
function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        {/* Logo de la empresa */}
                        <img src="/images/logo_blanco.png" alt="Logo MPM" className="center-image"/>
                    </div>
                    <div className="col-lg-3">
                        {/* Información de la empresa */}
                        <address className="address">
                            <strong className="text-uppercase">Casa Central</strong><br />
                            Avenida del Valle Norte 945 Of 4615, <br /> Ciudad Empresarial Huechuraba, Santiago, Chile.
                            <br />
                            <p>Correo: <a href="mailto: contacto@mpm.cl">contacto@mpm.cl</a></p>
                            <br />
                            <abbr title="Teléfono">Fono: +56 22 9549700</abbr>
                        </address>
                    </div>
                    <div className="col-lg-3">
                        <p><strong>MPM</strong><br />MPM LTDA es una empresa que ofrece servicios de fabricación y montaje industrial, arriendo de equipos y maquinarias, e instalación de recubrimientos antiácidos y anti abrasivos de alto rendimiento.</p>
                    </div>
                    <div className="col-lg-3">
                        {/* Certificaciones */}
                        <strong className="text-uppercase">Certificaciones SGI</strong><br />
                        <img src="/images/certificacion1.png" alt="Certificaciones SGI" className="center-image"/>
                    </div>
                    <div className="col-lg-12">
                        <strong>© Copyright - MPM 2023 - Todos los Derechos Reservados</strong><br />
                    </div>
                </div>
            </div>
        </footer>
    );
}

//Exportar función
export default Footer;