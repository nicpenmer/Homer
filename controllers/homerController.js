var db = require("../models/index");
var wModels =("..config/wModels");

// module.exports =makeUser;
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of registered users
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for creating and saving new user
  // wModels.makeUser() 
  app.post("/api/create", function(req, res) {
    console.log(req.body);

    db.Post.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      userName: req.body.userName,
      password: req.body.password
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

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
app.get("/api/login/:id", function(req, res) {
  db.Post.findAll({
    where: {
      userName: req.body.userName,
      password: req.body.password
    }
  })
    .then(function(dbPostt) {
      res.json(dbPost);
    });
});

  // // Get route for returning posts of a specific category
  // app.get("/api/posts/category/:category", function(req, res) {
  //   db.Post.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};