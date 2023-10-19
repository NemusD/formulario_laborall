<?php

//Incluir las clases necesarias y conexión a la base de datos
include "clases/anexos.php";
include "../comun/conn.php";

//Crear una instancia de PDO con la conexión a la base de datos
$pdo = new PDO($dsn, $user, $pass, $options);

//Crear una instancia de las clases
$anexos = new Anexos($pdo);

// Obtener el valor del parámetro "tipo" enviado a través de POST o GET
$tipo = isset($_POST["tipo"]) ? $_POST["tipo"] : (isset($_GET["tipo"]) ? $_GET["tipo"] : "");

//Si el tipo es "enviar_formulario" envía la data a la base de datos
if($tipo == "enviar_formulario"){
    //Llamar al método "enviar_formulario" de la clase "Anexos"
    $formulario = $anexos->enviar_formulario($_POST);
    echo json_encode($formulario);
}
?>