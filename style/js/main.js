$(function() {
  // Animation head decor

  $(window).mousemove(function(e) {
    var decor = $('.main-head-decor');
    var x = e.clientX / window.innerWidth;
    var y = e.clientY / window.innerHeight;
    decor.each(function() {
      decor.css({
        'transform': 'translate(-' + x * 40 + 'px, -' + y * 15 + 'px)',
      })
    });
  });
  
  // Animation head decor - end
});