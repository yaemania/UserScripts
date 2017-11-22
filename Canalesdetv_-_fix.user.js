// ==UserScript==
// @name        Canalesdetv - fix
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://www.canalesdetv.info/
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $ct = jQuery.noConflict();

$ct( '[class*="sidebar"],[id*="sidebar"]' ).each(function() {
$ct( this ).remove();
});