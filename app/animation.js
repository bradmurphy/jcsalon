'use strict';

var TweenMax = require('TweenMax');

var Animation = function() {

	this.hero = document.querySelector('.hero');
	this.locationHeader = document.querySelector('.location h1');
	this.locationCopy = document.querySelector('.location p');
	this.map = document.querySelector('#map');

	TweenMax.staggerTo([
			this.hero,
			this.locationHeader,
			this.locationCopy,
			this.map
		], 0.25, { autoAlpha: 1, ease: Power4.easeIn }, '0.15');

	console.log('animation');

};

module.exports = Animation;
