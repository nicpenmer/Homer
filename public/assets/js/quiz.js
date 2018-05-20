//***********Quiz Functionality****************
$(document).ready(function() {

	//on click
	$("body").on("click", "#submitQuiz", function() {

		//grab values from quiz
		var quizResults = {
			q1: $("#q1").val().trim(),
			q2: $("#q2").val().trim(),
			q3: $("#q3").val().trim(),
			q4: $("#q4").val().trim(),
			q5: $("#q5").val().trim(),
			q6: $("#q6").val().trim(),
			q7: $("#q7").val().trim(),
			q8: $("#q8").val().trim(),
			q9: $("#q9").val().trim(),
			q10: $("#q10").val().trim()
		};

		console.log("HIIII");

		// var for how many questions there are and home many answers the user filled out
		$.ajax("/api/quiz", {
			type: "POST",
			data: quizResults
		});
	});
//handle pushing it to the data base and redirect the the profile in api routes

// This function inserts a new todo into our database and then updates the view

});