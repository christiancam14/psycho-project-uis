<?php

include("db.php");

if(isset($_POST['save_task'])){
    $student_name = $_POST['student_name'];
    $student_last_name = $_POST['student_last_name'];
    $student_email = $_POST['student_email'];
    $student_password = $_POST['student_password'];
    echo $student_name;
    echo $student_last_name;

$query = "INSERT INTO people(name, last_name, email_address, password) VALUES ('$student_name', '$student_last_name', '$student_email', '$student_password')";
    $result = mysqli_query($conn, $query);
    if(!$result){
        die("Query failed");
    }

    echo 'saved';


}

?>