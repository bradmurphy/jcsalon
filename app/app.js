'use strict';

// loader and config

var config = require('./config');
var browser = require('bowser');

// angular app

var app = angular.module('jcSalon', []);

app.controller('jcLocationCtrl', ['$scope', function($scope) {

	$scope.locations = config.locations;
	$scope.styledMap = false;

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
      elementType: "labels.text",
      stylers: [
        { visibility: "off" }
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
	
	var marker;

	var createMarker = function (info, marker){

		if (marker) {

			marker = new google.maps.Marker({
			    map: $scope.map,
			    position: new google.maps.LatLng(info.lat, info.lng),
			    title: info.name,
			    icon: marker.marker
			});

		} else {

			marker = new google.maps.Marker({
			    map: $scope.map,
			    position: new google.maps.LatLng(info.lat, info.lng),
			    title: info.name
			});

		}
		

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

	$scope.map.addListener('maptypeid_changed', function() {

		if ($scope.styledMap) {

			$scope.markers.forEach(function(el) {
				el.setMap(null);
			});

			config.locations.forEach(function(loc) {
				createMarker(loc, loc);
			});

			$scope.styledMap = false;

		} else {

			$scope.markers.forEach(function(el) {
				el.setMap(null);
			});

			config.locations.forEach(function(loc) {
				createMarker(loc);
			});

			$scope.styledMap = true;

		}

	});

	config.locations.forEach(function(loc) {

		createMarker(loc, loc);

	});

	if (browser.mobile || browser.tablet) {

		this.map = document.querySelector('#map');
		this.map.parentNode.removeChild(this.map);

	}

}]);