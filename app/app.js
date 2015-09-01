'use strict';

// loader and config

var config = require('./config');
var browser = require('bowser');

// angular app

var app = angular.module('jcSalon', []);

app.controller('jcLocationCtrl', ['$scope', function($scope) {

	$scope.locations = config.locations;

	this.latLng = new google.maps.LatLng(config.locations[3].lat, config.locations[3].lng);

	var styles = [
    {
      stylers: [
        { hue: "#007178" },
        { saturation: -55 },
        { lightness: 30 }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    }
  ];

  var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

	var mapOptions = {
    zoom: 10,
    center: this.latLng,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

	$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

	$scope.map.mapTypes.set('map_style', styledMap);
	$scope.map.setMapTypeId('map_style');

	$scope.markers = [];
	
	var infoWindow = new google.maps.InfoWindow();
	
	this.createMarker = function (info){

		var markerIcon = 'images/marker.png';

		var marker = new google.maps.Marker({
		    map: $scope.map,
		    position: new google.maps.LatLng(info.lat, info.lng),
		    title: info.name,
		    icon: markerIcon
		});

		marker.content = '<div class="info-block window">'
		+ '<span>' + info.address + '</span>'
		+ '<span>' + info.cityState + '</span>'
			+ '<a href="' + 'tel:' + info.telLink + '">' + info.tel + '</a>' + '<br/>'
			+ '<a href="' + info.dir + '" target="_blank">Directions</a> | '
			+ '<a href="' + info.web + '" target="_blank">Website</a>'
		+ '</div>';

		google.maps.event.addListener(marker, 'click', function(){
		    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
		    infoWindow.open($scope.map, marker);
		});

		$scope.markers.push(marker);

	};

	config.locations.forEach(function(loc) {

		this.createMarker(loc);

	}.bind(this));

	if (browser.mobile || browser.tablet) {

		this.map = document.querySelector('#map');
		this.map.parentNode.removeChild(this.map);

	}

}]);