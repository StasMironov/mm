"use strict";jQuery.fn.exists=function(){return $(this).length},$(function(){var e=(new Date).getFullYear(),t="";document.querySelector(".archive-filter__items");$(document).on("click",function(e){e.target.classList.contains(".archive-filter__item")||console.log(e.target)});var i=function(e,t){if($(e).exists())for(var i=document.querySelectorAll(e),r=0;r<i.length;r++)$clamp(i[r],{clamp:t,useNativeClamp:!1})};if(i(".news-popular__text",4),i(".archive-news__text",4),i(".author-articles__txt",2),$(".archive-filter__panel").exists())for(var r=document.getElementsByClassName("archive-filter__panel"),a=0;a<r.length;a++)r[a].onclick=function(e){var t=e.target;if(!$(t).attr("href")){this.classList.toggle("archive-filter__panel--active"),$(this).parent().toggleClass("archive-filter__wrp--active");var i=this.nextElementSibling;i.style.maxHeight?i.style.maxHeight=null:i.style.maxHeight=i.scrollHeight+"px"}};function l(){var e=$(".archive-filter__item--month").find(".archive-filter__block"),t="";$(e).each(function(){$(this).children("input").prop("checked")&&(-1!=(t=$(this).children("input").val()).indexOf("Декабрь")||-1!=t.indexOf("Январь")||-1!=t.indexOf("Март")||-1!=t.indexOf("Май")||-1!=t.indexOf("Июль")||-1!=t.indexOf("Август")||-1!=t.indexOf("Октябрь")?n(".archive-filter__item--day",31):-1!=t.indexOf("Сентябрь")||-1!=t.indexOf("Июнь")||-1!=t.indexOf("Ноябрь")||-1!=t.indexOf("Апрель")?n(".archive-filter__item--day",30):n(".archive-filter__item--day",28))})}function n(i,r){if(".archive-filter__item--year"==i){t=$(i).find(".archive-filter__list");for(var a=e;a>=1935;a--){var l=document.createElement("div"),n=document.createElement("input"),s=document.createElement("label");l.classList.add("archive-filter__block"),a==e&&n.setAttribute("checked","checked"),n.setAttribute("id","y-".concat(a)),n.setAttribute("type","radio"),n.setAttribute("name","check[]"),n.setAttribute("value","".concat(a)),s.setAttribute("for","y-".concat(a)),s.textContent=a,l.append(n),l.append(s),t.append(l)}}else{t=$(i).find(".archive-filter__list");for(var c=r;c>0;c--){var o=document.createElement("div"),d=document.createElement("input"),h=document.createElement("label");o.classList.add("archive-filter__block"),c==r&&d.setAttribute("checked","checked"),d.setAttribute("id","d-".concat(c)),d.setAttribute("type","radio"),d.setAttribute("name","check3[]"),d.setAttribute("value","".concat(c)),h.setAttribute("for","d-".concat(c)),h.textContent=c,o.append(d),o.append(h),t.append(o)}}}if(l(),n(".archive-filter__item--year",1935),$(".archive-filter__item").exists()&&$(".archive-filter__item").each(function(){var e,t,i="",r="";i=$(this).find(".archive-filter__box"),$(i).mCustomScrollbar({theme:"dark",mouseWheelPixels:90}),i=$(this).find(".archive-filter__bloc"),e=$(this).find(".archive-filter__txt"),t=$(this).find(".archive-filter__list").find("input"),$(t).each(function(){$(this).prop("checked")&&$(e).text($(this).val())}),$(i).on("click",function(){$(this).toggleClass("archive-filter__item--active").siblings().removeClass("archive-filter__item--active"),$(this).hasClass("archive-filter__item--active")&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(e).text($(this).text())})})),$(this).hasClass("archive-filter__item--active")&&$(this).hasClass("archive-filter__item--month")&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(e).text($(this).text()),$(".archive-filter__item--day").find(".archive-filter__block").remove(),l()})}))}.bind(this))}),$(".header__search--laptop").exists)try{$(".header__btn").on("click",function(e){e.preventDefault(),$(".header__search--laptop").toggleClass("header__search--laptop--active")})}catch(e){console.log(e)}var s=$(window),c=$(".header__inner"),o=c.offset().top;if(s.on("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>o?c.addClass("mf-fixed"):c.removeClass("mf-fixed")}),$(".header__func").exists)try{$(".header__func").on("click",function(){$(".header__func").toggleClass("header__func--active"),$(".header__section").toggleClass("header__section--active")})}catch(e){console.log(e)}if($(".author-articles__grid--slider").exists){var d,h=window.matchMedia("(min-width:600px)"),f=function(){if(!0!==h.matches)return!1===h.matches?_():void 0;void 0!==d&&d.destroy(!0,!0)},_=function(){d=new Swiper(".author-articles__grid--slider",{slidesPerView:"auto",spaceBetween:16,loop:!0,autoplay:!0,delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0})};h.addListener(f),f()}function u(){var e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),r=v[y].parentNode;$(e).attr("class","gallery__top"),$(e).addClass("gallery__main"+y),$(t).attr("class","gallery"),$(i).attr("class","swiper-wrapper"),i.innerHTML+=p,$(e).append(i),$(t).append(e);var a=document.createElement("div");$(a).attr("class","gallery__thumbs"),$(a).addClass("gallery__btn"+y);for(var l=0;l<2;l++)if(1==l){var n=document.createElement("div");$(n).attr("class","b-arrow b-arrow--prev"),$(a).append(n)}else{n=document.createElement("div");$(n).attr("class","b-arrow b-arrow--next"),$(a).append(n)}r.insertBefore(t,v[y]),t.append(a),$(e).find(i).clone().appendTo(a)}for(var v=document.querySelectorAll(".news-detail__item > *"),m=0,p="",g=[],w=0,b=0;b<v.length;b++)$(v[b]).is("img")?($(v[b]).attr("class",m),g.push(m)):m++;for(var y=0;y<v.length;y++)v[y].classList.contains(w)?(p+=v[y].outerHTML,$(v[y]).hide(),v[y]==v[v.length-1]&&p&&u()):(p&&u(),p="",w++);function x(e){for(var t=document.querySelectorAll("."+e),i=[],r=0;r<t.length;r++)i.push(t[r]);i.forEach(function(t,i){for(var r=t.querySelectorAll("img"),a=[],l=0;l<r.length;l++)a.push(r[l]);a.forEach(function(t,i){var r=document.createElement("a");r.innerHTML=t.outerHTML,"gallery__thumbs"!=e&&r.setAttribute("href",t.getAttribute("src")),r.classList.add("gallery-item"),r.classList.add("swiper-slide"),t.parentNode.replaceChild(r,t)}),t.setAttribute("id","slide"+i),lightGallery(document.querySelector("#"+t.id),{selector:".gallery-item"})})}x("gallery__top"),x("gallery__thumbs");$(".gallery__thumbs").find(".swiper-slide");$(document).ready(function(){for(var e=0;e<v.length;e++){var t=new Swiper(".gallery__btn"+e,{spaceBetween:17,slidesPerView:5,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,breakpoints:{320:{spaceBetween:8,slidesPerView:3},501:{spaceBetween:8,slidesPerView:4},769:{spaceBetween:17,slidesPerView:5},1024:{spaceBetween:17,slidesPerView:5}}});new Swiper(".gallery__main"+e,{spaceBetween:10,thumbs:{swiper:t},navigation:{nextEl:".b-arrow--next",prevEl:".b-arrow--prev"}})}});for(var k=0;k<v.length;k++)$(".gallery__btn"+k).each(function(){var e=$(this).find(".swiper-slide");e.length>1&&$(".gallery__btn"+k).fadeIn(),e.length>5&&$(this).find(".b-arrow").css("display","block")});lightGallery(document.getElementById("lightgallery")),$("#input-search").on("keyup",function(){$(this).val()?($(".mf-search").addClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#27202C"})):($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))}),$("#input-search").focusout(function(){$(this).val()||($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))});var E=new Swiper(".news-slider__gallery",{spaceBetween:10,slidesPerView:1,watchSlidesVisibility:!0,effect:"fade"}),C=new Swiper(".news-slider__thumbs",{spaceBetween:10,autoHeight:!0,effect:"fade",touchRatio:0,navigation:{nextEl:".news-slider__arrow--next",prevEl:".news-slider__arrow--prev"},fadeEffect:{crossFade:!0}});C.controller.control=E,E.controller.control=C});