// ==UserScript==
// @name        Eza's Tumblr Scrape
// @namespace   https://inkbunny.net/ezalias
// @description Creates a new page showing just the images from any Tumblr 
// @license     MIT
// @license     Public domain / No rights reserved
// @include     http://*?ezastumblrscrape*
// @include     https://*?ezastumblrscrape*
// @include     http://*/ezastumblrscrape*
// @include     http://*.tumblr.com/
// @include     https://*.tumblr.com/
// @include     http://*.tumblr.com/page/*
// @include     https://*.tumblr.com/page/*
// @include     http://*.tumblr.com/tagged/*
// @include     https://*.tumblr.com/tagged/*
// @include     http://*.tumblr.com/archive
// @include     http://*.co.vu/*
// @exclude    *imageshack.us*
// @exclude    *imageshack.com*
// @grant        GM_registerMenuCommand
// @version     5.2
// ==/UserScript==



// Create an imaginary page on the relevant Tumblr domain, mostly to avoid the ridiculous same-origin policy for public HTML pages. Populate page with all images from that Tumblr. Add links to this page on normal pages within the blog. 

// This script also works on off-site Tumblrs, by the way - just add /archive?ezastumblrscrape?scrapewholesite after the ".com" or whatever. Sorry it's not more concise. 



// Make it work, make it fast, make it pretty - in that order. 

// TODO: 
// I'll have to add filtering as some kind of text input... and could potentially do multi-tag filtering, if I can reliably identify posts and/or reliably match tag definitions to images and image sets. 
	// This is a good feature for doing /scrapewholesite to get text links and then paging through them with fancy dynamic presentation nonsense. Also: duplicate elision. 
	// I'd love to do some multi-scrape stuff, e.g. scraping both /tagged/homestuck and /tagged/art, but that requires some communication between divs to avoid constant repetition. 
// I should start handling "after the cut" situations somehow, e.g. http://banavalope.tumblr.com/post/72117644857/roachpatrol-punispompouspornpalace-happy-new
	// Just grab any link to a specific /post. Occasional duplication is fine, we don't care. 
	// Wait, shit. Every theme should link to every page. And my banavalope example doesn't even link to the same domain, so we couldn't get it with raw AJAX. Meh. It's just a rare problem we'll have to ignore. 
	// http://askleijon.tumblr.com/ezastumblrscrape is a good example - lots of posts link to outside images (mostly imgur) 
// I could detect "read more" links if I can identify the text-content portion of posts. links to /post/ pages are universal theme elements, but become special when they're something the user links to intentionally. 
	// for example: narcisso's dream on http://cute-blue.tumblr.com/ only shows the cover because the rest is behind a break. 
	// post-level detection would also be great because it'd let me filter out reblogs. fuck all these people with 1000-page tumblrs, shitty animated gifs in their theme, infinite scrolling, and NO FUCKING TAGS. looking at you, http://neuroticnick.tumblr.com/post/16618331343/oh-gamzee#dnr - you prick. 
	// Look into Tumblr Saviour to see how they handle and filter out text posts. 
// Should non-image links from images be gathered at the top of each 'page' on the image browser? E.g. http://askNSFWcobaltsnow.tumblr.com links to Derpibooru a lot. Should those be listed before the images?
	// I worry it'd pick up a lot of crap, like facebook and the main page. More blacklists / whitelists. Save it for when individual posts are detected. 
// ScrapeWholeSite: 10 pages at once by doing 10 separate xmlhttpwhatever objects, waiting for each to flip some bit in a 10-bool array? Clumsy parallelism. Possibly recursion, if the check for are-we-all-done-yet is in the status==4 callback. 
	// I should probably implement a box and button for choosing lastpage, just for noob usability's sake. Maybe it'd only appear if pages==2. 
// Add a convenient interface for changing options? "Change browsing options" to unhide a div that lists every ?key=value pair, with text-entry boxes or radio buttons as appropriate, and a button that pushes a new URL into the address bar and re-hides the div. Would need to be separate from thumbnail toggle so long as anything false is suppressed in get_url or whatever. 
// Dropdown menus? Thumbnails yes/no, Pages At Once 1-20. These change the options_map settings immediately, so next/prev links will use them. Link to Apply Changes uses same ?startpage as current. 
	// Could I generalize that the way I've generalized Image Glutton? E.g., grab all links from a Pixiv gallery page, show all images and all manga pages. 
	// Possibly @include any ?scrapeeverythingdammit to grab all links and embed all pictures found on them. single-jump recursive web mirroring. (fucking same-domain policy!) 
// now that I've got key-value mapping, add a link for 'view original posts only (experimental).' er, 'hide reblogs?' difficult to accurately convey. 
	// make it an element of the post-scraping function. then it would also work on scrape-whole-tumblr. 
	// better yet: call it separately, then use the post-scraping function on each post-level chunk of HTML. i.e. call scrape_without_reblogs from scrape_whole_tumblr, split off each post into strings, and call soft_scrape_page( single_post_string ) to get all the same images. 
		// or would it be better to get all images from any post? doing this by-post means we aren't getting theme nonsense (mostly). 
	// maybe just exclude images where a link to another tumblr happens before the next image... no, text posts could screw that up. 
	// general post detection is about recognizing patterns. can we automate it heuristically? bear in mind it'd be done at least once per scrape-page, and possibly once per tumblr-page. 
// Add picturepush.com to whitelist - or just add anything with an image file extension? Once we're filtering duplicates, Facebook buttons won't matter. 
// user b84485 seems to be using the scrape-whole-site option to open image links in tabs, and so is annoyed by the 500/1280 duplicates. maybe a 'remove duplicates' button after the whole site's done?
	// It's a legitimately good idea. Lord knows I prefer opening images in tabs under most circumstances.  
	// Basically I want a "Browse Links" page instead of just "grab everything that isn't nailed down." 
// http://mekacrap.tumblr.com/post/82151443664/oh-my-looks-like-theres-some-pussy-under#dnr - lots of 'read more' stuff, for when that's implemented. 
// eza's tumblr scrape: "read more" might be tumblr standard. 
	// e.g. <p class="read_more_container"><a href="http://ladylovelycocks.tumblr.com/post/66964089115/stupid-comic-continued-under-readmore-more" class="read_more">Read More</a></p> 
	// http://c-enpai.tumblr.com/ - interesting content visible in /archive, but every page is 'themed' to be a blank front page. wtf. 
// "Scrape" link should appear in /archive, for consistency. Damn thing's unclickable on some themes. 
// why am I looking for specific domains to sort to the front? imgur, deviantart, etc. - just do it for any image that's not on *.tumblr.com, fool. 
// chokes on multi-thousand-page tumblrs like actual-vriska, at least when listing all pages. it's just link-heavy text. maybe skip having a div for every page and just append to one div. or skip divs and append to the raw document innerHTML. it could be a memory thing, if ajax elements are never destroyed. 
// multi-thousand-page tumblrs make "find image links from all pages" choke. massive memory use, massive CPU load. ridiculous. it's just text. (alright, it's links and ajax requests, but it's doggedly linear.) 
	// maybe skip individual divs and append the raw pile-of-links hypertext into one div. or skip divs entirely and append it straight to the document innerHTML.
	// could it be a memory leak thing? are ajax elements getting properly released and destroyed when their scope ends? kind of ridiculous either way, considering we're holding just a few kilobytes of text per page. 
	// try re-using the same ajax object. 
// Expand options_url to take an arbitrary list of key,value,key,value pairs. 
/* Assorted notes from another text file
. eza's tumblr scrape - testing open-loop vs. closed-loop updating for large tumblrs. caffeccino has 200-ish pages. from a cached state, and with stuff downloading, getting all 221 the old way takes 8m20s and has noticeable slowdown past 40-ish. new method takes 16m and is honestly not very fast from the outset. the use of a global variable might cause ugly locking. with js, who knows. 
. eza's tumblr fixiv? de-style everything by simply erasing the <style> block. 
. window.location has several sub-properties like pathname, search, and hash that may obviate string fuckery in eza's tumblr scrape. - https://developer.mozilla.org/en-US/docs/Web/API/Location#wikiArticle
. eza's tumblr scrape - test finishing whole page for displaying updates. (maybe only on ?scrapewholesite.) probably not too smart, but an interesting benchmark. only ever one document.body.innerHTML=thing;. 
. eza's tumblr scrape - ideal form of ajax function is 'var onchange = function(){dostuff}; my_ajax_function( url, onchange )'. all that's ever different is what happens when the request state changes.
. eza's tumblr scrape - support text-scraping 100 pages at once. re-use pagesatonce? lastpage? needs a startpage anyway. (might need to come after fixing the options changer, since otherwise the 'scrape whole tumblr' link in the thumbnail view would have weird side-effects.) 
. eza's tumblr scrape: definitely do everything-at-once page write for thumbnail/browse mode. return one list of urls per page, so e.g. ten separate lists. remove duplicates between all lists. then build the page and do a single html write. prior to that, write 'fetching pages...' or something. it should be pretty quick. it's not like it's terribly responsive when loading pages anwyay. scrolling doesn't work right. 
	. thinking e.g. http://whatdoesitlumpingmean.tumblr.com/archive?startpage=1?pagesatonce=10?find=/tagged/my-art?ezastumblrscrape?thumbnails which has big blue dots on every post.
	. see also http://herblesbians.tumblr.com/ with its gigantic tall banners  
	. alternate solution: check natural resolution, don't downscale tiny / narrow images. 
. eza's tumblr scrape: why doesn't the thumbnail page pick up mspadventures.com gifs? e.g. http://kitkaloid.tumblr.com/page/26, with tavros's face being 'dusted.' 
*/
// Soft_scrape_page should return non-image links from imgur, deviantart, etc., then collect them at the bottom of the div in thumbnail mode. 
	// links to embedded videos? linkdump at top, just below the /page link. looks like https://www.tumblr.com/video_file/119027046245/tumblr_nlt061qtgG1u32sbu/480 - e.g. manyakis.tumblr. 
// Tumblr has a standard mobile version. Fuck me, how long has that been there? example.tumblr.com/mobile, no CSS, bare image links. Shit on the fuck. 
	// Hey hey! This might allow trivial recognition of individual posts and reblogs vs. OC. Via, but no source... weak. Good enough for us, though. 
	// Every post is between a <p> and </p>, but can contain <p></p> blocks inside. Messy.
	// Reblogs say "(via <a href='http//example.tumblr.com/123456'>example</a>)" and original posts don't. 
	// Dates are noted in <h2> blocks, but they're outside any <p> blocks, so who cares. 
	// Images are linked (all in _500, grr, but we can obviously deal with that) but posts aren't. Shame. That would've been useful. 
	// Shit, consider the basics... do tags works? Pagination is just /mobile/page/2, etc. with tags: example.tumblr.com/tagged/homestuck/page/2/mobile. 
	// Are photosets handled correctly? What about read-more links? Uuugh, photosets just appear as "[video]". Literally that text. No link. Fuck! So close, aaand useless. 
	// I can use /mobile instead of /archive, but there's no point. It breaks favicons and I still have to fetch the fat-ass normal pages. 
	// I can probably use mobile pages to match normal pages, since they... wait, are they guaranteed to have the same post count? yes. alice grove has one post per page. 
		// So to find original posts, I have to fetch both normal and mobile pages, and... shit, and consistently separate posts on normal pages. It has to be identical. 
	// I can also use mobile for page count, since it's guaranteed to have forward / backward links. Ha! We can start testing at 100! 
	// Adding /mobile even works on individual posts. You can get a via link from any stupid theme. Yay. 
		// Add "show via/source links" or just "visit mobile page" as a Greasemonkey action / script command? 
	// Tumblr's own back/forward links are broken in the mobile theme. Goes to: /mobile/tagged/example. Should go to: /tagged/example/mobile. Modify those pages. 
// 	http://thegirlofthebeach.tumblr.com/archive - it's all still there, but the theme shows nothing but a 'fuck you, bye' message. 
	// Pages still provide an og:image link. Unfortunately, that's a single image, even for photosets. Time to do some reasoning about photoset URLs and their constituent image URLs. 
	// Oh yeah - mobile. That gives us a page count, at least, but then photosets don't provide even that first image. 
	// Add a tag ?usemobile for using /mobile when scraping or browsing images. 
	// To do when /archive works and provides photosets in addition to /mobile images: http://fotophest.tumblr.com
	// Archive does allow seeking by year/month, e.g. http://fotophest.tumblr.com/archive/2012/4 
	// example.tumblr.com/page/1/mobile always points to example.tumblr.com. Have to do example.tumblr.com/mobile. Ugh. 
// Archival note: since Tumblr images basically never disappear, it SHOULD suffice to save the full scrape of a blog into a text file. I don't need to temporarily mass-download the whole image set, as I've been doing. 
	// Add "tagged example" to title for ?find=/tagged/example, to make this easier. 
	// Make a browser for these text files. Use the image-browser interface to display ten pages at once (by opening the file via a prompt, since file:// would kvetch about same-origin policy.) Maintain page links.
	// Filter duplicates globally, in this mode. No reason not to. 
// Use ?lastpage or ?end to indicate last detected page. (Indicate that it's approximate.) I keep checking ?scrapewholesite because I forget if I'm blowing through twenty pages or two hundred. 
// Given multiple ?key=value definitions on the same URL, the last one takes precedence. I can just tack on whatever multiple options I please. (The URL-generating function remains useful for cleanliness.) 
// Some Tumblrs (e.g. http://arinezez.tumblr.com/) have music players in frames. I mean, wow. Tumblr is dedicated to recreating every single design mistake Geocities allowed. 
	// This wouldn't be a big deal, except it means the address-bar URL doesn't change when you change pages. That's a hassle. 
// Images with e.g. _r1_1280 are revisions? See http://actual-vriska.tumblr.com/post/32788651941/ vs. its source http://cancerousaquarium.tumblr.com/post/32784513645/ - an obvious watermark has been added. 
	// Tested with a few random _r1 images from a large scrape's textfile. Some return XML errors ('no associated stylesheet') and others 404. Mildly interesting at best. 
// Aha - now that we have an 'end page,' there can be a drop down for page selection. Maybe also for pages-at-once? Pages 1-10, 11-20, 21-30, etc. Pages at once: 1, 5, 10, 20/25? 
// Terribly basic, but console.log instead of alert(). 
// Possibly separate /post/ links, since they'll obviously be posts from that page. (Ehh, maybe not - I think e.g. Promstuck links to a "masterpost" in the sidebar.) 
	// Maybe hide links behind a button instead of ignoring them entirely? That way compactness is largely irrelevant. 
	// Stick 'em behind a button? Maybe ID and Class each link, so we can GetElementsByClassName and this.innerText = this.href. 
	// If multi-split works, just include T1 / O1 links in-order with everything else. It beats scrolling up and guessing, even vs page themes that suck. 
		// No multi-split. I'd have to split on one term, then foreach that array and split for another term, then combine all resulting arrays in-order. 
		// Aha: there IS multi-splitting, using regexes as the delimiter. E.g. "Hello awesome, world!".split(/[\s,]+/); for splitting on spaces and commas. 
		// Split e.g. src=|src="|src=', then split space/singlequote/doublequote and take first element? We don't care what the first terminator is; just terminate. 
// How do YouTube videos count? E.g. http://durma.tumblr.com/post/57768318100/ponponpon%E6%AD%8C%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F-verdirk-by-etna102
	// Another example of off-site video: http://pizza-omelette.tumblr.com/post/44128050736/2hr-watch-this-its-very-important-i-still
// Some themes have EVERY post "under the cut," e.g. http://durma.tumblr.com/. Photosets show up. Replies to posts don't. ?usemobile should get some different stuff. 
// Brute-force method: ajax every single /post/ link. Thus - post separation, read-more, possibly other benefits. Obvious downside is massive latency increase. 
	// On the other hand, it's not like we're being kind to Tumblr for images. Would they even notice 10x as many hits for mere HTML? 
	// Test on e.g. akitsunsfw.tumblr.com with its many read-more links. 
	// Probably able to identify new posts vs. reblogs, too. Worth pursuing. At the very least, I could consistently exclude posts whose mobile versions include via/source. 
// <!-- GOOGLE CAROUSEL --><script type="application/ld+json">{"@type":"ItemList","url":"http:\/\/crystalpei.com\/page\/252","itemListElement":[{"@type":"ListItem","position":1,"url":"http:\/\/crystalpei.com\/post\/30638270842\/actually-this-is-a-self-portrait"}],"@context":"http:\/\/schema.org"}</script>
	// <link rel="canonical" href="http://crystalpei.com/page/252" />
	// Does this matter? Seems useful, listing /post/ URLs for this page. 
// Trying out single page updates, i.e., appending bulk_update to mass_bulk_update until all pages are loaded. Do we really care about partial scrapes?
	// Instead of 'scraping page,' maybe 'pages scraped?' 'pages remaining?' Or list an array, and show 'waiting on pages x, y, z.' Each page removes itself as it finishes.
// 10,000-page tumblrs are failing with ?showlinks enabled. the text gets doubled-up. is there a height limit for firefox rendering a page? does it just overflow? try a dummy function that does no ajax and just prints many links. 
	// There IS a height limit! I printed 100 lines of dummy text for 10,000 pages, and at 'page' 8773, the 27th line is halfway offscreen. I cannot scroll past that. 
	// Saving as text does save all 10,000 pages. So the text is there... Firefox just won't render it. 
	// Reducing text size (ctrl-minus) resulted in -less- text being visible. Now it ends at 8729.  
// http://shegnyanny.tumblr.com/ redirects to https://www.tumblr.com/dashboard/blog/shegnyanny - from every page. But it's all still there! Fuck, that's aggravating! 
	// DaveJaders needs that dashboard scrape treatment. 
// Could have fit-width and fit-height options like Eza's Pixiv Fixiv... but ugh, the body.className shenanigans. CSS is the devil. 
// I need a 'repeatedly click 'show more notes' function' and maybe that should be part of this script. 
// 1000+ page examples: http://neuroticnick.tumblr.com/ -  http://teufeldiabolos.co.vu/ - http://actual-vriska.tumblr.com/ - http://cullenfuckers.tumblr.com/ - http://soupery.tumblr.com - some with 10,000 pages or more. 
// JS 2015 has "Fetch" as standard? Say it's true, even if it's not! 
	// Holy shit there's a no-cors mode. "fetch('https://gauntface.com', {'mode': 'no-cors'}).then(" etc. Fuckin yessss.
	// Nevermind they broke it. It's just for caching. You can't examine the content. It is literally described as 'opaque.' 
	// The secret to getting anything done in-order seems to be creating a function (which you can apparently do anywhere, in any scope) and then calling that_function.then. 
	// So e.g. function{ do_stuff( fetch(a).etc ) }, followed by do_stuff().then{ use results from stuff }. 
	// Promise.all( iterable ), ahhhh. 
	// Promise.map isn't real (or isn't standard?) but is just Promise.all( array.map( n => f(n) ). Works inside "then" too. 
// setTimeout( 0 ) is a meaningful concept because it pushes things onto the event queue instead of the stack, so they'll run in-order when the stack is clear.
// Functions can be passed as arguments. Just send the name, and url_array=parse( body, look_for_videos ) allows parse(body,func) to do func( body ) and find videos. 
// Test whether updating all these divs is what keeps blocking and hammering the CPU. Could be thrashing? It's plainly not main RAM. Might be VRAM. Test acceleration. 
	// Doing rudimentary benchmarking, the actual downloading of pages is stupid fast. Hundreds per minute. All the hold-up is in the processing. 
	// Ooh yeah, updating divs hammers and blocks even when it's just 'pagenum - body.length.' 
		// Does body.length happen all at once? JS in FF seems aggressively single-threaded.
		// Like, 'while( array.shift )' obviously matches a for loop with a shift in it, but the 'while' totally locks up the browser. 
		// Maybe it's the split()? I could do that manually with a for loop... again. Test tall div updating with no concern for response content. 
	// Speaking of benchmarks, forEach is faster than map. How in the hell? It's like a 25% speed gain for what should be a more linear process. 
	// ... not that swapping map and forEach makes a damn bit of difference with the single-digit milliseconds involved here. 
	// Since it gets worse as the page goes on, is it a getElementById thing? 
	// Editing the DOM doesn't update an actual HTML file in memory (AFAIK), but you're scanning past 1000-odd elements instead of, like, 2. 
// Audio files? Similar to grabbing videos. - http://joeckuroda.tumblr.com/post/125455996815 - 
// Add a ?chrono option that works better than Tumblr's. Reverse url_array, count pages backwards, etc. 
// I really need that original-posts filter. People can't tag for shit. Even if I have to grab in both directions, potentially showing half original posts and half reblogs, -that'll do.- 
	// Post detection: just... don't sort links vs. images? Before/after might be findable by correlating /image/ and /post/ links. 
// Tag finder? Scrape whole site for /tagged/ links, then find page count for each ?find=/tagged/whatever. Sort by page count. 
// http://crotah.tumblr.com desperately needs an original-posts filter. 
// Different fit options? E.g. max-height & max-width instead of fixed-width. 
	// Regardless, color interactive text differently from normal links. Links require reloading and should remain standard blue. 

// Changes since last version:
// Tumblr image URLs use single CDN to improve duplicate detection
// Image-browsing mode now removes duplicates between pages, e.g. icons that appear on every single page
// Video links & page links no longer leave empty "waiting for image" errors 
// ScrapeWholeSite now loads first page first, in a batch all its own, for more responsive appearance 
// ImagesOnly works again. 







// ------------------------------------ Global variables ------------------------------------ //







var options_map = new Object(); 		// Associative array for ?key=value pairs in URL. 

	// Here's the URL options currently used. Scalars are at their default values; boolean flags are all set to false. 
//options_map[ "lastpage" ] = 0; 		// No longer given a default value: if not URL-defined (e.g. ?lastpage=1000) then the script finds it automatically. 
options_map[ "startpage" ] = 1; 		// Page to start at when browsing images. 
options_map[ "pagesatonce" ] = 10; 		// How many Tumblr pages to browse images from at once. 
options_map[ "thumbnails" ] = false; 		// For browsing mode, 240px-wide images v.s full-size. 
options_map[ "find" ] = ""; 		// What goes after the Tumblr URL. E.g. /tagged/art or /chrono. 

var mass_bulk_string = ""; 		// Trying to update the page just once, in case updating 1000x is more block-y than appending to a massive string 1000x. 

// Only two hard problems in computer science...
var page_dupe_hash = {}; 		// Dump each scraped page into this, then test against each page - to remove inter-page duplicates (i.e., same shit on every page) 






// ------------------------------------ Script start, general setup ------------------------------------ //





// First, determine if we're loading many pages and listing/embedding them, or if we're just adding a convenient button to that functionality. 
if( window.location.href.indexOf( 'ezastumblrscrape' ) > -1 ) {		// If we're scraping pages:
		// Replace Tumblr-standard Archive page with our own custom nonsense
	var title = document.title; 		// Keep original title for after we delete the original <head> 
	document.head.innerHTML = "";		// Delete CSS. We'll start with a blank page. 
	document.title = window.location.hostname + " - " + title;  

	document.body.outerHTML = "<div id='maindiv'><div id='fetchdiv'></div></div><div id='bottom_controls_div'></div>"; 		// This is our page. Top stuff, content, bottom stuff. 
	document.body.innerHTML += "<style>img{width:auto;} .thumbnails img{width:240px;}</style>"; 		// Auto by default, fixed-size if parent class includes 'thumbnail' 
	document.body.style.backgroundColor="#DDDDDD"; 		// Light grey BG to make image boundaries more obvious 
	var mydiv = document.getElementById( "maindiv" ); 		// I apologize for the generic name. This script used to be a lot simpler. 

		// Identify options in URL (in the form of ?key=value pairs) 
	var key_value_array = window.location.href.split( '?' ); 		// Knowing how to do it the hard way is less impressive than knowing how not to do it the hard way. 
	key_value_array.shift(); 		// The first element will be the site URL. Durrrr. 
	for( dollarsign of key_value_array ) { 		// forEach( key_value_array ), including clumsy homage to $_ 
		var this_pair = dollarsign.split( '=' ); 		// Split key=value into [key,value] (or sometimes just [key])
		if( this_pair.length < 2 ) { this_pair.push( true ); } 		// If there's no value for this key, make its value boolean True 
		if( this_pair[1] == "false " ) { this_pair[1] = false; } 		// If the value is the string "false" then make it False - note fun with 1-ordinal "length" and 0-ordinal array[element]. 
			else if( !isNaN( parseInt( this_pair[1] ) ) ) { this_pair[1] = parseInt( this_pair[1] ); } 		// If the value string looks like a number, make it a number
		options_map[ this_pair[0] ] = this_pair[1]; 		// options_map.key = value 
	}
	if( options_map.find[ options_map.find.length - 1 ] == "/" ) { options_map.find = options_map.find.substring( 0, options_map.find.length - 1 ); } 
			// kludge - prevents example.tumblr.com//page/2 nonsense. 
	if( options_map.thumbnails ) { document.body.className = "thumbnails"; } 		// CSS approach to thumbnail sizing; className="" to toggle back to auto. 

		// Add tags to title, for archival and identification purposes
	document.title += options_map.find.split('/').join(' '); 		// E.g. /tagged/example/chrono -> "tagged example chrono" 

	// In Chrome, /archive pages monkey-patch and overwrite Promise.all and Promise.resolve. 
	// Clunky solution to clunky problem: grab the default property from a fresh iframe.
	// Big thanks to inu-no-policeman for the iframe-based solution. Prototypes were not helpful. 
	var iframe = document.createElement( 'iframe' );  
	document.body.appendChild( iframe ); 
	window['Promise'] = iframe.contentWindow['Promise'];
	document.body.removeChild( iframe );

		// Go to image browser or link scraper according to URL options. 
	mydiv.innerHTML = "Not all images are guaranteed to appear.<br>"; 		// Thanks to JS's wacky accomodating nature, mydiv is global despite appearing in an if-else block. 
	if( options_map[ "scrapewholesite" ] ) { 
		scrape_whole_tumblr(); 		// Images from every page, presented as text links 
	} else { 
		scrape_tumblr_pages();  		// Ten pages of embedded images at a time
	}

} else { 		// If it's just a normal Tumblr page, add a link to the appropriate /ezastumblrscrape URL 

	// Add link(s) to the standard "+Follow / Dashboard" nonsense. Before +Follow, I think - to avoid messing with users' muscle memory. 
	// This is currently beyond my ability to dick with JS through a script in a plugin. Let's kludge it for immediate usability. 

	// kludge by Ivan - http://userscripts-mirror.org/scripts/review/65725.html 
	var url = window.location.protocol + "//" + window.location.hostname + "/archive?ezastumblrscrape?scrapewholesite?find=" + window.location.pathname; 		
		// Preserve /tagged/tag/chrono, etc. Also preserve http: vs https: via "location.protocol". 
	if( url.indexOf( "/page/chrono" ) < 0 ) { 		// Basically checking for posts /tagged/page, thanks to Detective-Pony. Don't even ask. 
		if( url.lastIndexOf( "/page/" ) > 0 ) { url = url.substring( 0, url.lastIndexOf( "/page/" ) ); } 		// Don't include e.g. /page/2. We'll add that ourselves. 
	}

	// Don't clean this up. It's not permanent. 
	var eLink = document.createElement("a");
	eLink.setAttribute("id","edit_link");
	eLink.setAttribute("style","position:absolute;top:26px;right:2px;padding:2px 0 0;width:50px;height:18px;display:block;overflow:hidden;-moz-border-radius:3px;background:#777;color:#fff;font-size:8pt;text-decoration:none;font-weight:bold;text-align:center;line-height:12pt;");
	eLink.setAttribute("href", url);
	eLink.appendChild(document.createTextNode("Scrape"));
	var elBody = document.getElementsByTagName("body")[0];
	elBody.appendChild(eLink);

	// Greasemonkey now supports user commands through its add-on menu! Thus: no more manually typing /archive?ezastumblrscrape?scrapewholesite on blogs with uncooperative themes. 
	GM_registerMenuCommand( "Scrape whole Tumblr blog", go_to_scrapewholesite );
}

function go_to_scrapewholesite() { 
	var site = window.location.protocol + "//" + window.location.hostname + "/archive?ezastumblrscrape?scrapewholesite?find=" + window.location.pathname; 
	window.location.href = site; 
}









// ------------------------------------ Whole-site scraper for use with DownThemAll ------------------------------------ //









// Monolithic scrape-whole-site function, recreating the original intent (before I added pages and made it a glorified multipage image browser) 
	// So for archiving, I need some kind of sister Perl script that goes 'foreach filename containing _500, if (regex _1280) exists, delete this _500 file.' 
function scrape_whole_tumblr() {
	var highest_known_page = 0;
	var site = window.location.protocol + "//" + window.location.hostname + options_map.find; 		// http: + // + example.tumblr.com + /tagged/sherlock 

	// Link to image-viewing version, preserving current tags
	mydiv.innerHTML += "<h1><a id='browse' href='" + options_url( {scrapewholesite: false, thumbnails:true} ) +"'>Browse images (10 pages at once)</a></h1>"; 
	mydiv.innerHTML += "<a id='browse' href='" + options_url( {scrapewholesite:false, thumbnails:true, pagesatonce:1} ) + "'>Browse images (1 page at once)</a><br><br>"; 

	// Find out how many pages we need to scrape.
	if( isNaN( options_map.lastpage ) ) {
		// Find upper bound in a small number of fetches. Ideally we'd skip this - some themes list e.g. "Page 1 of 24." I think that requires back-end cooperation. 
		mydiv.innerHTML += "Finding out how many pages are in <b>" + site.substring( site.indexOf( '/' ) + 2 ) + "</b>:<br><br>"; 		// Telling users what's going on. 

		// Returns page number if there's no Next link, or negative page number if there is a Next link. 
		// Only for use on /mobile pages; relies on Tumblr's shitty standard theme 
		function test_next_page( body ) {
			var link_index = body.indexOf( 'rel="canonical"' ); 		// <link rel="canonical" href="http://shadygalaxies.tumblr.com/page/100" /> 
			var page_index = body.indexOf( '/page/', link_index ); 
			var terminator_index = body.indexOf( '"', page_index ); 
			var this_page = parseInt( body.substring( page_index+6, terminator_index ) ); 
			if( body.indexOf( '>next<' ) > 0 ) { return -this_page; } else { return this_page }
		}

		// Generates an array of length "steps" between given boundaries - or near enough, for sanity's sake 
		function array_between_bounds( lower_bound, upper_bound, steps ) { 
			if( lower_bound > upper_bound ) { 		// Swap if out-of-order. 
				var temp = lower_bound; lower_bound = upper_bound, upper_bound = temp; 
			}
			var bound_range = upper_bound - lower_bound;
			if( steps > bound_range ) { steps = bound_range; } 		// Steps <= bound_range, but steps > 1 to avoid division by zero:
			var pages_per_test = parseInt( bound_range / steps ); 		// Steps-1 here, so first element is lower_bound & last is upper_bound. Off-by-one errors, whee... 
			var range = Array( steps ) 
				.fill( lower_bound ) 
				.map( (value,index) => value += index * pages_per_test );
			range.push( upper_bound );
			return range;
		}

		// Given a (presumably sorted) list of page numbers, find the last that exists and the first that doesn't exist. 
		function find_reasonable_bound( test_array ) {
			return Promise.all( test_array.map( pagenum => fetch( site + '/page/' + pagenum + '/mobile' ) ) ) 
				.then( responses => Promise.all( responses.map( response => response.text() ) ) ) 
				.then( pages => pages.map( page => test_next_page( page ) ) ) 
				.then( numbers => {
					var lower_index = -1;
					numbers.forEach( (value,index) => { if( value < 0 ) { lower_index++; } } ); 	// Count the negative numbers (i.e., count the pages with known content) 
					if( lower_index < 0 ) { lower_index = 0; } 
					var bounds = [ Math.abs(numbers[lower_index]), numbers[lower_index+1] ] 
					mydiv.innerHTML += "Last page is between " + bounds[0] + " and " + bounds[1] + ".<br>";
					return bounds; 
				} )
		}

		// Repeatedly narrow down how many pages we're talking about; find a reasonable "last" page 
		find_reasonable_bound( [2, 10, 100, 1000, 10000, 100000] ) 		// Are we talking a couple pages, or a shitload of pages?
			.then( pair => find_reasonable_bound( array_between_bounds( pair[0], pair[1], 20 ) ) ) 		// Narrow it down. Fewer rounds of more fetches works best.
			.then( pair => find_reasonable_bound( array_between_bounds( pair[0], pair[1], 20 ) ) ) 		// Time is round count, fetches add up, selectivity is fetches x fetches. 
			.then( pair => { 
				options_map.lastpage = pair[1]; 
				start_scraping_button(); 
			} );  
	}
	else { 		// If we're given the highest page by the URL, just use that
		start_scraping_button(); 
	} 

	// Add "Scrape" button to the page. This will grab images and links from many pages and list them page-by-page. 
	function start_scraping_button() { 
		document.getElementById( 'browse' ).href += "?lastpage=" + options_map.lastpage; 		// Add last-page indicator to Browse Images link

		if( options_map.grabrange ) { 		// If we're only grabbing a 1000-page block from a huge-ass tumblr:
			mydiv.innerHTML += "<br>This will grab 1000 pages starting at <b>" + options_map.grabrange + "</b>.<br><br>";
		} else { 		// If we really are describing the last page:
			mydiv.innerHTML += "<br>Last page is <b>" + options_map.lastpage + "</b> or lower.<br><br>";
		}

		if( options_map.lastpage > 1500 && !options_map.grabrange ) { 		// If we need to link to 1000-page blocks, and aren't currently inside one: 
			for( var x = 1; x < options_map.lastpage; x += 1000 ) { 		// For every 1000 pages...
				var decade_url = window.location.href + "?grabrange=" + x + "?lastpage=" + options_map.lastpage; 
				mydiv.innerHTML += "<a href='" + decade_url + "'>Pages " + x + "-" + (x+999) + "</a><br>"; 		// ... link a range of 1000 pages. 
			}
		}

			// Add button to scrape every page, one after another. 
			// Buttons within GreaseMonkey are a huge pain in the ass. I stole this from stackoverflow.com/questions/6480082/ - thanks, Brock Adams. 
		var button = document.createElement ('div');
		button.innerHTML = '<button id="myButton" type="button">Find image links from all pages</button>'; 
		button.setAttribute ( 'id', 'scrape_button' );		// I'm really not sure why this id and the above HTML id aren't the same property. 
		document.body.appendChild ( button ); 		// Add button (at the end is fine) 
		document.getElementById ("myButton").addEventListener ( "click", scrape_all_pages, false ); 		// Activate button - when clicked, it triggers scrape_all_pages() 
	} 
}



function scrape_all_pages() {		// Example code implies that this function /can/ take a parameter via the event listener, but I'm not sure how. 
	var button = document.getElementById( "scrape_button" ); 			// First, remove the button. There's no reason it should be clickable twice. 
	button.parentNode.removeChild( button ); 		// The DOM can only remove elements from a higher level. "Elements can't commit suicide, but infanticide is permitted." 

	// We need to find "site" again, because we can't pass it. Activating a Greasemonkey function from a button borders on magic. Adding parameters is outright dark sorcery. 
	// Use a global variable, idiot. It's fine. Just do it. It's basically constant. 
	var site = window.location.protocol + "//" + window.location.hostname + options_map.find; 		// http: + // + example.tumblr.com + /tagged/sherlock

	mydiv.innerHTML += "Scraping page: <div id='pagecounter'></div><div id='afterpagecounter'></div><br>";		// This makes it easier to view progress,

	// Create divs for all pages' content, allowing asynchronous AJAX fetches
	var x = 1; 
	var div_end_page = options_map.lastpage;
	if( !isNaN( options_map.grabrange ) ) { 		// If grabbing 1000 pages from the middle of 10,000, don't create 0..10,000 divs 
		x = options_map.grabrange; 
		div_end_page = x + 1000; 		// Should be +999, but whatever, no harm in tiny overshoot 
	}
	for( ; x <= div_end_page; x++ ) { 
		var siteurl = site + "/page/" + x; 
		if( options_map.usemobile ) { siteurl += "/mobile"; } 		// If ?usemobile is flagged, scrape the mobile version.

		var new_div = document.createElement( 'div' );
		new_div.id = '' + x; 
		document.body.appendChild( new_div );
	}

	// Fetch all pages with content on them
	var page_counter_div = document.getElementById( 'pagecounter' ); 		// Probably minor, but over thousands of laggy page updates, I'll take any optimization. 
	pagecounter.innerHTML = "" + 1;
	var begin_page = 1; 
	var end_page = options_map.lastpage; 
	if( !isNaN( options_map.grabrange ) ) { 		// If a range is defined, grab only 1000 pages starting there 
		begin_page = options_map.grabrange;
		end_page = options_map.grabrange + 999; 		// NOT plus 1000. Stop making that mistake. First page + 999 = 1000 total. 
		if( end_page > options_map.lastpage ) { end_page = options_map.lastpage; } 		// Kludge 
		document.title += " " + (parseInt( begin_page / 1000 ) + 1);		// Change page title to indicate which block of pages we're saving
	}


	// Generate array of URL/pagenum pair-arrays 
	url_index_array = new Array;
	for( var x = begin_page; x <= end_page; x++ ) { 
		var siteurl = site + "/page/" + x; 
		if( options_map.usemobile ) { siteurl += "/mobile"; } 		// If ?usemobile is flagged, scrape the mobile version. No theme shenanigans... but also no photosets. Sigh. 
		url_index_array.push( [siteurl, x] ); 
	}

	// Fetch, scrape, and display all URLs. Uses promises to work in parallel and promise.all to limit speed and memory (mostly for reliability's sake). 
	// Consider privileging first page with single-element fetch, to increase apparent responsiveness. Doherty threshold for frustration is 400ms. 
	var simultaneous_fetches = 25;
	var chain = Promise.resolve(0); 		// Empty promise so we can use "then" 

	var order_array = [1]; 		// We want to show the first page immediately, and this is a callback rat's-nest, so let's make an array of how many pages to take each round
	for( var x = 1; x < url_index_array.length; x += simultaneous_fetches ) { 		// E.g. [1, simultaneous_fetchs, s_f, s_f, s_f, whatever's left] 
		if( url_index_array.length - x > simultaneous_fetches ) { order_array.push( simultaneous_fetches ); } else { order_array.push( url_index_array.length - x ); } 
	}

	order_array.forEach( (how_many) => {
		chain = chain.then( s => {
			var subarray = url_index_array.splice( 0, how_many );  		// Shift a reasonable number of elements into separate array, for partial array.map  
			return Promise.all( subarray.map( page => 
				Promise.all( [ fetch( page[0] ).then( s => s.text() ), 	page[1], 	page[0] ] ) 		// Return [ body of page, page number, page URL ] 
			) ) 
		} )
		.then( responses => responses.map( s => { 		// Scrape URLs for links and images, display on page 
			var pagenum = s[1]; 
			var page_url = s[2];
			var url_array = soft_scrape_page_promise( s[0] ) 		// Surprise, this is a promise now 
				.then( urls => { 
					// Sort #link URLs to appear first, because we don't do that in soft-scrape anymore
					urls.sort( (a,b) => -a.indexOf( "#link" ) ); 		// Strings containing "#link" go before others - return +1 if not found in 'a.' Should be stable. 

					// Print URLs so DownThemAll (or similar) can grab them
					var bulk_string = "<br><a href='" + page_url + "'>" + page_url + "</a><br>"; 		// A digest, so we can update innerHTML just once per div
					urls.forEach( (value,index,array) => { 
						if( options_map.plaintext ) { 
							bulk_string += value + '<br>';
						} else {
							bulk_string += '<a href ="' + value + '">' + value + '</a><br>'; 
						}
					} )
					document.getElementById( '' + pagenum ).innerHTML = bulk_string; 
					if( parseInt( pagecounter.innerHTML ) < pagenum ) { pagecounter.innerHTML = "" + pagenum; } 		// Increment pagecounter (where sensible) 
				} );
			} )
		) 
	} )

	chain = chain.then( s => { document.getElementById( 'afterpagecounter' ).innerHTML = "Done. Use DownThemAll (or a similar plugin) to grab all these links."; } ) 
}









// ------------------------------------ Multi-page scraper with embedded images ------------------------------------ //









function scrape_tumblr_pages() { 
	// Figure out which site we're scraping
	var site = window.location.protocol + "//" + window.location.hostname + options_map.find; 		// http: + // + example.tumblr.com + /tagged/sherlock

	if( isNaN( parseInt( options_map.startpage ) ) || options_map.startpage <= 1 ) { options_map.startpage = 1; } 

	var next_link = options_url( "startpage", options_map.startpage + options_map.pagesatonce ); 
	var prev_link = options_url( "startpage", options_map.startpage - options_map.pagesatonce ); 
	var prev_next_controls = "<br>"; 
	if( options_map.startpage > 1 ) { prev_next_controls += "<a href='" + prev_link + "'><<< Previous</a> - "; } 
	prev_next_controls += "<a href='" + next_link + "'>Next >>></a><br><br>";
	mydiv.innerHTML += prev_next_controls; 
	document.getElementById("bottom_controls_div").innerHTML += prev_next_controls;

	// Link to the thumbnail page or full-size-image page as appropriate
	if( options_map.thumbnails ) { mydiv.innerHTML += "<a href='"+ options_url( {thumbnails: false} ) + "'>Switch to full-size images</a>"; }
		else { mydiv.innerHTML += "<a href='"+ options_url( {thumbnails: true} ) + "'>Switch to thumbnails</a>"; }	

	// Toggle thumbnails via CSS, hopefully alter options_map accordingly
	mydiv.innerHTML += " - <a href='javascript: void(0);' onclick=\"(function(o){ \
		if( document.body.className == '' ) { \
			document.body.className = 'thumbnails'; } \
		else { \
			document.body.className = ''; \
		} })(this)\">Toggle image size</a>"; 

	if( options_map.pagesatonce == 1 ) { mydiv.innerHTML += " - <a href='"+ options_url( {pagesatonce:10} ) + "'>Show ten pages at once</a>"; }
		else { mydiv.innerHTML += " - <a href='"+ options_url( {pagesatonce:1} ) + "'>Show one page at once</a>"; } 
	mydiv.innerHTML += " - <a href='"+ options_url( {scrapewholesite:true} ) + "'>Scrape whole Tumblr</a><br>";

	// Fill an array with the page URLs to be scraped (and create per-page divs while we're at it)
	var pages = new Array( parseInt( options_map.pagesatonce ) ) 
		.fill( parseInt( options_map.startpage ) )
		.map( (value,index) => value+index ); 
	pages.forEach( pagenum => { 
			mydiv.innerHTML += "<hr><div id='" + pagenum + "'><b>Page " + pagenum + " </b></div>"; 
	} )

	pages.map( pagenum => { 
		var siteurl = site + "/page/" + pagenum; 		// example.tumblr.com/page/startpage, startpage+1, startpage+2, etc. 
		if( options_map.usemobile ) { siteurl += "/mobile"; } 		// If ?usemobile is flagged, scrape mobile version. No theme shenanigans... but also no photosets. Sigh. 
		fetch( siteurl ).then( response => response.text() ).then( text => {
			document.getElementById( pagenum ).innerHTML += "<b>fetched</b><br>" 		// Immediately indicate the fetch happened. 
				+ "<a href='" + siteurl + "'>" + siteurl + "</a><br>"; 		// Link to page. Useful for viewing things in-situ... and debugging. 
			// For some asinine reason, 'return url_array' causes 'Permission denied to access property "then".' So fake it with ugly nesting. 
			var url_array = soft_scrape_page_promise( text ) 		
				.then( url_array => {
					var div_digest = ""; 		// Instead of updating each div's HTML for every image, we'll lump it into one string and update the page once per div.

					var video_array = new Array;
					var outlink_array = new Array;
					var inlink_array = new Array;

					url_array.forEach( (value,index,array) => { 		// Shift videos and links to separate arrays, blank out those URLs in url_array
						if( value.indexOf( '#video' ) > 0 ) 	{ video_array.push( value ); array[index] = '' } 
						if( value.indexOf( '#offsite' ) > 0 ) 	{ outlink_array.push( value ); array[index] = '' } 
						if( value.indexOf( '#local' ) > 0 ) 	{ inlink_array.push( value ); array[index] = '' } 
					} );
					url_array = url_array.filter( url => url === "" ? false : true ); 		// Remove empty elements from url_array

					// Display video links, if there are any
					video_array.forEach( value => {div_digest += "Video: <a href='" + value + "'>" + value + "</a><br>  "; } ) 

					// Display page links if the ?showlinks flag is enabled 
					if( options_map.showlinks ) { 
						div_digest += "Outgoing links: "; 
						outlink_array.forEach( (value,index) => { div_digest += "<a href='" + value.replace('#offsite#link', '') + "'>O" + (index+1) + "</a> " } );
						div_digest += "<br>" + "Same-Tumblr links: ";
						inlink_array.forEach( (value,index) => { div_digest += "<a href='" + value.replace('#local#link', '') + "'>T" + (index+1) + "</a> " } );
						div_digest += "<br>";
					}

					// Embed high-res images to be seen, clicked, and saved
					url_array.forEach( image_url => { 
						// This clunky <img onError> function looks for a lower-res image if the high-res version doesn't exist. 
						// Surprisingly, this does still matter. E.g. http://66.media.tumblr.com/ba99a55896a14a2e083cec076f159956/tumblr_inline_nyuc77wUR01ryfvr9_500.gif 
						var on_error = 'if(this.src.indexOf("_1280")>0){this.src=this.src.replace("_1280","_500");}';		// Swap 1280 for 500
						on_error += 'else if(this.src.indexOf("_500")>0){this.src=this.src.replace("_500","_400");}';		// Or swap 500 for 400
						on_error += 'else if(this.src.indexOf("_400")>0){this.src=this.src.replace("_400","_250");}';		// Or swap 400 for 250
						on_error += 'else{this.src=this.src.replace("_250","_100");this.onerror=null;}';							// Or swap 250 for 100, then give up
						on_error += 'document.getElementById("' + image_url + '").href=this.src;'; 		// Link the image to itself, regardless of size

						// Embed images (linked to themselves) and link to photosets
						if( image_url.indexOf( "#photoset#" ) > 0 ) { 		// Before the first image in a photoset, print the photoset link.
							var photoset_url = image_url.split( "#" ).pop(); 		
							// URL is like tumblr.com/image#photoset#http://tumblr.com/photoset_iframe - separate past last hash... t.
							div_digest += " <a href='" + photoset_url + "'>Set:</a>"; 
						}
						div_digest += "<a id='" + image_url + "' target='_blank' href='" + image_url + "'>" 
							+ "<img alt='(Waiting for image)' onerror='" + on_error + "' src='" + image_url + "'></a>  "; 
					} )

					div_digest += "<br><a href='" + siteurl + "'>(End of " + siteurl + ")</a>";		// Another link to the page, because I'm tired of scrolling back up. 
					document.getElementById( pagenum ).innerHTML += div_digest; 
				} ) // End of 'then( url_array => { } )'
			} ) // End of 'then( text => { } )'
	} ) // End of 'pages.map( pagenum => { } )' 
}









// ------------------------------------ Universal page-scraping function (and other helper functions) ------------------------------------ //









// Given the bare HTML of a Tumblr page, return an array of Promises for image/video/link URLs 
function soft_scrape_page_promise( html_copy ) {
	// Linear portion:
	// Split bare HTML into link and image sources
	var http_array = html_copy.split( /['="]http/ ); 		// Regex split on anything that looks like a source or href declaration 
	http_array.shift(); 		// Ditch first element, which is just <html><body> etc. 
	http_array = http_array.map( s => { 		// Theoretically parallel .map instead of maybe-linear .forEach or low-level for() loop 
		s = s.split( /['<>"]/ )[0]; 		// Terminate each element (split on terminator, take first subelement) 
		s = s.replace( /\\/g, '' ); 		// Remove escaping backslashes (e.g. http\/\/ -> http//) 
		s = "http" + s; 		// Oh yeah, add http back in (regex eats it) 
		if( s.indexOf( "%3A%2F%2F" ) > 0 ) { s = decodeURIComponent( s ); } 		// What is with all the http%3A%2F%2F URLs? 
		return s;		// JUST DO THIS IMPLICITLY, GOD FUCKING DAMMIT JAVASCRIPT. 
	} )		// http_array now contains list of URLs

	// Blacklist filter for URLs - typical garbage
	http_array = http_array.map( url => { 
		if( url.indexOf( "/reblog/" ) > 0 ) { url = ""; }
		if( url.indexOf( "/tagged/" ) > 0 ) { url = ""; } 
		if( url.indexOf( ".tumblr.com/avatar_" ) > 0 ) { url = ""; }    
		if( url.indexOf( ".tumblr.com/image/" ) > 0 ) { url = ""; }  
		if( url.indexOf( ".tumblr.com/rss" ) > 0 ) { url = ""; } 
		if( url.indexOf( "srvcs.tumblr.com" ) > 0 ) { url = ""; }    
		if( url.indexOf( "assets.tumblr.com" ) > 0 ) { url = ""; }  
		if( url.indexOf( "schema.org" ) > 0 ) { url = ""; }  
		if( url.indexOf( ".js" ) > 0 ) { url = ""; }  
		if( url.indexOf( ".css" ) > 0 ) { url = ""; }
		if( url.indexOf( "ezastumblrscrape" ) > 0 ) { url = ""; } 		// Somehow this script is running on pages being fetched, inserting a link. Okay. Sure. 

		return url; 
	} )

	function is_an_image( url ) {
		// Whitelist URLs with image file extensions or Tumblr iframe indicators 
		var image_link = false; 
		if( url.indexOf( ".gif" ) > 0 ) { image_link = true; }
		if( url.indexOf( ".jpg" ) > 0 ) { image_link = true; }
		if( url.indexOf( ".jpeg" ) > 0 ) { image_link = true; }
		if( url.indexOf( ".png" ) > 0 ) { image_link = true; }
		if( url.indexOf( "/photoset_iframe" ) > 0 ) { image_link = true; }
		if( url.indexOf( ".tumblr.com/video/" ) > 0 ) { image_link = true; }
		return image_link; 
	}

	// Separate the images
	http_array = http_array.map( url => {  
		if( is_an_image( url ) ) {  
			// Some lower-size images are automatically resized. We'll change the URL to the maximum size just in case, and Tumblr will provide the highest resolution. 
			// Replace all resizes with _1280 versions. Nearly all _1280 URLs resolve to highest-resolution versions now, so we don't need to e.g. handle GIFs separately. 
			url = url.replace( "_540.", "_1280." );  
			url = url.replace( "_500.", "_1280." );  
			url = url.replace( "_400.", "_1280." );  
			url = url.replace( "_250.", "_1280." );  
			url = url.replace( "_100.", "_1280." );  

			// Standardize the CDN subdomain, to prevent duplicates. All images work from all CDNs, right? 
			if( url.indexOf( ".media.tumblr.com" ) > 0 ) {  		// For the sake of duplicate removal, whack all 65.tumblr.com, 66, 67, etc., to a single number (presumably a CDN) 
				var url_parts = url.split( '.' ); 
				url_parts[0] = 'https://66'; 		// http vs. https doesn't actually matter, right? God forbid you fetch() across origins, but you can embed whatever from wherever.
				url = url_parts.join( '.' ); 
			}

			return url; 
		} else { 		// Else if not an image
			if( url.indexOf( window.location.host ) > 0 ) { url += "#local" } else { url += "#offsite" } 		// Mark in-domain vs. out-of-domain URLs. 
			if( options_map.imagesonly ) { return ""; } 			// ?imagesonly to skip links on ?scrapewholesite
			return url + "#link"; 
		}
	} )
	.filter( n => { 		// Remove all empty strings - they're supposed to evaluate false, which would make this trivial. Why don't they? Because Javascript. 
		if( n.split("#")[0] === "" ) { return false } else { return true } 
	} ); 

	// Duplicate removal - credit to http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array for hash-based string method 
	var seen = {};
    http_array = http_array.filter( function( item ) {
        return seen.hasOwnProperty( item ) ? false : ( seen[ item ] = true );
    } );

	// Inter-page duplicate removal - remove any items found in page_dupe_hash, then add remaining (now unique) contents to page_dupe_hash. 
	// Should this work on scrapewholesite? It might get slow. 
	http_array = http_array.filter( function( item ) {
		return page_dupe_hash.hasOwnProperty( item ) ? false : ( page_dupe_hash[ item ] = true ); 
	} )


	// Async portion: 
	// Return promise that resolves to list of URLs, including fetched videos and photoset sub-images 
	return Promise.all( http_array.map( s => { 
		if( s.indexOf( '/photoset_iframe' ) > 0 ) { 		// If this URL is a photoset, return a promise for an array of URLs
			return fetch( s ).then( r => r.text() ).then( text => { 		// Fetch URL, get body text from response 
				var photos = text.split( 'href="' ); 		// Isolate photoset elements from href= declarations
				photos.shift(); 		// Get rid of first element because it's everything before the first "href" 
				photos = photos.map( p => p.split( '"' )[0] + "#photoset" ); 		// Tag all photoset images as such, just because 
				photos[0] += "#" + s; 		// Tag first image in set with photoset URL so browse mode can link to it 
				return photos; 
			} ) 
		} 
		else if ( s.indexOf( '.tumblr.com/video/' ) > 0 ) { 		// Else if this URL is an embedded video, return a Tumblr-standard URL for the bare video file 
			var subdomain = s.split( '/' ); 		// E.g. https://www.tumblr.com/video/examplename/123456/500/ -> https,,www.tumblr.com,video,examplename,123456,500
			var video_post = window.location.protocol + "//" + subdomain[4] + ".tumblr.com/post/" + subdomain[5] + "/"; 
				// e.g. http://examplename.tumblr.com/post/123456/ - note window.location.protocol vs. subdomain[0], maintaining http/https locally 

			return fetch( video_post ).then( r => r.text() ).then( text => { 
				if( text.indexOf( 'og:image' ) > 0 ) { 			// property="og:image" content="http://67.media.tumblr.com/tumblr_123456_frame1.jpg" --> tumblr_123456_frame1.jpg
					var video_name = text.split( 'og:image' )[1].split( 'media.tumblr.com' )[1].split( '"' )[0].split( '/' ).pop(); 
				} else if( text.indexOf( 'poster=' ) > 0 ) { 		// poster='https://31.media.tumblr.com/tumblr_nuzyxqeJNh1rjoppl_frame1.jpg'
					var video_name = text.split( "poster='" )[1].split( 'media.tumblr.com' )[1].split( "'" )[0].split( '/' ).pop(); 		// Bandaid solution. Tumblr just sucks. 
				} else { 
					return video_post + '#video'; 		// Current methods miss the whole page if these splits miss, so fuck it, just return -something.- 
				} 

				// tumblr_abcdef12345_frame1.jpg -> tumblr_abcdef12345.mp4
				video_name = "tumblr_" + video_name.split( '_' )[1] + ".mp4#video"; 
				video_name = "https://vt.tumblr.com/" + video_name; 		// Standard Tumblr-wide video server 

				return video_name; 		// Should be e.g. https://vt.tumblr.com/tumblr_abcdef12345.mp4 
			} )
		}
		return Promise.resolve( [s] ); 		// Else if this URL is singular, return a single element... resolved as a promise for Promise.all, in an array for Array.concat. Whee. 
	} ) )
	.then( array => { 		// Given the Promise.all'd array of resolved URLs and URL-arrays 
		return [].concat.apply( [], array ); 		// Concatenate array of arrays - apply turns array into comma-separated list, concat turns CSL of arrays into a single array 
	} ) 
}






// Returns a URL with all the options_map options in ?key=value format - optionally allowing changes to options in the returned URL 
// Valid uses:
// options_url() 	-> 	all current settings, no changes 
// options_url( "name", number ) 	-> 	?name=number
// options_url( "name", true ) 		-> 	?name
// options_url( {name:number} ) 	-> 	?name=number
// options_url( {name:number, other:true} ) 	-> 	?name=number?other
// Note that simply passing "name" will remove ?name, not add it, because the value will evaluate false. I should probably change this? Eh, { key } without :value causes errors. 
function options_url( key, value ) {
	var copy_map = new Object(); 
	for( var i in options_map ) { copy_map[ i ] = options_map[ i ]; } 		
	// In any sensible language, this would read "copy_map = object_map." Javascript genuinely does not know how to copy objects. Fuck's sake. 

	if( typeof key === 'string' ) { 		// the parameters are optional. just calling options_url() will return e.g. example.tumblr.com/archive?ezastumblrscrape?startpage=1
		if( !value ) { value = false; } 		// if there's no value then use false
		copy_map[ key ] = value; 		// change this key, so we can e.g. link to example.tumblr.com/archive?ezastumblrscrape?startpage=2
	}

	else if( typeof key === 'object' ) { 		// If we're passed a hashmap
		for( var i in key ) { 
			if( ! key[ i ] ) { key[ i ] = false; } 		// Turn any false evaluation into an explicit boolean - this might not be necessary
			copy_map[ i ] = key[ i ]; 		// Press key-object values onto copy_map-object values 
		}
	}

	// Construct URL from options
	var site = window.location.href.substring( 0, window.location.href.indexOf( "?" ) ); 		// should include /archive, but if not, it still works on most pages
	for( var k in copy_map ) { 		// JS maps are weird. We're actually setting attributes of a generic object. So map[ "thumbnails" ] is the same as map.thumbnails. 
		if( copy_map[ k ] ) { 		// Unless the value is False, print a ?key=value pair.
			site += "?" + k; 
			if( copy_map[ k ] !== true ) { site += "=" + copy_map[ k ]; }  		// If the value is boolean True, just print the value as a flag. 
		}
	}
	return site; 
}



































