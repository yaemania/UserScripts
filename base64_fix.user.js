// ==UserScript==
// @name        base64 fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://www.yellowpipe.com/yis/tools/encrypter/index.php
// @version     1
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// ==/UserScript==

var $bf = jQuery.noConflict();

function GoNext() {
  $bf( 'select[name="cryptmethod"] option[value="asc2bin"]' ).attr('value','b64dec');
  $bf( 'select[name="cryptmethod"] option[value="asc2bin"]' ).text('Base 64 Decode');
}

setTimeout(GoNext, 2500);