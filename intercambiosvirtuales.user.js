// ==UserScript==
// @name        intercambiosvirtuales
// @namespace   Fix something
// @run-at      document-end
// @include     http://www.intercambiosvirtuales.org/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var tubelink = document.getElementById("ytlink")[0].getAttribute("href");
var tubelinkx = tubelink.replace(/embed\//gi,"watch?v=");
var tubelinky = tubelinkx.replace(/?feature=player_embedded/gi,"");
var remplacelink = document.getElementById("ytlink");
remplacelink[0].setAttribute("href",tubelinky);
