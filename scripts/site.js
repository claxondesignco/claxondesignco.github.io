document.documentElement.className = "js"

$(function() {
  $( "#toggle" ).attr('aria-expanded','false');
});

$("#toggle").click(function() {
  $( this ).attr('aria-expanded', function (i, attr) {
    return attr == 'true' ? 'false' : 'true'});
  $( "#menu" ).slideToggle( function() {});
  $( "header[role=banner]" ).toggleClass("expanded");
});

$('input[type="text"], input[type="email"], input[type="tel"], input[type="url"]').focus( function() {
  $(this).parent().addClass('active');
});

$('input[type="text"], input[type="email"], input[type="tel"], input[type="url"]').blur( function() {
  if( $(this).val().length === 0 ) {
    $(this).parent().removeClass('active');
  }
});
