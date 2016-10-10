define(['../sandbox/Utils'], function (Utils) {

	'use strict';

    var PlaySprite = function () {
        new Utils();

        this.$spriteContainer = document.querySelector('.spriteContainer');

        window.DispatchEvent.Vents.listenEvent('play', this.onPlayAnimation.bind(this));
        window.DispatchEvent.Vents.listenEvent('pause', this.onPauseAnimation.bind(this));
    };

    PlaySprite.prototype = (function () {

        var position = 0, id = 0, fps = 10, now,
            then = Date.now(), interval = 1000/fps, delta;

        var onPlayAnimation = function () {
            id = requestAnimationFrame(nextFrame.bind(this));
        },

        onPauseAnimation = function () {
            cancelAnimationFrame(id);
        },

        nextFrame = function () {
            id = requestAnimationFrame(nextFrame.bind(this));

            now = Date.now();
            delta = now - then;

            if (delta < interval) {
                return;
            }

            then = now - (delta % interval);

            position = position - 279.44;

            if (position >= -1956) {
                this.$spriteContainer.style.backgroundPosition = position + 'px 0';
            } else {
                position = 0;
                this.$spriteContainer.style.backgroundPosition = '0px 0px';
            }
        };

        return {
            onPlayAnimation: onPlayAnimation,
            onPauseAnimation: onPauseAnimation
        };

    })();

	return PlaySprite;
});
