"use strict";

//===== Function check element ==========//
jQuery.fn.exists = function () {
  return $(this).length;
};

function createLightGallery(bloc) {
  if (['video-gallery'].indexOf(bloc) !== -1) {
    // alert('777');
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
      var block = document.getElementById(bloc);

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

BX.addCustomEvent('onAjaxSuccess', function () {
  checkGallery('lightgallery');
  checkGallery('video-gallery');
  journalSlider();
});

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

$(function () {
  journalSlider();
  createLightGallery('lightgallery');
  createLightGallery('video-gallery');
  var parentEl = '';

  function setHeaderHeight(child, parent) {
    var height = $(child).height();
    $(parent).css({
      height: height + "px" // приравниванием высоту header'a к высоте абсолютного элемента

    });
    console.log($(child).height());
  }

  function adaptiveArticle(container, text) {
    if ($(container).exists()) {
      $(container).each(function () {
        var temp = $(this).find(text);

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
          var month = parseInt($(this).val()) - 1;
          var days = [31, 29, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];

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
    // const breakpoint = window.matchMedia('(max-width:1024px)');
    // 
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
          var temp = $(this).find('label').text();
          $('.filter__txt').text(temp);
          $(this).closest('.filter__item').removeClass('filter__item--active');
        });
      });
      $(document).on('click', function (event) {
        var target = event.target;

        if (!$(target).hasClass('.filter__item')) {
          $(this).closest('.filter__item').removeClass('filter__item--active');
        }
      });
      jQuery(function ($) {
        $(document).mouseup(function (e) {
          // событие клика по веб-документу
          var div = $(".filter__item"); // тут указываем ID элемента

          if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) {
            // и не по его дочерним элементам
            div.removeClass('filter__item--active'); // скрываем его
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  function journalSlider() {
    if ($('.journal__items').exists) {
      try {
        var enableSwiper = function enableSwiper() {
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
                  slidesPerView: 3
                },
                600: {
                  spaceBetween: 15,
                  slidesPerView: 3
                },
                601: {
                  spaceBetween: 15,
                  slidesPerView: 4
                },
                769: {
                  spaceBetween: 15,
                  slidesPerView: 5
                },
                1024: {
                  spaceBetween: 15,
                  slidesPerView: 5
                },
                1025: {
                  slidesPerView: 4,
                  spaceBetween: 18
                }
              },
              navigation: {
                nextEl: '.journal__arrow.journal__arrow--next',
                prevEl: '.journal__arrow.journal__arrow--prev'
              }
            });
          });
        };

        var breakpoint = window.matchMedia('(min-width:501px)');
        var mySwiper;

        var breakpointChecker = function breakpointChecker() {
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

        breakpoint.addListener(breakpointChecker);
        breakpointChecker();
      } catch (err) {
        console.log(err);
      }
    }
  }

  if ($('.journal__items').exists) {
    try {
      var enableSwiper = function enableSwiper() {
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
                slidesPerView: 3
              },
              600: {
                spaceBetween: 15,
                slidesPerView: 3
              },
              601: {
                spaceBetween: 15,
                slidesPerView: 4
              },
              769: {
                spaceBetween: 15,
                slidesPerView: 5
              },
              1024: {
                spaceBetween: 15,
                slidesPerView: 5
              },
              1025: {
                slidesPerView: 4,
                spaceBetween: 18
              }
            },
            navigation: {
              nextEl: '.journal__arrow.journal__arrow--next',
              prevEl: '.journal__arrow.journal__arrow--prev'
            }
          });
        });
      };

      var breakpoint = window.matchMedia('(min-width:501px)');
      var mySwiper;

      var breakpointChecker = function breakpointChecker() {
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

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    } catch (err) {
      console.log(err);
    }
  }

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

  function truncateText(bloc, qty) {
    if (bloc.length > 0) {
      var txtBloc = document.querySelectorAll(bloc);

      for (var _i3 = 0; _i3 < txtBloc.length; _i3++) {
        trc(txtBloc[_i3], qty);
      }
    }
  }

  function trc(txt, qty) {
    var text = txt.textContent;
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
  truncateText('.news-slider__txt', 250); //===========Accordion=============

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
            temp = $(this).children('label').text();

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
          console.log(parent);
          var filterBloc = document.querySelector('.archive-filter__item--year');
          parentEl = filterBloc.querySelector('.archive-filter__list'); //  parentEl = $(parent).find('.archive-filter__list');

          for (var _i5 = atributeForm.currentYear; _i5 >= qty; _i5--) {
            var newEl = document.createElement('div'),
                inputEl = document.createElement('input'),
                inputLabel = document.createElement('label');
            newEl.classList.add('archive-filter__block');

            if (_i5 == atributeForm.currentYear) {
              inputEl.setAttribute('checked', 'checked');
              inputEl.setAttribute('currentyear', atributeForm.currentYear);
            }

            inputEl.setAttribute('id', "y-".concat(_i5));
            inputEl.setAttribute('type', 'radio');
            inputEl.setAttribute('name', atributeForm.year);
            inputEl.setAttribute('value', "".concat(_i5));
            inputLabel.setAttribute('for', "y-".concat(_i5));
            inputLabel.textContent = _i5;
            newEl.appendChild(inputEl);
            newEl.appendChild(inputLabel);
            parentEl.appendChild(newEl);
          }
        } else {
          var _filterBloc = document.querySelector('.archive-filter__item--day');

          parentEl = _filterBloc.querySelector('.archive-filter__list');

          for (var _i6 = qty; _i6 > 0; _i6--) {
            var _newEl = document.createElement('div'),
                _inputEl = document.createElement('input'),
                _inputLabel = document.createElement('label');

            _newEl.classList.add('archive-filter__block');

            if (_i6 == atributeForm.currentDay) {
              _inputEl.setAttribute('checked', 'checked');

              _inputEl.setAttribute('currentday', atributeForm.currentDay);
            }

            _inputEl.setAttribute('id', "d-".concat(_i6));

            _inputEl.setAttribute('type', 'radio');

            _inputEl.setAttribute('name', atributeForm.day);

            _inputEl.setAttribute('value', "".concat(_i6));

            _inputLabel.setAttribute('for', "d-".concat(_i6));

            _inputLabel.textContent = _i6;

            _newEl.appendChild(_inputEl);

            _newEl.appendChild(_inputLabel);

            parentEl.appendChild(_newEl);
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

          if ($(this).hasClass('archive-filter__item--active') && $(this).hasClass('archive-filter__item--year')) {
            linkEl = $(this).find('.archive-filter__block');
            $(linkEl).each(function () {
              $(this).on('click', function () {
                $(txt).text($(this).text());
                $('.archive-filter__item--day').find('.archive-filter__block').remove();
                $(this).find('input').attr({
                  'currentYear': atributeForm.currentYear
                }).closest('.archive-filter__block').siblings().find('input').removeAttr('currentyear').removeAttr('checked');
                checkEl();
              });
            });
          }

          if ($(this).hasClass('archive-filter__item--active') && $(this).hasClass('archive-filter__item--day')) {
            linkEl = $(this).find('.archive-filter__block');
            $(linkEl).each(function () {
              $(this).on('click', function () {
                $(this).find('input').attr('currentDay', atributeForm.currentDay).closest('.archive-filter__block').siblings().find('input').removeAttr('currentday');
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
      $('.header__search--laptop').on('click', function (e) {
        e.preventDefault();

        if ($('.header__search--laptop').hasClass('header__search--active')) {
          if ($('.header__search--laptop input').val() != '') {
            $('.header__search').submit();
          } else {
            $('.header__search--laptop').toggleClass('header__search--active');
          }
        } else {
          $('.header__search--laptop').toggleClass('header__search--active');
          setTimeout(function () {
            $('.header__search--laptop input').focus();
          }, 500);
        }
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
      var _breakpoint = window.matchMedia('(min-width:600px)');

      var _mySwiper;

      var _breakpointChecker = function _breakpointChecker() {
        if (_breakpoint.matches === true) {
          if (_mySwiper !== undefined) _mySwiper.destroy(true, true);
          return;
        } else if (_breakpoint.matches === false) {
          return _enableSwiper();
        }
      };

      var _enableSwiper = function _enableSwiper() {
        _mySwiper = new Swiper('.author-articles__grid--slider', {
          slidesPerView: 'auto',
          spaceBetween: 16,
          loop: true,
          autoplay: true,
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        });
      };

      _breakpoint.addListener(_breakpointChecker);

      _breakpointChecker();
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
            slidesPerView: 6
          },
          1024: {
            spaceBetween: 17,
            slidesPerView: 6
          },
          1025: {
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
  // lightGallery(document.getElementById('lightgallery'));


  if ($("#input-search").exists) {
    try {
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
    } catch (err) {
      console.log(err);
    }
  }

  if ($(".news-slider__gallery").exists && $(".news-slider__thumbs").exists) {
    try {
      var newsGallery = new Swiper('.news-slider__gallery', {
        spaceBetween: 10,
        slidesPerView: 1,
        watchSlidesVisibility: true,
        effect: "fade"
      });
      var newsThumbs = new Swiper('.news-slider__thumbs', {
        spaceBetween: 10,
        // autoHeight: true,
        effect: "fade",
        //touchRatio: 0,
        navigation: {
          nextEl: '.news-slider__arrow--next',
          prevEl: '.news-slider__arrow--prev'
        },
        fadeEffect: {
          crossFade: true
        },
        breakpoints: {
          920: {
            touchRatio: 1
          },
          921: {
            touchRatio: 0
          }
        }
      });
      newsThumbs.controller.control = newsGallery;
      newsGallery.controller.control = newsThumbs;
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.theme-button').exists()) {
    var btn;
    var link;
    var themeDefault;

    (function () {
      var ChangeTheme = function ChangeTheme() {
        var lightTheme = themeDefault;
        var darkTheme = "/local/templates/magmetall/css/dark.css "; //let darkTheme = "css/dark.css ";

        var currTheme = link.getAttribute("href");
        var theme = "";

        if (currTheme == lightTheme) {
          currTheme = darkTheme;
          theme = "dark";
        } else {
          currTheme = lightTheme;
          theme = "light";
        }

        link.setAttribute("href", currTheme);
        return currTheme;
      };

      btn = document.querySelectorAll(".theme-button");
      link = document.getElementById("theme-link");
      themeDefault = "";
      console.log(btn);

      for (var _i7 = 0; _i7 < btn.length; _i7++) {
        btn[_i7].addEventListener("click", function () {
          var theme = ChangeTheme();
          sessionStorage.setItem('theme', theme);
        });
      } // btn.addEventListener("click", function () {
      //     let theme = ChangeTheme();
      //     sessionStorage.setItem('theme', theme)
      // });


      if (sessionStorage.getItem('theme') !== null) {
        $('#theme-link').attr('href', sessionStorage.getItem('theme'));

        if (sessionStorage.getItem('theme') == themeDefault) {
          $('.header .checkbox input').prop('checked', true);
        } else {
          $('.header .checkbox input').prop('checked', false);
        }
      } else {
        $('#theme-link').attr('href', themeDefault);
        $('.header .checkbox input').prop('checked', true);
      }
    })();
  }
});