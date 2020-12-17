//===== Function check element ==========//
jQuery.fn.exists = function () {
    return $(this).length;
}

// BX.ready(function () {
//     BX.addCustomEvent('onAjaxSuccess', function () {
//         checkGallery('lightgallery');
//         checkGallery('video-gallery');
//         journalSlider();
//         articleSlider();
//     });
// });



const projectFunc = {
    objAd: function (element, place) {
        if ($(element).exists()) {
            $(element).each(function (index) {
                let adObj = $(this).html();
                let out = adObj;
                $(place).html(out);
                $(this).remove();
            });
        }
    },

    objReturn: function (element, place) {
        if ($(element).exists()) {
            var t = '';
            t = $(element).html();
            return $(element);
        }
    }
}

let tempQuestion = projectFunc.objReturn("#aside");
let сteatedQuestion = false;

$(window).on('resize load', function () {
    if ($(this).width() <= 1024) {
        projectFunc.objAd("#aside", "#include");
        сteatedQuestion = false;
    } else {
        if (!сteatedQuestion) {
            $(tempQuestion).insertAfter('.news-today');
            $("#include").children().remove();
            сteatedQuestion = true;
        }
    }
});

// let breakpoint = window.matchMedia('(max-width:1024px)');
// if (breakpoint.matches === true) {



// }


if ($('.news-archive__slider').exists()) {
    let authorSlider = new Swiper('.news-archive__slider', {
        spaceBetween: 51,
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        slidesPerGroup: 4,
        navigation: {
            nextEl: '.edition-slider__arr--next',
            prevEl: '.edition-slider__arr--prev',
        },
        pagination: {
            el: '.news-archive__pag',
            clickable: true,
        },
        breakpoints: {
            1920: {
                spaceBetween: 51,
                slidesPerView: 4,
            },
            1301: {
                spaceBetween: 51,
                slidesPerView: 4,
            },
            1300: {
                spaceBetween: 40,
                slidesPerView: 4,
            },
            1025: {
                spaceBetween: 40,
                slidesPerView: 4,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            861: {
                spaceBetween: 30,
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            860: {
                spaceBetween: 30,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            769: {
                spaceBetween: 30,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            641: {
                spaceBetween: 20,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            640: {
                spaceBetween: 15,
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            501: {
                spaceBetween: 20,
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            500: {
                spaceBetween: 20,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            320: {
                spaceBetween: 20,
                slidesPerView: 2,
                slidesPerGroup: 2,
            }
        }
    });
}

if ($('.theme-button').exists()) {
    const currentTheme = localStorage.getItem("theme");
    const mainElement = document.querySelector("body");
    const toggleSwitch = document.querySelectorAll(".theme-button");

    if (currentTheme) {
        mainElement.setAttribute("data-theme", currentTheme);

        if (currentTheme === "dark") {
            toggleSwitch.forEach(item => {
                item.checked = false;
            });
        }
    }

    function switchTheme(e) {
        if (!e.target.checked) {
            mainElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            toggleSwitch.forEach(item => {
                item.checked = false;
            });
        } else {
            mainElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            toggleSwitch.forEach(item => {
                item.checked = true;
            });
        }
    }

    toggleSwitch.forEach(item => {
        item.addEventListener("click", switchTheme, false);

    });
}

if ($('#btnUp').exists()) {
    var btn = $('#btnUp');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('showBtn');
        } else {
            btn.removeClass('showBtn');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
}

function articleSlider() {
    if ($('.author-articles__grid--slider').exists) {
        try {
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
                    loop: true,
                    autoplay: true,
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                });
            };

            breakpoint.addListener(breakpointChecker);
            breakpointChecker();
        } catch (err) {
            console.log(err);
        }
    }
}

function setHeaderHeight(child, parent) {
    var height = $(child).height();
    $(parent).css({
        height: height + "px" // приравниванием высоту header'a к высоте абсолютного элемента
    });
}

function journalSlider() {
    if ($('.journal__items').exists) {
        try {
            const breakpoint = window.matchMedia('(min-width:501px)');
            let mySwiper;

            const breakpointChecker = function () {
                if (breakpoint.matches === true) {

                    if ($('.journal__inner').exists()) {
                        setHeaderHeight('.journal__inner', '.journal__cover');
                        $(window).on('resize load', function () {
                            setHeaderHeight('.journal__inner', '.journal__cover');
                        });
                    }
                    return enableSwiper();
                } else if (breakpoint.matches === false) {
                    if (mySwiper !== undefined) mySwiper.destroy(true, true);
                    return;
                }
            };

            function enableSwiper() {
                $('.journal__items').each(function () {
                    mySwiper = new Swiper('.' + $(this).data("id"), {
                        slidesPerView: 4,
                        spaceBetween: 18,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                        touchRatio: 0,
                        breakpoints: {

                            500: {
                                spaceBetween: 15,
                                slidesPerView: 3,
                            },
                            600: {
                                spaceBetween: 15,
                                slidesPerView: 3,
                            },
                            601: {
                                spaceBetween: 15,
                                slidesPerView: 4,
                            },
                            769: {
                                spaceBetween: 15,
                                slidesPerView: 5,
                            },
                            1024: {
                                spaceBetween: 15,
                                slidesPerView: 5,
                            },
                            1025: {
                                slidesPerView: 4,
                                spaceBetween: 18,
                            }
                        },
                        navigation: {
                            nextEl: '.journal__arrow.journal__arrow--next',
                            prevEl: '.journal__arrow.journal__arrow--prev',
                        },
                    });
                });
            }

            breakpoint.addListener(breakpointChecker);
            breakpointChecker();

        } catch (err) {
            console.log(err);
        }
    }
}

function createLightGallery(bloc) {
    if (['archiveVideo'].indexOf(bloc) !== -1) {
        lightGallery(document.getElementById(bloc), {
            thumbnail: false,
            background: 'A90707',
            "selector": ".news-archive__block"
        });
    } else if (['video-gallery'].indexOf(bloc) !== -1) {
        lightGallery(document.getElementById(bloc), {
            thumbnail: false,
            background: 'A90707',
            "selector": ".video-gallery__item"
        });
    } else {
        lightGallery(document.getElementById(bloc));
    }
}

function checkGallery(bloc) {
    if ($('#' + bloc).length > 0) {
        try {
            let block = document.getElementById(bloc);
            if (window.lgData[block.getAttribute('lg-uid')]) {
                window.lgData[block.getAttribute('lg-uid')].destroy(true);
                createLightGallery(bloc);
            } else {
                createLightGallery(bloc);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

if ($(".content--ad").exists()) {
    try {
        if ($(".content--ad").children().length === 0) {
            $(".content--ad").addClass('mf-empty');
        } else {
            $(".content--ad").removeClass('mf-empty');
        }
    } catch (err) {
        console.log(err);
    }
}

$(window).on('load', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(window).on('load resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(document).on("click tap", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});



$(() => {
    journalSlider();
    articleSlider();
    createLightGallery('archiveVideo');
    createLightGallery('lightgallery');
    createLightGallery('video-gallery');



    let parentEl = '';

    function adaptiveArticle(container, text) {
        if ($(container).exists()) {
            $(container).each(function () {
                let temp = $(this).find(text);
                if (!temp.length > 0) {
                    $(this).addClass('article__box--full');
                }
            });
        }
    }

    if ($(".archive-filter__item--month-alternative input").exists()) {
        try {
            $(".archive-filter__item--month-alternative input").change(function () {
                if (this.checked) {
                    let month = parseInt($(this).val()) - 1;
                    let days = [31, 29, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];

                    if (parseInt($('.archive-filter__item--day-alternative').find('.archive-filter__txt').text()) > days[month]) {
                        $('.archive-filter__item--day-alternative input[checked="checked"]').removeAttr('checked');
                        $('.archive-filter__item--day-alternative input[value="' + days[month] + '"]').first().attr('checked', 'checked');
                        $('.archive-filter__item--day-alternative').find('.archive-filter__txt').text(days[month]);
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.btn--close').exists) {
        try {
            $('.btn--close').on('click', function (event) {
                event.preventDefault();
                $('.header__search--laptop input').val('');
                $('.header__search--laptop').removeClass('header__search--active');
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.burger--laptop').exists) {
        try {
            $('.burger--laptop').on('click', function () {
                $(this).toggleClass('burger--active');
                $('.header__menu').toggleClass('header__menu--active');

                if ($('.burger--laptop').hasClass('burger--active')) {
                    $("html").css("overflow", "hidden");
                } else {
                    $("html").css("overflow", "auto");
                }

            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.edition-rewards').length > 0) {
        try {
            $('head').append('<link rel="stylesheet" type="text/css" href="css/lightgallery.min.css">');
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.news-detail').length > 0) {
        try {
            $('head').append('<link rel="stylesheet" type="text/css" href="css/lightgallery.min.css">');
        } catch (err) {
            console.log(err);
        }
    }

    if ($('#video-gallery').length > 0) {
        try {
            $('head').append('<link rel="stylesheet" type="text/css" href="css/lg-video.css">');
        } catch (err) {
            console.log(err);
        }
    }

    adaptiveArticle('.article__box', '.article__cover');

    if ($('.header__bottom .header__nav').exists) {

        $(function () {
            var csObj = new Object();
            csObj.axis = "x";
            csObj.theme = "my-theme";
            csObj.advanced = {
                autoExpandHorizontalScroll: true
            };
            csObj.scrollButtons = {
                scrollType: "pixels",
                scrollAmount: 300
            };
            csObj.mouseWheel = {
                invert: true
            };
            $(".header__bottom .header__nav").mCustomScrollbar(csObj);
        });
    }

    if ($('.filter__item').exists()) {
        try {
            $('.filter__box').mCustomScrollbar({
                theme: "dark",
                mouseWheelPixels: 90
            });
            $('.filter__bloc').on('click', function () {
                $('.filter__item').toggleClass('filter__item--active');
            });

            $('.filter__block').each(function () {
                $(this).on('click', function () {
                    let temp = $(this).find('label').text();
                    $('.filter__txt').text(temp);
                    $(this).closest('.filter__item').removeClass('filter__item--active');
                });
            });

            $(document).on('click', function (event) {
                let target = event.target;

                if (!$(target).hasClass('.filter__item')) {
                    $(this).closest('.filter__item').removeClass('filter__item--active');
                }
            });

            jQuery(function ($) {
                $(document).mouseup(function (e) { // событие клика по веб-документу
                    var div = $(".filter__item"); // тут указываем ID элемента
                    if (!div.is(e.target) // если клик был не по нашему блоку
                        &&
                        div.has(e.target).length === 0) { // и не по его дочерним элементам
                        div.removeClass('filter__item--active') // скрываем его
                    }
                });
            });
        } catch (err) {
            console.log(err);
        }
    }

    function adaptiveBloc(container, item, bloc, picture) {
        if ($(container).exists()) {
            $(container).each(function () {
                let ch = 0;
                let childrenEl = $(this).find(item);

                childrenEl.each(function (index) {
                    let temp = $(this).find(picture);
                    if (!temp.length > 0) {
                        ch++;
                    }
                });

                if (ch == 1) {
                    let temp = $(this).find(item);

                    temp.each(function (index) {
                        if ($(this).find(picture).exists()) {
                            if (index == 0) {
                                $(this).closest(bloc).addClass('news-popular__bloc--other');
                            } else {
                                $(this).closest(bloc).addClass('news-popular__bloc--reverse');
                            }
                        }
                    });
                }
            });
        }
    }

    adaptiveBloc('.news-popular__items', '.news-popular__item', '.news-popular__bloc', '.news-popular__pic');

    $(document).on('click', (event) => {
        if ($('.archive-filter__item').exists()) {
            try {
                let $targetBloc = $(event.target).closest('.archive-filter__bloc');
                let $targetScroll = $(event.target).closest('.mCSB_dragger');
                let $temp = '';

                if (!$targetBloc.length) {
                    $temp = $('.archive-filter__item--active');
                    $('.archive-filter__item--active').removeClass('archive-filter__item--active');
                }

                if ($targetScroll.length) {
                    $temp.addClass('archive-filter__item--active');
                }
            } catch (err) {
                console.log(err);
            }
        }

        if ($('.release-month__bloc').exists()) {
            try {
                let $targetBloc = $(event.target).closest('.release-month__btn');
                let $targetScroll = $(event.target).closest('.mCSB_dragger');
                let $temp = '';

                if (!$targetBloc.length) {
                    $temp = $('.release-month__bloc--active');
                    $('.release-month__bloc--active').removeClass('release-month__bloc--active');
                }

                if ($targetScroll.length) {
                    $temp.addClass('release-month__bloc--active');
                }
            } catch (err) {
                console.log(err);
            }
        }
    });

    if ($('.release-month__bloc').exists()) {
        try {
            $('.release-month__btn').on('click', function () {
                $('.release-month__bloc').toggleClass('release-month__bloc--active');
            });
        } catch (err) {
            console.log(err);
        }
    }

    //===========Truncate text=============

    function truncateText(bloc, qty) {
        if (bloc.length > 0) {
            let txtBloc = document.querySelectorAll(bloc);
            for (let i = 0; i < txtBloc.length; i++) {
                trc(txtBloc[i], qty);
            }
        }
    }

    function trc(txt, qty) {
        let text = txt.textContent;
        var sliced = text.slice(0, qty);
        if (sliced.length < text.length) {
            sliced += '...';
        }

        txt.textContent = sliced;
    }

    truncateText('.news-popular__text', 150);
    truncateText('.news-basic__text', 179);
    truncateText('.news-set__text', 150);
    truncateText('.news-actual__txt', 115);
    truncateText('.news-most__txt', 158);
    truncateText('.news-most__text', 46);
    truncateText('.news-photo__info', 115);
    truncateText('.author-articles__txt', 72);
    truncateText('.search__text', 72);
    truncateText('.search__text', 72);
    truncateText('.news-slider__txt', 250);
    truncateText('.news-slider__txt', 250);
    truncateText('.publish__txt', 27);
    //===========Accordion=============

    if ($('.archive-filter__panel').exists()) {
        try {
            let accordions = document.getElementsByClassName("archive-filter__panel");

            for (let i = 0; i < accordions.length; i++) {
                accordions[i].onclick = function (event) {
                    let target = event.target;
                    if (!$(target).attr('href')) {
                        this.classList.toggle('archive-filter__panel--active');
                        $(this).parent().toggleClass('archive-filter__wrp--active');

                        let content = this.nextElementSibling;

                        if (content.style.maxHeight) {
                            content.style.maxHeight = null;
                        } else {
                            content.style.maxHeight = content.scrollHeight + "px";
                        }
                    }
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    function checkEl() {
        if ($('.archive-filter__item').exists) {
            try {
                let linkEl = $('.archive-filter__item--month').find('.archive-filter__block'),
                    temp = '';

                $(linkEl).each(function () {
                    if ($(this).children('input').prop("checked")) {
                        temp = $(this).children('label').text();
                        if ((temp.indexOf("Декабрь") != -1) ||
                            (temp.indexOf("Январь") != -1) ||
                            (temp.indexOf("Март") != -1) ||
                            (temp.indexOf("Май") != -1) ||
                            (temp.indexOf("Июль") != -1) ||
                            (temp.indexOf("Август") != -1) ||
                            (temp.indexOf("Октябрь") != -1)
                        ) {
                            crYear('.archive-filter__item--day', 31);
                            $('.archive-filter__item--day').find('.archive-filter__txt').text('31');
                        } else if ((temp.indexOf("Сентябрь") != -1) ||
                            (temp.indexOf("Июнь") != -1) ||
                            (temp.indexOf("Ноябрь") != -1) ||
                            (temp.indexOf("Апрель") != -1)) {
                            crYear('.archive-filter__item--day', 30);
                            $('.archive-filter__item--day').find('.archive-filter__txt').text('30');
                        } else {
                            crYear('.archive-filter__item--day', 28);
                            $('.archive-filter__item--day').find('.archive-filter__txt').text('28');
                        }
                    }
                });
            } catch (err) {
                console.log(err);
            }
        }
    }

    function crYear(parent, qty) {

        if ($('.archive-filter__item').exists) {
            try {
                if (parent == '.archive-filter__item--year') {
                    let filterBloc = document.querySelector('.archive-filter__item--year');
                    parentEl = filterBloc.querySelector('.archive-filter__list');

                    //  parentEl = $(parent).find('.archive-filter__list');

                    for (let i = atributeForm.currentYear; i >= qty; i--) {
                        let newEl = document.createElement('div'),
                            inputEl = document.createElement('input'),
                            inputLabel = document.createElement('label');

                        newEl.classList.add('archive-filter__block');

                        if (i == atributeForm.currentYear) {
                            inputEl.setAttribute('checked', 'checked');
                            inputEl.setAttribute('currentyear', atributeForm.currentYear);
                        }

                        inputEl.setAttribute('id', `y-${i}`);
                        inputEl.setAttribute('type', 'radio');
                        inputEl.setAttribute('name', atributeForm.year);
                        inputEl.setAttribute('value', `${i}`);
                        inputLabel.setAttribute('for', `y-${i}`);
                        inputLabel.textContent = i;

                        newEl.appendChild(inputEl);
                        newEl.appendChild(inputLabel);
                        parentEl.appendChild(newEl);
                    }
                } else {

                    let filterBloc = document.querySelector('.archive-filter__item--day');
                    parentEl = filterBloc.querySelector('.archive-filter__list');

                    for (let i = qty; i > 0; i--) {
                        let newEl = document.createElement('div'),
                            inputEl = document.createElement('input'),
                            inputLabel = document.createElement('label');

                        newEl.classList.add('archive-filter__block');

                        if (i == atributeForm.currentDay) {
                            inputEl.setAttribute('checked', 'checked');
                            inputEl.setAttribute('currentday', atributeForm.currentDay);
                        }

                        inputEl.setAttribute('id', `d-${i}`);
                        inputEl.setAttribute('type', 'radio');
                        inputEl.setAttribute('name', atributeForm.day);
                        inputEl.setAttribute('value', `${i}`);

                        inputLabel.setAttribute('for', `d-${i}`);
                        inputLabel.textContent = i;

                        newEl.appendChild(inputEl);
                        newEl.appendChild(inputLabel);
                        parentEl.appendChild(newEl);
                    }
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    if ($('.archive-filter__item').exists()) {
        try {
            if ($('.archive-filter__items').length > 0) {
                var form = document.querySelector('.archive-filter__items');
                var atributeForm = $('.archive-filter__items').data("filter");
                checkEl();
                crYear('.archive-filter__item--year', atributeForm.min);
            }

            $('.archive-filter__item').each(function () {
                let temp = '',
                    linkEl = '',
                    txt = '',
                    inpEl = '';

                temp = $(this).find('.archive-filter__box');
                $(temp).mCustomScrollbar({
                    theme: "dark",
                    mouseWheelPixels: 90
                });

                temp = $(this).find('.archive-filter__bloc');
                txt = $(this).find('.archive-filter__txt');
                inpEl = $(this).find('.archive-filter__list').find('input'); //prop("checked") 

                $(inpEl).each(function () {
                    if ($(this).prop("checked")) {
                        $(txt).text($(this).next().text());
                    }
                });

                $(temp).on('click', function () {

                    $(this).toggleClass("archive-filter__item--active").siblings().removeClass("archive-filter__item--active");

                    if ($(this).hasClass('archive-filter__item--active')) {
                        linkEl = $(this).find('.archive-filter__block');
                        $(linkEl).each(function () {
                            $(this).on('click', function () {
                                $(txt).text($(this).text());
                                $('.archive-filter__item').removeClass('archive-filter__item--active');
                            });
                        });
                    }

                    if (($(this).hasClass('archive-filter__item--active')) && ($(this).hasClass('archive-filter__item--year'))) {
                        linkEl = $(this).find('.archive-filter__block');
                        $(linkEl).each(function () {
                            $(this).on('click', function () {
                                $(txt).text($(this).text());
                                $('.archive-filter__item--day').find('.archive-filter__block').remove();
                                $(this).find('input').attr({
                                    'currentYear': atributeForm.currentYear,
                                }).closest('.archive-filter__block').siblings().find('input').removeAttr('currentyear').removeAttr('checked');
                                checkEl();
                            });
                        });
                    }

                    if (($(this).hasClass('archive-filter__item--active')) && ($(this).hasClass('archive-filter__item--day'))) {
                        linkEl = $(this).find('.archive-filter__block');

                        $(linkEl).each(function () {
                            $(this).on('click', function () {
                                $(this).find('input').attr('currentDay', atributeForm.currentDay).closest('.archive-filter__block').siblings().find('input').removeAttr('currentday');
                            });
                        });
                    }

                    if (($(this).hasClass('archive-filter__item--active')) && ($(this).hasClass('archive-filter__item--month'))) {
                        linkEl = $(this).find('.archive-filter__block');
                        $(linkEl).each(function () {
                            $(this).on('click', function () {
                                $(txt).text($(this).text());
                                $('.archive-filter__item--day').find('.archive-filter__block').remove();
                                checkEl();
                            });
                        });
                    }
                }.bind(this));
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.header__search--laptop').exists) {
        try {

            function preventDefault(e) {
                e.preventDefault();
            }

            $('.header__btn').on('click', function () {
                $('.header__search--laptop').addClass('header__search--active');

                if ($('.header__search--laptop').hasClass('header__search--active')) {
                    setTimeout(function () {
                        $('.header__search--laptop input').focus();
                    }, 500);
                    $('.header__search--laptop').bind("submit", preventDefault);
                }

                if ($('.header__search--laptop input').val() != '') {
                    $('.header__search--laptop').unbind("submit", preventDefault);
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.header__inner').exists) {
        try {
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
        } catch (err) {
            console.log(err);
        }
    }

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

    //======================ArticleSlider=========

    function createGallery() {

        if ($('.news-detail__item').exists) {
            try {
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
                galleryWrapper.appendChild(blockThumbs);
                $(galleryBlock).find(swiperWrapper).clone().appendTo(blockThumbs);
            } catch (err) {
                console.log(err);
            }
        }
    }

    var allEl = document.querySelectorAll('.news-detail__item > *');
    var j = 0;
    var result = "";
    var arrTemp = [];
    var ch = 0; // Итерация по выбранным элементам

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

    showImg('.gallery');

    function showImg(bloc, type) {
        $(bloc).find('.swiper-slide').each(function () {
            $(this).append("<canvas class='gallery__img-bg'></canvas>");

            let canvas = $(this).find('canvas')[0];
            let ctx = canvas.getContext("2d");

            let img = new Image();
            img.src = $(this).find('img').attr('src');

            img.onload = function () {
                var s = Math.max(canvas.width / img.width, canvas.height / img.height);
                ctx.filter = 'blur(7px)';
                ctx.scale(s, s);
                ctx.drawImage(img, 0, -100);
            }
        });
    }

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
                        slidesPerView: 6,
                    },
                    1024: {
                        spaceBetween: 17,
                        slidesPerView: 6,
                    },
                    1025: {
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

        if ($('.content p').exists()) {
            if (!$('.gallery').exists()) {
                $('.content p').css({
                    "max-width": '900px',
                    'margin-left': 0
                });

                $('.content h2').css({
                    "text-align": 'left',
                    'margin-top': '25px'
                });
            }
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

    if ($("#input-search").exists) {
        try {
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
        } catch (err) {
            console.log(err);
        }
    }

    if (($(".news-slider__gallery").exists) && ($(".news-slider__thumbs").exists)) {
        try {
            let newsGallery = new Swiper('.news-slider__gallery', {
                spaceBetween: 10,
                slidesPerView: 1,
                watchSlidesVisibility: true,
                effect: "fade",
            });

            let newsThumbs = new Swiper('.news-slider__thumbs', {
                spaceBetween: 10,
                // autoHeight: true,
                effect: "fade",
                //touchRatio: 0,
                navigation: {
                    nextEl: '.news-slider__arrow--next',
                    prevEl: '.news-slider__arrow--prev',
                },
                fadeEffect: {
                    crossFade: true
                },
                breakpoints: {
                    920: {
                        touchRatio: 1,
                    },
                    921: {
                        touchRatio: 0,
                    }
                }
            });

            newsThumbs.controller.control = newsGallery;
            newsGallery.controller.control = newsThumbs;
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.edition-slider').exists()) {
        try {
            let editionSlider = new Swiper('.edition-slider', {
                spaceBetween: 18,
                slidesPerView: 6,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
                slidesPerGroup: 6,
                navigation: {
                    nextEl: '.edition-slider__arr--next',
                    prevEl: '.edition-slider__arr--prev',
                },
                pagination: {
                    el: '.edition-slider__pag',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                },
                breakpoints: {
                    1920: {
                        spaceBetween: 18,
                        slidesPerView: 6,
                    },
                    769: {
                        spaceBetween: 18,
                        slidesPerView: 6
                    },
                    768: {
                        spaceBetween: 15,
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    621: {
                        spaceBetween: 15,
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    620: {
                        spaceBetween: 10,
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    501: {
                        spaceBetween: 10,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    321: {
                        spaceBetween: 10,
                        slidesPerGroup: 3,
                        slidesPerView: 2,
                    },
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    // if ($('.release-year__items').exists()) {
    //     if ($('.release-year__item').exists()) {
    //         $('.release-year__item').each(function (index) {
    //             if (index == 0) {
    //                 $(this).addClass('release-year__item--active');
    //                 $('.res-year').val($(this).text());
    //             }
    //             $(this).on('click', function () {
    //                 let text = $(this).text();
    //                 $(this).addClass('release-year__item--active')
    //                     .siblings()
    //                     .removeClass('release-year__item--active');
    //                 $('.res-year').val(text);
    //             });
    //         })
    //     }
    // }

    // if ($('.release-month__items').exists()) {
    //     if ($('.release-month__item').exists()) {
    //         $('.release-month__item').each(function (index) {
    //             if (index == 0) {
    //                 $(this).addClass('release-month__item--active');
    //                 $('.res-month').val($(this).text());
    //             }
    //             $(this).on('click', function () {
    //                 let text = $(this).text();
    //                 $(this).addClass('release-month__item--active')
    //                     .siblings()
    //                     .removeClass('release-month__item--active');
    //                 $('.res-month').val(text);
    //                 const monthInfo = $(this).text();
    //                 $('.release-month__txt').text(monthInfo);
    //             });
    //         })
    //     }
    // }

    if ($('.release-month__items').exists()) {
        const breakpoint = window.matchMedia('(min-width:769px)');
        if (!breakpoint.matches === true) {
            $('.release-month__items').mCustomScrollbar({
                theme: "dark",
                mouseWheelPixels: 90
            });
        }
    }

    if ($('.header__search--laptop').exists()) {
        document.querySelector('.header__top .header__search--laptop').addEventListener('keydown', function (e) {
            if (e.keyCode == 13) {
                this.submit();
            }
        })
    }
});