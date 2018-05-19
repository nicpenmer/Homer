//***********Quiz Functionality****************
$(document).ready(function() {

	//build an array of the value for the quiz
	var quiz = [
		{
			"name": "Dennyela",
			"answers": [
				1,
				1,
				1,
			]
		},
	]

	$("submitQuiz").on("click", function() {

		// var for how many questions there are and home many answers the user filled out
		ajax("/api/quiz", + quiz, {
			type: "POST",
			data: quiz
		}).then(
			function(data) {
			//checking to see if quiz is complete 
				if (quiz.length === 10) {
					//if so push values to database and store in user profile
					res.json(true)
				} else {
					console.log("please fill out all questions")
				}
					}
				)
	});

module.exports = quiz;

});