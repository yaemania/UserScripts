// ==UserScript==
// @name        PelisFLV - Fix
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://www.peliculasonlineflv.net/pelicula/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $pf = jQuery.noConflict();

/*$pf(function() {
  $pf("#info").unwrap();
  $pf("#idioma").unwrap();
});*/

$pf( '#todo' ).each(function() {
$pf( 'center' ).remove();
});

$pf( '[id*="barraPlus"]' ).each(function() {
$pf( this ).remove();
});

$pf( '.publi' ).each(function() {
$pf( this ).remove();
});