// ==UserScript==
// @name        Prem.link FixDown
// @namespace   Fix Somthing
// @description Fix some Shit
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     http://prem.link/*ajax/action.php
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $pl = jQuery.noConflict();

function GoNext() {
  //var origin = $pl('body').text();
  //string = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
  //var getphase1 = origin.replace(/.+\:\"http\:/g,'http:');
  var jsonfuck = $pl('pre.data').html();
  var getphase1 = jsonfuck.replace(/.+url\"\:\"http/g,'http:');
  var stringX = getphase1.replace(/\"\,\"runtime.+/g,'');
  var string2 = stringX.replace(/\\/gi,'');
  $pl( "body" ).html("<a href='"+string2+"' target='_blank'>Get File</a>");
}

setTimeout(GoNext, 500);