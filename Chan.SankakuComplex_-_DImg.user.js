// ==UserScript==
// @name        Chan.SankakuComplex - DImg
// @namespace   Fix Somthing
// @description Fix some Shit
// @copyright   2017+, Yaelmania Ilutions Graphics (Yaelmania)
// @run-at      document-start
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     https://chan.sankakucomplex.com/?tags=*
// @version     1
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// @grant       GM_getResourceURL
// @grant       GM_getValue
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// ==/UserScript==

var $csc = jQuery.noConflict();


$csc(window).scroll(function() {   
   if($csc(window).scrollTop() + $csc(window).height() == $csc(document).height()) {
       //alert("bottom!");
     $csc('.content div .thumb a').each(function() {
       var cehking = $csc(this).attr('data');
       var original = $csc(this).attr('href');
       var idmage = $csc(this).attr('href').replace(/.+show\//,''); 
       var imgsrc = $csc(this).find('img').attr('src').replace(/preview\//,'');
       var imgsrcx = imgsrc.replace(/c\.sankakucomplex/,'cs.sankakucomplex');
       var imgpng = imgsrcx.replace(/\.jpg/,'.png');
       var imggif = imgpng.replace(/\.png/,'.gif');
       if (cehking !== 'redy'){
         $csc(this).parent().attr('style','position:relative!important;');
         //$csc(this).parent().prepend(unescape('%3Cbutton type%3D%22button%22 onclick%3D%22window.open%28%27'+imgsrcx+'?'+idmage+'%27%29%3Breturn false%3B%22 style%3D%22display%3Ablock%3Bcursor%3Apointer%3Bwidth%3A20px%3Bposition%3Aabsolute%3Btop%3A0px%3Bleft%3A0px%3B%22%3EJPG%3C%2Fbutton%3E'));
         //$csc(this).parent().prepend(unescape('%3Cbutton type%3D%22button%22 onclick%3D%22window.open%28%27'+imgpng+'?'+idmage+'%27%29%3Breturn false%3B%22 style%3D%22display%3Ablock%3Bcursor%3Apointer%3Bwidth%3A20px%3Bposition%3Aabsolute%3Btop%3A0px%3Bleft%3A0px%3B%22%3EPNG%3C%2Fbutton%3E'));
         //$csc(this).parent().prepend(unescape('%3Cbutton type%3D%22button%22 onclick%3D%22window.open%28%27'+imggif+'?'+idmage+'%27%29%3Breturn false%3B%22 style%3D%22display%3Ablock%3Bcursor%3Apointer%3Bwidth%3A20px%3Bposition%3Aabsolute%3Btop%3A16px%3Bleft%3A0px%3B%22%3EGIF%3C%2Fbutton%3E'));
         //$csc(this).parent().prepend(unescape('%3Ca data%3D%22redy%22 href%3D%22'+imgsrcx+'?'+idmage+'%22 target%3D%22_blank%22 style%3D%22position%3Aabsolute%3Bwidth%3A15px%3Btop%3A0px%3Bleft%3A0px%3Bdisplay%3Ablock%21important%3B%22%3E%3Cimg src%3D%22http%3A%2F%2Fwww.auplod.com%2Fu%2Fadolpu95b70.jpeg%22%3E%3C%2Fimg%3E%3C%2Fa%3E'));
         $csc(this).parent().prepend(unescape('%3Ca data%3D%22redy%22 href%3D%22'+original+'%22 target%3D%22_blank%22 style%3D%22position%3Aabsolute%3Bwidth%3A15px%3Btop%3A0px%3Bleft%3A0px%3Bdisplay%3Ablock%21important%3B%22%3E%3Cimg src%3D%22http%3A%2F%2Fwww.auplod.com%2Fu%2Fadolpu95b70.jpeg%22%3E%3C%2Fimg%3E%3C%2Fa%3E'));
         $csc(this).parent().prepend(unescape('%3Ca data%3D%22redy%22 href%3D%22'+imgpng+'?'+idmage+'%22 target%3D%22_blank%22 style%3D%22position%3Aabsolute%3Bwidth%3A15px%3Btop%3A16px%3Bleft%3A0px%3Bdisplay%3Ablock%21important%3B%22%3E%3Cimg src%3D%22http%3A%2F%2Fwww.auplod.com%2Fu%2Fapludo95b71.jpeg%22%3E%3C%2Fimg%3E%3C%2Fa%3E'));
         $csc(this).parent().prepend(unescape('%3Ca data%3D%22redy%22 href%3D%22'+imggif+'?'+idmage+'%22 target%3D%22_blank%22 style%3D%22position%3Aabsolute%3Bwidth%3A15px%3Btop%3A32px%3Bleft%3A0px%3Bdisplay%3Ablock%21important%3B%22%3E%3Cimg src%3D%22http%3A%2F%2Fwww.auplod.com%2Fu%2Fdlapuo95b72.jpeg%22%3E%3C%2Fimg%3E%3C%2Fa%3E'));
         //$csc(this).removeAttr('href');
         $csc(this).attr('href',imgsrcx+'?'+idmage);
         $csc(this).removeAttr('onclick');
         $csc(this).attr('data','redy');
         /*
         $csc(this).attr('href',imgsrcx+'?'+idmage);
         $csc(this).removeAttr('onclick');//,"var nalga=this.attr('href');nalga.replace(/.+.jpg/,'.png');this.attr('href',nalga);return false;");//,"var vaya=window.open('"+imgsrcx+'?'+idmage+"');vaya.blur();window.focus();");
         $csc(this).attr('target','_blank');
         $csc(this).attr('data','redy');
         */
       }
       
     });

   }
});
