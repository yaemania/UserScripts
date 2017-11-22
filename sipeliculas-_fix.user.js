// ==UserScript==
// @name        sipeliculas- fix
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://www.sipeliculas.com/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $si = jQuery.noConflict();

$si( '.frame-sp' ).each(function() {
$si( this ).parent().remove();
});