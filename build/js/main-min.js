"use strict";if(jQuery.fn.exists=function(){return $(this).length},$(".author-articles__grid--slider").exists){var mySwiper,breakpoint=window.matchMedia("(min-width:600px)"),breakpointChecker=function(){if(!0!==breakpoint.matches)return!1===breakpoint.matches?enableSwiper():void 0;void 0!==mySwiper&&mySwiper.destroy(!0,!0)},enableSwiper=function(){mySwiper=new Swiper(".author-articles__grid--slider",{slidesPerView:"auto",spaceBetween:16,centeredSlides:!0,a11y:!0,keyboardControl:!0,grabCursor:!0})};breakpoint.addListener(breakpointChecker),breakpointChecker()}function createGallery(){var e=document.createElement("div"),r=document.createElement("div"),l=document.createElement("div"),t=allEl[a].parentNode;$(e).attr("class","gallery__top"),$(e).addClass("gallery__main"+a),$(r).attr("class","gallery"),$(l).attr("class","swiper-wrapper"),l.innerHTML+=result,$(e).append(l),$(r).append(e);var s=document.createElement("div");$(s).attr("class","gallery__thumbs"),$(s).addClass("gallery__btn"+a);for(var i=0;i<2;i++)if(1==i){var n=document.createElement("div");$(n).attr("class","b-arrow b-arrow--prev"),$(s).append(n)}else{n=document.createElement("div");$(n).attr("class","b-arrow b-arrow--next"),$(s).append(n)}t.insertBefore(r,allEl[a]),r.append(s),$(e).find(l).clone().appendTo(s)}var allEl=document.querySelectorAll(".news-detail__item > *"),j=0,result="",arrTemp=[],ch=0;console.log(allEl);for(var i=0;i<allEl.length;i++)$(allEl[i]).is("img")?($(allEl[i]).attr("class",j),arrTemp.push(j)):j++;for(var a=0;a<allEl.length;a++)allEl[a].classList.contains(ch)?(result+=allEl[a].outerHTML,$(allEl[a]).hide(),allEl[a]==allEl[allEl.length-1]&&result&&createGallery()):(result&&createGallery(),result="",ch++);function initGallarySlider(e){for(var r=document.querySelectorAll("."+e),l=[],a=0;a<r.length;a++)l.push(r[a]);l.forEach(function(r,l){for(var a=r.querySelectorAll("img"),t=[],s=0;s<a.length;s++)t.push(a[s]);t.forEach(function(r,l){var a=document.createElement("a");a.innerHTML=r.outerHTML,"gallery__thumbs"!=e&&a.setAttribute("href",r.getAttribute("src")),a.classList.add("gallery-item"),a.classList.add("swiper-slide"),r.parentNode.replaceChild(a,r)}),r.setAttribute("id","slide"+l),lightGallery(document.querySelector("#"+r.id),{selector:".gallery-item"})})}initGallarySlider("gallery__top"),initGallarySlider("gallery__thumbs");var qtySlide=$(".gallery__thumbs").find(".swiper-slide");$(document).ready(function(){for(var e=0;e<allEl.length;e++){var r=new Swiper(".gallery__btn"+e,{spaceBetween:17,slidesPerView:5,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,breakpoints:{320:{spaceBetween:8,slidesPerView:3},501:{spaceBetween:8,slidesPerView:4},769:{spaceBetween:17,slidesPerView:5},1024:{spaceBetween:17,slidesPerView:5}}});new Swiper(".gallery__main"+e,{spaceBetween:10,thumbs:{swiper:r},navigation:{nextEl:".b-arrow--next",prevEl:".b-arrow--prev"}})}});for(var v=0;v<allEl.length;v++)$(".gallery__btn"+v).each(function(){var e=$(this).find(".swiper-slide");e.length>1&&$(".gallery__btn"+v).fadeIn(),e.length>5&&$(this).find(".b-arrow").css("display","block")});lightGallery(document.getElementById("lightgallery")),$("#input-search").on("keyup",function(){$(this).val()?($(".mf-search").addClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#27202C"})):($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))}),$("#input-search").focusout(function(){$(this).val()||($(".mf-search").removeClass("mf-search--active"),$(".header__field .b-svg").css({stroke:"#DBD4E0"}))});var newsGallery=new Swiper(".news-slider__gallery",{spaceBetween:10,slidesPerView:1,watchSlidesVisibility:!0,effect:"fade"}),newsThumbs=new Swiper(".news-slider__thumbs",{spaceBetween:10,autoHeight:!0,effect:"fade",touchRatio:0,navigation:{nextEl:".news-slider__arrow--next",prevEl:".news-slider__arrow--prev"},fadeEffect:{crossFade:!0}});newsThumbs.controller.control=newsGallery,newsGallery.controller.control=newsThumbs;