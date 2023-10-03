function addStu(){
	var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
	var name = $("#name").val();
	var email = $("#email").val();
	var password = $("#password").val();
	var message = $("#message").val();

	//checking for fields on form submission
	if(name.trim() == "")
	{
	   $("#warning-msg1").html('<small style="color:red">Enter your name !</small>');
	   $("#name").focus();
	   return false;
	}
	else if(email.trim() == "")
	{
	   $("#warning-msg2").html('<small style="color:red">Enter your email !</small>');
	   $("#email").focus();
	   return false;
	}else if(email.trim() != "" && !reg.test(email)){
	   $("#warning-msg2").html('<small style="color:red">Enter valid email !</small>');

	}

	else if(password.trim() == "")
	{
	   $("#warning-msg3").html('<small style="color:red">Enter your password !</small>');
	   $("#password").focus();
	   return false;
	}

  else{
  	 $.ajax({
       type : "POST",
       url : "php/add_student.php",
       dataType: "json",
       data : {
        sign_up : "Signup",
       	name : name,
       	email : email,
       	password : password,
       	message : message
       },
       success : function(data){
       	console.log(data);
       	if(data == "ok")
       	{
       		$('#success-message').html("<span class='alert-success'>Sign Up Successful ! </span>");
       	}
       	clear_sign_form();
       	else if(data == "Failed"){
       		$('#success-message').html("<span class='alert-danger'>Sign Up Failed ! </span>");
       	}
       }
    });
  }
   
}

// form reset 

function clear_sign_form(){
	$("#sign-form").trigger("reset");
	$("#name").html(" ");
	$("#email").html(" ");
	$("#password").html(" ");
	$("#message").html(" ");
}