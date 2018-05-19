var Sequelize = require("sequelize");
 
 var connection = new Sequelize('mysql://b0a4b7224817da:60d9bd96@us-cdbr-iron-east-04.cleardb.net/heroku_60fd5de9a81a0b1?reconnect=true');
 
 var indUsers = connection.define("users", {
     first_name: Sequelize.STRING,
     last_name: Sequelize.STRING,
     user_name: Sequelize.STRING,
     password: Sequelize.STRING,
 });
 
 var cities = connection.define("1000_cities", {
     City: Sequelize.STRING,
     Rank: Sequelize.INTEGER,
     State: Sequelize.STRING,
     Growth: Sequelize.STRING,
     Growth: Sequelize.STRING,
 });
 
 var quizIns = connection.define("quizAnswers", {
    Q1: Sequelize.BOOLEAN,
    Q2: Sequelize.BOOLEAN,
    Q3: Sequelize.BOOLEAN,
    Q4: Sequelize.BOOLEAN,
    Q5: Sequelize.BOOLEAN,
    Q6: Sequelize.BOOLEAN,
    Q7: Sequelize.BOOLEAN,
    Q8: Sequelize.BOOLEAN,
    Q9: Sequelize.BOOLEAN,
    Q10: Sequelize.BOOLEAN,
});
 
 
 
 
 function findUserObj(user) {
 
     connection.sync().then(function () {
         indUsers.findById(user).then(function (indUsers) {
             console.log(indUsers.dataValues);
         });
     });
 };
 
 function findCityObj(user) {
 
     connection.sync().then(function () {
         cities.findById(user).then(function (cities) {
             console.log(cities.dataValues);
         });
     });
 };
 function findFirst (){connection.sync().then(function () {
 users.findAll({
     where: {
       first_name: "Norm"
     }
   });
   console.log(users.dataValues);
 });
 
 }

 findUserObj(1);
 findCityObj(1); 