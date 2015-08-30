'use strict';

// loader and config

var config = require('./config');
var browser = require('bowser');

// angular app

var app = angular.module('jcSalon', []);

app.controller('jcLocationCtrl', ['$scope', function($scope) {

	$scope.locations = config.locations;

	var latLng = new google.maps.LatLng(33.975, -84.387982);

	var mapOptions = {
    zoom: 8,
    center: latLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };

	$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

	$scope.markers = [];
	
	var infoWindow = new google.maps.InfoWindow();
	
	var createMarker = function (info){
	    
		var marker = new google.maps.Marker({
		    map: $scope.map,
		    position: new google.maps.LatLng(info.lat, info.lng),
		    title: info.name
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

	for (var i = 0; i < config.locations.length; i++){

	  createMarker(config.locations[i]);

	}

	if (browser.mobile || browser.tablet) {

		this.map = document.querySelector('#map');
		this.map.parentNode.removeChild(this.map);

	}

}]);