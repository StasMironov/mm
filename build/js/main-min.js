"use strict";jQuery.fn.exists=function(){return $(this).length},$(function(){if($(".news-popular__text").exists())for(var e=document.querySelectorAll(".news-popular__text"),t=0;t<e.length;t++)$clamp(e[t],{clamp:4,useNativeClamp:!1});if($(".header__search--laptop").exists)try{$(".header__btn").on("click",function(e){e.preventDefault(),$(".header__search--laptop").toggleClass("header__search--laptop--active")})}catch(e){console.log(e)}var r=$(window),a=$(".header__inner"),s=a.offset().top;if(r.on("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>s?a.addClass("mf-fixed"):a.removeClass("mf-fixed")}),$(".header__func").exists)try{$(".header__func").on("click",function(){$(".header__func").toggleClass("header__func--active"),$(".header__section").toggleClass("header__section--active")})}catch(e){console.log(e)}if($(".author-articles__grid--slider").exists){var l,n=window.matchMedia("(min-width:600px)"),i=function(){if(!0!==n.matches)return!1===n.matches?o():void 0;void 0!==l&&l.destroy(!0,!0)},o=function(){l=new Swiper(".author-articles__grid--slider",{slidesPerView:"auto",spaceBetween:16,loop:!0,autoplay:!0,delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0})};n.addListener(i),i()}function c(){var e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),a=d[w].parentNode;$(e).attr("class","gallery__top"),$(e).addClass("gallery__main"+w),$(t).attr("class","gallery"),$(r).attr("class","swiper-wrapper"),r.innerHTML+=h,$(e).append(r),$(t).append(e);var s=document.createElement("div");$(s).attr("class","gallery__thumbs"),$(s).addClass("gallery__btn"+w);for(var l=0;l<2;l++)if(1==l){var n=document.createElement("div");$(n).attr("class","b-arrow b-arrow--prev"),$(s).append(n)}else{n=document.createElement("div");$(n).attr("class","b-arrow b-arrow--next"),$(s).append(n)}a.insertBefore(t,d[w]),t.append(s),$(e).find(r).clone().appendTo(s)}var d=document.querySelectorAll(".news-detail__item > *"),f=0,h="",p=[],u=0;console.log(d);for(var _=0;_<d.length;_++)$(d[_]).is("img")?($(d[_]).attr("class",f),p.push(f)):f++;for(var w=0;w<d.length;w++)d[w].classList.contains(u)?(h+=d[w].outerHTML,$(d[w]).hide(),d[w]==d[d.length-1]&&h&&c()):(h&&c(),h="",u++);function m(e){for(var t=document.querySelectorAll("."+e),r=[],a=0;a<t.length;a++)r.push(t[a]);r.forEach(function(t,r){for(var a=t.querySelectorAll("img"),s=[],l=0;l<a.length;l++)s.push(a[l]);s.forEach(function(t,r){var a=document.createElement("a");a.innerHTML=t.outerHTML,"gallery__thumbs"!=e&&a.setAttribute("href",t.getAttribute("src")),a.classList.add("gallery-item"),a.classList.add("swiper-slide"),t.parentNode.replaceChild(a,t)}),t.setAttribute("id","slide"+r),lightGallery(document.querySelector("#"+t.id),{selector:".gallery-item"})})}m("gallery__top"),m("gallery__thumbs");$(".gallery__thumbs").find(".swiper-slide");$(document).ready(function(){for(var e=0;e<d.length;e++){var t=new Swiper(".gallery__btn"+e,{spaceBetween:17,slidesPerView:5,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,breakpoints:{320:{spaceBetween:8,slidesPerView:3},501:{spaceBetween:8,slidesPerView:4},769:{spaceBetween:17,slidesPerView:5},1024:{spaceBetween:17,slidesPerView:5}}});new Swiper(".gallery__main"+e,{spaceBetween:10,thumbs:{swiper:t},navigation:{nextEl:".b-arrow--next",prevEl:".b-arrow--prev"}})}});for(var g=0;g<d.length;g++)$(".gallery__btn"+g).each(function(){var e=$(this).find(".swiper-slide");e.length>1&&$(".gallery__btn"+g).fadeIn(),e.length>5&&$(this).find(".b-arrow").css("display","block")});lightGallery(document.getElementById("lightgallery")),$("#input-search").on("keyup",function(){$(this).val()?($(".mf-search").addClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#27202C"})):($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))}),$("#input-search").focusout(function(){$(this).val()||($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))});var v=new Swiper(".news-slider__gallery",{spaceBetween:10,slidesPerView:1,watchSlidesVisibility:!0,effect:"fade"}),y=new Swiper(".news-slider__thumbs",{spaceBetween:10,autoHeight:!0,effect:"fade",touchRatio:0,navigation:{nextEl:".news-slider__arrow--next",prevEl:".news-slider__arrow--prev"},fadeEffect:{crossFade:!0}});y.controller.control=v,v.controller.control=y});