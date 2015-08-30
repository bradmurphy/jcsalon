'use strict';

function Loader( manifest ) {

  this.manifest = manifest;
  this.loadItems = 0;
  this.loadItemsTotal = 0;
  this.loadComplete = false;
  this.consoleObject = {
    loaded: 0.0
  };

  manifest.forEach(function(item) {
    this._loadImage(item.src);
  }.bind(this));

}

Loader.prototype._loadImage = function( path ) {
  this.consoleObject[path] = false;
  var img = new Image();
  img.addEventListener( 'load', this._onLoad.bind( this, path ) );
  img.src = path;
  this.loadItemsTotal++;
};

Loader.prototype._onLoad = function ( id ) {
  this.loadItems++;
  this.consoleObject[id] = true;
  this.consoleObject.loaded = Math.round( ( this.loadItems / this.loadItemsTotal ) * 100 ) + '%';
  if ( this.loadItemsTotal === this.loadItems ) {
    this._onLoadComplete();
  }

};

Loader.prototype._onLoadComplete = function () {

  if (this.loadComplete === true) {
    return;
  }

  this.loadComplete = true;

};

module.exports = Loader;
