// If you don't have the amplify.js storage module and jQuery, then this won't work.  Period.
if (!!amplify.store && !!jQuery) {
	window.onscroll = function() {
		if (!document.body) return; // if the DOM isn't quite ready...then don't touch it.
		var currPos = document.body.scrollTop;
		amplify.store("pecan_vpos", currPos);
		currPos = document.body.scrollLeft;
		amplify.store("pecan_hpos", currPos);
	}
	jQuery(function() {
		var vPos = amplify.store("pecan_vpos");
		var hPos = amplify.store("pecan_hpos");
		window.scrollTo(!hPos ? 0 : hPos, !vPos ? 0 : vPos);
	});
} else {
	document.write("Pecan.js can't find amplify.store, or it can't find jQuery.  Make sure both of those exist when Pecan.js loads.");
}