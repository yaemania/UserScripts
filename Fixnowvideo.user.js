// ==UserScript==
// @name        Fixnowvideo
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://www.nowvideo.*/video/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $nv = jQuery.noConflict();


$nv(function() {
    $nv("a:contains('Download this video!')").remove();
  $nv( '#nav' ).each(function() {
    $nv( this ).remove();
  });
  $nv( '.video_details, .video_sharing, #footer, #header, #aad, #aad2, #fb-root, br, [id^="mis"]' ).each(function() {
    $nv( this ).remove();
  });
});