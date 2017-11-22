// ==UserScript==
// @name        QuitaPubli-Goglesearch
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     https://www.google.com.mx/search?*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $gx = jQuery.noConflict();


function mataads(){
  $gx( '#tads' ).each(function() {
    $gx( this ).parent().parent().remove(); //.attr('href',quemon);
  });
  $gx( '#bottomads, #reviewDialog, #mbEnd' ).each(function() {
    $gx( this ).remove(); //.attr('href',quemon);
  });
  $gx( 'iframe' ).each(function() {
    $gx( this ).attr('src','http://nada.com');
  });
  /*$gx( '[href*="shutterstock"]' ).each(function() {
    $gx( this ).parent().remove();
  });*/
}
setTimeout(mataads, 500)