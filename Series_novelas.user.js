// ==UserScript==
// @name        Series novelas
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://www.verseriesynovelas.com/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $sn = jQuery.noConflict();


$sn( '[href*="goto/"]' ).each(function() {
$sn( this ).parent().remove();
});

$sn( '[id*="aim"] center' ).each(function() {
$sn( 'iframe' ).parent().remove();
});

$sn( '[id*="aim"] div' ).each(function() {
$sn( 'iframe' ).parent().remove();
});

$sn( '[src*="streamcloud.eu"]' ).each(function() {
$sn( this ).parent().parent().remove();
});