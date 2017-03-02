$(function() {
  $(".hero-logo").delay(1000).animate({ opacity: 1 }, 1500);
  $("#homepage-hero .feature-section__content").delay(1750).animate({ opacity: 1 }, 1500);
});

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
    $('a').not("[href='#about']").removeClass("active");
    $("[href='#simplicity']").addClass("active");
  }
});

$("#simplicity").waypoint(function(direction) {
  if (direction === 'up') {
    $('a').not("[href='#about']").removeClass("active");
  }
});

$("#work").waypoint(function(direction){
  if (direction === 'down') {
    $('a').not("[href='#about']").removeClass("active");
    $("[href='#work']").addClass("active");
  }
});

$("#work").waypoint(function(direction) {
  if (direction === 'up') {
    $('a').not("[href='#about']").removeClass("active");
    $("[href='#simplicity']").addClass("active");
  }
});

$("#ethics").waypoint(function(direction){
  if (direction === 'down') {
    $('a').not("[href='#about']").removeClass("active");
    $("[href='#ethics']").addClass("active");
  }
});

$("#ethics").waypoint(function(direction) {
  if (direction === 'up') {
    $('a').not("[href='#about']").removeClass("active");
    $("[href='#work']").addClass("active");
  }
});

$(".navigation-list-item-link").not("[href='#about']").click(function(){
  $("#about-section").removeClass("open");
  $("[href='#about']").removeClass("active");
  $("body").removeClass("no-scroll");
  $("nav").removeClass('open');
  $(".menu-button").removeClass('active');
});

$("#about-toggle").click(function(){
    $("#about-section").toggleClass("open");
    $( this ).toggleClass("active");
    $("body").toggleClass("no-scroll");
    $("nav").toggleClass('open');
    $(".menu-button").toggleClass('active');
});

$('html').click(function(e) {
  if (e.target.id != 'about-toggle' && 'about-section' && $(e.target).parents('#about-section').length == 0) {
    $("#about-section").removeClass("open");
    $("[href='#about']").removeClass("active");
    $("body").removeClass("no-scroll");
  }
});

smartquotes()
