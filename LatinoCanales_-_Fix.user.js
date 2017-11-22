// ==UserScript==
// @name        LatinoCanales - Fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://latino-webtv.com/embed/canales.php*
// @version     1
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// ==/UserScript==

var $lw = jQuery.noConflict();

function GoFacks() {
  $lw(document).ready(function(){
    $lw('#adb-enabled').remove();
    $lw('#adb-not-enabled').attr('style','display: block;');
    $lw('#video-player').unwrap();
    $lw('#video-player').unwrap();
    $lw('#video-player').unwrap();
    $lw('#video-player').unwrap();
    $lw('div, a, script,b,span,br').remove();

  });
}

setTimeout(GoFacks, 2000);