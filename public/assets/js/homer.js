//***********Home Page Functionality****************

//***********New user Functionality****************
$(document).ready(function() {
		//buton to display new profile form
	$("#create").on("click", function() {
		//alert
		alert("Start your journey with Homer");
		//render new profile form
	});

	//button for creating new profile
	$("#submit").on("click", function() {
		//grabs user input //check burger and train example...
		var newfirst = $("#newFirst").val().trim();
		var newLast = $("#newLast").val().trim();
		var newUser = $("#newUser").val().trim();
		var newPass  = $("#newPass").val().trim();
		// creates local "temp" objest for new profile
		var newProfile = {
			first: newFirst,
			last: newLast,
			user: newUser,
			password: newPass
		};
		//send PUT request.
		$.ajax("/homer/create", {
			type: "POST",
			data: newProfile
		}).then(
			function() {
				console.log("new user added", newProfile);
				//*******do we need anything else????
			}
		)
		//** do we need to clear the create profile form (is that needed?)

		//Alert
		alert("welcome to homer");

		//render home profile page with stats for quiz
	});

//***********existing user Functionality****************
	//button to display login form
	$("#login").on("click", function() {
		//alert
		alert("Welcome back, continue your journey");
		//render login form
	});
	//button for logging in
	$("#submit").on("click", function() {
		//grabs user input //check burger and train example...
		var newUser = $("#newUser").val().trim();
		var newPass  = $("#newPass").val().trim();
		// creates local "temp" objest for new profile
		var login = {
			user: newUser,
			password: newPass
		};
		//send PUT request.
		$.ajax("/homer/login", {
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
