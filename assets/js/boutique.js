// Boutique

$(function() {
  $('ul.nav a').bind('click', function(event) {
    var $anchor = $(this);
    
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1250,'easeInOutExpo');

    event.preventDefault();
  });

  $('div.card a').bind('click', function(event) {
    var $anchor = $(this);
    
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1250,'easeInOutExpo');

    event.preventDefault();
  });

});
