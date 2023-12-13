//Importar dependencias
import React, { useState } from "react";
import axios from "axios";

//Se define la URL de la API para las solicitudes
const url ="http://localhost/sites/mpm-formulario/backend/api/control.php";

function Formulario() {
    //Declaración de los estados para cada campo del formulario
    const [rutError, setRutError] = useState('');
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
    const [apoyoDetVisible, setApoyoDetVisible] = useState(false);
    const [apoyo_det, setApoyoDet] = useState('');
    
    /*Archivos*/
    const [curriculum, setCurriculum] = useState(null);
    const [hoja_vida, setHojaVida] = useState(null);
    const [licencia_conducir, setLicenciaConducir] = useState(null);
    const [foto_carnet, setFotoCarnet] = useState(null);

    //Función validador de Rut
    function validarRut(rut) {
        //Limpiar el RUT ingresado
        rut = rut.replace(/[^\dKk]/g, '').toUpperCase();

        //Formatear el RUT con guion
        if (rut.length === 9) {
            rut = rut.slice(0, 8) + "-" + rut.charAt(8);
        } else if (rut.length === 8) {
            rut = rut.slice(0 , 7) + "-" + rut.charAt(7);
        } else {
            return "RUT inválido, debe tener el formato correcto 12345678-9";
        } 
        console.log(rut);

        //Verificar si el RUT tiene formato correcto
        const rutRegex = /^(\d{7,8})-([\dKk])$/;
        if(!rutRegex.test(rut)) {
            return "RUT inválido, debe tener el formato correcto 12345678-9";
        }

        //Validar dígito verificador
        const rutSinDigito = rut.slice(0, -2);
        const digitoVerificador = rut.slice(-1);
        let suma = 0;
        let mul = 2;

        //Validación del dígito verificador
        for (let i = rutSinDigito.length - 1; i >= 0; i--) {
            suma += rutSinDigito.charAt(i) * mul;
            if (mul === 7) mul = 2;
            else mul++;
        }
        const resto = suma % 11;
        const resultado = 11 - resto;

        //Comparar el dígito verificador calculado con el proporcionado
        if((resultado === 11 && digitoVerificador === '0') || (resultado === 10 && digitoVerificador.toUpperCase() === 'K') || resultado === parseInt(digitoVerificador)) {
            //Rut válido
            console.log("Rut válido");
            return null; //Sin error
        } else {
            alert ("Rut inválido");
            return "RUT inválido, el dígito verificador es incorrecto.";
        }
    }
    //Manejo de eventos
    function handleRutValidation(rut) {
        const rutErrorMessage = validarRut(rut);
        if(rutErrorMessage) {
            //Mostrar el mensaje de error en la interfaz
            setRutError(rutErrorMessage);
            return true; //Existe error
        } else {
            //Limpiar el mensaje de error si el RUT es válido
            setRutError('');
            return false; //Sin error
        }
    }
    //Visibilidad de pregunta de inclusión
    const handleApoyoChange = (e) => {
        const selectedValue = e.target.value;
        setApoyo(selectedValue);
        //Si la respuesta es "No", desactiva la tercera pregunta
        if (selectedValue === "no") {
            setApoyoDetVisible(false);
            setApoyoDet("");
        } else {
            setApoyoDetVisible(true);
        }
    };

    //Validación de RUT
    const handleSubmit = async (e) => {
        e.preventDefault();
        //Validar el RUT
        const rutErrorMessage =  validarRut(rut);
        if (rutErrorMessage) {
            return;
        } else {
            setRutError("");
        }
        //Llamar a la función para enviar el formulario
        enviarData();
    };
    
    //Definir acción EnviarData
    const enviarData = async () => {
        //Crear un objeto con los datos del formulario
        const formData = new FormData();
        formData.append('tipo', 'enviar_formulario');
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

        /*Archivos*/
        formData.append('curriculum', curriculum || '');
        formData.append('hoja_vida', hoja_vida || '');
        formData.append('licencia_conducir', licencia_conducir || '');
        formData.append('foto_carnet', foto_carnet || '');

        console.log("Preparando envío de formulario...");
        console.log(formData);

        //Realizar solicitud POST al servidor
        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        console.log(response);

        try {
            /* const data = await response.json();
            console.log("Respuesta del servidor JSON: ", data); */
            
            //Datos enviados exitosamente
            if(response.status === 200) {
                console.log("Exitosa subida del formulario")
                alert("Datos enviados con éxito!");
            } else {
                //Error en la soliucitud
                const errorText = await response.text();
                console.error("Error en servidor:", response.status, response.statusText);
                console.error("Detalles del error:", errorText);
                alert("Error en la solicitud");
            }
        } catch (error) {
            console.error("Error al analizar la respuesta JSON: " , error);
            alert ("Error al enviar el formulario: Consulta la consola para más detalles" , error);
        }
    };

    return (
        //Formulario de postulación
        <form id="postulacion" onSubmit={handleSubmit} encType="multipart/form-data" >
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
                    <label> Rut:
                        <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} placeholder="Debe tener el formato 12345678-9" required/>
                    </label>
                    {rutError && <p className="error-message">{rutError}</p>}
                </div>
                <div className="col-md-6">
                    <label>Estado Civil:
                    <select value={estado_civil} onChange={(e) => setEstadoCivil(e.target.value)} required>
                        <option value=""disabled hidden>Seleccionar una opción</option>
                        <option value="soltero">Soltero/a</option>
                        <option value="casado">Casado/a</option>
                        <option value="separado">Separado/a</option>
                        <option value="divorciado">Divorciado/a</option>
                        <option value="viudo">Viudo/a</option>
                    </select>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>Fecha Nacimiento:
                        <input type="date" value={fecha_nacimiento} onChange={(e) => setFechaNac(e.target.value)} required />
                    </label>
                </div>
                <div className="col-md-6">
                    <label>Nacionalidad:
                        <input type="text" value={nacionalidad} onChange={(e) => setNacionalidad(e.target.value)} placeholder="Ingresar nacionalidad" required />
                    </label>
                </div>
                <div className="col-md-6">
                    <label>Teléfono:
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Ingresar teléfono" required />
                    </label>
                </div>
                <div className="col-md-6">
                    <label>Contacto de Emergencia:
                        <input type="text" value={contacto_emerg} onChange={(e) => setContactoEmerg(e.target.value)} placeholder="Ingresar teléfono de emergencia" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>Correo:
                        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ingresar correo" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>Dirección:
                        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Ingresar dirección" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>Ciudad:
                        <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder="Ingresar ciudad" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>Estudio:
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
                    <label>AFP:
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
                    <label>Sistema de Salud:
                        <select value={sist_salud} onChange={(e) => setSistSalud(e.target.value)} required>
                            <option value="" disabled hidden>Seleccionar un prestador</option>
                            <option value="fonasa">Fonasa</option>
                            <option value="isapre">Isapre</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>Cargo al que postula:
                        <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Ingresar cargo" required/>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>Nuestras ofertas laborales son inclusivas, bajo el marco de la ley 21.015 de inclusión de personas con discapacidad al mundo laboral. En ese contexto, ¿Tienes alguna discapacidad?
                        <select value={inclusivo} onChange={(e) => setInclusivo(e.target.value)} required>
                            <option value=""disabled hidden>Seleccionar una opción</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>¿Requieres algún apoyo o ajuste razonable para participar en el proceso de selección?
                        <select value={apoyo} onChange={(e) => handleApoyoChange(e)} required>
                            <option value=""disabled hidden>Seleccionar una opción</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-6">
                    <label>Si tu respuesta es sí, indícanos cuales apoyos o ajustes requieres en el siguiente recuadro:
                        <input type="text" value={apoyo_det} onChange={(e) => setApoyoDet(e.target.value)} placeholder="Ingresar apoyo o ajuste" disabled={!apoyoDetVisible} className={apoyo === "no" ? "input-no" : ""}/>
                    </label>
                </div>
            </div>
            <div className="col-12">
                <label>Curriculum:
                    <input id="curriculum" type="file" onChange={(e) => setCurriculum(e.target.files[0])} accept=".pdf, .doc, .docx" required />
                </label>
                <label>Hoja de vida:
                    <input id="hoja_vida" type="file" onChange={(e) => setHojaVida(e.target.files[0])} accept=".pdf, .doc, .docx" required />
                </label>
                <label>Licencia de Conducir:
                    <input id="licencia_conducir" type="file" onChange={(e) => setLicenciaConducir(e.target.files[0])} accept=".pdf, .doc, .docx" required />
                </label>
                <label>Fotos Carnet de Identidad:
                    <input id="foto_carnet" type="file" onChange={(e) => setFotoCarnet(e.target.files[0])} accept=".pdf, .doc, .docx" required />
                </label>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;