/**
 * Changes color of nav on scroll & when it's clicked, body animates to the href of that element
**/

// Require jquery for this file
import $ from 'jquery';

!function navColorScroll() {
  // CacheDOM
  const $about       = $('#about'),
        $body        = $('body'),
        $colorActive = '#333',
        $colorNav    = '#26595C',
        $contact     = $('#contact'),
        $home        = $('#home'),
        $nav         = $('nav'),
        $navAbout    = $('#nav-about'),
        $navContact  = $('#nav-contact'),
        $navHome     = $('#nav-home'),
        $navPort     = $('#nav-port'),
        $portfolio   = $('#portfolio'),
        $window      = $(window);
  // Scroll offset from the top of the href attr of whatever is clicked
  function navScroll(e) {
    const scrollHref = $(e.target).attr('href');
    $body.animate({
      scrollTop: $(scrollHref).offset().top
    }, 500);
  }
  // Used to make any activeLink the active color
  function active(activeLink) {
    activeLink.css('background', $colorActive)
    .siblings().css('background', $colorNav);
  }
  // Give nav anchors the active class depending on distance from top
  function colorScroll(e) {
    if ($(e.target).scrollTop() >= $home.position().top) {
      active($navHome);
    }
    if ($(e.target).scrollTop() >= $portfolio.position().top) {
      active($navPort);
    }
    if ($(e.target).scrollTop() >= $about.position().top - 100) {
      active($navAbout);
    }
    if ($(e.target).scrollTop() >= $contact.position().top - 200) {
      active($navContact);
    }
  }
  // Events
  $nav.on('click', 'a', navScroll);
  $window.on('scroll', colorScroll);
}();
