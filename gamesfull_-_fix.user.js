// ==UserScript==
// @name        gamesfull - fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://gamesfull.org/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $gf = jQuery.noConflict();

function GotFix() {
  $gf( '#video-background,[href*="steampowered.com"],#fb-root,#footer,#FondoArriba,#FondoVideo,[id^="_waus"],#facebook-jssdk' ).each(function() {
    $gf( this ).remove();
  });
  $gf( 'a' ).each(function() {
    var enlacex = $gf( this ).attr('href');
    if (enlacex == ''){
      $gf( this ).remove();
    }
  });
}

setTimeout(GotFix, 500);