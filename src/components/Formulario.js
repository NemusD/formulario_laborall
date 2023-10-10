import React, { useState } from "react";

function Formulario() {
    //Declaración de los estados para cada campo del formulario
    const [nombre, setNombre] = useState('');
    const [apellido_paterno, setApellidoP] = useState('');
    const [apellido_materno, setApellidoM] = useState('');
    const [rut, setRut] = useState('');
    const [estado_civil, setEstadoCivil] = useState('');
    const [fecha_nacimiento, setFechaNac] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [genero, setGenero] = useState('');
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //Enviar datos del formulario por Ajax o Fetch
        console.log('Datos enviados: ', { nombre, apellido_paterno, apellido_materno, rut, estado_civil, fecha_nacimiento, nacionalidad, genero, telefono, contacto_emerg, correo, direccion, ciudad, estudio, afp, sist_salud, cargo, inclusivo, apoyo, apoyo_det });
    };

    return (
        //Formulario de postulación
        <form id="postulacion" onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingresar nombre"></input>
            </label>
            <label>
                Apellido Paterno:
                <input type="text" value={apellido_paterno} onChange={(e) => setApellidoP(e.target.value)} placeholder="Ingresar apellido paterno"></input>
            </label>
            <label>
                Apellido Materno:
                <input type="text" value={apellido_materno} onChange={(e) => setApellidoM(e.target.value)} placeholder="Ingresar apellido materno"></input>
            </label>
            <label>
                Rut:
                <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} placeholder="Ingresar rut"></input>
            </label>
            <label>
                Estado Civil:
                <select value={estado_civil} onChange={(e) => setEstadoCivil(e.target.value)}>
                    <option value=""disabled hidden>Seleccionar una opción</option>
                    <option value="soltero">Soltero/a</option>
                    <option value="casado">Casado/a</option>
                    <option value="divorciado">Divorciado/a</option>
                    <option value="viudo">Viudo/a</option>
                </select>
            </label>
            <label>
                Fecha Nacimiento:
                <input type="date" value={fecha_nacimiento} onChange={(e) => setFechaNac(e.target.value)} ></input>
            </label>
            <label>
                Nacionalidad:
                <input type="text" value={nacionalidad} onChange={(e) => setNacionalidad(e.target.value)} placeholder="Ingresar nacionalidad"></input>
            </label>
            <label>
                Género:
                <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} placeholder="Ingresar género"></input>
            </label>
            <label>
                Teléfono:
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Ingresar teléfono"></input>
            </label>
            <label>
                Contacto de Emergencia:
                <input type="text" value={contacto_emerg} onChange={(e) => setContactoEmerg(e.target.value)} placeholder="Ingresar teléfono de emergencia"></input>
            </label>
            <label>
                Correo:
                <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ingresar correo"></input>
            </label>
            <label>
                Dirección:
                <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Ingresar dirección"></input>
            </label>
            <label>
                Ciudad:
                <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder="Ingresar ciudad"></input>
            </label>
            <label>
                Estudio:
                <input type="text" value={estudio} onChange={(e) => setEstudio(e.target.value)} placeholder="Ingresar estudio"></input>
            </label>
            <label>
                AFP:
                <select value={afp} onChange={(e) => setAfp(e.target.value)}>
                    <option value=""disabled hidden>Seleccionar una AFP</option>
                    <option value="capital">AFP Capital</option>
                    <option value="cuprum">AFP Cuprum</option>
                    <option value="habitat">AFP Habitat</option>
                    <option value="modelo">AFP Modelo</option>
                    <option value="planvital">AFP Planvital</option>
                    <option value="provida">AFP Provida</option>
                    <option value="uno">AFP Uno</option>
                </select>
            </label>
            <label>
                Sistema de Salud:
                <select value={sist_salud} onChange={(e) => setSistSalud(e.target.value)}>
                    <option value=""disabled hidden>Seleccionar un prestador</option>
                    <option value="fonasa">Fonasa</option>
                    <option value="isapre">Isapre</option>
                </select>
            </label>
            <label>
                Cargo al que postula:
                <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Ingresar cargo"></input>
            </label>
            <label>
                Nuestras ofertas laborales son inclusivas, bajo el marco de la ley 21.015 de inclusión de personas con discapacidad al mundo laboral. En ese contexto, ¿Tienes alguna discapacidad?
                <select value={inclusivo} onChange={(e) => setInclusivo(e.target.value)}>
                    <option value=""disabled hidden>Seleccionar una opción</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
            </label>
            <label>
                ¿Requieres algún apoyo o ajuste razonable para participar en el proceso de selección?
                <select value={apoyo} onChange={(e) => setApoyo(e.target.value)}>
                    <option value=""disabled hidden>Seleccionar una opción</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
            </label>
            <label>
                Si tu respuesta es sí, indícanos cuales apoyos o ajustes requieres en el siguiente recuadro:
                <input type="text" value={apoyo_det} onChange={(e) => setApoyoDet(e.target.value)} placeholder="Ingresar apoyo o ajuste"></input>
            </label>

            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;