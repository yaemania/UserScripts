// ==UserScript==
// @name        shidurlive - fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     *://www.shidurlive.com/stream/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $sd = jQuery.noConflict();

function GoDeslink(){
  $sd( 'script, style, head, p, table,#divaz,#pingsts,#status,center' ).each(function() {
    $sd( this ).remove();
  });
    $sd( 'span, div' ).each(function() {
    $sd( this ).attr('style','');
  });
}

setTimeout(GoDeslink, 500);