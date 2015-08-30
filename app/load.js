'use strict';

var Loader = require('./core/Loader');
var Animation = require('./animation');
var config = require('./config');
var app = require('./app');

var animation = new Animation();
var loader = new Loader(config.manifest);