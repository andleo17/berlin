<?php
require_once 'conexion.php';

$nombre = $_POST['nombre'];

$query = "INSERT INTO categoria VALUES (DEFAULT, '$nombre')";

$respuesta = 1;

$connection->query($query) or $respuesta = 0;

echo $respuesta;
