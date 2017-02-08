$(function(){
  $('.footnote-label').click(function(){
    $(this).next().toggleClass('display');
  });

  $('.menu-button').click(function(){
    $(this).toggleClass('active');
    $("nav").toggleClass('open');
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});

$("#simplicity").waypoint(function(direction){
  if (direction === 'down') {
    $('a').removeClass("active");
    $("[href='#simplicity']").addClass("active");
  }
});

$("#simplicity").waypoint(function(direction) {
  if (direction === 'up') {
    $('a').removeClass("active");
  }
});

$("#work").waypoint(function(direction){
  if (direction === 'down') {
    $('a').removeClass("active");
    $("[href='#work']").addClass("active");
  }
});

$("#work").waypoint(function(direction) {
  if (direction === 'up') {
    $('a').removeClass("active");
    $("[href='#simplicity']").addClass("active");
  }
});

$("#ethics").waypoint(function(direction){
  if (direction === 'down') {
    $('a').removeClass("active");
    $("[href='#ethics']").addClass("active");
  }
});

$("#ethics").waypoint(function(direction) {
  if (direction === 'up') {
    $('a').removeClass("active");
    $("[href='#work']").addClass("active");
  }
});
