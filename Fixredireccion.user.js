// ==UserScript==
// @name        Fixredireccion
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://re-direcciona.me/r/*
// @exclude     http://re-direcciona.me/o/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $rm = jQuery.noConflict();


function golink(){
  top.location.href = $rm( '#oculto a' ).attr('href');
}
setTimeout(golink, 500)