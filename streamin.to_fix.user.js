// ==UserScript==
// @name        streamin.to fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://streamin.to/*
// @version     1
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// ==/UserScript==

var $st = jQuery.noConflict();

function fuckyou() {
  $st('a[href*="analytics"]').each(function() {
    $st(this).remove();
  });
}
setTimeout(fuckyou, 500);