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

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {

  Promise
    .all([this.newContainerLoading, this.fadeOut()])
    .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    return $(this.oldContainer).animate({ opacity: 0 }, 600).promise();
  },

  fadeIn: function() {
    $(window).scrollTop(0);
    var _this = this;
    var $el = $(this.newContainer);
    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 600, function() {
      _this.done();
    });
    AOS.init({
      duration: 400,
      easing: 'ease-in-sine',
      offset: 10
    });
  }
});

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

Barba.Pjax.start();
Barba.Prefetch.init();

// function LoadWorkSample() {
//   var page = $(this).attr('href');        
//   $('footer[role="contentinfo"]').fadeOut(1);
//   $('main').fadeOut(400, function() {
//     $('footer[role="contentinfo"]').fadeOut(1);
//     $('main').load(page + " main > *", function() {
//       $(this).delay(100).fadeIn(400);
//       window.history.pushState("", "", page);
//       $('footer[role="contentinfo"]').delay(100).fadeIn(400);
//     });
//   });
//   $('title').load(page + ' title', function(data) {
//     document.title = $(this).text();
//   });
//   $('#toggle').attr('aria-expanded', 'false');
//   $( "#menu" ).slideUp();
//   return false;       
// }
// 
// $('body').on('click','header a', LoadWorkSample);
// $('main').on('click','a.portfolio-item-link', LoadWorkSample);
// $('main').on('click','a.prev', LoadWorkSample);
// $('main').on('click','a.next', LoadWorkSample);
