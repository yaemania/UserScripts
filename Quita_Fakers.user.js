// ==UserScript==
// @name        Quita Fakers
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://tutvgratis.tv/embed/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $qf = jQuery.noConflict();

/*if (top.location != location) {
  top.location.href = document.location.href ;
}
*/
$qf( 'body a' ).each(function() {
  $qf( '.bembedplayer' ).remove();
  $qf( '.logofloat' ).remove();
});

$qf( 'body div' ).each(function() {
  $qf( '#nvoad' ).remove();
});