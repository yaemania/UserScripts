// ==UserScript==
// @name        InstagranFix
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     *://instagram.com/p/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $ig = jQuery.noConflict();


$ig( '.vCoverLayer' ).each(function() {
$ig( this ).remove();
});
