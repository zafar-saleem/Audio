/*global define:false */
define(function () {
	
	'use strict';

    var EventDispatcher = function () {
        this.eventsList = {};
    };
	
    EventDispatcher.prototype = (function () {
        
        var listenEvent = function (eventName, callback) {
            if (!this.eventsList[eventName]) {
                this.eventsList[eventName] = [];
            }

            this.eventsList[eventName].push(callback);
        },

        dispatchEvent = function (eventName, dataObject) {
            if (!this.eventsList[eventName] || this.eventsList[eventName].length < 1) {
                return;
            }

            this.eventsList[eventName].forEach(function(listener) {
                listener(dataObject || {});
            });
        };

        return {
            dispatchEvent: dispatchEvent,
            listenEvent: listenEvent
        };

    })();

	return EventDispatcher;
});
