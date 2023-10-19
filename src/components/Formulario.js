//Importar dependencias
import React, { useState } from "react";

//Se define la URL de la API para las solicitudes
const url ="../../../api/control.php";

//Función validador de Rut
function validarRut(rut) {
    const rutRegex = /^0*(\d{1,3}(\.?\d{3}){2}-?[\dkK])$/;
    return rutRegex.test(rut);
}

function Formulario() {
    //Declaración de los estados para cada campo del formulario
    const [nombre, setNombre] = useState('');
    const [apellido_paterno, setApellidoP] = useState('');
    const [apellido_materno, setApellidoM] = useState('');
    const [rut, setRut] = useState('');
    const [estado_civil, setEstadoCivil] = useState('');
    const [fecha_nacimiento, setFechaNac] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contacto_emerg, setContactoEmerg] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [estudio, setEstudio] = useState('');
    const [afp, setAfp] = useState('');
    const [sist_salud, setSistSalud] = useState('');
    const [cargo, setCargo] = useState('');
    const [inclusivo, setInclusivo] = useState('');
    const [apoyo, setApoyo] = useState('');
    const [apoyo_det, setApoyoDet] = useState('');
    const [curriculum, setCurriculum] = useState(null);
    const [hoja_vida, setHojaVida] = useState(null);
    const [licencia_conducir, setLicenciaConducir] = useState(null);
    const [foto_carnet, setFotoCarnet] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //Validar el RUT
        if (!validarRut(rut)) {
            alert("RUT inválido, Debe tener el formato 12.345.678-9 o 12345678-9");
            return;
        } else {
            //Enviar datos del formulario por Ajax o Fetch
            console.log('Rut Valido:', rut);
        }
        console.log(validarRut)
        //Crear un objeto con los datos del formulario
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('apellido_paterno', apellido_paterno);
        formData.append('apellido_materno', apellido_materno);
        formData.append('rut', rut);
        formData.append('estado_civil', estado_civil);
        formData.append('fecha_nacimiento', fecha_nacimiento);
        formData.append('nacionalidad', nacionalidad);
        formData.append('telefono', telefono);
        formData.append('contacto_emerg', contacto_emerg);
        formData.append('correo', correo);
        formData.append('direccion', direccion);
        formData.append('ciudad', ciudad);
        formData.append('estudio', estudio);
        formData.append('afp', afp);
        formData.append('sist_salud', sist_salud);
        formData.append('cargo', cargo);
        formData.append('inclusivo', inclusivo);
        formData.append('apoyo', apoyo);
        formData.append('apoyo_det', apoyo_det);
        formData.append('curriculum', curriculum);
        formData.append('hoja_vida', hoja_vida);
        formData.append('licencia_conducir', licencia_conducir);
        formData.append('foto_carnet', foto_carnet);

        console.log(formData);

        console.log(url);
        try {
            //Realizar solicitud POST al servidor
            const response = await fetch(
                url, {
                method: 'POST',
                tipo: 'enviar_formulario',
                body: formData,
            });
            console.log(response);
            if(response.ok) {
                //Datos enviados exitosamente
                const data = await response.json();
                console.log(data);
                alert(data.message);
            } else {
                //Error en la soliucitud
                alert("Error en la solicitud");
            }        
        } catch (error) {
            alert("Ocurrió un error en la solicitud: " + error.message);
        }
    };

    return (
        //Formulario de postulación
        <form id="postulacion" onSubmit={handleSubmit}>
            <div className="row">
                <p>Bienvenido/a a nuestro portal de empleo online, completa los campos del formmulario y adjunta la Información requerida</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label> Nombre:
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingresar nombre" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label> Apellido Paterno:
                        <input type="text" value={apellido_paterno} onChange={(e) => setApellidoP(e.target.value)} placeholder="Ingresar apellido paterno" required />
                    </label>
                </div>
                <div className="col-md-6">
                    <label> Apellido Materno:
                        <input type="text" value={apellido_materno} onChange={(e) => setApellidoM(e.target.value)} placeholder="Ingresar apellido materno" required />
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Rut:
                        <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} placeholder="Debe tener el formato 12345678-9" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Estado Civil:
                    <select value={estado_civil} onChange={(e) => setEstadoCivil(e.target.value)} required>
                        <option value=""disabled hidden>Seleccionar una opción</option>
                        <option value="soltero">Soltero/a</option>
                        <option value="casado">Casado/a</option>
                        <option value="divorciado">Divorciado/a</option>
                        <option value="viudo">Viudo/a</option>
                    </select>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Fecha Nacimiento:
                        <input type="date" value={fecha_nacimiento} onChange={(e) => setFechaNac(e.target.value)} required />
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Nacionalidad:
                        <input type="text" value={nacionalidad} onChange={(e) => setNacionalidad(e.target.value)} placeholder="Ingresar nacionalidad" required />
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Teléfono:
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Ingresar teléfono" required />
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Contacto de Emergencia:
                        <input type="text" value={contacto_emerg} onChange={(e) => setContactoEmerg(e.target.value)} placeholder="Ingresar teléfono de emergencia" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Correo:
                        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ingresar correo" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Dirección:
                        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Ingresar dirección" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Ciudad:
                        <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder="Ingresar ciudad" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Estudio:
                        <select value={estudio} onChange={(e) => setEstudio(e.target.value)} required>
                            <option value=""disabled hidden>Seleccionar una opción</option>
                            <option value="media">Media</option>
                            <option value="tecnico">Técnico Profesional</option>
                            <option value="universitaria">Universitaria</option>
                            <option value="posgrado">Postgrado</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    AFP:
                        <select value={afp} onChange={(e) => setAfp(e.target.value)} required>
                            <option value="" disabled hidden>Seleccionar una AFP</option>
                            <option value="capital">AFP Capital</option>
                            <option value="cuprum">AFP Cuprum</option>
                            <option value="habitat">AFP Habitat</option>
                            <option value="modelo">AFP Modelo</option>
                            <option value="planvital">AFP Planvital</option>
                            <option value="provida">AFP Provida</option>
                            <option value="uno">AFP Uno</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Sistema de Salud:
                        <select value={sist_salud} onChange={(e) => setSistSalud(e.target.value)} required>
                            <option value="" disabled hidden>Seleccionar un prestador</option>
                            <option value="fonasa">Fonasa</option>
                            <option value="isapre">Isapre</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Cargo al que postula:
                        <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Ingresar cargo" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Nuestras ofertas laborales son inclusivas, bajo el marco de la ley 21.015 de inclusión de personas con discapacidad al mundo laboral. En ese contexto, ¿Tienes alguna discapacidad?
                        <select value={inclusivo} onChange={(e) => setInclusivo(e.target.value)} required>
                            <option value=""disabled hidden>Seleccionar una opción</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    ¿Requieres algún apoyo o ajuste razonable para participar en el proceso de selección?
                        <select value={apoyo} onChange={(e) => setApoyo(e.target.value)} required>
                            <option value=""disabled hidden>Seleccionar una opción</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>
                    Si tu respuesta es sí, indícanos cuales apoyos o ajustes requieres en el siguiente recuadro:
                        <input type="text" value={apoyo_det} onChange={(e) => setApoyoDet(e.target.value)} placeholder="Ingresar apoyo o ajuste" required />
                    </label>
                </div>
            </div>
            <div className="col-12">
            <label>
                Curriculum:
                    <input type="file" onChange={(e) => setCurriculum(e.target.files[0])} accept=".pdf, .doc, .docx" required />
                </label>
                <label>
                Hoja de vida:
                    <input type="file" onChange={(e) => setHojaVida(e.target.files[0])} accept=".pdf, .doc, .docx" required />
                </label>
                <label>
                Licencia de Conducir:
                    <input type="file" onChange={(e) => setLicenciaConducir(e.target.files[0])} accept=".pdf, .doc, .docx" required />
                </label>
                <label>
                Fotos Carnet de Identidad:
                    <input type="file" onChange={(e) => setFotoCarnet(e.target.files[0])} accept=".pdf, .doc, .docx" required />
                </label>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;