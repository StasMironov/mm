//===== Function check element ==========//
jQuery.fn.exists = function () {
    return $(this).length;
}

if ($('.header__search--laptop').exists) {
    try {
        $('.header__search--laptop').on('click', function (e) {
            e.preventDefault();

            $(this).toggleClass('header__search--laptop--active');
        });
    } catch (err) {
        console.log(err);
    }
}

let $window = $(window),
    $target = $(".header__inner"),
    $h = $target.offset().top;
$window.on('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > $h) {
        $target.addClass("mf-fixed");
        return;
    } else {
        $target.removeClass("mf-fixed");
    }
    return;
});


if ($('.header__func').exists) {
    try {
        $('.header__func').on('click', () => {
            $('.header__func').toggleClass('header__func--active');
            $('.header__section').toggleClass('header__section--active');
        });
    } catch (err) {
        console.log(err);
    }
}

if ($('.author-articles__grid--slider').exists) {
    const breakpoint = window.matchMedia('(min-width:600px)');
    let mySwiper;

    const breakpointChecker = function () {
        if (breakpoint.matches === true) {
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            return;
        } else if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };

    const enableSwiper = function () {
        mySwiper = new Swiper('.author-articles__grid--slider', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            centeredSlides: true,
            a11y: true,
            keyboardControl: true,
            grabCursor: true,
        });
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
}

//======================ArticleSlider=========


function createGallery() {
    var galleryBlock = document.createElement('div');
    var galleryWrapper = document.createElement('div');
    var swiperWrapper = document.createElement('div');
    var cont = allEl[a].parentNode;
    $(galleryBlock).attr('class', 'gallery__top');
    $(galleryBlock).addClass('gallery__main' + a);
    $(galleryWrapper).attr('class', 'gallery');
    $(swiperWrapper).attr('class', 'swiper-wrapper');
    swiperWrapper.innerHTML += result;
    $(galleryBlock).append(swiperWrapper);
    $(galleryWrapper).append(galleryBlock);
    var blockThumbs = document.createElement('div');
    $(blockThumbs).attr('class', 'gallery__thumbs');
    $(blockThumbs).addClass('gallery__btn' + a);


    for (var i = 0; i < 2; i++) {
        if (i == 1) {
            var galleryArrow = document.createElement('div');
            $(galleryArrow).attr('class', 'b-arrow b-arrow--prev');
            $(blockThumbs).append(galleryArrow);
        } else {
            var galleryArrow = document.createElement('div');
            $(galleryArrow).attr('class', 'b-arrow b-arrow--next');
            $(blockThumbs).append(galleryArrow);
        }
    }

    cont.insertBefore(galleryWrapper, allEl[a]);
    galleryWrapper.append(blockThumbs);
    $(galleryBlock).find(swiperWrapper).clone().appendTo(blockThumbs);
}

var allEl = document.querySelectorAll('.news-detail__item > *');
var j = 0;
var result = "";
var arrTemp = [];
var ch = 0; // Итерация по выбранным элементам

console.log(allEl);

for (var i = 0; i < allEl.length; i++) {
    if ($(allEl[i]).is('img')) {
        $(allEl[i]).attr('class', j);
        arrTemp.push(j);
    } else {
        j++;
    }
}

for (var a = 0; a < allEl.length; a++) {
    if (allEl[a].classList.contains(ch)) {
        result = result + allEl[a].outerHTML;
        $(allEl[a]).hide();

        if (allEl[a] == allEl[allEl.length - 1]) {
            if (result) {
                createGallery();
            }
        }
    } else {
        if (result) {
            createGallery();
        }

        result = '';
        ch++;
    }
}

function initGallarySlider(selectorElement) {
    var sliderBlocks = document.querySelectorAll('.' + selectorElement); // Берем все элементы с заданным классом. Каждый элемент будет слайдером. Данные хранятся в NodeList

    var sliderBlocksArr = []; // Массив для хранения элементов из NodeList.

    for (var _i = 0; _i < sliderBlocks.length; _i++) {
        sliderBlocksArr.push(sliderBlocks[_i]);
    } // Для совместимости с IE11


    sliderBlocksArr.forEach(function (item, i) {
        // Проходимся по всем слайдерам
        var slides = item.querySelectorAll('img'); // Записываем все изображения из текущего слайдера в данную переменную

        var slidesArr = []; // Массив для хранения элементов из NodeList.

        for (var _i2 = 0; _i2 < slides.length; _i2++) {
            slidesArr.push(slides[_i2]);
        } // Для совместимости с IE11


        slidesArr.forEach(function (item, i) {
            // Проходимся по всем изображениям данного слайдера
            var wrapper = document.createElement('a'); // Создаем обертку, в виде ссылки для каждого изображения, для функционирования галереи

            wrapper.innerHTML = item.outerHTML; // Помещаем изобажение в обертку

            if (selectorElement != 'gallery__thumbs') {
                wrapper.setAttribute('href', item.getAttribute('src')); // Задаем обертке путь ссылки к изображению
            }

            wrapper.classList.add('gallery-item'); // Задаем класс обертки/слайда

            wrapper.classList.add('swiper-slide');
            item.parentNode.replaceChild(wrapper, item); // Заменяем старое изображение без обертки, на обертку/слайд с внутренним изображением
        });
        item.setAttribute('id', 'slide' + i); // Задаем уникальный id для каждого слайдера

        lightGallery(document.querySelector('#' + item.id), {
            selector: '.gallery-item'
        }); // Инициализируем галерею для каждого слайдера, первым параметром принимается id слайдера, вторым параметром, класс слайда
    });
}

initGallarySlider('gallery__top'); // Запускаем функцию и передаем ей название класса для слайдера

initGallarySlider('gallery__thumbs'); // Запускаем функцию и передаем ей название класса для слайдера

var qtySlide = $('.gallery__thumbs').find('.swiper-slide');
$(document).ready(function () {
    for (var q = 0; q < allEl.length; q++) {
        var idEl = '.gallery__thumbs' + q;
        var galleryThumbs = new Swiper('.gallery__btn' + q, {
            spaceBetween: 17,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {

                320: {
                    spaceBetween: 8,
                    slidesPerView: 3,
                },
                501: {
                    spaceBetween: 8,
                    slidesPerView: 4,
                },
                769: {
                    spaceBetween: 17,
                    slidesPerView: 5,
                },
                1024: {
                    spaceBetween: 17,
                    slidesPerView: 5,
                }
            }
        });
        var galleryTop = new Swiper('.gallery__main' + q, {
            spaceBetween: 10,
            thumbs: {
                swiper: galleryThumbs
            },
            navigation: {
                nextEl: '.b-arrow--next',
                prevEl: '.b-arrow--prev'
            },
        });
    }
});

for (var v = 0; v < allEl.length; v++) {
    $('.gallery__btn' + v).each(function () {
        var qtySlide = $(this).find('.swiper-slide');

        if (qtySlide.length > 1) {
            $('.gallery__btn' + v).fadeIn();
        }

        if (qtySlide.length > 5) {
            $(this).find('.b-arrow').css('display', 'block');
        }
    });
}

//========================================//

lightGallery(document.getElementById('lightgallery'));

$("#input-search").on('keyup', function () {

    if (!$(this).val()) {
        $(".mf-search").removeClass("mf-search--active");
        $(".header__field .b-svg").css({
            "stroke": "#DBD4E0",
        });
    } else {
        $(".mf-search").addClass("mf-search--active");
        $(".header__field .b-svg").css({
            "stroke": "#27202C",
        });
    }
});

$("#input-search").focusout(function () {

    if (!$(this).val()) {
        $(".mf-search").removeClass("mf-search--active");
        $(".header__field .b-svg").css({
            "stroke": "#DBD4E0",
        });
    }
});

let newsGallery = new Swiper('.news-slider__gallery', {
    spaceBetween: 10,
    slidesPerView: 1,
    watchSlidesVisibility: true,
    effect: "fade",
});

let newsThumbs = new Swiper('.news-slider__thumbs', {
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