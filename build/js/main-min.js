"use strict";jQuery.fn.exists=function(){return $(this).length},$(function(){var e,t,i="";function r(e,t){var i=$(e).height();$(t).css({height:i+"px"}),console.log($(e).height())}if($(".btn--close").exists)try{$(".btn--close").on("click",function(e){e.preventDefault(),$(".header__search--laptop input").val("")})}catch(e){console.log(e)}if($(".burger--laptop").exists)try{$(".burger--laptop").on("click",function(){$(this).toggleClass("burger--active"),$(".header__menu").toggleClass("header__menu--active")})}catch(e){console.log(e)}if($(".edition-rewards").length>0)try{$("head").append('<link rel="stylesheet" type="text/css" href="css/lightgallery.min.css">')}catch(e){console.log(e)}if($(".news-detail").length>0)try{$("head").append('<link rel="stylesheet" type="text/css" href="css/lightgallery.min.css">')}catch(e){console.log(e)}if($("#video-gallery").length>0)try{$("head").append('<link rel="stylesheet" type="text/css" href="css/lg-video.css">')}catch(e){console.log(e)}if(e=".article__box",t=".article__cover",$(e).exists()&&$(e).each(function(){!$(this).find(t).length>0&&$(this).addClass("article__box--full")}),lightGallery(document.getElementById("video-gallery"),{thumbnail:!1,background:"A90707",selector:".video-gallery__item"}),$(".filter__item").exists())try{$(".filter__box").mCustomScrollbar({theme:"dark",mouseWheelPixels:90}),$(".filter__bloc").on("click",function(){$(".filter__item").toggleClass("filter__item--active")}),$(".filter__block").each(function(){$(this).on("click",function(){var e=$(this).find("label").text();$(".filter__txt").text(e),$(this).closest(".filter__item").removeClass("filter__item--active")})}),$(document).on("click",function(e){var t=e.target;$(t).hasClass(".filter__item")||$(this).closest(".filter__item").removeClass("filter__item--active")}),jQuery(function(e){e(document).mouseup(function(t){var i=e(".filter__item");i.is(t.target)||0!==i.has(t.target).length||i.removeClass("filter__item--active")})})}catch(e){console.log(e)}if($(".journal__items").exists)try{var a,s=window.matchMedia("(min-width:501px)"),l=function(){if(!0===s.matches)return $(".journal__inner").exists()&&(r(".journal__inner",".journal__cover"),$(window).on("resize load",function(){r(".journal__inner",".journal__cover")})),void $(".journal__items").each(function(){a=new Swiper("."+$(this).data("id"),{slidesPerView:4,spaceBetween:18,stopOnLastSlide:!1,disableOnInteraction:!0,touchRatio:0,breakpoints:{500:{spaceBetween:15,slidesPerView:3},600:{spaceBetween:15,slidesPerView:3},601:{spaceBetween:15,slidesPerView:4},769:{spaceBetween:15,slidesPerView:5},1024:{spaceBetween:15,slidesPerView:5},1025:{slidesPerView:4,spaceBetween:18}},navigation:{nextEl:".journal__arrow.journal__arrow--next",prevEl:".journal__arrow.journal__arrow--prev"}})});!1!==s.matches||void 0!==a&&a.destroy(!0,!0)};s.addListener(l),l()}catch(e){console.log(e)}function c(e,t){if(e.length>0)for(var i=document.querySelectorAll(e),r=0;r<i.length;r++)n(i[r],t)}function n(e,t){var i=e.textContent,r=i.slice(0,t);r.length<i.length&&(r+="..."),e.textContent=r}if(function(e,t,i,r){$(e).exists()&&$(e).each(function(){var e=0;$(this).find(t).each(function(t){!$(this).find(r).length>0&&e++}),1==e&&$(this).find(t).each(function(e){$(this).find(r).exists()&&(0==e?$(this).closest(i).addClass("news-popular__bloc--other"):$(this).closest(i).addClass("news-popular__bloc--reverse"))})})}(".news-popular__items",".news-popular__item",".news-popular__bloc",".news-popular__pic"),$(document).on("click",function(e){if($(".archive-filter__item").exists)try{var t=$(e.target).closest(".archive-filter__bloc"),i=$(e.target).closest(".mCSB_dragger"),r="";t.length||(r=$(".archive-filter__item--active"),$(".archive-filter__item--active").removeClass("archive-filter__item--active")),i.length&&r.addClass("archive-filter__item--active")}catch(e){console.log(e)}}),c(".news-popular__text",150),c(".news-basic__text",179),c(".news-set__text",150),c(".news-actual__txt",115),c(".news-most__txt",158),c(".news-most__text",46),c(".news-photo__info",115),c(".author-articles__txt",72),c(".search__text",72),$(".archive-filter__panel").exists())try{for(var o=document.getElementsByClassName("archive-filter__panel"),h=0;h<o.length;h++)o[h].onclick=function(e){var t=e.target;if(!$(t).attr("href")){this.classList.toggle("archive-filter__panel--active"),$(this).parent().toggleClass("archive-filter__wrp--active");var i=this.nextElementSibling;i.style.maxHeight?i.style.maxHeight=null:i.style.maxHeight=i.scrollHeight+"px"}}}catch(e){console.log(e)}function _(){if($(".archive-filter__item").exists)try{var e=$(".archive-filter__item--month").find(".archive-filter__block"),t="";$(e).each(function(){$(this).children("input").prop("checked")&&(-1!=(t=$(this).children("label").text()).indexOf("Декабрь")||-1!=t.indexOf("Январь")||-1!=t.indexOf("Март")||-1!=t.indexOf("Май")||-1!=t.indexOf("Июль")||-1!=t.indexOf("Август")||-1!=t.indexOf("Октябрь")?(d(".archive-filter__item--day",31),$(".archive-filter__item--day").find(".archive-filter__txt").text("31")):-1!=t.indexOf("Сентябрь")||-1!=t.indexOf("Июнь")||-1!=t.indexOf("Ноябрь")||-1!=t.indexOf("Апрель")?(d(".archive-filter__item--day",30),$(".archive-filter__item--day").find(".archive-filter__txt").text("30")):(d(".archive-filter__item--day",28),$(".archive-filter__item--day").find(".archive-filter__txt").text("28")))})}catch(e){console.log(e)}}function d(e,t){if($(".archive-filter__item").exists)try{if(".archive-filter__item--year"==e){console.log(e);var r=document.querySelector(".archive-filter__item--year");i=r.querySelector(".archive-filter__list");for(var a=f.currentYear;a>=t;a--){var s=document.createElement("div"),l=document.createElement("input"),c=document.createElement("label");s.classList.add("archive-filter__block"),a==f.currentYear&&(l.setAttribute("checked","checked"),l.setAttribute("currentyear",f.currentYear)),l.setAttribute("id","y-".concat(a)),l.setAttribute("type","radio"),l.setAttribute("name",f.year),l.setAttribute("value","".concat(a)),c.setAttribute("for","y-".concat(a)),c.textContent=a,s.appendChild(l),s.appendChild(c),i.appendChild(s)}}else{var n=document.querySelector(".archive-filter__item--day");i=n.querySelector(".archive-filter__list");for(var o=t;o>0;o--){var h=document.createElement("div"),_=document.createElement("input"),d=document.createElement("label");h.classList.add("archive-filter__block"),o==f.currentDay&&(_.setAttribute("checked","checked"),_.setAttribute("currentday",f.currentDay)),_.setAttribute("id","d-".concat(o)),_.setAttribute("type","radio"),_.setAttribute("name",f.day),_.setAttribute("value","".concat(o)),d.setAttribute("for","d-".concat(o)),d.textContent=o,h.appendChild(_),h.appendChild(d),i.appendChild(h)}}}catch(e){console.log(e)}}if($(".archive-filter__item").exists())try{if($(".archive-filter__items").length>0){document.querySelector(".archive-filter__items");var f=$(".archive-filter__items").data("filter");_(),d(".archive-filter__item--year",f.min)}$(".archive-filter__item").each(function(){var e,t,i="",r="";i=$(this).find(".archive-filter__box"),$(i).mCustomScrollbar({theme:"dark",mouseWheelPixels:90}),i=$(this).find(".archive-filter__bloc"),e=$(this).find(".archive-filter__txt"),t=$(this).find(".archive-filter__list").find("input"),$(t).each(function(){$(this).prop("checked")&&$(e).text($(this).next().text())}),$(i).on("click",function(){$(this).toggleClass("archive-filter__item--active").siblings().removeClass("archive-filter__item--active"),$(this).hasClass("archive-filter__item--active")&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(e).text($(this).text()),$(".archive-filter__item").removeClass("archive-filter__item--active")})})),$(this).hasClass("archive-filter__item--active")&&$(this).hasClass("archive-filter__item--year")&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(e).text($(this).text()),$(".archive-filter__item--day").find(".archive-filter__block").remove(),$(this).find("input").attr("currentYear",f.currentYear).closest(".archive-filter__block").siblings().find("input").removeAttr("currentyear"),_()})})),$(this).hasClass("archive-filter__item--active")&&$(this).hasClass("archive-filter__item--day")&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(this).find("input").attr("currentDay",f.currentDay).closest(".archive-filter__block").siblings().find("input").removeAttr("currentday")})})),$(this).hasClass("archive-filter__item--active")&&$(this).hasClass("archive-filter__item--month")&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(e).text($(this).text()),$(".archive-filter__item--day").find(".archive-filter__block").remove(),_()})}))}.bind(this))})}catch(e){console.log(e)}if($(".header__search--laptop").exists)try{$(".header__search--laptop").on("click",function(e){e.preventDefault(),$(".header__search--laptop").hasClass("header__search--active")?""!=$(".header__search--laptop input").val()?$(".header__search").submit():$(".header__search--laptop").toggleClass("header__search--active"):($(".header__search--laptop").toggleClass("header__search--active"),setTimeout(function(){$(".header__search--laptop input").focus()},500))})}catch(e){console.log(e)}if($(".header__inner").exists)try{var u=$(window),m=$(".header__inner"),v=m.offset().top;u.on("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>v?m.addClass("mf-fixed"):m.removeClass("mf-fixed")})}catch(e){console.log(e)}if($(".header__func").exists)try{$(".header__func").on("click",function(){$(".header__func").toggleClass("header__func--active"),$(".header__section").toggleClass("header__section--active")})}catch(e){console.log(e)}if($(".author-articles__grid--slider").exists)try{var p,g=window.matchMedia("(min-width:600px)"),y=function(){if(!0!==g.matches)return!1===g.matches?w():void 0;void 0!==p&&p.destroy(!0,!0)},w=function(){p=new Swiper(".author-articles__grid--slider",{slidesPerView:"auto",spaceBetween:16,loop:!0,autoplay:!0,delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0})};g.addListener(y),y()}catch(e){console.log(e)}function x(){if($(".news-detail__item").exists)try{var e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),r=b[B].parentNode;$(e).attr("class","gallery__top"),$(e).addClass("gallery__main"+B),$(t).attr("class","gallery"),$(i).attr("class","swiper-wrapper"),i.innerHTML+=C,$(e).append(i),$(t).append(e);var a=document.createElement("div");$(a).attr("class","gallery__thumbs"),$(a).addClass("gallery__btn"+B);for(var s=0;s<2;s++)if(1==s){var l=document.createElement("div");$(l).attr("class","b-arrow b-arrow--prev"),$(a).append(l)}else{l=document.createElement("div");$(l).attr("class","b-arrow b-arrow--next"),$(a).append(l)}r.insertBefore(t,b[B]),t.appendChild(a),$(e).find(i).clone().appendTo(a)}catch(e){console.log(e)}}for(var b=document.querySelectorAll(".news-detail__item > *"),k=0,C="",E=[],S=0,A=0;A<b.length;A++)$(b[A]).is("img")?($(b[A]).attr("class",k),E.push(k)):k++;for(var B=0;B<b.length;B++)b[B].classList.contains(S)?(C+=b[B].outerHTML,$(b[B]).hide(),b[B]==b[b.length-1]&&C&&x()):(C&&x(),C="",S++);function P(e){for(var t=document.querySelectorAll("."+e),i=[],r=0;r<t.length;r++)i.push(t[r]);i.forEach(function(t,i){for(var r=t.querySelectorAll("img"),a=[],s=0;s<r.length;s++)a.push(r[s]);a.forEach(function(t,i){var r=document.createElement("a");r.innerHTML=t.outerHTML,"gallery__thumbs"!=e&&r.setAttribute("href",t.getAttribute("src")),r.classList.add("gallery-item"),r.classList.add("swiper-slide"),t.parentNode.replaceChild(r,t)}),t.setAttribute("id","slide"+i),lightGallery(document.querySelector("#"+t.id),{selector:".gallery-item"})})}P("gallery__top"),P("gallery__thumbs");$(".gallery__thumbs").find(".swiper-slide");$(document).ready(function(){for(var e=0;e<b.length;e++){var t=new Swiper(".gallery__btn"+e,{spaceBetween:17,slidesPerView:5,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,breakpoints:{320:{spaceBetween:8,slidesPerView:3},501:{spaceBetween:8,slidesPerView:4},769:{spaceBetween:17,slidesPerView:6},1024:{spaceBetween:17,slidesPerView:6},1025:{spaceBetween:17,slidesPerView:5}}});new Swiper(".gallery__main"+e,{spaceBetween:10,thumbs:{swiper:t},navigation:{nextEl:".b-arrow--next",prevEl:".b-arrow--prev"}})}});for(var V=0;V<b.length;V++)$(".gallery__btn"+V).each(function(){var e=$(this).find(".swiper-slide");e.length>1&&$(".gallery__btn"+V).fadeIn(),e.length>5&&$(this).find(".b-arrow").css("display","block")});if(lightGallery(document.getElementById("lightgallery")),$("#input-search").exists)try{$("#input-search").on("keyup",function(){$(this).val()?($(".mf-search").addClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#27202C"})):($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))}),$("#input-search").focusout(function(){$(this).val()||($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))})}catch(e){console.log(e)}if($(".news-slider__gallery").exists&&$(".news-slider__thumbs").exists)try{var O=new Swiper(".news-slider__gallery",{spaceBetween:10,slidesPerView:1,watchSlidesVisibility:!0,effect:"fade"}),L=new Swiper(".news-slider__thumbs",{spaceBetween:10,autoHeight:!0,effect:"fade",touchRatio:0,navigation:{nextEl:".news-slider__arrow--next",prevEl:".news-slider__arrow--prev"},fadeEffect:{crossFade:!0}});L.controller.control=O,O.controller.control=L}catch(e){console.log(e)}var j=document.getElementById("theme-button"),I=document.getElementById("theme-link"),q="";j.addEventListener("click",function(){var e=function(){var e=q,t=I.getAttribute("href");t==e?(t="css/dark.css","dark"):(t=e,"light");return I.setAttribute("href",t),t}();sessionStorage.setItem("theme",e)}),null!==sessionStorage.getItem("theme")?($("#theme-link").attr("href",sessionStorage.getItem("theme")),sessionStorage.getItem("theme")==q?$(".header .checkbox input").prop("checked",!0):$(".header .checkbox input").prop("checked",!1)):($("#theme-link").attr("href",q),$(".header .checkbox input").prop("checked",!0))});