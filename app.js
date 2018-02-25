var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// var mysql = require("mysql");
// var connection = require("./connection");


var app = express();
var PORT = process.env.PORT || 3000;

var entries = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/entries", function(req, res) {
    var newentry = req.body;
    newentry.routeName = newentry.name.replace(/\s+/g, "").toLowerCase();
    console.log(newentry);
    entries.push(newentry);
    res.json(newentry);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});