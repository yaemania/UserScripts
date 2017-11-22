// ==UserScript==
// @name        00_ Tny Pastes
// @namespace   Fix something
// @require     http://code.jquery.com/jquery-1.10.2.js
// @run-at      document-end
// @include     http://tny.cz/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var _pop = "";
var pop = "";
var _gaq = "";
var gaq = "";
var ga = "";
var q = "";

var $j = jQuery.noConflict();

/*
$j( document ).ready(function() {
    $j('body iframe').remove();
  $j('body script:q(1)').remove();
  });
*/
/*
$j( "body script" ).each(function() {
$j( this ).remove();
});
*/

$j( "#captcha_overlay" ).each(function() {
$j( this ).remove();
});

$j( "#fullwrapper script" ).each(function() {
$j( this ).remove();
});

$j( document ).ready(function() {
    $j('#pastecontainer br').remove();
});

$j(function() {
    $j("body").attr("id","MainBody");
});

$j( document ).ready(function() {
  $j('#MainBody script:eq(1)').remove();
});

var newDivInn = document.getElementById("thepaste").innerHTML;
var newDiv = document.createElement('a');
newDiv.innerHTML = newDivInn;
newDiv.setAttribute("id","Enlace_nuevo");
newDiv.setAttribute("target","_blank");
newDiv.setAttribute("href", newDivInn);
$j("#fullwrapper")[0].parentNode.appendChild(newDiv);

$j(function() {
    $j("#thepaste").attr("style","position:absolute!important; top:-999px!important; left:-999px!important; width:1px!important; height:1px!important; color:transparent!important; font-size:0.01px!important; font-size-adjust:0.01!important; background:none!important; background-color:transparent!important; background-image:none!important; background-repeat:no-repeat!important;display: none !important;visibility: hidden!important;");
});