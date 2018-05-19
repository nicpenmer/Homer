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
        var newPass = $("#newPass").val().trim();

        //need to check/read through the database to makesure the USER NAME is not taken
        $.ajax("/api/create" + newUser, {
            type: "GET",
        }).then(function(response) {
                if (response === true) {
                    console.log("choose a new user name")
                } else {
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
                    }).then(function(data) {
                        console.log("new user added", newProfile);
                    });
                };
        });
    });

    //***********existing user Functionality****************

    //button for logging in
    $("#submit").on("click", function() {
        //grabs user input //check burger and train example...
        var user = $("#newUser").val().trim();
        var password = $("#newPass").val().trim();
        // creates local "temp" objest for new profile

        
        //creating a temp object to hold login data
        var login = {
            user: user,
            password: password
        };

        //need to loop thorugh the database to makesure the USER NAME is not taken
        $ajax("/api/login" + login, {
            type: "GET",
        }).then( 
            function(response) {
                if (response === true) {
                    // render "there" quiz.html page
                } else {
                    alert("your Username or Password is wrong  ")
                }
            });


    //     console.log(login);
    //     //send PUT request.
    //     $.ajax("/api/login", {
    //             type: "POST",
    //             data: login
    //         }).then(
    //             function() {
    //                 console.log("You are logged in", login);
    //                 //*******do we need anything else????
    //             }
    //         )
    //         //** do we need to clear the create profile form (is that needed?)
    });
});