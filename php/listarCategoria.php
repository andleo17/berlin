<?php
require_once 'conexion.php';

$query = 'SELECT * FROM categoria;';
$result = $connection -> query($query);

while ($categoria = $result -> fetchObject()) {
    echo "
        <option value={$categoria -> id}>{$categoria -> nombre}</option>
    ";
}