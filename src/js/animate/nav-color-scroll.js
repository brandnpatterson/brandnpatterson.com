/**
 * Changes color of nav on scroll & when it's clicked, body animates to the href of that element
**/

// Require jquery for this file
import $ from 'jquery';

!function navColorScroll () {
  // CacheDOM
  const $about       = $('#about'),
        $colorActive = '#333',
        $colorNav    = '#26595C',
        $contact     = $('#contact'),
        $landing     = $('#landing'),
        $nav         = $('nav'),
        $navAbout    = $('.nav-about'),
        $navContact  = $('.nav-contact'),
        $navLanding  = $('.nav-landing'),
        $navPort     = $('.nav-port'),
        $portfolio   = $('#portfolio'),
        $window      = $(window);
  // Used to make any activeLink the active color
  function active (activeLink) {
    activeLink.css('background', $colorActive)
    .siblings().css('background', $colorNav);
  }
  // Give nav anchors the active class depending on distance from top
  function colorScroll (e) {
    if ($(e.target).scrollTop() >= $landing.position().top) {
      active($navLanding);
    }
    if ($(e.target).scrollTop() >= $portfolio.position().top - 500) {
      active($navPort);
    }
    if ($(e.target).scrollTop() >= $about.position().top - 500) {
      active($navAbout);
    }
    if ($(e.target).scrollTop() >= $contact.position().top - 500) {
      active($navContact);
    }
  }
  // Events
  $window.on('scroll', colorScroll);
}();
