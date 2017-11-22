// ==UserScript==
// @name        Charburate cams - fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     https://es.chaturbate.com/*/
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $cb = jQuery.noConflict();

function GoSex() {
  var tomms = top.location.href;
  if(tomms.indexOf("-cams") < 1){
  $cb( '.chat-holder,.banner,#autocomplete_prefix,#emoticon_autocomplete,.footer-holder,#ignore_user_form,#change_title_form,#gaq,[id^="SwfStore_"],#facebox,.ad,.bio' ).each(function() {
    $cb( this ).remove();
  });
 /*   setTimeout(2000);
    $cb('#xmovie').each(function(){
      $cb(this).unwrap().unwrap().unwrap();
    });*/
  }
}

setTimeout(GoSex, 200);