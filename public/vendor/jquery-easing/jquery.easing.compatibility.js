/*
 * Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery/easing
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(($) => {
	$.extend($.easing, {
		easeIn: (x, t, b, c, d) => $.easing.easeInQuad(x, t, b, c, d),
		easeOut: (x, t, b, c, d) => $.easing.easeOutQuad(x, t, b, c, d),
		easeInOut: (x, t, b, c, d) => $.easing.easeInOutQuad(x, t, b, c, d),
		expoin: (x, t, b, c, d) => $.easing.easeInExpo(x, t, b, c, d),
		expoout: (x, t, b, c, d) => $.easing.easeOutExpo(x, t, b, c, d),
		expoinout: (x, t, b, c, d) => $.easing.easeInOutExpo(x, t, b, c, d),
		bouncein: (x, t, b, c, d) => $.easing.easeInBounce(x, t, b, c, d),
		bounceout: (x, t, b, c, d) => $.easing.easeOutBounce(x, t, b, c, d),
		bounceinout: (x, t, b, c, d) => $.easing.easeInOutBounce(x, t, b, c, d),
		elasin: (x, t, b, c, d) => $.easing.easeInElastic(x, t, b, c, d),
		elasout: (x, t, b, c, d) => $.easing.easeOutElastic(x, t, b, c, d),
		elasinout: (x, t, b, c, d) => $.easing.easeInOutElastic(x, t, b, c, d),
		backin: (x, t, b, c, d) => $.easing.easeInBack(x, t, b, c, d),
		backout: (x, t, b, c, d) => $.easing.easeOutBack(x, t, b, c, d),
		backinout: (x, t, b, c, d) => $.easing.easeInOutBack(x, t, b, c, d),
	});
})(jQuery);
