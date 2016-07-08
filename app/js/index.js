/* Google Analytics
 *
 */
(function(i, s, o, g, r, a, m) {
  i.GoogleAnalyticsObject = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-71621485-1', 'auto');
ga('send', 'pageview');

/* My Code
 *
 */
$(document).ready(function() {
  $('.button-collapse').sideNav();
  $('.scrollspy').scrollSpy();
  $('textarea#message').characterCounter();
  // Reveal car content on hover by @sorinr 
  $('.hover-card').mouseenter(function(e) {
    $(this).find('.card-reveal').css({
      display: 'block'
    }).velocity('stop', false).velocity({
      translateY: '-100%'
    }, {
      duration: 300,
      queue: false,
      easing: 'easeInOutQuad'
    });
  }).mouseleave(function(e) {
    $(this).find('.card-reveal').velocity({
      translateY: 0
    }, {
      duration: 225,
      queue: false,
      easing: 'easeInOutQuad',
      complete: function() {
        $(this).css({
          display: 'none'
        });
      }
    });
  });
});

$('#contactForm').submit(function() {
  if ($.trim($('#name').val()) === '' || $.trim($('#email').val()) === '' || $.trim($('#message').val()) === '') {
    alert('I dislike empty or incomplete messages.\nAll fields are required.');
    return false;
  }
});
