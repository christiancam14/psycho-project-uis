<?php 
    
    session_start();

    // session_unset();

    // session_destroy();

    

    if(isset($_SESSION['id_person'])) {
        header('Location: ../index.php');

    }else{
        echo 'MALISIMO';
    }

    require('../php/db.php');

    if ( !empty($_POST['email_address']) && !empty($_POST['password'])) {

        $records = $conn->prepare('SELECT id_person, email_address, password FROM people WHERE email_address=:email_address');
        $records->bindParam(':email_address', $_POST['email_address']);
        $records->execute();
        $results = $records->fetch(PDO::FETCH_ASSOC);

        $message = '';
        
        if( is_countable($results) && password_verify($_POST['password'], $results['password'])) {
            $_SESSION['id_person'] = $results['id_person'];
            header('Location: ./login.php');
            $message = 'Welcome';
        } else {
            $message = 'Sorry, those credentials do not match';
        }
    }

?>

<?php  include('../php/header.php') ?>
<base href="http://localhost/psycho-project-uis/" />
<div class="container-fluid h-custom mb-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.png" class="img-fluid" alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form action="pages/login.php" method="POST">


                <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input type="email" id="form3Example3" name="email_address" class="form-control form-control-lg" placeholder="Enter a valid email address" />
                    <label class="form-label" for="form3Example3">Email address</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-3">
                    <input type="password" id="form3Example4" name="password" class="form-control form-control-lg" placeholder="Enter password" />
                    <label class="form-label" for="form3Example4">Password</label>
                </div>

                <?php if(!empty($message)): ?>
                    <p> <?= $message ?></p>
                <?php endif ?>

                <div class="d-flex justify-content-between align-items-center">
                    <!-- Checkbox -->
                    <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3">
                            Remember me
                        </label>
                    </div>
                    <a href="#!" class="text-body">Forgot password?</a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                    <input type="submit" class="btn btn-primary btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem;" value="Login">
                    <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="pages/singup.php" class="link-danger">Register</a></p>
                </div>

            </form>
        </div>
    </div>
</div>

<?php include('../php/footer.php') ?>