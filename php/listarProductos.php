<?php
require_once 'conexion.php';

$query = 'SELECT producto.id, producto.nombre as producto, categoria.nombre as categoria FROM producto INNER JOIN categoria ON producto.id_categoria = categoria.id ORDER BY 1;';
$resultados = $connection->query($query);

while ($producto = $resultados->fetchObject()) {
    echo "
        <tr>
            <td>{$producto->id}</td>
            <td>{$producto->producto}</td>
            <td>{$producto->categoria}</td>
        </tr>
    ";
}
