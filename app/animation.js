'use strict';

var TweenMax = require('TweenMax');
var browser = require('bowser');

var Animation = function() {

	if (browser.mobile || browser.tablet) {

		TweenMax.set('.animate',{ autoAlpha: 1 });

	} else {

		TweenMax.staggerTo('.animate', 0.35, { autoAlpha: 1, ease: Power4.easeIn }, 0.2);

	}



};

module.exports = Animation;
