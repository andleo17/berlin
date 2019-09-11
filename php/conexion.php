<?php
$driver = 'mysql';
$server = 'localhost';
$database = 'prueba12';
$user = 'root';
$password = '';

$connection = new PDO("$driver:host=$server;dbname=$database", $user, $password);