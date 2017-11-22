﻿// ==UserScript==
// @name           Youtube keepvid button
// @namespace      Guile93
// @description    Simply add a "K" button to send url to keepvid, ready to dl video
// @include        http://*youtube.*/*watch*
// @include        https://*youtube.*/*watch*
// @version        1.2
// @author Guile93
// ==/UserScript==

// ==ChangeLog==
// @history        1.2 Updated headers.
// ==/ChangeLog==

var video=window.location.href;
var newLink = document.createElement("a");
newLink.href="http://www.keepvid.com/?url="+video;
newLink.target="_blank";
var new_img = document.createElement("img");
new_img.class="yt-uix-tooltip-reverse  yt-uix-button yt-uix-button-default yt-uix-tooltip";
new_img.src="data:image/png;base64,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";
    new_img.title="DL with Keepvid";
new_img.alt="DL with Keepvid";
newLink.appendChild(new_img);
var b1=document.getElementById("watch-actions-right");
var b2=document.getElementsByClassName("watch-view-count")[0];
if(b1){
    b1.appendChild(newLink);
}else{
    b2.appendChild(newLink);
}