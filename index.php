<?php include('php\db.php') ?>
<?php include('php\header.php') ?>

<?php
    //  $status = session_status();
    //  if($status == PHP_SESSION_NONE){
    //      //There is no active session
    //      session_start();
    //  }else
    //  if($status == PHP_SESSION_DISABLED){
    //      //Sessions are not available
    //  }else
    //  if($status == PHP_SESSION_ACTIVE){
    //      //Destroy current and start new one
    //      session_destroy();
    //      session_start();
    //  }
    session_start();

    require ('php\db.php');

    if(isset($_SESSION['id_person'])) {
        $conn->setAttribute( PDO::ATTR_EMULATE_PREPARES, false );
        $records = $conn->prepare('SELECT id_person, email_address, password FROM people WHERE id_person=:id_person');
        $records->bindParam(':id_person', $_SESSION['id_person']);
        $records->execute([]);
        $results = $records->fetch(PDO::FETCH_ASSOC);

        $user = null;

        if(is_countable($results)){
            $user = $results;
            $mensaje = 'está bien';
        }else{
            $mensaje = 'Acá ya está mal';
        }
    }else{
        echo 'mal';
    }

?>

<section >

    <div class="justify-content-end">
        <h3>INICIO</h3>
    </div>
    
</section>
<?php include('php\footer.php') ?>