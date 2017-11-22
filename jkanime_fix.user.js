// ==UserScript==
// @name        jkanime fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://jkanime.net/*/
// @version     1
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// ==/UserScript==

var $jk = jQuery.noConflict();

function GoFext() {
  $jk('.video_right,.publibox, iframe[src*="facebook"],#moveboxr,.chat_title,.comment_like,.video_share').each(function() {
    $jk(this).remove();
  });
  $jk('#fb-root').each(function() {
    $jk(this).parent().remove();
  });
  $jk('.vervideo').each(function() {
    $jk(this).parent().attr('class','especial1');
  });
}

setTimeout(GoFext, 500);