// var mysql = require("mysql");
// var connection = require("./connection");

$("#submit").on("click", function(event) {
    event.preventDefault();

    console.log("hello");
    
    var entriesForUser

    var newEntry = {
        firstName: $("#firstname").val().trim(),
        lastName: $("#lastname").val().trim(),
        date: $("#date").val().trim(),
        miles: $("#miles").val().trim(),
        minutes: $("#minutes").val().trim(),
        calories: $("#calories").val().trim()
    };

    console.log(newEntry);

    $.post("/api/entries", newEntry,
    function(data) {
      if (data) {
          console.log("added");
          $("#firstname").val("");
          $("#lastname").val("");
          $("#date").val("");
          $("#miles").val("");
          $("#minutes").val("");
          $("#calories").val("");
      }
    });
});
