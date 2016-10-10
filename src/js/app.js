/*global define:false */
define(['modules/Audio', 'modules/PlaySprite'], function (Audio, PlaySprite) {
	
	'use strict';

    var App = function () {
        new Audio();
        new PlaySprite();
    };
	
    App.prototype = (function () {

        return {};

    })();

	return App;
});
