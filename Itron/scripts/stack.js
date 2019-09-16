$(document).ready(function(){
	console.log("Started");
	console.log(firebase);
	$('#signUpBtn').click(()=>{
		var firstName=$('#f_name').val();
		var lastName=$('#l_name').val();
		var emailAddress=$('#e_mail').val();
		var userName=$('#u_name').val();
		var password1=$('#n_pass').val();
		var password2=$('#c_pass').val();

		console.log("First Name =>", firstName);
		console.log("Last Name =>", lastName);
		console.log("Email =>", emailAddress);
		console.log("Userame =>", userName);
		console.log("New password =>", password1);
		console.log("Confirm passwrod =>", password2);
		firebase.auth().createUserWithEmailAndPassword(emailAddress, password1)
		.then(res=>{
			console.log(res);
		})
		.catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// [START_EXCLUDE]
		if (errorCode == 'auth/weak-password') {
			alert('The password is too weak.');
		} else {
			alert(errorMessage);
		}
		console.log(error);
		// [END_EXCLUDE]
	});
	})
})