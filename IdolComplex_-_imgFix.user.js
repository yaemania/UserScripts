// ==UserScript==
// @name        IdolComplex - imgFix
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     https://idol.sankakucomplex.com/post/show/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $ic = jQuery.noConflict();


function GoVideo() {
  $ic( 'video' ).each(function() {
    $ic(this).attr('controls','true');
  });
}

setTimeout(GoVideo, 1000);






/*$ic( '#image' ).each(function() {
  $ic( this ).attr('onclick','');
});

$ic( '#image' ).each(function() {
  var cosplayer = $ic('#site-title a').attr('href').replace(/\/post\//gi,'');
  var cosplayer2 = cosplayer2.attr('href').replace(/\//gi,'_');
  var norepetirfix1 = $ic('#highres').attr('href').replace(/.+\/data\/([a-z][0-9]|[0-9][a-z]|[0-9]{2}|[a-z]{2})\/([a-z][0-9]|[0-9][a-z]|[0-9]{2}|[a-z]{2})\/(?:\d+[a-z]|[a-z]+\d)[a-z\d]{23}/gi,'');
  var norepetirfix2 = norepetirfix1.replace(/\.(jpg|png|gif).+/gi,'');
  var juntos = unescape(cosplayer2 + ' - ' + norepetirfix2);
  $ic( this ).attr('alt',juntos);
});

$ic( '#image' ).each(function() {
  var cosplayer = $ic('.tag-type-idol a').attr('href').replace(/.+tags\=/gi,'');
  var norepetirfix1 = $ic('#highres').attr('href').replace(/.+\/data\/([a-z][0-9]|[0-9][a-z]|[0-9]{2}|[a-z]{2})\/([a-z][0-9]|[0-9][a-z]|[0-9]{2}|[a-z]{2})\/(?:\d+[a-z]|[a-z]+\d)[a-z\d]{23}/gi,'');
  var norepetirfix2 = norepetirfix1.replace(/\.(jpg|png|gif).+/gi,'');
  var juntos = unescape(cosplayer + ' - ' + norepetirfix2);
  $ic( this ).attr('alt',juntos);
});*/