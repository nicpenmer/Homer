// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads login.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // city route loads city.html
  app.get("/city", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/city.html"));
  });

  // quiz route loads quiz.html
  app.get("/quiz", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/quiz.html"));
  });

  // results route loads results.html
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });

  // user route loads user.html
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

};