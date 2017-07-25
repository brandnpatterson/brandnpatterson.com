/**
 * Gives the landing-icon a new class depending on device width
**/

!function iconMove() {
  // CacheDOM
  const landingIcon = document.querySelector('.landing-icon'),
    nav = document.querySelector('nav');
  // General rules for any device
  function iconMoveGeneral () {
    if (window.scrollY < 300) {
      landingIcon.classList.remove('scroll-icon_deskt', 'scroll-icon_iPad', 'scroll-icon_iPhone');
      landingIcon.classList.add('landing-icon');
      nav.classList.remove('slide-nav_iPhone', 'slide-nav_iPad');
    }
  }
  // Rule for Dekstop
  function iconMoveDesktop () {
    // 1025 = 1040px
    if (window.scrollY > 300 && window.innerWidth >= 1025) {
      landingIcon.classList.add('scroll-icon_deskt');
    }
  }
  // Rules for iPad
  function iconMoveiPad () {
    if (window.scrollY > 300 && window.innerWidth < 1025 && window.innerWidth > 505) {
      landingIcon.classList.remove('landing-icon');
      landingIcon.classList.add('scroll-icon_iPad');
      nav.classList.add('slide-nav_iPad');
    }
  }
  // Rules for iPhone
  function iconMoveiPhone () {
    // 625 = 640px
    if (window.scrollY > 300 && window.innerWidth < 505) {
      landingIcon.classList.remove('landing-icon');
      landingIcon.classList.add('scroll-icon_iPhone');
      nav.classList.add('slide-nav_iPhone');
    }
  }
  // Scroll event logic
  function listenForScroll (x) {
    window.addEventListener('scroll', x);
  }
  // Call all rules to listen at the Event
  listenForScroll(iconMoveGeneral);
  listenForScroll(iconMoveDesktop);
  listenForScroll(iconMoveiPad);
  listenForScroll(iconMoveiPhone);
}();
