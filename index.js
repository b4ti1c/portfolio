$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var scrollValue = target.offset().top;
        if(scrollValue != 0 && window.innerWidth < 768)
          scrollValue -= 60;

        $('html, body').animate({
          scrollTop: scrollValue
        }, 250);
        return false;
      }
    }
  });

  $('.nav a').on('click', function(){
      $('.navbar-toggle').click();
  });
});