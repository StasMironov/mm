"use strict";

//===== Function check element ==========//
jQuery.fn.exists = function () {
  return $(this).length;
};

lightGallery(document.getElementById('lightgallery'));
$("#input-search").on('keyup', function () {
  if (!$(this).val()) {
    $(".mf-search").removeClass("mf-search--active");
    $(".header__field .b-svg").css({
      "stroke": "#DBD4E0"
    });
  } else {
    $(".mf-search").addClass("mf-search--active");
    $(".header__field .b-svg").css({
      "stroke": "#27202C"
    });
  }
});
$("#input-search").focusout(function () {
  if (!$(this).val()) {
    $(".mf-search").removeClass("mf-search--active");
    $(".header__field .b-svg").css({
      "stroke": "#DBD4E0"
    });
  }
});
var newsGallery = new Swiper('.news-slider__gallery', {
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesVisibility: true,
  effect: "fade"
});
var newsThumbs = new Swiper('.news-slider__thumbs', {
  spaceBetween: 10,
  autoHeight: true,
  effect: "fade",
  touchRatio: 0,
  navigation: {
    nextEl: '.news-slider__arrow--next',
    prevEl: '.news-slider__arrow--prev'
  },
  fadeEffect: {
    crossFade: true
  }
});
newsThumbs.controller.control = newsGallery;
newsGallery.controller.control = newsThumbs;