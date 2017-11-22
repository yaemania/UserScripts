// ==UserScript==
// @name        SeriesBlanco - Fix
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://seriesblanco.*/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $sl = jQuery.noConflict();

function GoBlanco(){
  var windowx = top.window.location.href;
  var chek = windowx.replace(/.+\/serie\/.+/g,'serie');
  var capi = windowx.replace(/.+\/capitulo.+/g,'capitulo');
  var outx = windowx.replace(/.+\/enlacen\/.+/g,'enlacen');
  var outy = windowx.replace(/.+load_enlace.+/g,'loadenlace');
  if(chek == 'serie' && outx !== 'enlacen' && capi !== 'capitulo' && outy !== 'loadenlace'){
    //alert('serie');
  }
  if(capi == 'capitulo' && outx !== 'enlacen' && chek == 'serie' && outy !== 'loadenlace'){
    //alert('capitulo');
    $sl('img[src*="youwatch"],img[src*="flashx"],img[src*="openload"],img[src*="streamcloud"]').each(function(){
      $sl(this).parent().parent().parent().parent().parent().remove();
    });
    $sl('.grid_content.sno span a').each(function(){
      var surce = $sl(this).attr('href').replace(/.+enlacen\/(\d+)\/(\d+)\/(\d+)\/(\d+)\//,'http://seriesblanco.com/ajax/load_enlace.php?serie=$1&temp=$2&cap=$3&id=$4');
      $sl(this).attr('href',surce);
    });
    
  }
  if(outx == 'enlacen' && chek !== 'serie' && capi !== 'capitulo' && outy !== 'loadenlace'){
    //alert('enlace');
  }
  if(outy == 'loadenlace' && chek !== 'serie' && capi !== 'capitulo'){
    $sl('input.btn.btn-primary').each(function(){
      var chekout = $sl(this).attr('onclick').replace(/.+\(\"(.+)\".+/,'$1');
      top.window.location.href = chekout;
    });
  }
}
setTimeout(GoBlanco, 200);