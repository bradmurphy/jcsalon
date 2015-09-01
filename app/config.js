'use strict';

var config = {

  manifest: [
    {src: './images/logo.png'},
    {src: './images/hero.jpg'},
    {src: './images/fb.png'},
    {src: './images/ig.png'},
    {src: './images/bg.jpg'},
    {src: './images/alpharetta.png'},
    {src: './images/buford.png'},
    {src: './images/midtown.png'},
    {src: './images/sandysprings.png'},
    {src: './images/favicon.png'},
    {src: './images/marker.png'},
    {src: './images/amenities.jpg'},
    {src: './images/profit.jpg'},
    {src: './images/services.jpg'},
    {src: './images/virtual.jpg'},
  ],

  locations: [

		{
			name: 'Alpharetta',
			address: '11770 Haynes Bridge Road',
			cityState: 'Alpharetta, GA 30009',
			telLink: '6787445844',
			tel: '678.744.5844',
			dir: 'https://www.google.com/maps/dir/Current+Location/34.069504,-84.295151',
			web: 'http://salonsbyjc.com/alpharetta-alpharetta-crossing/',
			fb: 'https://www.facebook.com/pages/Salons-by-JC-Alpharetta/876484342370968',
			ig: 'https://instagram.com/salonsbyjc_alpharetta/',
			lat: 34.069504,
			lng: -84.295151,
			marker: 'images/alpharetta.png'
		},

		{
			name: 'Buford',
			address: '3189 Buford Drive, Suite 1339',
			cityState: 'Buford, GA 30519',
			telLink: '7708585565',
			tel: '770.858.5565',
			dir: 'https://www.google.com/maps/dir/Current+Location/34.060510,-83.990751',
			web: 'http://salonsbyjc.com/buford/',
			fb: 'https://www.facebook.com/salonsbyjcbuford?fref=ts',
			ig: 'https://instagram.com/salonsbyjc_buford/',
			lat: 34.060510,
			lng: -83.990751,
			marker: 'images/buford.png'
		},

		{
			name: 'Midtown',
			address: '1544 Piedmont Avenue, Suite 117',
			cityState: 'Atlanta, GA 30324',
			telLink: '7704645792',
			tel: '770.464.5792',
			dir: 'https://www.google.com/maps/dir/Current+Location/33.798938,-84.371742',
			web: 'http://salonsbyjc.com/atlanta-ansley-mall/',
			fb: 'https://www.facebook.com/salonsbyjcmidtown',
			ig: 'https://instagram.com/salonsbyjcmidtownatlanta/',
			lat: 33.798938,
			lng: -84.371742,
			marker: 'images/midtown.png'
		},

		{
			name: 'Sandy Springs',
			address: '6690 Roswell Road, Suite 404',
			cityState: 'Sandy Springs, GA 30328',
			telLink: '7707286677',
			tel: '770.728.6677',
			dir: 'https://www.google.com/maps/dir/Current+Location/33.938011,-84.379769',
			web: 'http://salonsbyjc.com/sandy-springs-crossing/',
			fb: 'https://www.facebook.com/sbjcsandysprings',
			ig: 'https://instagram.com/salonsbyjcssprings/',
			lat: 33.938011,
			lng: -84.379769,
			marker: 'images/sandysprings.png'
		}
  ]

};

module.exports = config;

