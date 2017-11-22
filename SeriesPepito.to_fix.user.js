// ==UserScript==
// @name        SeriesPepito.to fix
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://www.seriespepito.to/s/ngo/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $sp = jQuery.noConflict();

$sp( '[class="btn btn-mini enlace_link"]' ).each(function() {
  $sp( this ).attr("target","_self");
});