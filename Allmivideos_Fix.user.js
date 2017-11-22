// ==UserScript==
// @name        Allmivideos Fix
// @namespace   Fix Something
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     http://allmyvideos.net/*
// @version     1
// @grant       unsafeWindow
// ==/UserScript==

var $av = jQuery.noConflict();


function cleanner(){
    $av( 'title, footer, #fb-root, .navbar, [id^="ad"], [class^="ad"], #related_videos, #movie-header, #embed_code' ).each(function() {
        $av( this ).remove();
    });
    $av( 'iframe' ).each(function() {
        $av( this ).parent().remove();
    });
}

setTimeout(cleanner, 1000)

/*
$av( '#content div div title' ).each(function() {
    $av( this ).parent().attr('id','beacon');
});

$av( '[class^="ad"]' ).each(function() {
    $av( this ).remove();
});
*/
/*
function scrub(links){
    if(links && links.length > 0){
        for(var i = 0; i < links.length; i++){
           links[i].setAttribute("src","");
           links[i].remove();
        }
    }
}

var observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            if(mutation.addedNodes){
                for(var i = 0; i < mutation.addedNodes.length; i++){
                    var parent = mutation.addedNodes[i].parentNode;
                    if(parent && parent.nodeType === 1){
                        scrub(parent.querySelectorAll("iframe"));
                    }
                }
            }
        });
    });
scrub(document.links);
observer.observe(document.body, {subtree: true, childList: true});
*/