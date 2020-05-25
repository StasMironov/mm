var newsGallery = new Swiper('.news-slider__gallery', {
    spaceBetween: 10,
    slidesPerView: 1,
    watchSlidesVisibility: true,
    effect: "fade",
});

var newsThumbs = new Swiper('.news-slider__thumbs', {
    spaceBetween: 10,
    autoHeight: true,
    effect: "fade",
    touchRatio: 0,
    navigation: {
        nextEl: '.news-slider__arrow--next',
        prevEl: '.news-slider__arrow--prev',
    },
    fadeEffect: {
        crossFade: true
    }

});

newsThumbs.controller.control = newsGallery;
newsGallery.controller.control = newsThumbs;