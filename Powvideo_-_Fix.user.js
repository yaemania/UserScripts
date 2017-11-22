// ==UserScript==
// @name        Powvideo - Fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://powvideo.net/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $pv = jQuery.noConflict();

function GoNext() {
  $pv( 'iframe, #footerRights, #oly, [style*="z-index: 2147483647"]' ).each(function() {
    $pv( this ).remove();
  });
}

setTimeout(GoNext, 1500);