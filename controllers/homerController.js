var db = require("../models/index");
var Sequelize = require("sequelize");
var sequelizeRouter = require('sequelize-router');
var wModels =("..config/wModels");
const makeUser = require("../config/wModels").makeUser;
const users = require("../config/wModels").users;
const cities = require("../config/wModels").cities;
const quiz = require("../config/wModels").quiz;
const findAllCities = require("../config/wModels").findAllCities;
const indUserObj = require("../config/wModels").indUserObj;
const findCityRank = require("../config/wModels").findCityRank;
const findCityName = require("../config/wModels").findCityName;
const makeQuiz = require("../config/wModels").makeQuiz;

// Routes
// =============================================================

// GET route for getting all of registered users
//module.exports = function(app) { 
//  
//app.get("/api/posts", function(req, res) {
//  db.Post.findAll({})
//    .then(function(dbPost) {
//    // We have access to the todos as an argument inside of the callback function
//      res.json(dbPost);
//  });
//});

// var makeUser = function (first, last, use, pass) {
//   users.create({
//       first_name: first,
//       last_name: last,
//       user_name: use,
//       password: pass
//   }).then(task => {
//       console.log(users)
//   });
// };

// Get route for retrieving posts for a returning user
//app.get("/api/login/:id", function(req, res) {
//  db.Post.findAll({
//    where: {
//      userName: req.body.userName,
//      password: req.body.password
//    }
//  })
//    .then(function(dbPostt) {
//      res.json(dbPost);
//    });
//});

// POST route for creating and saving new user

//app.post("/api/posts/", function(req, res) {
//  console.log(req.body);
//  db.Post.create({
//    text: req.body.text,
//    complete: req.body.complete
//  }, {
//    where: makeUser,
      // first_name: req.body.first_name,
      // last_name: req.body.last_name,
      // userName: req.body.userName,
      // password: req.body.password
//  }).then(function(dbPost) {
 //   res.json(dbPost);
//  });
//});

// PUT route for updating quiz results and then sending results to the database
//app.get("/api/posts/", function(req, res) {
//  console.log(req.body);
//  db.Post.update({
//    text: req.body.text,
//    complete: req.body.complete
//  }, {
//    where: quiz,
//  }).then(function(dbQuiz) {
//    res.json(dbQuiz);
//  });
//});
//
//};

// // Get route for retrieving posts for a returning user
// app.get("/api/login/:id", function(req, res) {
//   db.Post.findAll({
//     where: {
//       userName: req.body.userName,
//       password: req.body.password
//     }
//   })
//     .then(function(dbPostt) {
//       res.json(dbPost);
//     });
// });

//   // // Get route for returning posts of a specific category
//   // app.get("/api/posts/category/:category", function(req, res) {
//   //   db.Post.findAll({
//   //     where: {
//   //       category: req.params.category
//   //     }
//   //   })
//   //     .then(function(dbPost) {
//   //       res.json(dbPost);
//   //     });
//   // });

//   // Get route for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

