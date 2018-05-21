// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the users
  app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.users.findAll({}).then(function(dbusers) {
      // We have access to the users as an argument inside of the callback function
      res.json(dbusers);
    });
  });

  app.get("/api/users/:name", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.users.findAll({where: {
        user_name: req.params.name
    }}).then(function(dbusers) {
      // We have access to the users as an argument inside of the callback function
      res.json(dbusers);
    });
  });

  app.get("/api/cities", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.cities.findAll({}).then(function(dbcities) {
      // We have access to the cities as an argument inside of the callback function
      res.json(dbcities);
    });
  });

  app.get("/api/cities/:name", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.cities.findAll({where: {
        City: req.params.name
    }}).then(function(dbcities) {
      // We have access to the cities as an argument inside of the callback function
      res.json(dbcities);
    });
  });

  // POST route for saving a new todo
  app.post("/api/users", function(req, res) {
    
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.users.create({
    first_name: "hank"  ,                              
    last_name:   "chinaski" ,                     
    user_name:   "hCinaski" ,                       
    password:     "crunge"  ,                  
    }).then(function(dbusers) {
      // We have access to the new user as an argument inside of the callback function
      res.json(dbusers);
    });
  });
 //req.body.text, req.body.text, req.body.text,req.body.text,
  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {

  });
};
