/**
 * 'LocationDetail':	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for LocationDetail components
 */
lpch.LocationDetail = lpch.BaseView.extend({
	mapCanvas: null,
	latitude: 37.436357,
	longtitude: -122.175048,
	imageMaker: '/web-resources/default/img/u12-icon-map-maker.png',
	
	initialize: function() {
		var _this = this;
		
	
		_this.mapCanvas = document.getElementById('map-canvas');
		_this.initMap();

		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
		
	},
	handleViewportChange: function(width, height) {

	},
	initMap: function() {
		var _this = this;
		var map = null;

		var mapCenter = new google.maps.LatLng(_this.latitude, _this.longtitude);

		map = new google.maps.Map(_this.mapCanvas, {
			zoom : 12,
			center : mapCenter,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		});

		var marker = new google.maps.Marker({
			map : map,
			position : new google.maps.LatLng(_this.latitude, _this.longtitude),
			draggable : false,
			icon : _this.imageMaker
		});
	}
});
/**
 * LocationDetail:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.LocationDetail
 */

$(window).bind('initializeComponents', function() {

//google.maps.event.addDomListener(window, 'load', function() {
	$('.location-detail').each(function() {
		//setTimeout(function() {
			new lpch.LocationDetail({el: this});
		//}, 1300);
	});
});

