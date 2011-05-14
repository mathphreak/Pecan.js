// If you don't have the amplify.js storage module and jQuery, then this won't work.  Period.
if (!!amplify.store && !!jQuery) {
	window.onscroll = function() {
		if (!document.body) return; // if the DOM isn't quite ready...then don't touch it.
		var currPos = document.body.scrollTop;
		amplify.store("pecan_vpos", currPos);
		currPos = document.body.scrollLeft;
		amplify.store("pecan_hpos", currPos);
	}
	// this is sort of complicated...
	// do vertical scrolling (down the page) first
	jQuery(function() {
		var vPos = amplify.store("pecan_vpos");
		var realV = !vPos ? 0 : vPos;
		window.scrollTo(0, realV);
	});
	// and do horizontal scrolling (across the page) after all images load
	jQuery(window).load(function() {
		var hPos = amplify.store("pecan_hpos");
		var realH = !hPos ? 0 : hPos;
		window.scrollBy(realH, 0);
	});
} else {
	document.write("Pecan.js can't find amplify.store, or it can't find jQuery.  Make sure both of those exist when Pecan.js loads.");
}