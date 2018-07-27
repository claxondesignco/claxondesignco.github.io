function addJSClass() {
    document.documentElement.className = "js";
}

window.onload = addJSClass();

$(function() {
  $( "#toggle" ).attr('aria-expanded','false');
});

$("#toggle").click(function() {
  $( this ).attr('aria-expanded', function (i, attr) {
    return attr == 'true' ? 'false' : 'true'});
  $( "#menu" ).slideToggle( function() {});
});

$('input[type="text"], input[type="email"], input[type="tel"], input[type="url"]').focus( function() {
  $(this).parent().addClass('active');
});

$('input[type="text"], input[type="email"], input[type="tel"], input[type="url"]').blur( function() {
  if( $(this).val().length === 0 ) {
    $(this).parent().removeClass('active');
  }
});

function LoadWorkSample() {
  var page = $(this).attr('href');        
  $('footer[role="contentinfo"]').fadeOut(1);
  $('main').fadeOut(400, function() {
    $('footer[role="contentinfo"]').fadeOut(1);
    $('main').load(page + " main > *", function() {
      $(this).delay(100).fadeIn(400);
      window.history.pushState("", "", page);
      $('footer[role="contentinfo"]').delay(100).fadeIn(400);
    });
  });
  $('title').load(page + ' title', function(data) {
    document.title = $(this).text();
  });
  $('#toggle').attr('aria-expanded', 'false');
  $( "#menu" ).slideUp();
  return false;       
}

$('body').on('click','header a', LoadWorkSample);
$('main').on('click','a.portfolio-item-link', LoadWorkSample);
$('main').on('click','a.prev', LoadWorkSample);
$('main').on('click','a.next', LoadWorkSample);
