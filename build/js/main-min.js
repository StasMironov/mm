"use strict";jQuery.fn.exists=function(){return $(this).length},$(function(){var e=(new Date).getFullYear(),t="";function i(i,r){if(console.log(1),".archive-filter__item--year"==i){t=$(i).find(".archive-filter__list");for(var a=e;a>=1935;a--){var s=document.createElement("div"),l=document.createElement("input"),n=document.createElement("label");s.classList.add("archive-filter__block"),l.setAttribute("id","y-".concat(a)),l.setAttribute("type","radio"),l.setAttribute("name","check[]"),l.setAttribute("value","".concat(a)),n.setAttribute("for","y-".concat(a)),n.textContent=a,s.append(l),s.append(n),t.append(s)}}else{t=$(i).find(".archive-filter__list");for(var c=r;c>0;c--){var o=document.createElement("div"),d=document.createElement("input"),h=document.createElement("label");o.classList.add("archive-filter__block"),d.setAttribute("id","d-".concat(c)),d.setAttribute("type","radio"),d.setAttribute("name","check[]"),d.setAttribute("value","".concat(c)),h.setAttribute("for","d-".concat(c)),h.textContent=c,o.append(d),o.append(h),t.append(o)}}}if(i(".archive-filter__item--year",1935),$(".archive-filter__item").exists()&&$(".archive-filter__item").each(function(){var e,t="",r="";t=$(this).find(".archive-filter__box"),$(t).mCustomScrollbar({theme:"dark",mouseWheelPixels:90}),t=$(this).find(".archive-filter__bloc"),e=$(this).find(".archive-filter__txt"),$(t).on("click",function(){$(this).toggleClass("archive-filter__item--active").siblings().removeClass("archive-filter__item--active"),($(this).hasClass("archive-filter__item--active")||$(this).hasClass("archive-filter__item--month"))&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(".archive-filter__item--day").find(".archive-filter__block").remove(),-1!=$(this).text().indexOf("Декабрь")||-1!=$(this).text().indexOf("Январь")||-1!=$(this).text().indexOf("Март")||-1!=$(this).text().indexOf("Май")||-1!=$(this).text().indexOf("Июль")||-1!=$(this).text().indexOf("Август")||-1!=$(this).text().indexOf("Октябрь")?i(".archive-filter__item--day",31):-1!=$(this).text().indexOf("Сентябрь")||-1!=$(this).text().indexOf("Июнь")||-1!=$(this).text().indexOf("Ноябрь")||-1!=$(this).text().indexOf("Апрель")?i(".archive-filter__item--day",30):i(".archive-filter__item--day",28)})})),$(this).hasClass("archive-filter__item--active")&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(e).text($(this).text())})}))}.bind(this))}),$(".news-popular__text").exists())for(var r=document.querySelectorAll(".news-popular__text"),a=0;a<r.length;a++)$clamp(r[a],{clamp:4,useNativeClamp:!1});if($(".header__search--laptop").exists)try{$(".header__btn").on("click",function(e){e.preventDefault(),$(".header__search--laptop").toggleClass("header__search--laptop--active")})}catch(e){console.log(e)}var s=$(window),l=$(".header__inner"),n=l.offset().top;if(s.on("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>n?l.addClass("mf-fixed"):l.removeClass("mf-fixed")}),$(".header__func").exists)try{$(".header__func").on("click",function(){$(".header__func").toggleClass("header__func--active"),$(".header__section").toggleClass("header__section--active")})}catch(e){console.log(e)}if($(".author-articles__grid--slider").exists){var c,o=window.matchMedia("(min-width:600px)"),d=function(){if(!0!==o.matches)return!1===o.matches?h():void 0;void 0!==c&&c.destroy(!0,!0)},h=function(){c=new Swiper(".author-articles__grid--slider",{slidesPerView:"auto",spaceBetween:16,loop:!0,autoplay:!0,delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0})};o.addListener(d),d()}function f(){var e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),r=_[w].parentNode;$(e).attr("class","gallery__top"),$(e).addClass("gallery__main"+w),$(t).attr("class","gallery"),$(i).attr("class","swiper-wrapper"),i.innerHTML+=m,$(e).append(i),$(t).append(e);var a=document.createElement("div");$(a).attr("class","gallery__thumbs"),$(a).addClass("gallery__btn"+w);for(var s=0;s<2;s++)if(1==s){var l=document.createElement("div");$(l).attr("class","b-arrow b-arrow--prev"),$(a).append(l)}else{l=document.createElement("div");$(l).attr("class","b-arrow b-arrow--next"),$(a).append(l)}r.insertBefore(t,_[w]),t.append(a),$(e).find(i).clone().appendTo(a)}var _=document.querySelectorAll(".news-detail__item > *"),u=0,m="",p=[],v=0;console.log(_);for(var g=0;g<_.length;g++)$(_[g]).is("img")?($(_[g]).attr("class",u),p.push(u)):u++;for(var w=0;w<_.length;w++)_[w].classList.contains(v)?(m+=_[w].outerHTML,$(_[w]).hide(),_[w]==_[_.length-1]&&m&&f()):(m&&f(),m="",v++);function b(e){for(var t=document.querySelectorAll("."+e),i=[],r=0;r<t.length;r++)i.push(t[r]);i.forEach(function(t,i){for(var r=t.querySelectorAll("img"),a=[],s=0;s<r.length;s++)a.push(r[s]);a.forEach(function(t,i){var r=document.createElement("a");r.innerHTML=t.outerHTML,"gallery__thumbs"!=e&&r.setAttribute("href",t.getAttribute("src")),r.classList.add("gallery-item"),r.classList.add("swiper-slide"),t.parentNode.replaceChild(r,t)}),t.setAttribute("id","slide"+i),lightGallery(document.querySelector("#"+t.id),{selector:".gallery-item"})})}b("gallery__top"),b("gallery__thumbs");$(".gallery__thumbs").find(".swiper-slide");$(document).ready(function(){for(var e=0;e<_.length;e++){var t=new Swiper(".gallery__btn"+e,{spaceBetween:17,slidesPerView:5,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,breakpoints:{320:{spaceBetween:8,slidesPerView:3},501:{spaceBetween:8,slidesPerView:4},769:{spaceBetween:17,slidesPerView:5},1024:{spaceBetween:17,slidesPerView:5}}});new Swiper(".gallery__main"+e,{spaceBetween:10,thumbs:{swiper:t},navigation:{nextEl:".b-arrow--next",prevEl:".b-arrow--prev"}})}});for(var y=0;y<_.length;y++)$(".gallery__btn"+y).each(function(){var e=$(this).find(".swiper-slide");e.length>1&&$(".gallery__btn"+y).fadeIn(),e.length>5&&$(this).find(".b-arrow").css("display","block")});lightGallery(document.getElementById("lightgallery")),$("#input-search").on("keyup",function(){$(this).val()?($(".mf-search").addClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#27202C"})):($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))}),$("#input-search").focusout(function(){$(this).val()||($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))});var x=new Swiper(".news-slider__gallery",{spaceBetween:10,slidesPerView:1,watchSlidesVisibility:!0,effect:"fade"}),E=new Swiper(".news-slider__thumbs",{spaceBetween:10,autoHeight:!0,effect:"fade",touchRatio:0,navigation:{nextEl:".news-slider__arrow--next",prevEl:".news-slider__arrow--prev"},fadeEffect:{crossFade:!0}});E.controller.control=x,x.controller.control=E});