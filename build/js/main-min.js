"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}jQuery.fn.exists=function(){return $(this).length},$("#gallerybanner").exists()&&($("head").append('<link rel="stylesheet" type="text/css" href="css/lightgallery.min.css">'),lightGallery(document.getElementById("gallerybanner"),{selector:".include__link"})),lightGallery(document.getElementById("gallerybanner"),{thumbnail:!1,background:"A90707",selector:".include__link"});var projectFunc={objAd:function(e,t){$(e).exists()&&$(e).each(function(e){var i=$(this).clone();$(t).append($(i)),$(this).remove()})},objReturn:function(e,t){$(e).exists()},getScrollbarWidth:function(){var e,t=projectFunc.getScrollbarWidth.width;return void 0===t&&((e=document.createElement("div")).innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',e=e.firstChild,document.body.appendChild(e),t=projectFunc.getScrollbarWidth.width=e.offsetWidth-e.clientWidth,document.body.removeChild(e)),t}};if($(".news-archive__slider").exists()){var settings={spaceBetween:51,slidesPerView:4,slidesPerColumn:2,slidesPerColumnFill:"row",slidesPerGroup:4,navigation:{nextEl:".edition-slider__arr--next",prevEl:".edition-slider__arr--prev"},pagination:{el:".news-archive__pag",clickable:!0},breakpoints:{1920:{spaceBetween:51,slidesPerView:4},1301:{spaceBetween:51,slidesPerView:4},1300:{spaceBetween:40,slidesPerView:4},1025:{spaceBetween:40,slidesPerView:4},1024:{spaceBetween:30,slidesPerView:3,slidesPerGroup:3},861:{spaceBetween:30,slidesPerView:3,slidesPerGroup:3},860:{spaceBetween:30,slidesPerView:2,slidesPerGroup:2},769:{spaceBetween:30,slidesPerView:2,slidesPerGroup:2},768:{spaceBetween:20,slidesPerView:2,slidesPerGroup:2},641:{spaceBetween:20,slidesPerView:2,slidesPerGroup:2},640:{spaceBetween:15,slidesPerView:4,slidesPerGroup:4},501:{spaceBetween:20,slidesPerView:4,slidesPerGroup:4},500:{spaceBetween:20,slidesPerView:2,slidesPerGroup:2},320:{spaceBetween:20,slidesPerView:2,slidesPerGroup:2}}},authorSlider=new Swiper(".news-archive__slider",settings);$(window).on("resize load",function(){authorSlider.destroy(),authorSlider=new Swiper(".news-archive__slider",settings)})}if($(".theme-button").exists()){var getCookie=function(e){for(var t=e+"=",i=decodeURIComponent(document.cookie).split(";"),r=0;r<i.length;r++){for(var n=i[r];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return""},alertCookie=function(){alert(document.cookie)},restoreTheme=function(){"dark"==getCookie("theme")?(checkSwitch(),darkTheme()):(checkSwitch(),lightTheme())},darkTheme=function(){document.cookie="theme=dark",mainElement.setAttribute("data-theme","dark")},lightTheme=function(){document.cookie="theme=light",mainElement.setAttribute("data-theme","light")},switchTheme=function(e){e.target.checked?lightTheme():darkTheme()},checkSwitch=function(){var e=getCookie("theme");toggleSwitch.forEach(function(t){t.checked="dark"!=e})},mainElement=document.querySelector("body"),toggleSwitch=document.querySelectorAll(".theme-button");toggleSwitch.forEach(function(e){e.addEventListener("click",switchTheme,!1)})}if($("#btnUp").exists()){var btn=$("#btnUp");$(window).scroll(function(){$(window).scrollTop()>300?btn.addClass("showBtn"):btn.removeClass("showBtn")}),btn.on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"300")})}function articleSlider(){if($(".author-articles__grid--slider").exists)try{var e,t=window.matchMedia("(min-width:600px)"),i=function(){if(!0!==t.matches)return!1===t.matches?r():void 0;void 0!==e&&e.destroy(!0,!0)},r=function(){e=new Swiper(".author-articles__grid--slider",{slidesPerView:"auto",spaceBetween:16,loop:!0,autoplay:!0,delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0})};t.addListener(i),i()}catch(e){console.log(e)}}function setHeaderHeight(e,t){var i=$(e).height();$(t).css({height:i+"px"})}function journalSlider(){if($(".journal__items").exists)try{var e,t=window.matchMedia("(min-width:501px)"),i=function(){if(!0===t.matches)return $(".journal__inner").exists()&&(setHeaderHeight(".journal__inner",".journal__cover"),$(window).on("resize load",function(){setHeaderHeight(".journal__inner",".journal__cover")})),void $(".journal__items").each(function(){e=new Swiper("."+$(this).data("id"),{slidesPerView:4,spaceBetween:18,stopOnLastSlide:!1,disableOnInteraction:!0,touchRatio:0,breakpoints:{500:{spaceBetween:15,slidesPerView:3},600:{spaceBetween:15,slidesPerView:3},601:{spaceBetween:15,slidesPerView:4},769:{spaceBetween:15,slidesPerView:5},1024:{spaceBetween:15,slidesPerView:5},1025:{slidesPerView:4,spaceBetween:18}},navigation:{nextEl:".journal__arrow.journal__arrow--next",prevEl:".journal__arrow.journal__arrow--prev"}})});!1!==t.matches||void 0!==e&&e.destroy(!0,!0)};t.addListener(i),i()}catch(e){console.log(e)}}function createLightGallery(e){-1!==["archiveVideo"].indexOf(e)?lightGallery(document.getElementById(e),{thumbnail:!1,background:"A90707",selector:".news-archive__block"}):-1!==["video-gallery"].indexOf(e)?lightGallery(document.getElementById(e),{thumbnail:!1,background:"A90707",selector:".video-gallery__item"}):lightGallery(document.getElementById(e))}function checkGallery(e){if($("#"+e).length>0)try{var t=document.getElementById(e);window.lgData[t.getAttribute("lg-uid")]?(window.lgData[t.getAttribute("lg-uid")].destroy(!0),createLightGallery(e)):createLightGallery(e)}catch(e){console.log(e)}}if($(".content--ad").exists())try{0===$(".content--ad").children().length?$(".content--ad").addClass("mf-empty"):$(".content--ad").removeClass("mf-empty")}catch(e){console.log(e)}$(window).on("load",function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}),$(window).on("load resize",function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}),$(document).on("click tap",function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}),window.addEventListener("load",function(){document.querySelector("html").style.setProperty("--wScroll",projectFunc.getScrollbarWidth()+"px")}),$(function(){journalSlider(),articleSlider(),createLightGallery("archiveVideo"),createLightGallery("lightgallery"),createLightGallery("video-gallery");var e,t,i="";if($(".archive-filter__item--month-alternative input").exists())try{$(".archive-filter__item--month-alternative input").change(function(){if(this.checked){var e=parseInt($(this).val())-1,t=[31,29,31,30,31,30,31,30,31,30,31,30];parseInt($(".archive-filter__item--day-alternative").find(".archive-filter__txt").text())>t[e]&&($('.archive-filter__item--day-alternative input[checked="checked"]').removeAttr("checked"),$('.archive-filter__item--day-alternative input[value="'+t[e]+'"]').first().attr("checked","checked"),$(".archive-filter__item--day-alternative").find(".archive-filter__txt").text(t[e]))}})}catch(e){console.log(e)}if($(".btn--close").exists)try{$(".btn--close").on("click",function(e){e.preventDefault(),$(".header__search--laptop input").val(""),$(".header__search--laptop").removeClass("header__search--active")})}catch(e){console.log(e)}if($(".burger--laptop").exists)try{$(".burger--laptop").on("click",function(){$(this).toggleClass("burger--active"),$(".header__menu").toggleClass("header__menu--active"),$(".burger--laptop").hasClass("burger--active")?$("html").css("overflow","hidden"):$("html").css("overflow","auto")})}catch(e){console.log(e)}if($(".edition-rewards").length>0)try{$("head").append('<link rel="stylesheet" type="text/css" href="css/lightgallery.min.css">')}catch(e){console.log(e)}if($(".news-detail").length>0)try{$("head").append('<link rel="stylesheet" type="text/css" href="css/lightgallery.min.css">')}catch(e){console.log(e)}if($("#video-gallery").length>0)try{$("head").append('<link rel="stylesheet" type="text/css" href="css/lg-video.css">')}catch(e){console.log(e)}if(e=".article__box",t=".article__cover",$(e).exists()&&$(e).each(function(){!$(this).find(t).length>0&&$(this).addClass("article__box--full")}),$(".header__bottom .header__nav").exists){var r=window.Scrollbar;$(window).on("resize load",function(){$(this).width()<=1024?r.init(document.querySelector(".header__bottom .header__nav")):r.destroy(document.querySelector(".header__bottom .header__nav"))})}if($(".filter__item").exists())try{$(".filter__box").mCustomScrollbar({theme:"dark",mouseWheelPixels:90}),$(".filter__bloc").on("click",function(){$(".filter__item").toggleClass("filter__item--active")}),$(".filter__block").each(function(){$(this).on("click",function(){var e=$(this).find("label").text();$(".filter__txt").text(e),$(this).closest(".filter__item").removeClass("filter__item--active")})}),$(document).on("click",function(e){var t=e.target;$(t).hasClass(".filter__item")||$(this).closest(".filter__item").removeClass("filter__item--active")}),jQuery(function(e){e(document).mouseup(function(t){var i=e(".filter__item");i.is(t.target)||0!==i.has(t.target).length||i.removeClass("filter__item--active")})})}catch(e){console.log(e)}if(function(e,t,i,r){$(e).exists()&&$(e).each(function(){var e=0;$(this).find(t).each(function(t){!$(this).find(r).length>0&&e++}),1==e&&$(this).find(t).each(function(e){$(this).find(r).exists()&&(0==e?$(this).closest(i).addClass("news-popular__bloc--other"):$(this).closest(i).addClass("news-popular__bloc--reverse"))})})}(".news-popular__items",".news-popular__item",".news-popular__bloc",".news-popular__pic"),$(document).on("click",function(e){if($(".archive-filter__item").exists())try{var t=$(e.target).closest(".archive-filter__bloc"),i=$(e.target).closest(".mCSB_dragger"),r="";t.length||(r=$(".archive-filter__item--active"),$(".archive-filter__item--active").removeClass("archive-filter__item--active")),i.length&&r.addClass("archive-filter__item--active")}catch(e){console.log(e)}if($(".release-month__bloc").exists())try{var n=$(e.target).closest(".release-month__btn"),s=$(e.target).closest(".mCSB_dragger"),a="";n.length||(a=$(".release-month__bloc--active"),$(".release-month__bloc--active").removeClass("release-month__bloc--active")),s.length&&a.addClass("release-month__bloc--active")}catch(e){console.log(e)}}),$(".release-month__bloc").exists())try{$(".release-month__btn").on("click",function(){$(".release-month__bloc").toggleClass("release-month__bloc--active")})}catch(e){console.log(e)}function n(e,t){if(e.length>0)for(var i=document.querySelectorAll(e),r=0;r<i.length;r++)s(i[r],t)}function s(e,t){var i=e.textContent,r=i.slice(0,t);r.length<i.length&&(r+="..."),e.textContent=r}if(n(".news-popular__text",150),n(".news-basic__text",179),n(".news-set__text",150),n(".news-actual__txt",115),n(".news-most__txt",158),n(".news-most__text",46),n(".news-photo__info",115),n(".author-articles__txt",72),n(".news-slider__txt",250),n(".news-slider__txt",250),n(".publish__txt",15),$(window).on("resize load",function(){$(this).width()<=640?n(".news-actual__text",1e3):n(".news-actual__text",55)}),$(".archive-filter__panel").exists())try{for(var a=document.getElementsByClassName("archive-filter__panel"),l=0;l<a.length;l++)a[l].onclick=function(e){var t=e.target;if(!$(t).attr("href")){this.classList.toggle("archive-filter__panel--active"),$(this).parent().toggleClass("archive-filter__wrp--active");var i=this.nextElementSibling;i.style.maxHeight?i.style.maxHeight=null:i.style.maxHeight=i.scrollHeight+"px"}}}catch(e){console.log(e)}function c(){if($(".archive-filter__item").exists)try{var e=$(".archive-filter__item--month").find(".archive-filter__block"),t="";$(e).each(function(){$(this).children("input").prop("checked")&&(-1!=(t=$(this).children("label").text()).indexOf("Декабрь")||-1!=t.indexOf("Январь")||-1!=t.indexOf("Март")||-1!=t.indexOf("Май")||-1!=t.indexOf("Июль")||-1!=t.indexOf("Август")||-1!=t.indexOf("Октябрь")?(o(".archive-filter__item--day",31),$(".archive-filter__item--day").find(".archive-filter__txt").text("31")):-1!=t.indexOf("Сентябрь")||-1!=t.indexOf("Июнь")||-1!=t.indexOf("Ноябрь")||-1!=t.indexOf("Апрель")?(o(".archive-filter__item--day",30),$(".archive-filter__item--day").find(".archive-filter__txt").text("30")):(o(".archive-filter__item--day",28),$(".archive-filter__item--day").find(".archive-filter__txt").text("28")))})}catch(e){console.log(e)}}function o(e,t){if($(".archive-filter__item").exists)try{if(".archive-filter__item--year"==e){var r=document.querySelector(".archive-filter__item--year");i=r.querySelector(".archive-filter__list");for(var n=d.currentYear;n>=t;n--){var s=document.createElement("div"),a=document.createElement("input"),l=document.createElement("label");s.classList.add("archive-filter__block"),n==d.currentYear&&(a.setAttribute("checked","checked"),a.setAttribute("currentyear",d.currentYear)),a.setAttribute("id","y-".concat(n)),a.setAttribute("type","radio"),a.setAttribute("name",d.year),a.setAttribute("value","".concat(n)),l.setAttribute("for","y-".concat(n)),l.textContent=n,s.appendChild(a),s.appendChild(l),i.appendChild(s)}}else{var c=document.querySelector(".archive-filter__item--day");i=c.querySelector(".archive-filter__list");for(var o=t;o>0;o--){var h=document.createElement("div"),u=document.createElement("input"),_=document.createElement("label");h.classList.add("archive-filter__block"),o==d.currentDay&&(u.setAttribute("checked","checked"),u.setAttribute("currentday",d.currentDay)),u.setAttribute("id","d-".concat(o)),u.setAttribute("type","radio"),u.setAttribute("name",d.day),u.setAttribute("value","".concat(o)),_.setAttribute("for","d-".concat(o)),_.textContent=o,h.appendChild(u),h.appendChild(_),i.appendChild(h)}}}catch(e){console.log(e)}}if($(".archive-filter__item").exists())try{if($(".archive-filter__items").length>0){document.querySelector(".archive-filter__items");var d=$(".archive-filter__items").data("filter");c(),o(".archive-filter__item--year",d.min)}$(".archive-filter__item").each(function(){var e,t,i="",r="";i=$(this).find(".archive-filter__box"),$(i).mCustomScrollbar({theme:"dark",mouseWheelPixels:90}),i=$(this).find(".archive-filter__bloc"),e=$(this).find(".archive-filter__txt"),t=$(this).find(".archive-filter__list").find("input"),$(t).each(function(){$(this).prop("checked")&&$(e).text($(this).next().text())}),$(i).on("click",function(){$(this).toggleClass("archive-filter__item--active").siblings().removeClass("archive-filter__item--active"),$(this).hasClass("archive-filter__item--active")&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(e).text($(this).text()),$(".archive-filter__item").removeClass("archive-filter__item--active")})})),$(this).hasClass("archive-filter__item--active")&&$(this).hasClass("archive-filter__item--year")&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(e).text($(this).text()),$(".archive-filter__item--day").find(".archive-filter__block").remove(),$(this).find("input").attr({currentYear:d.currentYear}).closest(".archive-filter__block").siblings().find("input").removeAttr("currentyear").removeAttr("checked"),c()})})),$(this).hasClass("archive-filter__item--active")&&$(this).hasClass("archive-filter__item--day")&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(this).find("input").attr("currentDay",d.currentDay).closest(".archive-filter__block").siblings().find("input").removeAttr("currentday")})})),$(this).hasClass("archive-filter__item--active")&&$(this).hasClass("archive-filter__item--month")&&(r=$(this).find(".archive-filter__block"),$(r).each(function(){$(this).on("click",function(){$(e).text($(this).text()),$(".archive-filter__item--day").find(".archive-filter__block").remove(),c()})}))}.bind(this))})}catch(e){console.log(e)}if($(".header__search--laptop").exists)try{var h=function(e){e.preventDefault()};$(".header__btn").on("click",function(){$(".header__search--laptop").addClass("header__search--active"),$(".header__search--laptop").hasClass("header__search--active")&&(setTimeout(function(){$(".header__search--laptop input").focus()},500),$(".header__search--laptop").bind("submit",h)),""!=$(".header__search--laptop input").val()&&$(".header__search--laptop").unbind("submit",h)})}catch(e){console.log(e)}if($(".header__inner").exists)try{var u=$(window),_=$(".header__inner"),f=_.offset().top;u.on("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>f?_.addClass("mf-fixed"):_.removeClass("mf-fixed")})}catch(e){console.log(e)}if($(".header__func").exists)try{$(".header__func").on("click",function(){$(".header__func").toggleClass("header__func--active"),$(".header__section").toggleClass("header__section--active")})}catch(e){console.log(e)}function p(){if($(".news-detail__item").exists)try{var e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),r=m[x].parentNode;$(e).attr("class","gallery__top"),$(e).addClass("gallery__main"+x),$(t).attr("class","gallery"),$(i).attr("class","swiper-wrapper"),i.innerHTML+=g,$(e).append(i),$(t).append(e);var n=document.createElement("div");$(n).attr("class","gallery__thumbs"),$(n).addClass("gallery__btn"+x);for(var s=0;s<2;s++)if(1==s){var a=document.createElement("div");$(a).attr("class","b-arrow b-arrow--prev"),$(n).append(a)}else{a=document.createElement("div");$(a).attr("class","b-arrow b-arrow--next"),$(n).append(a)}r.insertBefore(t,m[x]),t.appendChild(n),$(e).find(i).clone().appendTo(n),1==$(n).children(".swiper-wrapper").children().length&&$(n).css("display","none")}catch(e){console.log(e)}}for(var m=document.querySelectorAll(".news-detail__item > *"),v=0,g="",w=[],y=0,b=0;b<m.length;b++)$(m[b]).is("img")?($(m[b]).attr("class",v),w.push(v)):v++;for(var x=0;x<m.length;x++)m[x].classList.contains(y)?(g+=m[x].outerHTML,$(m[x]).hide(),m[x]==m[m.length-1]&&g&&(setTimeout(function(){$(".news-detail__item img").css("opacity","1"),$(".gallery").css("opacity","1")},500),p())):(g&&(setTimeout(function(){$(".news-detail__item img").css("opacity","1"),$(".gallery").css("opacity","1")},500),p()),g="",y++);function k(e){for(var t=document.querySelectorAll("."+e),i=[],r=0;r<t.length;r++)i.push(t[r]);i.forEach(function(t,i){for(var r=t.querySelectorAll("img"),n=[],s=0;s<r.length;s++)n.push(r[s]);n.forEach(function(t,i){var r=document.createElement("a");r.innerHTML=t.outerHTML,"gallery__thumbs"!=e&&r.setAttribute("href",t.getAttribute("src")),r.classList.add("gallery-item"),r.classList.add("swiper-slide"),t.parentNode.replaceChild(r,t)}),t.setAttribute("id","slide"+i),lightGallery(document.querySelector("#"+t.id),{selector:".gallery-item"})})}k("gallery__top"),k("gallery__thumbs");$(".gallery__thumbs").find(".swiper-slide");$(".gallery").find(".swiper-slide").each(function(){$(this).append("<canvas class='gallery__img-bg'></canvas>");var e=$(this).find("canvas")[0],t=e.getContext("2d"),i=new Image;i.src=$(this).find("img").attr("src"),i.onload=function(){var r=Math.max(e.width/i.width,e.height/i.height);t.filter="blur(7px)",t.scale(r,r),t.drawImage(i,0,-100)}}),$(document).ready(function(){for(var e=0;e<m.length;e++){var t=new Swiper(".gallery__btn"+e,{spaceBetween:17,slidesPerView:5,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,breakpoints:{320:{spaceBetween:8,slidesPerView:3},501:{spaceBetween:8,slidesPerView:4},769:{spaceBetween:17,slidesPerView:6},1024:{spaceBetween:17,slidesPerView:6},1025:{spaceBetween:17,slidesPerView:5}}});new Swiper(".gallery__main"+e,{spaceBetween:10,thumbs:{swiper:t},navigation:{nextEl:".b-arrow--next",prevEl:".b-arrow--prev"}});$(".gallery").exists()&&$(".news-detail__item").css("min-height",$(".gallery").height()+15+"px")}$(".content p").exists()&&($(".gallery").exists()||($(".content p").css({"max-width":"900px","margin-left":0}),$(".content h2").css({"text-align":"left","margin-top":"25px"})))});for(var C=0;C<m.length;C++)$(".gallery__btn"+C).each(function(){var e=$(this).find(".swiper-slide");e.length>1&&$(".gallery__btn"+C).fadeIn(),e.length>5&&$(this).find(".b-arrow").css("display","block")});if($("#input-search").exists)try{$("#input-search").on("keyup",function(){$(this).val()?($(".mf-search").addClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#27202C"})):($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))}),$("#input-search").focusout(function(){$(this).val()||($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))})}catch(e){console.log(e)}if($(".news-slider__gallery").exists&&$(".news-slider__thumbs").exists)try{var S=new Swiper(".news-slider__gallery",{spaceBetween:10,slidesPerView:1,watchSlidesVisibility:!0,effect:"fade"}),P=new Swiper(".news-slider__thumbs",{spaceBetween:10,effect:"fade",navigation:{nextEl:".news-slider__arrow--next",prevEl:".news-slider__arrow--prev"},fadeEffect:{crossFade:!0},breakpoints:{920:{touchRatio:1},921:{touchRatio:0}}});P.controller.control=S,S.controller.control=P}catch(e){console.log(e)}if($(".edition-slider").exists())try{new Swiper(".edition-slider",{spaceBetween:18,slidesPerView:6,slidesPerColumn:2,slidesPerColumnFill:"row",slidesPerGroup:6,navigation:{nextEl:".edition-slider__arr--next",prevEl:".edition-slider__arr--prev"},pagination:{el:".edition-slider__pag",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},breakpoints:{1920:{spaceBetween:18,slidesPerView:6},769:{spaceBetween:18,slidesPerView:6},768:{spaceBetween:15,slidesPerView:5,slidesPerGroup:5},621:{spaceBetween:15,slidesPerView:5,slidesPerGroup:5},620:{spaceBetween:10,slidesPerView:4,slidesPerGroup:4},501:{spaceBetween:10,slidesPerView:3,slidesPerGroup:3},321:{spaceBetween:10,slidesPerGroup:3,slidesPerView:2},320:{spaceBetween:10,slidesPerView:2,slidesPerGroup:2}}})}catch(e){console.log(e)}$(".release-month__items").exists()&&(!0==!window.matchMedia("(min-width:769px)").matches&&$(".release-month__items").mCustomScrollbar({theme:"dark",mouseWheelPixels:90}));function j(e,t){var i=(e=Math.abs(e)%100)%10;return e>10&&e<20?t[2]:i>1&&i<5?t[1]:1==i?t[0]:t[2]}$(".header__search--laptop").exists()&&document.querySelector(".header__top .header__search--laptop").addEventListener("keydown",function(e){13==e.keyCode&&this.submit()});var E=function(e,t){try{$(e).each(function(e,i){var r=i.getContext("2d"),n=new Image;n.src=$(t).find("img").attr("src"),n.onload=function(){var e=Math.max(i.width/n.width,i.height/n.height);r.filter="blur(7px)",r.scale(e,e),r.drawImage(n,0,-100)}})}catch(e){console.log(e)}},A=function(e){var t=e.getAttribute("data-slide");return(t=JSON.parse(t)).slides};if($(".entry").exists()){var B="",L="",V=0,q=0,T="",G="",H="",O="";document.querySelectorAll(".entry__item").forEach(function(e){(L="",(B=A(e)).length>0)&&(B.forEach(function(e,t){t<3&&(L+='<div class="entry__bloc"><img src= "'.concat(e,'" /><canvas class="entry__canvas"></div>'),q=t)}),e.querySelector(".entry__wrapper").innerHTML=L,B.length>=3&&e.querySelector(".entry__wrapper").classList.add("entry__wrapper--direction"),B.length>3&&(V=B.length-(q+1),(T=(T=e.querySelectorAll(".entry__bloc"))[T.length-1]).classList.add("entry__bloc--special"),(G=document.createElement("span")).textContent="+ ".concat(V," ").concat(j(V,["фотография","фотографии","фотографий"])," "),T.appendChild(G)),E($(e).find("canvas"),e),e.querySelectorAll(".entry__bloc").forEach(function(t,i){t.addEventListener("click",function(){(O=new W($(e).find(".js-slider"),A(e),$(e).find(".swiper-wrapper")[0])).createSlider,H=$(e).find(".js-entry-popup"),D(!0,H)})}),$(e).find(".js-overlay").exists()&&$(e).find(".js-overlay").on("click",function(t){-1!=t.target.className.indexOf("js-overlay")&&(O.dstroySlider,H=$(e).find(".js-entry-popup"),D(!1,H))}),$(e).find(".js-close-form").exists()&&$(e).find(".js-close-form").on("click",function(){D(!1,H)}),$(window).on("resize load",function(){$(this).width()<=882?$(e).find(".js-out-date").exists()&&projectFunc.objAd($(e).find(".js-out-date"),$(e).find(".js-in-date")):$(e).find(".js-out-date").exists()&&projectFunc.objAd($(e).find(".js-out-date"),$(e).find(".popup__header"))}));$(e).find(".js-scroll").exists()&&r.init($(e).find(".js-scroll")[0],{damping:.05,alwaysShowTracks:!0})})}$(window).on("resize load",function(){$(this).width()<=1024?($(".js-out-cloud").exists()&&projectFunc.objAd(".js-out-cloud",".js-in-cloud"),$(".js-cloud-btn").exists()&&$(".js-cloud-btn").on("click",function(){$(".cloud__wrp").toggleClass("active"),this.classList.toggle("is-open");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}),$(".js-banner-slider").exists()&&projectFunc.objAd($(".js-banner-slider"),$(".js-in-banner ")),$(".js-out-kiosk").exists()&&projectFunc.objAd($(".js-out-kiosk"),$(".js-in-kiosk "))):($(".js-banner-slider").exists()&&$(".js-banner-slider").exists()&&$(".js-banner-slider").each(function(e){var t=$(this).clone();$(".news-city").after($(t)),$(this).remove()}),$(".js-out-kiosk").exists()&&$(".js-out-kiosk").exists()&&$(".js-out-kiosk").each(function(e){var t=$(this).clone();$(t).prependTo($(".wrapper__right")),$(this).remove()}),$(".js-out-cloud").exists()&&projectFunc.objAd(".js-out-cloud",".wrapper__right"))});var M=function(e){e?$("html").css("overflow","hidden"):$("html").css("overflow","auto")},I=function(e,t){F(t,"start"==e)},D=function(e,t){if($(".js-overlay").exists()){var i=$(t).parent(".js-overlay"),r=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.6},onStart:M,onStartParams:[e,!1],onComplete:I,onCompleteParams:["start",t]}),n=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.3},onStart:I,onStartParams:["end",t],onComplete:M,onCompleteParams:[e,!0]});r.to(i,{autoAlpha:1,ease:"power2.out"}),n.to(i,{autoAlpha:0,ease:"power2.out"},"+=0.6"),e?(r.reverse(),r.play()):(n.reverse(),n.play())}},F=function(e,t){if($(e).exists()){var i=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.4}}),r=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.4}});r.to(e,{yPercent:-110,autoAlpha:0}),i.set(e,{yPercent:-100}).to(e,{yPercent:0,autoAlpha:1,ease:"power2.out"}),t?(r.reverse(),i.play()):(i.reverse(),r.play())}},W=function(){function e(t,i,r){_classCallCheck(this,e),this.name=t,this.slides=i,this.place=r,this.slider=""}return _createClass(e,[{key:"createSlider",get:function(){var e=this.slides,t="",i="";if(e.length>0){var r=$(this.name).find(".pagination"),n=$(this.name).find(".arrow__link--next"),s=$(this.name).find(".arrow__link--prev");e.forEach(function(e,i){t+='<div class="swiper-slide"><img src="'.concat(e,'" alt="" /><canvas></canvas></div>')}),this.place.innerHTML=t,$(this.place).find(".swiper-slide").each(function(e,t){i=$(t).find("canvas"),E(i,t)}),this.slider=new Swiper(this.name,{slidesPerView:1,spaceBetween:10,navigation:{nextEl:n,prevEl:s},pagination:{el:r,type:"custom",renderCustom:function(e,t,i){var r=t||0;return"<span>".concat(j(r,["Фотография","Фотографии","Фотографий"]),"</span> ").concat((""+r).slice(-2)," из ").concat((""+i).slice(-2))}}})}}},{key:"dstroySlider",get:function(){var e=this;this.slider.destroy(!0,!0),setTimeout(function(){e.place.innerHTML=""},500)}}]),e}();$(".include__unit").exists()&&function(){for(var e=document.querySelectorAll(".include__unit"),t=document.querySelectorAll(".include__decor"),i=document.querySelector(".include__layer").querySelectorAll("svg g"),r="",n="",s=function(r){e[r].addEventListener("mouseenter",function(){t[r].querySelector("svg").classList.add("mf-bg");for(var e=0;e<i.length;e++)if(r==i[e].dataset.area){n=i[e].querySelectorAll("rect");for(var s=0;s<n.length;s++)n[s].classList.add("mf-bg")}}),e[r].addEventListener("mouseleave",function(){t[r].querySelector("svg").classList.remove("mf-bg");for(var e=0;e<i.length;e++)if(r==i[e].dataset.area){n=i[e].querySelectorAll("rect");for(var s=0;s<n.length;s++)n[s].classList.remove("mf-bg")}})},a=0;a<e.length;a++)s(a);for(var l=function(e){i[e].addEventListener("mouseenter",function(){r=t[i[e].dataset.area].querySelectorAll("svg");for(var s=0;s<r.length;s++)r[s].classList.add("mf-bg");n=i[e].querySelectorAll("rect");for(var a=0;a<n.length;a++)n[a].classList.add("mf-bg")}),i[e].addEventListener("mouseleave",function(){t[e].querySelector("svg").classList.remove("mf-bg"),r=t[i[e].dataset.area].querySelectorAll("svg");for(var s=0;s<r.length;s++)r[s].classList.remove("mf-bg");n=i[e].querySelectorAll("rect");for(var a=0;a<n.length;a++)n[a].classList.remove("mf-bg")})},c=0;c<i.length;c++)l(c)}()});