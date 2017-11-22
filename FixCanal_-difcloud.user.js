// ==UserScript==
// @name        FixCanal -difcloud
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://diftele-difcloud.rhcloud.com/embed/difcloud.xhtml*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $di = jQuery.noConflict();

function master(){
  $di( 'script,style,br,table,p,head,noscript,a,b' ).each(function() {
    $di( this ).remove();
  });
  $di('#contenedorindividual').unwrap();
  $di('#contenedorindividual').unwrap();
  $di('#contenedorindividual').unwrap();
  $di('#contenedorindividual').unwrap();
  $di('#contenedorindividual').unwrap();
  $di('#contenedorindividual').unwrap();
  $di( 'div, input' ).each(function() {
    $di( this ).remove();
  });
  $di('body').attr('onload','');
}

setTimeout(master, 1500);

