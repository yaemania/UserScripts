// ==UserScript==
// @name        Peliculas Fixer
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://www.latinofilmsweb.com/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $pf = jQuery.noConflict();

function GoFix() {
  $pf( '.post-header, script, br, a, #navbar, #Header1, #Attribution1, #comments, .widget-content, ol, #ad_banner, #adsdiv, strong' ).each(function() {
    $pf(this).remove();
  });
}
setTimeout(GoFix, 1500);