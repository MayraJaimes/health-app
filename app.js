var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/health_controllers.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

// var entries = ["hello"];

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/api", function(req, res) {
//     var info = req.params.entries;
//     // console.log(info);
//     return res.json(entries);
// });

// app.post("/api", function(req, res) {
//     var newentry = req.body;
//     newentry.routeName = newentry.firstName.replace(/\s+/g, "").toLowerCase();
//     console.log(newentry);
//     entries.push(newentry);
//     console.log(entries);
//     res.json(newentry);
//   });




