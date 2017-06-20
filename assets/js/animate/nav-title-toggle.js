/**
 * Toggles the nav-title depending on window.scrollY position
**/

!function navTitleToggle() {
  // CacheDOM
  const navTitle = document.getElementById('nav-title');
  // Hide or show nav-title
  function navHideShow() {
    if (window.scrollY > 300 && window.innerWidth >= 1025) {
      navTitle.style.display = 'none';
    }

    if (window.scrollY < 300 && window.innerWidth >= 1025) {
      navTitle.style.display = '';
    }
  }
  // Events
  window.addEventListener('scroll', navHideShow);
}();
