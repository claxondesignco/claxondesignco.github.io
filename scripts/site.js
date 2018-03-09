document.documentElement.className = "js"

$(function() {
  $( "#toggle" ).attr('aria-expanded','false');
});

$("#toggle").click(function() {
  $( this ).attr('aria-expanded', function (i, attr) {
    return attr == 'true' ? 'false' : 'true'});
  $( "#menu" ).slideToggle( function() {});
});
