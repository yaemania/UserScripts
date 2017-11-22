// ==UserScript==
// @name        Tumi - Fix
// @namespace   Fix something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @include     *://tumi.tv/*
// @version     1
// @grant         unsafeWindow
// ==/UserScript==

var $tf = jQuery.noConflict();

$tf(function() {
    $tf('body div').first().attr('id','div1');
    $tf('div#footer').remove();
    $tf('div#container div center form iframe').remove();
    $tf('div#container div center form br').remove();
    $tf('div#container div center br').remove();
    $tf('#countdown_str span').html('1');
    $tf('#main center center').attr('id','div2');
    $tf('#file_title iframe').remove();
});

$tf( '#money' ).each(function() {
$tf( this ).remove();
});

$tf( '#banner' ).each(function() {
$tf( this ).remove();
});

$tf( '#hrzbanner' ).each(function() {
$tf( this ).remove();
});