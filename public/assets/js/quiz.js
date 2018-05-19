//***********Quiz Functionality****************
$(document).ready(function() {

	//on click
	$("submitQuiz").on("click", function() {

		//grab values from quiz
		var quizResults = {
			q1: var q1 = $("#q1").val().trim();
			q2: var q2 = $("#q2").val().trim();
			q3: var q3 = $("#q3").val().trim();
			q4: var q4 = $("#q4").val().trim();
			q5:var q5 = $("#q5").val().trim();
			q6: var q6 = $("#q6").val().trim();
			q7: var q7 = $("#q7").val().trim();
			q8: var q8 = $("#q8").val().trim();
			q9: var q9 = $("#q9").val().trim();
			q10: var q10 = $("#q10").val().trim();
		};

		// var for how many questions there are and home many answers the user filled out
		ajax("/api/quiz" + quizResults, {
			type: "POST",
		}).then(
			function(data) {
			//checking to see if quiz is complete 
				if (quizResults.length === 10) {
					//if so push values to database and store in user profile
					res.json(true)
				} else {
					console.log("please fill out all questions")
				}
					}
				)
	});

});