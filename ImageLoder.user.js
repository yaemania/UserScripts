// ==UserScript==
// @name        ImageLoder
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://imgcandy.net/img*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $il = jQuery.noConflict();

setTimeout(myFunction, 2000);

setTimeout(function(){ $il( '#container center img.centred' ).each(function() { $il( this ).unwrap();});,3000});