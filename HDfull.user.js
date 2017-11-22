// ==UserScript==
// @name        HDfull
// @namespace   Fix somthing
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://hdfull.tv/serie/*
// @include     http://hdfull.tv/pelicula/*
// @include     http://hdfull.tv/*
// @exclude     http://hdfull.tv/ext/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var runmehead = document.getElementsByTagName("html");
for (var i = 0; i < runmehead.length; i++) {
    runmehead[i].setAttribute("class","");
    runmehead[i].setAttribute("prefix","");
}

var $hf = jQuery.noConflict();

$hf( '.embed-selector' ).each(function() {
$hf( this ).attr("onclick","")
});

$hf( '[id*="videoBox"]' ).each(function() {
$hf( this ).parent().remove();
});

$hf( '.tv-wrapper,#shadow,.embed-movie' ).each(function() {
$hf( this ).remove();
});

$hf( '[style*="streamcloud.eu"]' ).each(function() {
$hf( this ).parent().parent().parent().remove();
});


$hf(document).ready(function(){
        var newstylex = document.createElement('style');
        newstylex.innerHTML = ".scrollupl{width:52px; height:52px;opacity:0.4;position:fixed;bottom:35px;left: 60px;display:none; text-indent:-9999px;background: url('data:image/png;base64,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') no-repeat;} .scrollupr{width:52px; height:52px;opacity:0.4;position:fixed;bottom:35px;right: 60px;display:none; text-indent:-9999px;background: url('data:image/png;base64,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') no-repeat;} .scrollupr:hover{opacity:1;} .scrollupl:hover{opacity:1;}";
        $hf("body")[0].appendChild(newstylex);
        
        var newstylex2 = document.createElement('style');
        newstylex2.innerHTML = "#summary-fanart-wrapper {height: 250px!important;overflow-y:hidden!important;background-attachment: fixed!important;background-position:center top !important;background-repeat: no-repeat!important;}";
        $hf("body")[0].appendChild(newstylex2);
  
        var newAl = document.createElement('a');
        newAl.innerHTML = ".";
        newAl.setAttribute("id","scrollupl");
        newAl.setAttribute("href","#");
        newAl.setAttribute("class", "scrollupl");
        $hf("body")[0].appendChild(newAl);
  
        var newAr = document.createElement('a');
        newAr.innerHTML = ".";
        newAr.setAttribute("id","scrollupr");
        newAr.setAttribute("href","#");
        newAr.setAttribute("class", "scrollupr");
        $hf("body")[0].appendChild(newAr);
    
        $hf(window).scroll(function(){
            if ($hf(this).scrollTop() > 200) {
                $hf('.scrollupl, .scrollupr').fadeIn();
            } else {
                $hf('.scrollupl, .scrollupr').fadeOut();
            }
        });
 
        $hf('.scrollupl, .scrollupr').click(function(){
            $hf("html, body").animate({ scrollTop: 0 }, 400);
            return false;
        });
 
    });

function clennerlink(){
  $hf( '.embed-movie' ).each(function() {
    $hf( this ).remove();
  });
  $hf( '[id^="embed-selector-"]' ).each(function() {
    var sustenta = $hf( this ).attr('id').replace(/\d+/g,'');
    $hf( this ).attr('id',sustenta);
  });
  var Base64 = {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
  $hf( '.current.right a[href^="http://hdfull.tv/ext"]' ).each(function() {
    var string = $hf( this ).attr('href').replace(/.+\/ext\//gi,'');
    var decodedString = Base64.decode(string);
    console.log(decodedString);
    $hf(this).attr('href',decodedString);
  });
}
setTimeout(clennerlink, 500);
