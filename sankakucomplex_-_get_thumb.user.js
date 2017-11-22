// ==UserScript==
// @name        sankakucomplex - get thumb
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     https://chan.sankakucomplex.com/post/show/*
// @version     1
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// ==/UserScript==

var $skt = jQuery.noConflict();

$skt(window).scroll(function() {   
   if($skt(window).scrollTop() + $skt(window).height() == $skt(document).height()) {
     var cheker = top.window.location.href;
     var filteringaddres = cheker.replace(/.+post\/show.+/,'postOk');
     if(filteringaddres == 'postOk'){
       $skt('#recommendations .thumb a').each(function() {
         var selective = $skt(this).parent().find('button').attr('class');
         if(selective !== 'hacked'){
         var idImg = $skt(this).attr('href').replace(/.+show\//,'');
         var imgsurce = $skt(this).find('img').attr('src').replace(/preview\//,'');
         var imgsurceX = imgsurce.replace(/c\.sankakucomplex/,'cs.sankakucomplex');
           $skt(this).parent().append(unescape('%3Cbr%3E%3Cbutton class%3D%22hacked%22 type%3D%22button%22 onclick%3D%22javascript%3APost.vote%285%2C '+idImg+'%29%3B Favorite.create%28'+idImg+'%29%3B window.open%28%27'+imgsurceX+'?'+idImg+'%27%29%3B return false%3B%22 style%3D%22cursor%3Apointer%3B%22%3EOriginal%3C%2Fbutton%3E'));
         }                                    
         else{
           // nada
         }
       });
     }
   }
});