// If you don't have the amplify.js storage module, then this won't work.  Period.
if (!!amplify.store) {
	window.onscroll = function() {
		var currPos = document.body.scrollTop;
		amplify.store("pecan_scroll_position", currPos);
	}
	window.onDomReady = function() {
		var storedPos = amplify.store("pecan_scroll_position");
		if (!!storedPos) {
			window.scrollTo(0, storedPos);
		}
	}
} else {
	document.write("Well, it looks like <em>some</em>body forgot to import Amplify before they imported Pecan.js.");
}