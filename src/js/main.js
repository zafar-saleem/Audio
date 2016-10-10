/*global require:false */
require(['sandbox/EventDispatcher', 'app'], function (EventDispatcher, App) {
	
	window.DispatchEvent = {
		Vents: new EventDispatcher()
	};

	new App();
});
