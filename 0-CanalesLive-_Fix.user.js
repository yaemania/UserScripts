// ==UserScript==
// @name        0-CanalesLive- Fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     *://*latino4ever.com*
// @include     *://*clubmovieshd.com*
// @include     *://*latinocanaleshd.com*
// @include     *://*peliculas720.net*
// @include     *://*moviespremiumhd.com*
// @include     *://tuscanalesd.ucoz.org*
// @include     *://*films-latino.com*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $cF = jQuery.noConflict();

function chunky(){
  /*$cF( '#player_hls_wrapper, #container, embed, #vsPlayer, object' ).each(function() {
    $cF( this ).attr('style','min-height: 21em!important;max-height: 26em!important;min-width: 34em!important; max-width: 38em!important;height:22em!important;width:26em!important;');
  });
  //alert("Ok - 1");
  $cF( 'iframe' ).each(function() {
    $cF( this ).unwrap();
  });
  //alert("Ok - 2");
  $cF( '#navbar, #Header1, #Attribution1, #blog-pager, #comments, #menuarriba, #menuarriba, #navi1, #floatLayer' ).each(function() {
    $cF( this ).html('');
  });
  //alert("Ok - 3");
  $cF( '#navi1,[id*="Attribution"],#menuarriba,#blog-pager,#Header1,#HTML1,#post-feeds,#comments,#RTCExecuted,.post-header,#ad_overlay,.widget-content,#navbar,.post-feeds,.clear,br,a,.post-footer,[style="clear: both;"]' ).each(function() {
    $cF( this ).remove();
  });
  //alert("Ok - 4");
  */
  $cF( '[class*="post hentry"]' ).each(function() {
    $cF( this ).attr('id','None');
    $cF( this ).attr('class','None');
    $cF( this ).attr('itemtype','');
    $cF( this ).attr('itemscope','');
  });
  //alert("Ok - 5");
  $cF( '#None iframe' ).each(function() {
    $cF( this ).attr('id','nucar');
  });
  //alert("Ok - 6");
  $cF( '#nucar' ).each(function() {
  var fuente = $cF( this).attr('src');
  var nuevoframe = document.createElement('iframe');
  nuevoframe.setAttribute('id','framenew');
  nuevoframe.setAttribute('width',600);
  nuevoframe.setAttribute('height',385);
  nuevoframe.setAttribute('frameborder',0);
  nuevoframe.setAttribute('allowtransparency','true');
  nuevoframe.setAttribute('scrolling','no');
  nuevoframe.setAttribute('src',fuente);
  $cF('html')[0].appendChild(nuevoframe);
  $cF( 'body, head' ).remove();
  });
  //alert("Ok - 7");
  $cF( 'body' ).each(function() {
    $cF( this ).attr('onkeydown','');
  });
}

setTimeout(chunky, 500);