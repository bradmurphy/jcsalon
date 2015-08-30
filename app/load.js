'use strict';

// require animation, config and app
var Animation = require('./animation');
var config = require('./config');
var app = require('./app');

// load images

var Loader = require('./core/Loader');
var loader = new Loader(config.manifest);

// fire animation

var animation = new Animation();
