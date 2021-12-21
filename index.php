<?php include('php\db.php') ?>
<?php include('php\header.php') ?>


<div class="container p-4 ">
    <div class="row">
        <div class="col-md-4">
            <div class="card card-body">
                <form action="php/save_task.php" method="POST">
                    <div class="form-group">
                        <input type="text" name="student_name" class="form-control" placeholder="Name" autofocus>
                    </div>
                    <div class="form-group">
                        <textarea name="student_last_name" rows="1" class="form-control" placeholder="Last Name"></textarea>
                    </div>
                    <div class="form-group">
                        <textarea name="student_email" rows="1" class="form-control" placeholder="Email"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="text" name="student_password" rows="1" class="form-control" placeholder="Password">
                    </div>
                    <input type="submit" class="btn btn-success btn-block" name="save_task" value="Save Task">
                </form>
            </div>
        </div>

        <div class="col-md-8">

        </div>
    </div>
</div>

<?php include('php\footer.php') ?>