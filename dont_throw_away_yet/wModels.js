const cities = db.define('1000_cities', {
    City: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Rank: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    State: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Growth: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const users = db.define('users', {

    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },



});


const quiz = db.define("quizAnswers", {
    Answer1: {
        type: Sequelize.STRING
    },
    Answer2: {
        type: Sequelize.STRING
    },
    Answer3: {
        type: Sequelize.STRING
    },
    Answer4: {
        type: Sequelize.STRING
    },
    Answer5: {
        type: Sequelize.STRING
    },
    Answer6: {
        type: Sequelize.STRING
    },
    Answer7: {
        type: Sequelize.STRING
    },
    Answer8: {
        type: Sequelize.STRING
    },
    Answer9: {
        type: Sequelize.STRING
    },
    Answer10: {
        type: Sequelize.STRING
    },
    user_name: {
        type: Sequelize.STRING
    }
});


var makeUser = function (first, last, use, pass) {
    users.create({
        first_name: first,
        last_name: last,
        user_name: use,
        password: pass
    }).then(task => {
        console.log(users)
    });
};

var makeQuiz= function (q1, q2, q3, q4,q5,q6,q7,q8,q9,q10,name) {
    quiz.create({
       Answer1: q1,
       Answer2: q2,
       Answer3: q3,
       Answer4: q4,
       Answer5: q5,
       Answer6: q6,
       Answer7: q7,
       Answer8: q8,
       Answer9: q9,
       Answer10: q10,
    }).then(task => {
        console.log(quiz)
    });
};

const findUserObj = function (use) {

    db.sync().then(function () {
        users.findOne({
            where: {
                user_name: use
            }
        }).then(function (users) {
            console.log(users.dataValues);
        });
    });
};

const findCityName = function (name) {

    db.sync().then(function () {
        cities.findOne({
            where: {
                City: name
            }
        }).then(function (cities) {
            console.log(cities.dataValues);
        });
    });
};

const findAllCities = function () {

    db.sync().then(function () {
        cities.findAll().then(function (cities) {
            for (i = 0; i < cities.length; i++) {
                console.log(cities[i].dataValues);
            };
        });
    });
};

const findCityRank = function (rank) {

    db.sync().then(function () {
        cities.findOne({
            where: {
                Rank: rank
            }
        }).then(function (cities) {
            console.log(cities.dataValues);
        });
    });
};

const findCityInState = function (state) {

    db.sync().then(function () {
        cities.findAll({
            where: {
                State: state
            }
        }).then(function (cities) {
            for (i = 0; i < cities.length; i++) {
                console.log(cities[i].dataValues);
            }
        });
    });
};

module.exports= cities;
module.exports= users;
module.exports =quiz;
module.exports =makeQuiz;
module.exports =makeUser;
module.exports = findAllCities;
module.exports= findCityName;
module.exports= findUserObj;
module.exports= findCityRank;








// var Sequelize = require("sequelize");
 
//  var connection = new Sequelize('mysql://b0a4b7224817da:60d9bd96@us-cdbr-iron-east-04.cleardb.net/heroku_60fd5de9a81a0b1?reconnect=true');
 
//  var indUsers = connection.define("users", {
//      first_name: Sequelize.STRING,
//      last_name: Sequelize.STRING,
//      user_name: Sequelize.STRING,
//      password: Sequelize.STRING,
//  });
 
//  var cities = connection.define("1000_cities", {
//      City: Sequelize.STRING,
//      Rank: Sequelize.INTEGER,
//      State: Sequelize.STRING,
//      Growth: Sequelize.STRING,
//      Growth: Sequelize.STRING,
//  });
 
//  var quizIns = connection.define("quizAnswers", {
//     Q1: Sequelize.BOOLEAN,
//     Q2: Sequelize.BOOLEAN,
//     Q3: Sequelize.BOOLEAN,
//     Q4: Sequelize.BOOLEAN,
//     Q5: Sequelize.BOOLEAN,
//     Q6: Sequelize.BOOLEAN,
//     Q7: Sequelize.BOOLEAN,
//     Q8: Sequelize.BOOLEAN,
//     Q9: Sequelize.BOOLEAN,
//     Q10: Sequelize.BOOLEAN,
// });
 
 
 
 
//  function findUserObj(user) {
 
//      connection.sync().then(function () {
//          indUsers.findById(user).then(function (indUsers) {
//              console.log(indUsers.dataValues);
//          });
//      });
//  };
 
//  function findCityObj(user) {
 
//      connection.sync().then(function () {
//          cities.findById(user).then(function (cities) {
//              console.log(cities.dataValues);
//          });
//      });
//  };
//  function findFirst (){connection.sync().then(function () {
//  users.findAll({
//      where: {
//        first_name: "Norm"
//      }
//    });
//    console.log(users.dataValues);
//  });
 
//  }

//  findUserObj(1);
//  findCityObj(1); 