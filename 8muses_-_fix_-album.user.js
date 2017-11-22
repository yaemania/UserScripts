// ==UserScript==
// @name        8muses - Fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     *//www.8muses.com/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $ms = jQuery.noConflict();

function Mastered() {
  cheker();
  
// A la mierda Publicidad
  $ms( 'div[style*=";base64,"],.image-box.image-a.t-hover,.a-image,[href*="adBlockers"],[class^="top-warnin"],noscript' ).each(function() {
      $ms( this ).remove();
    });
    $ms( '.image-box.t-hover .image script[src*="/ads."]' ).each(function() {
      $ms( this ).parent().parent().remove();
    });
  $ms( '.image-title.members-only' ).each(function() {
      $ms( this ).parent().remove();
  });
  /*$ms( 'a.image-box.t-hover' ).each(function() {
      $ms( this ).attr('id','originL');
  });*/
  if($ms( '.photo a .image').length){
  var fuente = $ms( '.photo a .image').attr('src');
  top.location.href = fuente;
  }
  setTimeout(resemble, 3000);
}

function resemble(){
  $ms(document).scrollTop($ms(document).height());
  var linkdirecto = $ms('.image-box.t-hover').attr('href');
  var nameAlbum = $ms('title').text().replace(/ \|.+/g,'');
  var albumtipe = top.location.href;
  var damien = albumtipe.replace(/.+album\//g,'');
  var damientwo = damien.replace(/\/.+/g,'');
  damientwo = damientwo.toLowerCase().replace(/\b[a-z]/g, function(letter) {return letter.toUpperCase();});
  $ms('title').text(damientwo+' - '+nameAlbum);
  if(linkdirecto.indexOf('/picture/') > -1){
  $ms('.image-box.t-hover').each(function(){
    var duink = $ms(this).find('img');
    duink.attr('alt',damientwo+' - '+nameAlbum);
    var trimm = duink.attr('src').replace(/\/th\//gi,'/fu/small/');
    $ms(this).attr('href',trimm);
  });
    
  }

}

function cheker(){
  if ($ms('body .inner-wrap .container-fluid.adblockman .dontcare:contains("AdBlocker")').length > 0) {
    top.location.href = top.location.href; //location.reload();
    return false;
  }
  else{
  return;
  }
}

setTimeout(Mastered, 1000);