/*global define:false */
define(function () {
	
	'use strict';

    var Utils = function () {
        this.isRequestAnimationFrame();
    };
	
    Utils.prototype = (function () {

        var isRequestAnimationFrame = function () {
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = (function () {
                    return window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.oRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            function(callback, element) {
                                window.setTimeout(callback, 1000 / 60);
                            };

                    })();
            }
        };

        return {
            isRequestAnimationFrame: isRequestAnimationFrame
        };

    })();

	return Utils;
});
