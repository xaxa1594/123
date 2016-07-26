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

// scroll-btn
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

// menu
$(function() {
  $('.dropdown-toggle').click(function(){
    $(this).next('.header-nav__list').slideToggle("slow");
  });
  $(document).click(function(e) {
    var target = e.target;
    if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
      $('.header-nav__list').slideToggle("slow");
    }
  });
});

$(function() {
  $(window).resize(function(){
    var winBr = $(window).width();
    if(winBr>922){
      $('.header-nav__list').show();
    }else{
      $('.header-nav__list').hide();
    };
  });
});