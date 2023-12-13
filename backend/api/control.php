<?php

//Configuración del CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

//Incluir las clases necesarias y conexión a la base de datos
include "clases/anexos.php";
include "../comun/conn.php";

//Crear una instancia de las clases
$anexos = new Anexos($pdo);

// Obtener el valor del parámetro "tipo" enviado a través de POST o GET
$tipo = isset($_POST["type"]) ? $_POST["type"] : (isset($_GET["type"]) ? $_GET["type"] : "");

//Si el tipo es "enviar_formulario" envía la data a la base de datos
if($tipo == "enviar_formulario") {
    //Llamar al método "enviar_formulario" de la clase "Anexos"
    $formulario = $anexos->enviar_formulario($_POST);
    echo $formulario;
}

?>