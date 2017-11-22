// ==UserScript==
// @name        fixcannal
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://tv.tutv-porinternet.com/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

document.body.removeAttribute ("oncontextmenu");

var $fu = jQuery.noConflict();

function fuck(){
  $fu( '#ad' ).each(function() {
    $fu( this ).remove();
  });
  setTimeout(fucktwo, 500);
}
function fucktwo(){
  $fu( 'iframe' ).each(function() {
    $fu( this ).unwrap().unwrap().unwrap().unwrap().unwrap().unwrap();
  });
  /*$fu('iframe').unwrap();
  $fu('iframe').unwrap();
  $fu('iframe').unwrap();
  $fu('iframe').unwrap();
  $fu('iframe').unwrap();
  $fu('iframe').unwrap();*/
  $fu( 'script, a, div, p, span, noscript, head, style' ).each(function() {
    $fu( this ).remove();
  });
  $fu('iframe')[1].remove();
}

setTimeout(fucktwo, 500);