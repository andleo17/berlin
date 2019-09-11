<?php
require_once 'conexion.php';
$categoria = $_POST['categoria'];
$nombre = $_POST['nombre'];

$query = "INSERT INTO producto VALUES (DEFAULT, $categoria, $nombre);";
$respuesta = 1;

$connection -> query($query) or $respuesta = 0;

echo $respuesta;