<?php
include_once('../Database/database.php');

if(isset($_POST['sign_up']) && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['message']))
{
	$stuname = $_POST['name'];
	$stuemail = $_POST['email'];
	$stupass = $_POST['password'];

	$sql = "INSERT INTO student(stu_name, stu_email, stu_pass) VALUES('$stuname','$stuemail','$stupass')";

	if($conn->query($sql) == TRUE)
	{
		echo json_encode("ok");
	}
	else{
		echo json_encode("Failed");
	}
	
}



?>