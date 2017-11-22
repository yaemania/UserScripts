// ==UserScript==
// @name        Remove Ads - Shorte
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://*ampclicks.com*
// @include     http://*ads.shorte.st*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $ra = jQuery.noConflict();

$ra( 'body' ).each(function() {
    $ra( this ).remove();
});
$ra( 'script' ).each(function() {
    $ra( this ).remove();
});
$ra( 'html' ).each(function() {
    $ra( this ).remove();
});