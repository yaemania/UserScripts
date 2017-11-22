// ==UserScript==
// @name        FileNuke
// @namespace   Fix something
// @run-at      document-end
// @include     http://filenuke.com/f/*
// @version     1
// @grant       none
// ==/UserScript==

var boxing = document.getElementsByClassName("cont_block");
for (var i = 0; i < boxing.length; i++) {
boxing[i].setAttribute("id","cont_block");
}

var generaid1 = document.getElementById("cont_block");
var generaid1Sub = generaid1.getElementsByTagName("table");
generaid1Sub[0].setAttribute("id","cont_block_table");

document.getElementById("cont_block_table").setAttribute("style","position:absolute!important; top:-999px!important; left:-999px!important; width:1px!important; height:1px!important; color:transparent!important; font-size:0.01px!important; font-size-adjust:0.01!important; background:none!important; background-color:transparent!important; background-image:none!important; background-repeat:no-repeat!important;");

var newDescargas = document.createElement('form');
newDescargas.setAttribute("id","ver_download")
newDescargas.setAttribute("action","")
newDescargas.setAttribute("method", "POST")
document.getElementById("cont_block").appendChild(newDescargas);

var newImage = document.createElement('input');
newImage.setAttribute("id","descargar")
newImage.setAttribute("type","submit")
newImage.setAttribute("value","Click Aqui Para Ver El video...")
newImage.setAttribute("class","btn-big2-2")
newImage.setAttribute("name","method_free")
document.getElementById("ver_download").appendChild(newImage);
