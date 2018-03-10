$("#submit").on("click", function(event) {
    event.preventDefault();

    console.log("hello");

    var entriesForUser;

    var newEntry = {
        firstName: $("#firstname").val().trim(),
        lastName: $("#lastname").val().trim(),
        date: $("#date").val().trim(),
        miles: $("#miles").val().trim(),
        minutes: $("#minutes").val().trim(),
        calories: $("#calories").val().trim()
    };

    // console.log(newEntry);

    $.post("/api", newEntry,
    function(data) {
        console.log(data);

    $("#firstname").val("");
    $("#lastname").val("");
    $("#date").val("");
    $("#miles").val("");
    $("#minutes").val("");
    $("#calories").val("");

    })

});
var currentURL = window.location.origin;

function runQuery() {

$.ajax({ url: currentURL + "/api", method: "GET" })
  .then(function(entries) { 

    console.log("URL: " + currentURL + "/api");
    console.log(entries);

  }
);
}

runQuery();