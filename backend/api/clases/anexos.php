<?php
//Generar la clase
class Anexos {
    protected $pdo;

    //Constructor que recibe una instancia de PDO al instanciar la clase
    function __construct($pdo) 
    {
        $this->pdo = $pdo;
    }

    //Función para enviar el formulario a la base de datos
    public function enviar_formulario($data) {
        try {
            //Deglose de los datos del formulario
            $nombre = $data['nombre'];
            $apellido_paterno = $data['apellido_paterno'];
            $apellido_materno = $data['apellido_materno'];
            $rut = $data['rut'];
            $estado_civil = $data['estado_civil'];
            $fecha_nacimiento = $data['fecha_nacimiento'];
            $nacionalidad = $data['nacionalidad'];
            $telefono = $data['telefono'];
            $contacto_emerg = $data['contacto_emerg'];
            $correo = $data['correo'];
            $direccion = $data['direccion'];
            $ciudad = $data['ciudad'];
            $estudio = $data['estudio'];
            $afp = $data['afp'];
            $sist_salud = $data['sist_salud'];
            $cargo = $data['cargo'];
            $inclusivo = $data['inclusivo'];
            $apoyo = $data['apoyo'];
            $apoyo_det = $data['apoyo_det'];

            //Se crea la consulta sql para insertar la data
            $sql = "INSERT INTO mpm_formulario (nombre, apellido_paterno, apellido_materno, rut, estado_civil, fecha_nacimiento, nacionalidad, telefono, contacto_emerg, correo, direccion, ciudad, estudio, afp, sist_salud, cargo, inclusivo, apoyo, apoyo_det) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            $stmt = $this->pdo->prepare($sql);
            //Ejecutar la consulta con los valores
            $stmt->execute([$nombre, $apellido_paterno, $apellido_materno, $rut, $estado_civil, $fecha_nacimiento, $nacionalidad, $telefono, $contacto_emerg, $correo, $direccion, $ciudad, $estudio, $afp, $sist_salud, $cargo, $inclusivo, $apoyo, $apoyo_det]);
            echo json_encode(['message' => 'Se ha emitido correctamente tu postulación']);
            exit;
        }catch (PDOException $e) {
            echo json_encode(['error' => 'Ocurrió un error en la solicitud: ' . $e->getMessage()]);
            exit;
        }
    }
}
?>