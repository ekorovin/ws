lpch.GoogleMapSearchView = lpch.BaseView.extend({
	initialize: function() {

		var _this = this;
		_this.initMap();

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	initMap: function() {
		
		var SearchLocations =[];
		var LocDocs = searchResults.response.docs;
		
			
		var locSearchResult = [];
		if(LocDocs.length>0){
		var i=0;		
				$.each(LocDocs, function(j){
				
					 if (LocDocs[j]['content-type'] == "location"){
						 locSearchResult[i] = {
							 "id": LocDocs[j].id,
							 "title": LocDocs[j].title,
							 "name": LocDocs[j].name,
							 "description": LocDocs[j].description,
							 "keywords": LocDocs[j].keywords,
							 "content-path" : LocDocs[j]["path"],
							 "address": LocDocs[j]["address-a"],
							 "address-city" : LocDocs[j]["city"],
							 "address-zip": LocDocs[j]["zip"],
							 "address-state": LocDocs[j]["state"],
							 "location-phone": LocDocs[j]["telecom"],
							 "latitude" : LocDocs[j]["lat"],
							 "longitude" : LocDocs[j]["long"],
							 "location-map-image-small": LocDocs[j]["location-map-image-small"],
							 "location-map-image-large": LocDocs[j]["location-map-image-large"],
							 "doctor": LocDocs[j].doctor							 
						 };
						 i++; 		
					 }
				});
			
			}
		
		var lat = Number(locSearchResult[0]["latitude"]);
		var lng = Number(locSearchResult[0]["longitude"]);
		var mapCenter = new google.maps.LatLng(lat, lng);
		var pinPath = '/web-resources/default/img/ico-point.png';
	
        map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 8,
          center: mapCenter,
          mapTypeControl: true,
          mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
          navigationControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        
		var that;
		var markerClick = function() {
			if (that) {
				that.setZIndex();
			}
			that = this;
			this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
		};   
      
        
        
        $.each(locSearchResult, function(j) {
	        var pinImage = pinPath;
	        
	        lat = Number(locSearchResult[j]["latitude"]);
			lng = Number(locSearchResult[j]["longitude"]);
		        
			var marker = new MarkerWithLabel({
					position: new google.maps.LatLng(lat, lng),
			       	draggable: false,
			       	clickable: true,
					map: map,
					labelContent: j+1,
					icon: pinImage,
			       	title: locSearchResult[j].name,
					labelAnchor: new google.maps.Point(20, 50),
					labelClass: "markerwithlabel", // the CSS class for the label
			     });
	        
	        google.maps.event.addListener(marker, "click", markerClick);
        });
      
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}	
	
});