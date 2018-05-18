//***********Home Page Functionality****************

//***********New user Functionality****************
$(document).ready(function() {

	//buton to display new profile and login form (done through materialize)
	$('.modal').modal();

	//button for creating new profile
	$("#submitNewProfile").on("click", function(event) {
		event.preventDefault();

		//grabs user input 
		var newFirst = $("#newFirst").val().trim();
		var newLast = $("#newLast").val().trim();
		var newUser = $("#newUser").val().trim();
		var newPass  = $("#newPass").val().trim();

		//need to loop thorugh the database to makesure the USER NAME is not taken
		for (var i = 0; i < newUser.length; i++) {
			if (newUser[i] === ("what ever is in the database")) {
				console.log("user name taken")
				// clear username field 
			} else {
				//push newProfile to the database
			}
		}

		// creates local "temp" objest for new profile
		var newProfile = {
			first: newFirst,
			last: newLast,
			user: newUser,
			password: newPass
		};

		console.log(newProfile);
		//send POST request.
		$.ajax("/api/create", {
			type: "POST",
			data: newProfile
		}).then(
			function() {
				console.log("new user added", newProfile);
				//*******do we need anything else????
			}
		)
	});

//***********existing user Functionality****************

	//button for logging in
	$("#submit").on("click", function() {
		//grabs user input //check burger and train example...
		var user = $("#newUser").val().trim();
		var password  = $("#newPass").val().trim();
		// creates local "temp" objest for new profile

		for (var i = 0; i < user.length; i++) {
			//check database to see if it matches a username and password stored 
			if (user[i] === ("whats in the database") && password[i] === ("whats in the database")) {
				//find there file and render there profile
			} else 
			console.log("Either password or user name is wrong")
			//clear fields 
		}
		//creating a temp object to hold login data
		var login = {
			user: user,
			password: password
		};

		console.log(login);
		//send PUT request.
		$.ajax("/api/login", {
			type: "POST",
			data: login
		}).then(
			function() {
				console.log("You are logged in", login);
				//*******do we need anything else????
			}
		)
		//** do we need to clear the create profile form (is that needed?)
	});
});
