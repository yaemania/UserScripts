// ==UserScript==
// @name        quita outs
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://www.vulvatube.com/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $qo = jQuery.noConflict();

function killer(){
  $qo( '.itemContainerSub a' ).each(function() {
    var getone = $qo( this ).attr('href').replace(/.+\&u\=/gi,'');
    var gettwo = getone.replace(/\?.+/gi,'');
    $qo( this ).attr('href',gettwo )
});
}

setTimeout(killer, 1000)