// ==UserScript==
// @name        tumblr.com -post -fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http*://*.tumblr.com/post/*
// @exclude     http*://*.tumblr.com/page/*
// @exclude     http*://*.tumblr.com/video/*
// @exclude     http*://*.tumblr.com/*/photoset_iframe/*
// @version     1
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// ==/UserScript==

var $tf = jQuery.noConflict();

$tf(".related-posts-wrapper,script,.reblog-list").remove();
  $tf('.related-posts-wrapper,.reblog-list,.widget.likes-widget').each(function() {
    $tf(this).remove();
  });

function relatedfuck(){
  $tf(".related-posts-wrapper,script,.widget.likes-widget").each(function() {
    $tf(this).remove();
  });
  setTimeout(Ministrel, 1000);
}
function Ministrel() {
    $tf('.related-posts-wrapper,.widget.likes-widget').each(function() {
    $tf(this).remove();
  });
  $tf(".widget.likes-widget,.related-posts-wrapper,[id^='Notes'],#footer,#log_opt,#overlay,#log_header,.description,.header,script,header,aside,footer,noscript,#ga_target,[class*='follow-teaser'],[class*='iframe-controls']").remove();
  $tf( ".logo.logo-square,#topbar,#sidebar,#topbarbord,.postnotes,#info,.description,img.corny.botri" ).remove();
  $tf("[class*='has-source']").unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap();
  var verificador = top.location.href;
  var verificadorr = location.href;
  var origin = $tf( "div#photo img" ).attr('src');
  var origint = $tf( "div.photo-wrap img" ).attr('src');
  var originv = $tf( ".tumblr_video_container iframe" ).attr('src');
  var verificador2 = $tf( ".post_notes" ).attr('class');
  if(verificador.indexOf("/image/") > 0){
    if (origin !== "undefined"){
      location.href = origin+"#undefined";
    }
    if (origint !== "undefined"){
      location.href = origint+"#undefined";
    }
    if (originv !== "undefined"){
      location.href = origint+"#undefined";
    }
    }
  if(verificador.indexOf("post/") > 0 && verificador == verificadorr){
      $tf('.related-posts-wrapper').each(function() {
    $tf(this).remove();
  });
    $tf( ".top-blog-header" ).parent().remove();
    $tf( "iframe[src*='analytics.html'],iframe[src*='login_check.html'],[src*='static.tumblr.com'],[src*='avatar'],.related-posts-wrapper,.tmblr-iframe.tmblr-iframe--controls.iframe-controls--desktop,.tmblr-iframe.tmblr-iframe--follow-teaser" ).remove();
    if (verificador2 !== "undefined"){
      //simplifica enlace
      $tf("#pic,img[src*='media.tumblr.com'],.stat-media-wrapper a img,.photo-slideshow.processed,.media img,[class*='pset'] img,.photopost a img,.faint,.post-content a .photo, .post-content .photo, .post-content a img, .post-content img, .post a img, .post img, .layout article div a img, .layout article div img, .photo p a img, .photo p img ").unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap();
      $tf(".post.photo_post .picture img,.photopost .highresphoto,.photo-wrapper-inner a img,.photo-wrapper-inner img,.photo.captioned .photo-wrapper img,.photo .photo-wrapper img,.masonry-brick .photo.hovering.hovers img").unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap();
      // Frames 
      $tf("iframe.photoset,iframe[src*='instagram'],[id^='photoset_'].photo-slideshow.processed,iframe.embed_iframe.tumblr_video_iframe").unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap();
      //compatibilidad de temas complicados
      $tf(".media a img,.photopost img").unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap();
      $tf("[class*='photo-post-photo,.photo a img']").unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap();
      //Solo Basura, quitar
      $tf("#blog_info,#blog_avatar,#menu,p,source,article,div,script,header,aside,footer,noscript,#ga_target,[class*='follow-teaser'],[class*='iframe-controls'],[class^='vjs'],section,scrip,figcaption").remove();
      $tf("img").each(function() {
            $tf(this).attr("class","deleteme");
            var imagefixset = $tf(this).attr("src");
            var imagefixsetII = $tf(this).attr("alt");
            $tf(this).parent().prepend(unescape("%3Ca class%3D%22imagerefix%22 href%3D%22"+imagefixset+"%22 target%3D%22blank_%22%3E%3Cimg src%3D%22"+imagefixset+"%22 alt%3D%22"+imagefixsetII+"%22 %2F%3E%3C%2Fa%3E"));
            $tf(this).remove();
          });
      
      $tf("body img").each(function() {
        var tercerix = $tf("body img").attr("srcset");
        $tf(this).attr("src",tercerix);
      });
      var secondfix = $tf("body img").attr("src");
      var tercerfix = $tf("body iframe.photoset").attr("src");
      var cuartfix = $tf("body iframe.embed_iframe.tumblr_video_iframe").attr("src");
      if(secondfix != "undefined"){
        if ( $tf("img").length > 1 && $tf("[id^='photoset_'].photo-slideshow.processed").length < 0) {
          var teston = $tf("body").html();
          console.log(teston); 
          $tf("body").append(unescape("%3Ciframe class%3D%22photoXset%22 id%3D%22potosetas%22 height%3D%22800%22 width%3D%221200%22 src%3D%22about%3Ablank%22%3E%3C%2Fiframe%3E"));
          $tf("img").remove();
          $tf("#potosetas").contents().find("body").append(teston);
          $tf("#potosetas").contents().find("img").each(function() {
            var surce = $tf(this).attr("src");
            var base1 = unescape("%3Ca href%3D%22"+surce+"%22 target%3D%22_blank%22%3E");
            var base2 = unescape("%3C%2Fa%3E");
            var dataorigen = unescape("%3Cimg src%3D%22"+surce+"%22 %2F%3E");
            $tf(this).parent().append(base1+dataorigen+base2);
            $tf(this).remove();
          });
          return false;
        }
        /*if ( $tf("img").length == 1 ) {
          //top.location.href = $tf("body img").attr("src");
          return false;
        }*/
      }
      
      if($tf("img").length == 1 && verificador.indexOf("undefined") < 0 && $tf("iframe").length < 1 && $tf("iframe.photoset").length < 1){
        top.location.href = $tf("body img").attr("src");
        return false;
      }
      if(cuartfix != "undefined" && verificador.indexOf("undefined") < 0 && $tf("img").length < 1 && $tf("iframe.photoset").length < 1){
        top.location.href = cuartfix;
        return false;
      }
      if($tf("iframe").length == 1 && verificador.indexOf("undefined") < 0 && $tf("iframe.embed_iframe.tumblr_video_iframe").length < 1){
        top.location.href = tercerfix;
        return false;
      }
      return false;
    }
  }
}

setTimeout(relatedfuck, 1000);

