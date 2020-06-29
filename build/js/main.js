"use strict";

//===== Function check element ==========//
jQuery.fn.exists = function () {
  return $(this).length;
};

$(function () {
  var nowYear = new Date().getFullYear();
  var parentEl = '';
  var form = document.querySelector('.archive-filter__items'); // $('.news-popular__items').each(function () {
  //     let ch = 0;
  //     let childrenEl = $(this).find('.news-popular__item');
  //     childrenEl.each(function (index) {
  //         let temp = $(this).find('.news-popular__pic');
  //         if (!temp.length > 0) {
  //             ch++;
  //         }
  //     });
  //     if (ch == 1) {
  //         let temp = $(this).find('.news-popular__item');
  //         temp.each(function (index) {
  //             if ($(this).find('.news-popular__pic').exists()) {
  //                 if (index == 0) {
  //                     $(this).closest('.news-popular__bloc').addClass('news-popular__bloc--other');
  //                 } else {
  //                     $(this).closest('.news-popular__bloc').addClass('news-popular__bloc--reverse');
  //                 }
  //             }
  //         });
  //     }
  // });

  function adaptiveBloc(container, item, bloc, picture) {
    if ($(container).exists()) {
      $(container).each(function () {
        var ch = 0;
        var childrenEl = $(this).find(item);
        childrenEl.each(function (index) {
          var temp = $(this).find(picture);

          if (!temp.length > 0) {
            ch++;
          }
        });

        if (ch == 1) {
          var temp = $(this).find(item);
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
  $(document).on('click', function (event) {
    if ($('.archive-filter__item').exists) {
      try {
        var $targetBloc = $(event.target).closest('.archive-filter__bloc');
        var $targetScroll = $(event.target).closest('.mCSB_dragger');
        var $temp = '';

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
  }); //===========Truncate text=============

  var truncateText = function truncateText(bloc, qty) {
    if ($(bloc).exists()) {
      var truncate = document.querySelectorAll(bloc); //".news-popular__text"

      for (var _i3 = 0; _i3 < truncate.length; _i3++) {
        $clamp(truncate[_i3], {
          clamp: qty,
          // Число строк
          useNativeClamp: false
        });
      }
    }
  };

  truncateText('.news-popular__text', 3); //truncateText('.news-popular__test', 3);
  // truncateText('.archive-news__text', 4);
  // truncateText('.author-articles__txt', 2);

  if ($('.news-popular--popular').exists) {} //  truncateText('.news-popular__text', 3);
  //===========Accordion=============


  if ($('.archive-filter__panel').exists()) {
    try {
      var accordions = document.getElementsByClassName("archive-filter__panel");

      for (var _i4 = 0; _i4 < accordions.length; _i4++) {
        accordions[_i4].onclick = function (event) {
          var target = event.target;

          if (!$(target).attr('href')) {
            this.classList.toggle('archive-filter__panel--active');
            $(this).parent().toggleClass('archive-filter__wrp--active');
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
          }
        };
      }
    } catch (err) {
      console.log(err);
    }
  }

  function checkEl() {
    if ($('.archive-filter__item').exists) {
      try {
        var linkEl = $('.archive-filter__item--month').find('.archive-filter__block'),
            temp = '';
        $(linkEl).each(function () {
          if ($(this).children('input').prop("checked")) {
            temp = $(this).children('input').val();

            if (temp.indexOf("Декабрь") != -1 || temp.indexOf("Январь") != -1 || temp.indexOf("Март") != -1 || temp.indexOf("Май") != -1 || temp.indexOf("Июль") != -1 || temp.indexOf("Август") != -1 || temp.indexOf("Октябрь") != -1) {
              crYear('.archive-filter__item--day', 31);
              $('.archive-filter__item--day').find('.archive-filter__txt').text('31');
            } else if (temp.indexOf("Сентябрь") != -1 || temp.indexOf("Июнь") != -1 || temp.indexOf("Ноябрь") != -1 || temp.indexOf("Апрель") != -1) {
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
          parentEl = $(parent).find('.archive-filter__list');

          for (var _i5 = nowYear; _i5 >= 1935; _i5--) {
            var newEl = document.createElement('div'),
                inputEl = document.createElement('input'),
                inputLabel = document.createElement('label');
            newEl.classList.add('archive-filter__block');

            if (_i5 == nowYear) {
              inputEl.setAttribute('checked', 'checked');
            }

            inputEl.setAttribute('id', "y-".concat(_i5));
            inputEl.setAttribute('type', 'radio');
            inputEl.setAttribute('name', 'check[]');
            inputEl.setAttribute('value', "".concat(_i5));
            inputLabel.setAttribute('for', "y-".concat(_i5));
            inputLabel.textContent = _i5;
            newEl.append(inputEl);
            newEl.append(inputLabel);
            parentEl.append(newEl);
          }
        } else {
          parentEl = $(parent).find('.archive-filter__list');

          for (var _i6 = qty; _i6 > 0; _i6--) {
            var _newEl = document.createElement('div'),
                _inputEl = document.createElement('input'),
                _inputLabel = document.createElement('label');

            _newEl.classList.add('archive-filter__block');

            if (_i6 == qty) {
              _inputEl.setAttribute('checked', 'checked');
            }

            _inputEl.setAttribute('id', "d-".concat(_i6));

            _inputEl.setAttribute('type', 'radio');

            _inputEl.setAttribute('name', 'check3[]');

            _inputEl.setAttribute('value', "".concat(_i6));

            _inputLabel.setAttribute('for', "d-".concat(_i6));

            _inputLabel.textContent = _i6;

            _newEl.append(_inputEl);

            _newEl.append(_inputLabel);

            parentEl.append(_newEl);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  checkEl();
  crYear('.archive-filter__item--year', 1935);

  if ($('.archive-filter__item').exists()) {
    try {
      $('.archive-filter__item').each(function () {
        var temp = '',
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
            $(txt).text($(this).val());
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

          if ($(this).hasClass('archive-filter__item--active') && $(this).hasClass('archive-filter__item--month')) {
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
      $('.header__btn').on('click', function (e) {
        e.preventDefault();
        $('.header__search--laptop').toggleClass('header__search--laptop--active');
      });
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.header__inner').exists) {
    try {
      var $window = $(window),
          $target = $(".header__inner"),
          $h = $target.offset().top;
      $window.on('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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
      $('.header__func').on('click', function () {
        $('.header__func').toggleClass('header__func--active');
        $('.header__section').toggleClass('header__section--active');
      });
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.author-articles__grid--slider').exists) {
    try {
      var breakpoint = window.matchMedia('(min-width:600px)');
      var mySwiper;

      var breakpointChecker = function breakpointChecker() {
        if (breakpoint.matches === true) {
          if (mySwiper !== undefined) mySwiper.destroy(true, true);
          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      var enableSwiper = function enableSwiper() {
        mySwiper = new Swiper('.author-articles__grid--slider', {
          slidesPerView: 'auto',
          spaceBetween: 16,
          loop: true,
          autoplay: true,
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        });
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    } catch (err) {
      console.log(err);
    }
  } //======================ArticleSlider=========


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
        galleryWrapper.append(blockThumbs);
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
            slidesPerView: 3
          },
          501: {
            spaceBetween: 8,
            slidesPerView: 4
          },
          769: {
            spaceBetween: 17,
            slidesPerView: 5
          },
          1024: {
            spaceBetween: 17,
            slidesPerView: 5
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
        }
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
  } //========================================//


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
});