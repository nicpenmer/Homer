// Server.js - This file is the initial starting point for the Node/Express server.
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var sequelizeRouter = require('sequelize-router');
var path = require("path");
// Requiring our models for syncing
var db = require("./models/index");
// var userTable = require("./db/seeds");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;
var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// ============s=================================================
require("./controllers/homerController")(app);
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// userTable.up(db.sequelize, db.Sequelize);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
