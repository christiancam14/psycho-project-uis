<?php

/* Crear conexión a base de datos */

$server = 'localhost';
$username = 'root';
$password = '';
$database = 'psycho_project_db';

try {
    $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
  } catch (PDOException $e) {
    die('Connection Failed: ' . $e->getMessage());
  }

/*$conn = mysqli_connect(
    'localhost',
    'root',
    '',
    'psycho_project_db',
    '3306'
); */

?>