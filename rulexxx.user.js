// ==UserScript==
// @name        Rule X-All
// @namespace   Fix something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @include     *.paheal.net/*
// @grant       unsafeWindow
// @version     1
// ==/UserScript==

$(function() {
    $('body article #main').remove();
  });

$(function() {
    $('#Friends_of_Pahealleft').remove();
  });