// ==UserScript==
// @name        swfchan - fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://get.swfchan.org/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $sw = jQuery.noConflict();

function GoGet() {
  if (/\/\d+\/.+\.html/.test(window.location.href)){
    $sw( '#theFlash' ).each(function() {
      var surcer = $sw( this ).attr('src');
      window.location.href = surcer;
    });
  }
}

setTimeout(GoGet, 100);