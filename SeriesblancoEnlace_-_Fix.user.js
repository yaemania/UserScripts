// ==UserScript==
// @name        SeriesblancoEnlace - Fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     *//seriesblanco.*/enlace*/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $sb = jQuery.noConflict();

function GoLink() {
  $sb( '.post-body.entry-content table tbody tr td input' ).each(function() {
    $sb( this ).attr('id','getlinker');
  });
  $sb( 'input[value^="Ver"]' ).each(function() {
    var phace1 = $sb(this).attr('onclick').replace(/.+http/gi,'http');
    var phase2 = phace1.replace(/\".+/gi,'');
    top.location.href = phase2;
  });
}

setTimeout(GoLink, 200);