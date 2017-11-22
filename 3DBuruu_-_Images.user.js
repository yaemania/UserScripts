// ==UserScript==
// @name        3DBuruu - Images
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://behoimi.org/post/show/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $db = jQuery.noConflict();

$db( '#image' ).each(function() {
  $db( this ).attr('onclick','Post.highres(); return false');
});

$db( '#image' ).each(function() {
  var cosplayer = $db('.tag-type-model a').attr('href').replace(/.+title\=/gi,'');
  var norepetirfix1 = $db('#highres').attr('href').replace(/.+\/data\/([a-z][0-9]|[0-9][a-z]|[0-9]{2}|[a-z]{2})\/([a-z][0-9]|[0-9][a-z]|[0-9]{2}|[a-z]{2})\/(?:\d+[a-z]|[a-z]+\d)[a-z\d]{23}/gi,'');
  var norepetirfix2 = norepetirfix1.replace(/\.(jpg|png)/gi,'');
  var juntos = unescape(cosplayer + ' - ' + norepetirfix2);
  $db( this ).attr('alt',juntos);
});

$db( '#image' ).each(function() {
  var cosplay = $db('.tag-type-copyright a').attr('href').replace(/.+title\=/gi,'');
  var cosplaying = $db('.tag-type-character a').attr('href').replace(/.+title\=/gi,'');
  var cosplayer = $db('.tag-type-model a').attr('href').replace(/.+title\=/gi,'');
  var norepetirfix1 = $db('#highres').attr('href').replace(/.+\/data\/([a-z][0-9]|[0-9][a-z]|[0-9]{2}|[a-z]{2})\/([a-z][0-9]|[0-9][a-z]|[0-9]{2}|[a-z]{2})\/(?:\d+[a-z]|[a-z]+\d)[a-z\d]{23}/gi,'');
  var norepetirfix2 = norepetirfix1.replace(/\.(jpg|png)/gi,'');
  var juntos = unescape(cosplay + ' Of ' + cosplaying + ' By ' + cosplayer + ' - ' + norepetirfix2);
  $db( this ).attr('alt',juntos);
});