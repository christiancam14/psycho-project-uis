<?php 
    require('../php/db.php');

    $message = '';

    if (!empty($_POST['name']) && !empty($_POST['last_name']) && !empty($_POST['email_address']) && !empty($_POST['password'])) {
        $sql = "INSERT INTO people (name, last_name, email_address, password) VALUES (:name, :last_name, :email_address, :password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $_POST['name'], PDO::PARAM_STR);
        $stmt->bindParam(':last_name', $_POST['last_name'], PDO::PARAM_STR);
        $stmt->bindParam(':email_address', $_POST['email_address'], PDO::PARAM_STR);
        $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
        $stmt->bindParam(':password', $password, PDO::PARAM_STR);

        if($stmt->execute()){
            $message = 'Succesfully created new user';
        } else {
            $message = 'Sorry there must have been an issue creating your password';
        }

    }


?>
<?php include('../php/header.php') ?>

<!-- Mensaje de confirmación -->
<?php if(!empty($message)):  ?>
    <p><center><?= $message?> </center></p>
<?php endif ?>

<base href="http://localhost/psycho-project-uis/" />
<div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mx-auto mb-5">
    <form action="pages/singup.php" method="POST">

        <!-- Name input -->
        <div class="form-outline mb-4">
            <input type="text" id="form3Example1" name="name" class="form-control form-control-lg" placeholder="Enter your name" />
            <label class="form-label" for="form3Example3">Name</label>
        </div>

        <!-- Last name input -->
        <div class="form-outline mb-3">
            <input type="text" id="form3Example2" name="last_name" class="form-control form-control-lg" placeholder="Enter your last name" />
            <label class="form-label" for="form3Example4">Last name</label>
        </div>

        <!-- Email input -->
        <div class="form-outline mb-4">
            <input type="email_address" id="form3Example3" name="email_address" class="form-control form-control-lg" placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-3">
            <input type="password" id="form3Example4" name="password" class="form-control form-control-lg" placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
        </div>

        <!-- Confirm password input -->
        <div class="form-outline mb-3">
            <input type="password" id="form3Example4" name="confirm_password" class="form-control form-control-lg" placeholder="Confirm your password" />
            <label class="form-label" for="form3Example4">Confirm password</label>
        </div>

        <!-- Submit input -->
        <div class="text-center text-lg-start mt-4 pt-2">
            <input type="submit" class="btn btn-primary btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem;" value="SignUp">
            <p></p>
            <span class="small fw-bold mt-2 pt-1 mb-0">or <a href="pages/login.php">Login</a> </span>
        </div>

    </form>
</div>


<?php include('../php/footer.php') ?>