'use strict';

// load images

var Loader = require('./core/Loader');
var loader = new Loader(config.manifest);

// require animation, config and app
var Animation = require('./animation');
var config = require('./config');
var app = require('./app');

// fire animation

var animation = new Animation();
