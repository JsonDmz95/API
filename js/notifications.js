$(document).ready(function() {
  var currentURL = document.URL;
  var params = currentURL.extract() || "";

  if (params) {
    if (params.notification == "success") {
      $("#success").modal("show");
    } else if (params.notification == "error") {
      $("#error").modal("show");
    }
  }
});
