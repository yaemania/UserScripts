// ==UserScript==
// @name        quitamierda
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://*oranline.com/*/enlace.php?*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $fu = jQuery.noConflict();

var newStyle = document.createElement("style");
newStyle.innerHTML = ".espanol{position:absolute!important;top:1em!important;left:36em!important;}body{background-color:#7A4732!important;}img{width:auto!important;height:5em!important;}p{border: 10px solid transparent;padding:15px;-webkit-border-image:url(http://www.auplod.com/u/doulap5cf41.png) 30 stretch;-o-border-image:url(http://www.auplod.com/u/doulap5cf41.png) 30 stretch;border-image:url(http://www.auplod.com/u/doulap5cf41.png) 30 stretch;}";
newStyle.setAttribute("id","miEstilo2");
$fu('body')[0].appendChild(newStyle);

$fu( 'body' ).each(function() {
  $fu('br').remove();
  $fu('font').remove();
  $fu('table').remove();
  $fu('span').remove();
  $fu('[style*="width:700px"]').remove();
  $fu('.clear').remove();
});