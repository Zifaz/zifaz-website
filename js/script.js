(function ($) {
  "use strict";

  // Other initializations (Chocolat, Swiper, etc.)
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    });
  }

  $(document).ready(function () {
    // Isotope Initialization
    var $container = $('.isotope-container').isotope({
      itemSelector: '.item',
      layoutMode: 'masonry',
    });

    // Filter items on button click
    $('.filter-button').click(function () {
      var filterValue = $(this).attr('data-filter');
      if (filterValue === '*') {
        $container.isotope({ filter: '*' });
      } else {
        $container.isotope({ filter: filterValue });
      }
      $('.filter-button').removeClass('active');
      $(this).addClass('active');
    });

    // Swiper Initialization
    var sliderSwiper = new Swiper(".slider", {
      effect: "fade",
    });

    var roomSwiper = new Swiper(".room-swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".room-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      },
    });

    var gallerySwiper = new Swiper(".gallery-swiper", {
      effect: "slide",
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".main-slider-button-next",
        prevEl: ".main-slider-button-prev",
      },
    });

    var thumbSlider = new Swiper(".product-thumbnail-slider", {
      autoplay: true,
      loop: true,
      spaceBetween: 8,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    var largeSlider = new Swiper(".product-large-slider", {
      autoplay: true,
      loop: true,
      spaceBetween: 10,
      effect: 'fade',
      thumbs: {
        swiper: thumbSlider,
      },
    });

    // Chocolat
    initChocolat();

    // Animate on Scroll
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
})(jQuery);
