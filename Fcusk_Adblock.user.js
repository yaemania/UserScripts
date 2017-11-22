// ==UserScript==
// @name        Fcusk Adblock
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http*://*ponlatv.com/embed.php*
// @version     1
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// ==/UserScript==

var $pt = jQuery.noConflict();

function GoFacks() {
  $pt(document).ready(function(){
    $pt('#jwplayer1').unwrap();
    $pt('#jwplayer1').unwrap();
    $pt('#jwplayer1').unwrap();
    $pt('#jwplayer1').unwrap();
    $pt('#jwplayer1').attr('style','display: block!important;width: 600px!important;height: 380px!important;');
    $pt('div, a, script,b,span,br').remove();
  });
}

setTimeout(GoFacks, 2000);