var $iv = jQuery.noConflict();
   
function fuckredirect(){
$iv(function() {
	$iv( '.users-online, #chativ' ).each(function() {
		$iv(this).parent().remove();
	});
	$iv('#seguidores, #sidebar div.title:contains("Comparte con Nosotros…"), #wp-discord, #sidebar div.title:contains("Usuarios en línea")').each(function() {
    	$iv(this).remove();
  	});
	$iv( '#postcontent div fieldset div div span a' ).each(function() {
		var string = $iv( this ).attr('href').replace(/.+li\/\?/g,'');
  		$iv( this ).attr('href',string);
	});
}
setTimeout(fuckredirect, 500)
