= Pecan.js =

Pecan.js is a lightweight JavaScript persistent scroll location manager.  In plain English, scroll somewhere and Pecan.js remembers where you scrolled.

== Instructions for use ==

1.  Download Pecan.js.
2.  Include jQuery, amplify.js, and Pecan.js in that order.  (These dependencies are important.)
3.  After Pecan.js has been included, call `Pecan.useDefaultEvents()` to have vertical scrolling when the DOM is ready and horizontal scrolling after the images load.  Alternatively, you can use `Pecan.load()` to manually scroll to the stored location, or you can use `Pecan.init()`, `Pecan.loadVert()`, and `Pecan.loadHoriz()` for even more control.
4.  You're done.