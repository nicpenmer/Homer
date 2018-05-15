//***********Home Page Functionality****************

//***********New user Functionality****************
$(document).ready(function() {
	//buton to display new profile and login form (done through materialize)
	$('.modal').modal();
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
