// ==UserScript==
// @name        e-hentai - imgFixName
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://g.e-hentai.org/s/*/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $eh = jQuery.noConflict();

$eh(document).ready(function() {
  var nameExtrae = $eh('.sni h1').html();
  var contador = window.location.href;
  var filtro = contador.replace(/.+\-/gi,'');
  $eh('#img').attr('alt',nameExtrae + filtro);
  $eh('#img').unwrap();
});

/*
$eh( '#img' ).each(function() {
    $eh( this ).unwrap();
});
*/