// ==UserScript==
// @name                Yotube Image Acces
// @name:es             Youtube Acesso imagen
// @namespace           https://greasyfork.org/es/users/6729
// @run-at              document-end
// @require             https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include             https://www.youtube.com/*
// @include             http://www.youtube.com/*
// @exclude             https://www.youtube.com/embed/*
// @exclude             http://www.youtube.com/embed/*
// @version             0.9
// @description         help to get youtube default images hq,mq,lq.
// @description:es      Ayuda a bajar las imagenes delos videos en youtube
// @author              yaelmania
// @grant               unsafeWindow
// ==/UserScript==

var $yj = jQuery.noConflict();

/**************Original***************/
/*
function tubeimage(){
  $yj(document).ready(function() {
    var ETIQUETA_TEXTO={'ar':'صورة الفيديو','cs':'Obraz videa','de':'Video-Bild','en':'Video image','es':'Video imagen','fr':'Image vidéo','hi':'डवीडियो छवि','hu':'Videokép','id':'Gambar video','it':'Immagine video','ja':'ビデオ画像','ko':'비디오 이미지','pl':'Obraz wideo','pt':'Imagem de vídeo','ro':'Imagine video','ru':'Видео изображение','tr':'Video görüntüsü','zh':'视频图像'};
    var idiomas=document.documentElement.getAttribute('lang');
    var imagenImg = 'data:image/gif;base64,R0lGODlhCAAMAJEBAAAzmQAAAAAAAAAAACH5BAEAAAEALAAAAAAIAAwAAAIPjI+puwDqXorQIXpwliwUADs=';
    var imageText=(ETIQUETA_TEXTO[idiomas])?ETIQUETA_TEXTO[idiomas]:ETIQUETA_TEXTO['en'];
    var videoid = window.location.href;
    var filtroA = videoid.replace(/.+v=/gi,'');
    var filtroB = filtroA.replace(/&.+/gi,'');
    var newimgBox = document.createElement('li');
    newimgBox.setAttribute('id','ImgBox');
    newimgBox.setAttribute('class','watch-meta-item');
    newimgBox.innerHTML = ".";
    $yj('.watch-extras-section')[0].appendChild(newimgBox);
    $yj('#ImgBox').html('<h4 class="title">' + imageText + '</h4><ul class="content watch-info-tag-list"><a class="yt-uix-sessionlink spf-link g-hovercard" href="https://i.ytimg.com/vi/' + filtroB + '/maxresdefault.jpg" target="_blank"><img src="' + imagenImg + '"/>MaxQ Imagen</a> <a class="yt-uix-sessionlink spf-link g-hovercard" href="https://i.ytimg.com/vi/' + filtroB + '/hqdefault.jpg" target="_blank"><img src="' + imagenImg + '"/>HQ Imagen</a> <a class="yt-uix-sessionlink spf-link g-hovercard" href="https://i.ytimg.com/vi/' + filtroB + '/mqdefault.jpg" target="_blank"><img src="' + imagenImg + '"/>MQ Imagen</a> <a class="yt-uix-sessionlink spf-link g-hovercard" href="https://i.ytimg.com/vi/' + filtroB + '/default.jpg" target="_blank"><img src="' + imagenImg + '"/>Low Imagen</a></ul>');
  });
}
*/
//setTimeout(tubeimage, 500)


/**************Otro Paso Test***************/

function loaderImages(){
  $yj('#ImgBox').remove();
    var ETIQUETA_TEXTO={'ar':'صورة الفيديو','cs':'Obraz videa','de':'Video-Bild','en':'Video image','es':'Video imagen','fr':'Image vidéo','hi':'डवीडियो छवि','hu':'Videokép','id':'Gambar video','it':'Immagine video','ja':'ビデオ画像','ko':'비디오 이미지','pl':'Obraz wideo','pt':'Imagem de vídeo','ro':'Imagine video','ru':'Видео изображение','tr':'Video görüntüsü','zh':'视频图像'};
    var idiomas=document.documentElement.getAttribute('lang');
    var imagenImg = 'data:image/gif;base64,R0lGODlhCAAMAJEBAAAzmQAAAAAAAAAAACH5BAEAAAEALAAAAAAIAAwAAAIPjI+puwDqXorQIXpwliwUADs=';
    var imageText=(ETIQUETA_TEXTO[idiomas])?ETIQUETA_TEXTO[idiomas]:ETIQUETA_TEXTO['en'];
    var videoid = window.location.href;
    var filtroA = videoid.replace(/.+v=/gi,'');
    var filtroB = filtroA.replace(/&.+/gi,'');
    var newimgBox = document.createElement('li');
    newimgBox.setAttribute('id','ImgBox');
    newimgBox.setAttribute('class','watch-meta-item');
    newimgBox.innerHTML = ".";
    //$yj('.watch-extras-section')[0].appendChild(newimgBox);
  $yj('.watch-extras-section').prepend(newimgBox);
    $yj('#ImgBox').html('<h4 class="title">' + imageText + '</h4><ul class="content watch-info-tag-list"><a class="yt-uix-sessionlink spf-link g-hovercard" href="https://i.ytimg.com/vi/' + filtroB + '/maxresdefault.jpg" target="_blank"><img src="' + imagenImg + '"/>MaxQ Imagen</a> <a class="yt-uix-sessionlink spf-link g-hovercard" href="https://i.ytimg.com/vi/' + filtroB + '/hqdefault.jpg" target="_blank"><img src="' + imagenImg + '"/>HQ Imagen</a> <a class="yt-uix-sessionlink spf-link g-hovercard" href="https://i.ytimg.com/vi/' + filtroB + '/mqdefault.jpg" target="_blank"><img src="' + imagenImg + '"/>MQ Imagen</a> <a class="yt-uix-sessionlink spf-link g-hovercard" href="https://i.ytimg.com/vi/' + filtroB + '/default.jpg" target="_blank"><img src="' + imagenImg + '"/>Low Imagen</a></ul>');
}

$yj("*").click(function(){
  loaderImages();
});


setTimeout(loaderImages, 1500);
//setTimeout(markDown, 2500);
/**************Ficno***************/
function crapfix(){
  if (top.window.location.href.indexOf("nohtml5") > -1) {
    var urldireccion = window.location.href;
    var colagefinal = urldireccion.replace(/&nohtml5.+/gi,"");
    top.window.location.href = colagefinal;
  }
}
//setTimeout(crapfix, 200);
/**************OldHere***************/
$yj( '.video-player-view-component' ).each(function() {
 $yj(this).remove();
});
/**************QuitaRelates***************/
/*function markDown(){
  $yj( '.stat.view-count' ).each(function() {
    var geton = $yj(this).text();
    if(geton.indexOf("Recomendado") >-1){
      $yj(this).remove();
    }
  });
  setTimeout(markDown, 7000);
}
*/