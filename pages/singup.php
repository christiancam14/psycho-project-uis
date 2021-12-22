<?php include('../php/db.php') ?>
<?php include('../php/header.php') ?>

<div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mx-auto">
    <form action="login.php" method="POST">

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
            <input type="email" id="form3Example3" name="email" class="form-control form-control-lg" placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-3">
            <input type="password" id="form3Example4" name="password" class="form-control form-control-lg" placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
        </div>

        <!-- Submit input -->
        <div class="text-center text-lg-start mt-4 pt-2">
            <input type="submit" class="btn btn-primary btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem;" value="SignUp">
        </div>

    </form>
</div>


<?php include('../php/footer.php') ?>