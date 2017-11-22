// ==UserScript==
// @name        tumbrl refixvideos
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http*://*.tumblr.com/video/*
// @version     1
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// ==/UserScript==

var $tr = jQuery.noConflict();

function govidoe() {
  /*$tr('.related-posts-wrapper').each(function() {
    $tr(this).remove();
  });
  var redirecto = $tr('[id^="tumblr_video_container_"] iframe.embed_iframe.tumblr_video_iframe').attr('src');
  alert(redirecto);*/
  //top.window.location.href = redirecto;
  $tr('video[id^="embed-"]').each(function() {
    //$tr(this).unwrap().unwrap().unwrap().unwrap().unwrap().unwrap().unwrap();
    //$tr(this).attr('controls','true');
    var fuente = $tr(this).find('source').attr('src');
    window.top.location.href = fuente;
  });
  /*$tr('div, iframe, script').each(function() {
    $tr(this).remove();
  });*/
  /*$tr('section.related-posts-wrapper').each(function() {
    $tr(this).remove();
  });*/
}

setTimeout(govidoe, 3500);
