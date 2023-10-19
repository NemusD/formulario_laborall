<?php
ini_set('html_errors', false);

$host = 'localhost';
$db = 'qnet_base'; //dbxymoh1gi8lwk
$user = 'root'; //uyfanb3m4gtyw
$pass = ''; //}g312%dbu)&@
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
try {
     $pdo = new PDO($dsn, $user, $pass, $options);
     echo "Conexión a la base de datos exitosa";
} catch (\PDOException $e) {
     throw new \PDOException($e->getMessage(), (int)$e->getCode());
     die("Error en la conexión a la base de datos: " . $e->getMessage());
}
?>