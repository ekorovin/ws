lpch.GoogleMapView = lpch.BaseView.extend({
	initialize : function() {

		var _this = this;

		_this.initMap();
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange : function(layout) {
		var orientation = layout.get('orientation');
		if (this.infoBubble) {
			if (orientation == 'tablet' || orientation == 'smartphone') {
				this.infoBubble.setMinWidth(255);
			} else if (orientation == 'desktop') {
				this.infoBubble.setMinWidth(400);
			}
		}

	},
	
	handleViewportChange : function(width, height) {

	},
	
	initMap : function() {
		// defaultLocation defined as global var in page/window
		var lat = window.defaultLocation['lat'];
		var lng = window.defaultLocation['long'];
		
		var mapCenter = new google.maps.LatLng(lat, lng);
		
		map = new google.maps.Map(document.getElementById('map-canvas'), {
			zoom : 12,
			center : mapCenter,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		});
		
		var image = '/web-resources/default/img/map-maker-icon.png';
		var marker = new google.maps.Marker({
			map : map,
			position : mapCenter,
			draggable : false,
			icon : image
		});

		var contentString = window.defaultLocation.content;
		var bubbleColor = '#fff';
		if (Modernizr.rgba)
			bubbleColor = 'rgba(255,255,255,0.8)';

		var infoBubble = new InfoBubble({
			minWidth : 255,
			minHeight : 110,
			borderRadius : 0,
			padding : 20,
			arrowSize : 10,
			borderWidth : 0,
			borderColor : bubbleColor,
			backgroundColor : bubbleColor,
			content : contentString,
			backgroundClassName : 'mapBG',
			hideCloseButton : true,
			shadowStyle : 1,
			arrowSize : 20
		});
		infoBubble.open(map, marker);
		
		// allows click on marker to center map on marker and infobubble
		google.maps.event.addListener(marker, 'click', function(event) {
			infoBubble.open(map, marker);
	    });
		
		// fix for map that doesn't autopan to marker/infowindow
		google.maps.event.addListenerOnce(map, 'idle', function(){
			google.maps.event.trigger(marker,'click');
		});  
	}
});

$(window).bind('initializeComponents', function() {
	$('.google-map').each(function() {
		if (!google)
			return;
		setTimeout(function() {
			new lpch.GoogleMapView({
				el : this
			});
		}, 1300);
	});
});
