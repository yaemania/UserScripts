// ==UserScript==
// @name        ouo.io - fix
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://ouo.io/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $ou = jQuery.noConflict();

$ou( '#form-captcha' ).each(function() {
  var newButton = document.createElement('input');
  newButton.setAttribute('type','submit');
  newButton.setAttribute('value','submit');
  newButton.setAttribute('class','btn btn-main');
  $ou(this)[0].appendChild(newButton);
});