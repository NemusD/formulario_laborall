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
            
            //Obtener los nombres de los archivos desde $data
            $curriculum_name = $_FILES['curriculum']['name'];
            $hoja_vida_name = $_FILES['hoja_vida']['name'];
            $licencia_conducir_name = $_FILES['licencia_conducir']['name'];
            $foto_carnet_name = $_FILES['foto_carnet']['name'];

            //Rutas de almacenamiento de los archivos
            $curriculum_path = '/archivos/curriculum' . $curriculum_name;
            $hoja_vida_path = '/archivos/hoja_vida' . $hoja_vida_name;
            $licencia_conducir_path = '/archivos/licencia_conducir' . $licencia_conducir_name;
            $foto_carnet_path = 'archivos/foto_carnet' . $foto_carnet_name;

            //Mover los archivos a la ubicación deseada
            move_uploaded_file($_FILES['curriculum']['tmp_name'], $_SERVER['DOCUMENT_ROOT'] . $curriculum_path);
            move_uploaded_file($_FILES['hoja_vida']['tmp_name'], $_SERVER['DOCUMENT_ROOT'] . $hoja_vida_path);
            move_uploaded_file($_FILES['licencia_conducir']['tmp_name'], $_SERVER['DOCUMENT_ROOT'] . $licencia_conducir_path);
            move_uploaded_file($_FILES['foto_carnet']['tmp_name'], $_SERVER['DOCUMENT_ROOT'] . $foto_carnet_path);

            //Se crea la consulta sql para insertar la data
            $sql = "INSERT INTO mpm_formulario (nombre, apellido_paterno, apellido_materno, rut, estado_civil, fecha_nacimiento, nacionalidad, telefono, contacto_emerg, correo, direccion, ciudad, estudio, afp, sist_salud, cargo, inclusivo, apoyo, apoyo_det, /* curriculum, hoja_vida, licencia_conducir, foto_carnet */) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,/* ?,?,?,? */)";
            $stmt = $this->pdo->prepare($sql);

            var_dump([$nombre, $apellido_paterno, $apellido_materno, $rut, $estado_civil, $fecha_nacimiento, $nacionalidad, $telefono, $contacto_emerg, $correo, $direccion, $ciudad, $estudio, $afp, $sist_salud, $cargo, $inclusivo, $apoyo, $apoyo_det]);

            //Ejecutar la consulta con los valores
            $stmt->execute([$nombre, $apellido_paterno, $apellido_materno, $rut, $estado_civil, $fecha_nacimiento, $nacionalidad, $telefono, $contacto_emerg, $correo, $direccion, $ciudad, $estudio, $afp, $sist_salud, $cargo, $inclusivo, $apoyo, $apoyo_det /* $curriculum_path, $hoja_vida_path, $licencia_conducir_path, $foto_carnet_path */]);

            var_dump($stmt->errorInfo());

            //Obtener el ID del formulario recién insertado
            $formulario_id = $this->pdo->lastInsertId();

            //Insertar archivos adjuntos en la tabla mpm_archivos
            $this->insertar_archivos($formulario_id, 'curriculum', $_FILES['curriculum']);
            $this->insertar_archivos($formulario_id, 'hoja_vida', $_FILES['hoja_vida']);
            $this->insertar_archivos($formulario_id, 'licencia', $_FILES['licencia_conducir']);
            $this->insertar_archivos($formulario_id, 'foto_carnet', $_FILES['foto_carnet']);

            echo json_encode(['message' => 'Se ha emitido correctamente tu postulación']);
            exit;
        }catch (PDOException $e) {
            echo json_encode(['error' => 'Ocurrió un error en la solicitud: ' . $e->getMessage()]);
            exit;
        }
    }

    //Función para insertar los archivos en la tabla mpm_archivos
    private function insertar_archivos($formulario_id, $tipo, $archivo) {
        $nombre = $archivo['name'];
        $tipo_archivo = $archivo['type'];
        $ruta = '/archivos/' . $tipo . '/' . $nombre;

        move_uploaded_file($archivo['tmp_name'], $_SERVER['DOCUMENT_ROOT'] . $ruta);

        $sql = "INSERT INTO mpm_archivos (formulario_id, nombre, tipo, ruta) VALUES (? , ? , ? , ?)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$formulario_id, $nombre, $tipo_archivo, $ruta]);
    }

}
?>