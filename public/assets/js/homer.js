//***********Home Page Functionality****************
$(document).ready(function() {
		//buton to display new profile form
	$("#create").on("click", function() {
		//alert
		alert("Start your journey with Homer");
		//render new profile form
	});

	//button to display login form
	$("#login").on("click", function() {
		//alert
		alert("Welcome back, continue your journey");
		//render login form
	});

	//button for creating new profile
	$("#submit").on("click", function() {
		//grabs user input //check burger and train example...
		var newfirst = $(this).data("#newFirst").val().trim();
		var newLast = $(this).data("#newLast").val().trim();
		var newUser = $(this).data("#newUser").val().trim();
		var newPass  = $(this).data("#newPass").val().trim();
		// creates local "temp" objest for new profile
		var newProfile = {
			first: newFirst,
			last: newLast,
			user: newUser,
			password: newPass
		};
		//send PUT request.
		$.ajax("/api/homer/" + newUser, {
			type: "PUT",
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

});

