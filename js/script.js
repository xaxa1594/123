jQuery(document).ready(function($) {
  liteModeSwitcher = true;
  jQuery('#parallax-slider').parallaxSlider({
    parallaxEffect: "parallax_effect_normal",
    parallaxInvert: false,
    animateLayout: "slide-top-eff",
    duration: 1300,
    autoSwitcher: true,
    autoSwitcherDelay: 5000,
    scrolling_description: false,
    slider_navs: true,
    slider_pagination: "none_pagination",
    liteMode :liteModeSwitcher
  });
});

jQuery(document).ready(function($) {

  jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.header-nav__list').toggleClass('active');
    e.preventDefault();
  });
});

jQuery(document).ready(function($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 735) {
      $('#scroller').fadeIn();
    } else {$('#scroller').fadeOut();
  }
});

  $('#scroller').click(function () {
    $('body,html').animate({scrollTop: 0}, 600);
    return false;
  });
});