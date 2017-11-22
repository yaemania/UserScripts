// ==UserScript==
// @name        hdfull enlace fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://hdfull.tv/ext/*
// @version     1
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// ==/UserScript==

var $sl = jQuery.noConflict();

//function GoLink() {
  top.location.href = $sl( '#external-link' ).attr('href');/*.each(function() {
    var phace1 = $sl(this).attr('onclick').replace(/.+http/gi,'http');
    var phase2 = phace1.replace(/\".+/gi,'');
    top.location.href = phase2;
  });
}

setTimeout(GoLink, 200);*/