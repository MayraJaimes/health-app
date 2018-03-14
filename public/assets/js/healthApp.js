
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

  $(".delEntry").on("click", function(event) {
    event.preventDefault();
    
    var id = $(this).data("id");

    $.ajax("/api/health/" + id, {
      type: "DELETE",
      data: id
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".update-form").on("submit", function(event) {
    event.preventDefault();

    var updatedEntry = {
      date: $("#date").val().trim(),
      miles: $("#miles").val().trim(),
      minutes: $("#minutes").val().trim(),
      calories: $("#calories").val().trim()
    };

    var id = $(this).data("id");

    $.ajax("/api/health/" + id, {
      type: "PUT",
      data: updatedEntry
    }).then(
      function() {
        location.assign("/");
      }
    );
  });
  
});
