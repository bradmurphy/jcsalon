'use strict';

var config = require('./config');
var Loader = require('./core/Loader');
var browser = require('bowser');
var page = require('./index');

var loader = new Loader(config.manifest);