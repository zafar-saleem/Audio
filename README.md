## Requirements
Below is the stack used in this project. Please follow the getting started section in order to make this project run.

## Stack
 - Requirejs.
 - HTML5.
 - CSS
 - JSHint.
 - [CSSlint](https://github.com/CSSLint/csslint).
 - [Bower](http://bower.io/).
 - Expressjs.
 - Sublime Text.
 - Git.
 - Gitlab.
 - Mac OS X.
 - Grunt (as build tool) with following plugin!
   - [CSSmin](https://github.com/gruntjs/grunt-contrib-cssmin)
   - [Requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)
   - [Concat](https://github.com/gruntjs/grunt-contrib-concat)
   - [JSHint](https://github.com/gruntjs/grunt-contrib-jshint)
   - [CSSLint](https://github.com/gruntjs/grunt-contrib-csslint)
   - [Clean](https://github.com/gruntjs/grunt-contrib-clean)
   - [HTMLmin](https://github.com/gruntjs/grunt-contrib-htmlmin)
   - [ProcessHTML](https://github.com/dciccale/grunt-processhtml)
   - [Copy](https://github.com/gruntjs/grunt-contrib-copy)
   - [Nodemon](https://github.com/ChrisWren/grunt-nodemon)
   - [Concurrent](https://github.com/sindresorhus/grunt-concurrent)
   - [Watch](https://github.com/gruntjs/grunt-contrib-watch)

## Getting started
In order to run this project in the browser successfully, please follow the steps below!

	1. Clone this repository.
	2. CD to the root folder of this project.
	3. Run `npm install` (if it complains then run `sudo npm install`) to install all Grunt plugins(dependencies).
	4. Run `bower install` to install all project dependencies i.e. requirejs into js/libs folder.
	5. Now run `grunt` command on your terminal in `root` folder of this project.
	6. Now go to your browser and type `localhost:8000` to view this project in action.

## Description
Above steps, in getting started section, will install all dependencies required for this project to run and make the project ready for
production by minifying all the JavaScript and files. It will place the production ready project in `dist` folder in `root`.

Moreover, I created 2 main modules in `js/modules` folder named `Audio` and `PlaySprite`. `Audio` module is responsible for interacting with audio and `PlaySprite` module is responsible for playing the animation of sprite image that was provided for this task.

In order to keep both of these module decouple, I wrote `EventDispatcher` module in `js/sandbox` folder. Its responsibility is that it
allows to dispatch events from one module using `dispatchEvent` function and listen to events in target module using `listenEvent` 
function. Both of these functions are publically available in `EventDispatcher` module's API.

In Utils, inside `js/sandbox`, checks for `requestAnimationFrame`.

## Directory Structure

```
./
├──dist/
│	src
│	├── css
│	│   └── styles.css
│	├── images
│	│   └── spritesheet.png
│	├── index.html
│	├── js
│	│   ├── app.js
│	│   ├── config.js
│	│   ├── libs
│	│   │   └── requirejs
│	│   │       ├── README.md
│	│   │       ├── bower.json
│	│   │       └── require.js
│	│   ├── main.js
│	│   ├── modules
│	│   │   ├── Audio.js
│	│   │   └── PlaySprite.js
│	│   └── sandbox
│	│       ├── EventDispatcher.js
│	│       ├── IsMobile.js
│	│       └── Utils.js
│	└── media
│	    └── audio.wav
├──.bowerrc
├──.csslintrc
├──.gitignore
├──bower.json
├──Gruntfile.js
├──package.json
├──README.md
├──server.js
```
