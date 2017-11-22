// ==UserScript==
// @name        TodoAnimes
// @namespace   Fixea Pagina
// @description Corrige, edita, borra elementos  web
// @include     http://todoanimes.com/anime/*
// @version     1
// @grant       none
// ==/UserScript==

$(function() {
    $('ul.lstli-btnsanim').remove();
  });

$(function() {
    $('div.cont div iframe').remove();
  });