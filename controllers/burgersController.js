var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
  db.Burger.findAll().then(function(data) {
    var hbsObject = {
      burgers: data 
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  db.Burger.create({
    name: req.body.name,
    devoured : req.body.devoured,
  }).then(function(result) {
    res.json({ id: result.insertId });
    console.log("*******************************************")
    // res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) { 
  var condition = "id = " + req.params.id;
  var isDevoured= {
    devoured: true   
  }
  console.log("condition", condition);

  db.Burger.update(isDevoured, {
    fields: ['devoured'],
    where: { id: req.params.id }
  }).then(function(results){
   res.json(results);
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(results){
    res.json(results);
    location.reload()});

});

module.exports = router;
