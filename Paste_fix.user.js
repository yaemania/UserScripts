// ==UserScript==
// @name        Paste fix
// @namespace   Fix Something
// @run-at      document-start
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://ivpaste.com/v/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $ip = jQuery.noConflict();

$bj( 'iframe' && '[src*="hpub-install_captcha.php"]' ).each(function() {
  $bj( this ).parent().remove();
});