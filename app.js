var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// var mysql = require("mysql");
// var connection = require("./connection");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var entries = ["hello"];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api", function(req, res) {
    var info = req.params.entries;
    // console.log(info);
    return res.json(entries);
});

app.post("/api", function(req, res) {
    var newentry = req.body;
    newentry.routeName = newentry.firstName.replace(/\s+/g, "").toLowerCase();
    console.log(newentry);
    entries.push(newentry);
    console.log(entries);
    res.json(newentry);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});