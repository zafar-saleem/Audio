define(['../sandbox/Utils'], function (Utils) {

    'use strict';

    var Audio = function () {
        var self = this;

        this.$audioContainer = document.querySelector('.audioContainer');
        this.$wrapper = document.querySelector('.wrapper');
        this.$loading = document.querySelector('.loading');
        this.$audioContainer.setAttribute('src', 'media/audio.wav');

        this.$audioContainer.addEventListener('playing', this.onPlayAudio.bind(this));
        this.$audioContainer.addEventListener('pause', this.onPauseAudio.bind(this));
        this.$audioContainer.addEventListener('ended', this.onEndedAudio.bind(this));

        this.$audioContainer.addEventListener('loadedmetadata', this.setStyleDisplayProperty.bind(this));
    };

    Audio.prototype = (function () {

        var isInitialPlay = true;

        var onPlayAudio = function () {
            if (isInitialPlay) {
                isInitialPlay = false;
                this.$audioContainer.currentTime = 1;
            }

            if (!this.$audioContainer.paused && this.$audioContainer.duration > 3) {
                window.DispatchEvent.Vents.dispatchEvent('play');
            }
        },

        onPauseAudio = function () {
            window.DispatchEvent.Vents.dispatchEvent('pause');
        },

        onEndedAudio = function () {
            this.$audioContainer.play();
            this.$audioContainer.currentTime = 1;
        },

        setStyleDisplayProperty = function () {
            if (this.$loading.classList.contains('isVisible')) {
                this.$loading.classList.remove('isVisible');
                this.$loading.classList.add('isHidden');
            }

            if (this.$wrapper.classList.contains('isHidden')) {
                this.$wrapper.classList.remove('isHidden');
                this.$wrapper.classList.add('isVisible');
            }
        };

        return {
            onPlayAudio: onPlayAudio,
            onPauseAudio: onPauseAudio,
            onEndedAudio: onEndedAudio,
            setStyleDisplayProperty: setStyleDisplayProperty
        };

    })();

    return Audio;
});
