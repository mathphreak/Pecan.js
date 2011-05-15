// If you don't have the amplify.js storage module and jQuery, then this won't work.  Period.
if (!!amplify.store && !!jQuery) {
	var Pecan = {initted: false, vert: false, horiz: false};
	jQuery(window).scroll(function() {
		if (!document.body) return; // if the DOM isn't quite ready...then don't touch it.
		if (!Pecan.initted || !Pecan.vert || !Pecan.horiz) return; // if we're still waiting to load, then don't change the loaded values.
		var currPos = document.body.scrollTop;
		amplify.store("pecan_vpos", currPos);
		currPos = document.body.scrollLeft;
		amplify.store("pecan_hpos", currPos);
	});
	Pecan.init = function() {
		window.scrollTo(0, 0);
		Pecan.initted = true;
	};
	Pecan.loadVert = function() {
		var vPos = amplify.store("pecan_vpos");
		var realV = !vPos ? 0 : vPos;
		window.scrollBy(0, realV);
		Pecan.vert = true;
	};
	Pecan.loadHoriz = function() {
		var hPos = amplify.store("pecan_hpos");
		var realH = !hPos ? 0 : hPos;
		window.scrollBy(realH, 0);
		Pecan.horiz = true;
	};
	Pecan.load = function() {
		Pecan.init();
		Pecan.loadVert();
		Pecan.loadHoriz();
	};
	Pecan.useDefaultEvents = function() {
		jQuery(function() {
			Pecan.init();
			Pecan.loadVert();
		});
		jQuery(window).load(Pecan.loadHoriz);
	};
} else {
	document.write("Pecan.js can't find amplify.store, or it can't find jQuery.  Make sure both of those exist when Pecan.js loads.");
}