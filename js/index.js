$(document).ready(function() {
  $(".trigger").click(function() {
    $(".menu").toggleClass("active"); 
    window.alert("Set the toggle class to active");
  });
});
