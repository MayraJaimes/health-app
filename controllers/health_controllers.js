var express = require("express");
var router = express.Router();
var health = require("../models/health.js");

router.get("/", function(req, res) {
    health.all(function(data) {
    var hbsObject = {
      health: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/:id", function(req, res) {
  var condition = "event_id = " + req.params.id;
  health.selectOne(condition, function(data) {
    console.log(data);
    res.render("single-entry", data[0]);
  });
});

router.get("/information/:order/:limit", function(req, res) {
  var order = req.params.order;
  var limit = req.params.limit;

  health.average(order, limit, function(data) {
    var hbsObject = {
      health: data
    };
    console.log(hbsObject);
    res.render("information", hbsObject);
  });
});

router.post("/api/health", function(req, res) {
    health.create([
    "run_date", "total_miles", "total_min", "calorie_intake"
  ], [
    req.body.date, req.body.miles, req.body.minutes, req.body.calories,
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/health/:id", function(req, res) {
  var condition = "event_id = " + req.params.id;
  health.update({total_miles: req.body.miles, total_min: req.body.minutes, calorie_intake: req.body.calories}
  , condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/health/:id", function(req, res) {
  var condition = "event_id = " + req.params.id;

  health.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
