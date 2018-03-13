
  $(function() {

  
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newEntry = {
        firstName: $("#firstname").val().trim(),
        lastName: $("#lastname").val().trim(),
        date: $("#date").val().trim(),
        miles: $("#miles").val().trim(),
        minutes: $("#minutes").val().trim(),
        calories: $("#calories").val().trim()
    };

    $.ajax("/api/health", {
      type: "POST",
      data: newEntry
    }).then(
      function() {
        console.log("created new entry");
        location.reload();
      }
    );
  });

});

// $("#submit").on("click", function(event) {


    // $("#firstname").val("");
    // $("#lastname").val("");
    // $("#date").val("");
    // $("#miles").val("");
    // $("#minutes").val("");
    // $("#calories").val("");
