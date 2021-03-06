"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//===== Function check element ==========//
jQuery.fn.exists = function () {
  return $(this).length;
};

if ($('#gallerybanner').exists()) {
  $('head').append('<link rel="stylesheet" type="text/css" href="css/lightgallery.min.css">');
  lightGallery(document.getElementById('gallerybanner'), {
    selector: '.include__link'
  });
}

lightGallery(document.getElementById('gallerybanner'), {
  thumbnail: false,
  background: 'A90707',
  "selector": '.include__link'
}); // BX.ready(function () {
//     BX.addCustomEvent('onAjaxSuccess', function () {
//         checkGallery('lightgallery');
//         checkGallery('video-gallery');
//         journalSlider();
//         articleSlider();
//     });
// });

var projectFunc = {
  objAd: function objAd(element, place) {
    if ($(element).exists()) {
      $(element).each(function (index) {
        var adObj = $(this).clone();
        $(place).append($(adObj));
        $(this).remove();
      });
    }
  },
  objReturn: function objReturn(element, place) {
    if ($(element).exists()) {// let t = '';
      // // t = $(element).html();
      // return $(element);
      // $(place).append($(element))
    }
  },
  getScrollbarWidth: function getScrollbarWidth() {
    var div,
        width = projectFunc.getScrollbarWidth.width;

    if (width === undefined) {
      div = document.createElement('div');
      div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
      div = div.firstChild;
      document.body.appendChild(div);
      width = projectFunc.getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
    }

    return width;
  }
};

if ($('.news-archive__slider').exists()) {
  var settings = {
    spaceBetween: 51,
    slidesPerView: 4,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 4,
    navigation: {
      nextEl: '.edition-slider__arr--next',
      prevEl: '.edition-slider__arr--prev'
    },
    pagination: {
      el: '.news-archive__pag',
      clickable: true
    },
    breakpoints: {
      1920: {
        spaceBetween: 51,
        slidesPerView: 4
      },
      1301: {
        spaceBetween: 51,
        slidesPerView: 4
      },
      1300: {
        spaceBetween: 40,
        slidesPerView: 4
      },
      1025: {
        spaceBetween: 40,
        slidesPerView: 4
      },
      1024: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      861: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      860: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      769: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      641: {
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      640: {
        spaceBetween: 15,
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      501: {
        spaceBetween: 20,
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      500: {
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      320: {
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 2
      }
    }
  };
  var authorSlider = new Swiper('.news-archive__slider', settings);
  $(window).on('resize load', function () {
    authorSlider.destroy();
    authorSlider = new Swiper('.news-archive__slider', settings);
  });
}

(function () {
  if ($('.theme-button').exists()) {
    var switchTheme = function switchTheme(e) {
      if (!e.target.checked) {
        darkTheme();
        e.target.checked = false;
      } else {
        lightTheme();
        e.target.checked = true;
      }
    };

    var getCookie = function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }

      return "";
    };

    var restoreTheme = function restoreTheme() {
      var theme = getCookie("theme");

      if (theme == "dark") {
        darkTheme();
      } else {
        lightTheme();
      }

      toggleSwitch.forEach(function (item) {
        if (theme == "dark") {
          item.checked = false;
        } else {
          item.checked = true;
        }
      });
    };

    var darkTheme = function darkTheme() {
      document.cookie = "theme=dark; path=/;";
      mainElement.setAttribute("data-theme", "dark");
    };

    var lightTheme = function lightTheme() {
      document.cookie = "theme=light; path=/;";
      mainElement.setAttribute("data-theme", "light");
    };

    var toggleSwitch = document.querySelectorAll(".theme-button");
    var mainElement = document.querySelector("body");
    restoreTheme();
    toggleSwitch.forEach(function (item) {
      item.addEventListener("click", switchTheme, false);
    });
  }
})();

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
  }
}

function setHeaderHeight(child, parent) {
  var height = $(child).height();
  $(parent).css({
    height: height + "px" // ???????????????????????????? ???????????? header'a ?? ???????????? ?????????????????????? ????????????????

  });
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

if ($('.js-video-content').exists()) {
  try {
    var videoItem = document.querySelectorAll('.js-video-content');
    videoItem.forEach(function (elem) {
      lightGallery(elem);
    });
  } catch (err) {
    console.log(err);
  }
}

$(window).on('load', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
});
$(window).on('load resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
});
$(document).on("click tap", function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
});
window.addEventListener('load', function () {
  var locked = document.querySelector('html');
  locked.style.setProperty('--wScroll', projectFunc.getScrollbarWidth() + 'px');
});
$(function () {
  journalSlider();
  articleSlider();
  createLightGallery('archiveVideo');
  createLightGallery('lightgallery');
  createLightGallery('video-gallery');
  createGallery('content-video');
  var parentEl = '';

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
    var _Scrollbar = window.Scrollbar;
    $(window).on('resize load', function () {
      if ($(this).width() <= 1024) {
        _Scrollbar.init(document.querySelector(".header__bottom .header__nav"));
      } else {
        _Scrollbar.destroy(document.querySelector(".header__bottom .header__nav"));
      }
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
          // ?????????????? ?????????? ???? ??????-??????????????????
          var div = $(".filter__item"); // ?????? ?????????????????? ID ????????????????

          if (!div.is(e.target) // ???????? ???????? ?????? ???? ???? ???????????? ??????????
          && div.has(e.target).length === 0) {
            // ?? ???? ???? ?????? ???????????????? ??????????????????
            div.removeClass('filter__item--active'); // ???????????????? ??????
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
    if ($('.archive-filter__item').exists()) {
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

    if ($('.release-month__bloc').exists()) {
      try {
        var _$targetBloc = $(event.target).closest('.release-month__btn');

        var _$targetScroll = $(event.target).closest('.mCSB_dragger');

        var _$temp = '';

        if (!_$targetBloc.length) {
          _$temp = $('.release-month__bloc--active');
          $('.release-month__bloc--active').removeClass('release-month__bloc--active');
        }

        if (_$targetScroll.length) {
          _$temp.addClass('release-month__bloc--active');
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
  } //===========Truncate text=============


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
  truncateText('.news-slider__txt', 250);
  truncateText('.news-slider__txt', 250);
  truncateText('.publish__txt', 15);
  $(window).on('resize load', function () {
    if ($(this).width() <= 640) {
      truncateText('.news-actual__text', 1000);
    } else {
      truncateText('.news-actual__text', 55);
    }
  }); //===========Accordion=============

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

            if (temp.indexOf("??????????????") != -1 || temp.indexOf("????????????") != -1 || temp.indexOf("????????") != -1 || temp.indexOf("??????") != -1 || temp.indexOf("????????") != -1 || temp.indexOf("????????????") != -1 || temp.indexOf("??????????????") != -1) {
              crYear('.archive-filter__item--day', 31);
              $('.archive-filter__item--day').find('.archive-filter__txt').text('31');
            } else if (temp.indexOf("????????????????") != -1 || temp.indexOf("????????") != -1 || temp.indexOf("????????????") != -1 || temp.indexOf("????????????") != -1) {
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
      var preventDefault = function preventDefault(e) {
        e.preventDefault();
      };

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

        if ($(blockThumbs).children('.swiper-wrapper').children().length == 1) {
          $(blockThumbs).css('display', 'none');
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  var allEl = document.querySelectorAll('.news-detail__item > *');
  var j = 0;
  var result = "";
  var arrTemp = [];
  var ch = 0; // ???????????????? ???? ?????????????????? ??????????????????

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
          setTimeout(function () {
            $('.news-detail__item img').css('opacity', '1');
            $('.gallery').css('opacity', '1');
          }, 500);
          createGallery();
        }
      }
    } else {
      if (result) {
        setTimeout(function () {
          $('.news-detail__item img').css('opacity', '1');
          $('.gallery').css('opacity', '1');
        }, 500);
        createGallery();
      }

      result = '';
      ch++;
    }
  }

  function initGallarySlider(selectorElement) {
    var sliderBlocks = document.querySelectorAll('.' + selectorElement); // ?????????? ?????? ???????????????? ?? ???????????????? ??????????????. ???????????? ?????????????? ?????????? ??????????????????. ???????????? ???????????????? ?? NodeList

    var sliderBlocksArr = []; // ???????????? ?????? ???????????????? ?????????????????? ???? NodeList.

    for (var _i = 0; _i < sliderBlocks.length; _i++) {
      sliderBlocksArr.push(sliderBlocks[_i]);
    } // ?????? ?????????????????????????? ?? IE11


    sliderBlocksArr.forEach(function (item, i) {
      // ???????????????????? ???? ???????? ??????????????????
      var slides = item.querySelectorAll('img'); // ???????????????????? ?????? ?????????????????????? ???? ???????????????? ???????????????? ?? ???????????? ????????????????????

      var slidesArr = []; // ???????????? ?????? ???????????????? ?????????????????? ???? NodeList.

      for (var _i2 = 0; _i2 < slides.length; _i2++) {
        slidesArr.push(slides[_i2]);
      } // ?????? ?????????????????????????? ?? IE11


      slidesArr.forEach(function (item, i) {
        // ???????????????????? ???? ???????? ???????????????????????? ?????????????? ????????????????
        var wrapper = document.createElement('a'); // ?????????????? ??????????????, ?? ???????? ???????????? ?????? ?????????????? ??????????????????????, ?????? ???????????????????????????????? ??????????????

        wrapper.innerHTML = item.outerHTML; // ???????????????? ???????????????????? ?? ??????????????

        if (selectorElement != 'gallery__thumbs') {
          wrapper.setAttribute('href', item.getAttribute('src')); // ???????????? ?????????????? ???????? ???????????? ?? ??????????????????????
        }

        wrapper.classList.add('gallery-item'); // ???????????? ?????????? ??????????????/????????????

        wrapper.classList.add('swiper-slide');
        item.parentNode.replaceChild(wrapper, item); // ???????????????? ???????????? ?????????????????????? ?????? ??????????????, ???? ??????????????/?????????? ?? ???????????????????? ????????????????????????
      });
      item.setAttribute('id', 'slide' + i); // ???????????? ???????????????????? id ?????? ?????????????? ????????????????

      lightGallery(document.querySelector('#' + item.id), {
        selector: '.gallery-item'
      }); // ???????????????????????????? ?????????????? ?????? ?????????????? ????????????????, ???????????? ???????????????????? ?????????????????????? id ????????????????, ???????????? ????????????????????, ?????????? ????????????
    });
  }

  initGallarySlider('gallery__top'); // ?????????????????? ?????????????? ?? ???????????????? ???? ???????????????? ???????????? ?????? ????????????????

  initGallarySlider('gallery__thumbs'); // ?????????????????? ?????????????? ?? ???????????????? ???? ???????????????? ???????????? ?????? ????????????????

  var qtySlide = $('.gallery__thumbs').find('.swiper-slide');
  showImg('.gallery');

  function showImg(bloc, type) {
    $(bloc).find('.swiper-slide').each(function () {
      $(this).append("<canvas class='gallery__img-bg'></canvas>");
      var canvas = $(this).find('canvas')[0];
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = $(this).find('img').attr('src');

      img.onload = function () {
        var s = Math.max(canvas.width / img.width, canvas.height / img.height);
        ctx.filter = 'blur(7px)';
        ctx.scale(s, s);
        ctx.drawImage(img, 0, -100);
      };
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

      if ($('.gallery').exists()) {
        $('.news-detail__item').css('min-height', $('.gallery').height() + 15 + 'px');
      }
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
  } //========================================//


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

  if ($('.edition-slider').exists()) {
    try {
      var editionSlider = new Swiper('.edition-slider', {
        spaceBetween: 18,
        slidesPerView: 6,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        slidesPerGroup: 6,
        navigation: {
          nextEl: '.edition-slider__arr--next',
          prevEl: '.edition-slider__arr--prev'
        },
        pagination: {
          el: '.edition-slider__pag',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        },
        breakpoints: {
          1920: {
            spaceBetween: 18,
            slidesPerView: 6
          },
          769: {
            spaceBetween: 18,
            slidesPerView: 6
          },
          768: {
            spaceBetween: 15,
            slidesPerView: 5,
            slidesPerGroup: 5
          },
          621: {
            spaceBetween: 15,
            slidesPerView: 5,
            slidesPerGroup: 5
          },
          620: {
            spaceBetween: 10,
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          501: {
            spaceBetween: 10,
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          321: {
            spaceBetween: 10,
            slidesPerGroup: 3,
            slidesPerView: 2
          },
          320: {
            spaceBetween: 10,
            slidesPerView: 2,
            slidesPerGroup: 2
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  } // if ($('.release-year__items').exists()) {
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
    var breakpoint = window.matchMedia('(min-width:769px)');

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
    });
  }

  function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;

    if (n > 10 && n < 20) {
      return text_forms[2];
    }

    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }

    if (n1 == 1) {
      return text_forms[0];
    }

    return text_forms[2];
  }

  var createCanvasImg = function createCanvasImg(canvas, parentElement) {
    try {
      $(canvas).each(function (_, canva) {
        var ctx = canva.getContext("2d");
        var img = new Image();
        img.src = $(parentElement).find('img').attr('src');

        img.onload = function () {
          var s = Math.max(canva.width / img.width, canva.height / img.height);
          ctx.filter = 'blur(7px)';
          ctx.scale(s, s);
          ctx.drawImage(img, 0, -100);
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  var getJson = function getJson(element) {
    var dataJson = element.getAttribute('data-slide');
    dataJson = JSON.parse(dataJson);
    return dataJson.slides;
  };

  if ($('.entry').exists()) {
    var slides = '',
        outInfo = '',
        dataItem = '',
        count = 0,
        slideCurrentCount = 0,
        blocInfo = '',
        infoCount = '',
        popup = '',
        slider = '';
    dataItem = document.querySelectorAll('.entry__item');
    dataItem.forEach(function (element) {
      outInfo = '';
      slides = getJson(element);

      if (slides.length > 0) {
        slides.forEach(function (element, index) {
          if (index < 3) {
            outInfo += "<div class=\"entry__bloc\"><img src= \"".concat(element, "\" /><canvas class=\"entry__canvas\"></div>");
            slideCurrentCount = index;
          }
        });
        element.querySelector('.entry__wrapper').innerHTML = outInfo;

        if (slides.length >= 3) {
          element.querySelector('.entry__wrapper').classList.add('entry__wrapper--direction');
        }

        if (slides.length > 3) {
          count = slides.length - (slideCurrentCount + 1);
          blocInfo = element.querySelectorAll('.entry__bloc');
          blocInfo = blocInfo[blocInfo.length - 1];
          blocInfo.classList.add('entry__bloc--special');
          infoCount = document.createElement('span');
          infoCount.textContent = "+ ".concat(count, " ").concat(declOfNum(count, ['????????????????????', '????????????????????', '????????????????????']), " ");
          blocInfo.appendChild(infoCount);
        }

        createCanvasImg($(element).find('canvas'), element);
        var blocItem = element.querySelectorAll('.entry__bloc');
        blocItem.forEach(function (bloc, _) {
          bloc.addEventListener('click', function () {
            slider = new SliderGallery($(element).find('.js-slider'), getJson(element), $(element).find('.swiper-wrapper')[0]);
            slider.createSlider;
            popup = $(element).find('.js-entry-popup');
            showOverlay(true, popup);
          });
        });

        if ($(element).find('.js-overlay').exists()) {
          $(element).find('.js-overlay').on('click', function (e) {
            if (e.target.className.indexOf('js-overlay') != -1) {
              slider.dstroySlider;
              popup = $(element).find('.js-entry-popup');
              showOverlay(false, popup);
            }
          });
        }

        if ($(element).find('.js-close-form').exists()) {
          $(element).find('.js-close-form').on('click', function () {
            showOverlay(false, popup);
          });
        }

        $(window).on('resize load', function () {
          if ($(this).width() <= 882) {
            if ($(element).find('.js-out-date').exists()) {
              projectFunc.objAd($(element).find('.js-out-date'), $(element).find('.js-in-date'));
            }
          } else {
            if ($(element).find('.js-out-date').exists()) {
              projectFunc.objAd($(element).find('.js-out-date'), $(element).find('.popup__header'));
            }
          }
        });
      }

      if ($(element).find('.js-scroll').exists()) {
        Scrollbar.init($(element).find('.js-scroll')[0], {
          damping: 0.05,
          alwaysShowTracks: true
        });
      }
    });
  } // if ($('.js-scroll').exists()) {
  //     Scrollbar.init(document.querySelector('.js-scroll'), {
  //         damping: 0.05,
  //         alwaysShowTracks: true
  //     });
  // }


  $(window).on('resize load', function () {
    if ($(this).width() <= 1024) {
      if ($('.js-out-cloud').exists()) {
        projectFunc.objAd('.js-out-cloud', '.js-in-cloud');
      }

      if ($('.js-cloud-btn').exists()) {
        $('.js-cloud-btn').on('click', function () {
          $('.cloud__wrp').toggleClass('active');
          this.classList.toggle('is-open');
          var content = this.nextElementSibling;

          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }

      if ($('.js-banner-slider').exists()) {
        projectFunc.objAd($('.js-banner-slider'), $('.js-in-banner '));
      }

      if ($('.js-out-kiosk').exists()) {
        projectFunc.objAd($('.js-out-kiosk'), $('.js-in-kiosk '));
      }
    } else {
      if ($('.js-banner-slider').exists()) {
        //projectFunc.objAd($('.js-banner-slider'), $('.news-city'));
        if ($('.js-banner-slider').exists()) {
          $('.js-banner-slider').each(function (index) {
            var adObj = $(this).clone();
            $('.news-city').after($(adObj));
            $(this).remove();
          });
        }
      }

      if ($('.js-out-kiosk').exists()) {
        //projectFunc.objAd($('.js-banner-slider'), $('.news-city'));
        if ($('.js-out-kiosk').exists()) {
          $('.js-out-kiosk').each(function (index) {
            var adObj = $(this).clone(); // $('.wrapper__right').prependTo($(adObj));

            $(adObj).prependTo($('.wrapper__right'));
            $(this).remove();
          });
        }
      }

      if ($('.js-out-cloud').exists()) {
        projectFunc.objAd('.js-out-cloud', '.wrapper__right');
      }
    }
  });

  var lockedDOM = function lockedDOM(status) {
    if (status) {
      $('html').css('overflow', 'hidden');
    } else {
      $('html').css('overflow', 'auto');
    }
  };

  var stateObject = function stateObject(status, popup) {
    if (status == 'start') {
      formShow(popup, true);
    } else {
      formShow(popup, false);
    }
  };

  var showOverlay = function showOverlay(status, popup) {
    if ($('.js-overlay').exists()) {
      var overlayEl = $(popup).parent('.js-overlay');
      var showOvTl = new TimelineMax({
        reversed: true,
        paused: true,
        defaults: {
          duration: 0.6
        },
        onStart: lockedDOM,
        onStartParams: [status, false],
        onComplete: stateObject,
        onCompleteParams: ['start', popup]
      });
      var hideOvTl = new TimelineMax({
        reversed: true,
        paused: true,
        defaults: {
          duration: 0.3
        },
        onStart: stateObject,
        onStartParams: ['end', popup],
        onComplete: lockedDOM,
        onCompleteParams: [status, true]
      });
      showOvTl.to(overlayEl, {
        autoAlpha: 1,
        ease: "power2.out"
      });
      hideOvTl.to(overlayEl, {
        autoAlpha: 0,
        ease: "power2.out"
      }, '+=0.6');

      if (status) {
        showOvTl.reverse();
        showOvTl.play();
      } else {
        hideOvTl.reverse();
        hideOvTl.play();
      }
    }
  };

  var formShow = function formShow(element, status) {
    if ($(element).exists()) {
      var formShowTl = new TimelineMax({
        reversed: true,
        paused: true,
        defaults: {
          duration: 0.4
        }
      });
      var formHideTl = new TimelineMax({
        reversed: true,
        paused: true,
        defaults: {
          duration: 0.4
        }
      });
      formHideTl.to(element, {
        yPercent: -110,
        autoAlpha: 0
      });
      formShowTl.set(element, {
        yPercent: -100
      }).to(element, {
        yPercent: 0,
        autoAlpha: 1,
        ease: "power2.out"
      });

      if (status) {
        formHideTl.reverse();
        formShowTl.play();
      } else {
        formShowTl.reverse();
        formHideTl.play();
      }
    }
  };

  var SliderGallery =
  /*#__PURE__*/
  function () {
    function SliderGallery(name, slides, place) {
      _classCallCheck(this, SliderGallery);

      this.name = name;
      this.slides = slides;
      this.place = place;
      this.slider = '';
    }

    _createClass(SliderGallery, [{
      key: "createSlider",
      get: function get() {
        var slidesList = this.slides;
        var slide = '',
            canvas = '',
            pagination = '';

        if (slidesList.length > 0) {
          var pagEl = $(this.name).find('.pagination');
          var arrowNext = $(this.name).find('.arrow__link--next');
          var arrowPrev = $(this.name).find('.arrow__link--prev');
          slidesList.forEach(function (element, index) {
            slide += "<div class=\"swiper-slide\"><img src=\"".concat(element, "\" alt=\"\" /><canvas></canvas></div>");
          });
          this.place.innerHTML = slide;
          var $slides = $(this.place).find('.swiper-slide');
          $slides.each(function (index, element) {
            canvas = $(element).find('canvas');
            createCanvasImg(canvas, element);
          });
          this.slider = new Swiper(this.name, {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
              nextEl: arrowNext,
              prevEl: arrowPrev
            },
            pagination: {
              el: pagEl,
              type: "custom",
              renderCustom: function renderCustom(swiper, current, total) {
                var i = current ? current : 0;
                return "<span>".concat(declOfNum(i, ['????????????????????', '????????????????????', '????????????????????']), "</span> ").concat(("" + i).slice(-2), " \u0438\u0437 ").concat(("" + total).slice(-2));
              }
            }
          });
        }
      }
    }, {
      key: "dstroySlider",
      get: function get() {
        var _this = this;

        this.slider.destroy(true, true);
        setTimeout(function () {
          _this.place.innerHTML = '';
        }, 500);
      }
    }]);

    return SliderGallery;
  }();

  if ($('.include__unit').exists()) {
    (function () {
      var unitEl = document.querySelectorAll('.include__unit');
      var decorEl = document.querySelectorAll('.include__decor');
      var wrapper = document.querySelector('.include__layer');
      var svgGroup = wrapper.querySelectorAll('svg g');
      var arrowEl = '';
      var rect = '';

      var _loop = function _loop(_i7) {
        unitEl[_i7].addEventListener('mouseenter', function () {
          decorEl[_i7].querySelector('svg').classList.add('mf-bg');

          for (var _j = 0; _j < svgGroup.length; _j++) {
            if (_i7 == svgGroup[_j].dataset.area) {
              rect = svgGroup[_j].querySelectorAll('rect');

              for (var k = 0; k < rect.length; k++) {
                rect[k].classList.add('mf-bg');
              }
            }
          }
        });

        unitEl[_i7].addEventListener('mouseleave', function () {
          decorEl[_i7].querySelector('svg').classList.remove('mf-bg');

          for (var _j2 = 0; _j2 < svgGroup.length; _j2++) {
            if (_i7 == svgGroup[_j2].dataset.area) {
              rect = svgGroup[_j2].querySelectorAll('rect');

              for (var k = 0; k < rect.length; k++) {
                rect[k].classList.remove('mf-bg');
              }
            }
          }
        });
      };

      for (var _i7 = 0; _i7 < unitEl.length; _i7++) {
        _loop(_i7);
      }

      var _loop2 = function _loop2(_i8) {
        svgGroup[_i8].addEventListener('mouseenter', function () {
          arrowEl = decorEl[svgGroup[_i8].dataset.area].querySelectorAll('svg');

          for (var k = 0; k < arrowEl.length; k++) {
            arrowEl[k].classList.add('mf-bg');
          }

          rect = svgGroup[_i8].querySelectorAll('rect');

          for (var _j3 = 0; _j3 < rect.length; _j3++) {
            rect[_j3].classList.add('mf-bg');
          }
        });

        svgGroup[_i8].addEventListener('mouseleave', function () {
          decorEl[_i8].querySelector('svg').classList.remove('mf-bg');

          arrowEl = decorEl[svgGroup[_i8].dataset.area].querySelectorAll('svg');

          for (var k = 0; k < arrowEl.length; k++) {
            arrowEl[k].classList.remove('mf-bg');
          }

          rect = svgGroup[_i8].querySelectorAll('rect');

          for (var _j4 = 0; _j4 < rect.length; _j4++) {
            rect[_j4].classList.remove('mf-bg');
          }
        });
      };

      for (var _i8 = 0; _i8 < svgGroup.length; _i8++) {
        _loop2(_i8);
      }
    })();
  }
});