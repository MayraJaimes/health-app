
  $(function() {

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newEntry = {
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
        location.reload();
      }
    );
  });

});
