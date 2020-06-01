
jQuery(document).ready(function() {
	jQuerydoc_height = jQuery(window).innerHeight(); 
	jQuery('.slider').css("margin-top", jQuerydoc_height);
	jQuery('.full-height').css("height", jQuerydoc_height);
	jQuery('.full-height .fullwidthbanner-container').css("height",jQuerydoc_height);
	});