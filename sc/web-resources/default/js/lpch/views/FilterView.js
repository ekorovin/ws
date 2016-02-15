/**
 * FilterView:	Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the Search Results doctor filters
 */
lpch.FilterView = lpch.BaseView.extend({
	filterEventName: "filter.default",
	
	events:{
		"submit form": "submitFilter"
	},
	initialize: function(options){
		_.extend(this, options);
		module.vent.on("updateAllCriteria", this.updateAllCriteria, this);
		this.render();
	},
	render: function(){
		var _this = this;
		
		// check for a search-term param on the URL
		if (module.view.getParameterByName("search-term") == "") {
			// if blank, hide the results filters
			this.$el.find('.results-doctor').hide();
			// add some padding to the search instructions
			this.$el.find('.search-doctor').addClass("pad");
		} else {
			// if search-term not blank, hide the search instructions
			this.$el.find('#frm-search-doctor-header').hide();
		}
		
		// set zip code to accept numeric chars only
		this.$el.find('#zipcode').numeric();
		
		// bind change updates to the selectpickers
		this.$el.find('.selectpicker').bind("change.update",function(e){
			module.view.trackEvent($(e.currentTarget).next().find('button .filter-option').text(), "Filter", "Search");
			// if the NOT the 'specialty' selectpicker
			if ($(this).attr('id') != 'slSpecialty') {
				// update filter criteria
				_this.updateAllCriteria();
			}
		}).selectpicker();

		this.$el.find('.toggle-filter').click(function(){
			var $this = $(this);
			$('.filter-inner').stop(true,true).slideToggle(function() {
				$this.toggleClass('expand').toggleClass('collapse');
			});
			return false;
		});
		
		// on blur for zip code field
		this.$el.find("input[name='db_location1zip']").blur(function() {
	    	_this.updateAllCriteria();
		});
		
		// click listener for the SEARCH button in the Find a Doctor form
		this.$el.find('.doctor-search-btn .btn').click(function(e) {
			e.preventDefault();
			var $form = _this.$el.find('.search-doctor form');
			var url = $form.attr('action') + '?tab=doctors&search-term=';
			// if the input field is NOT blank, use this search term
			if ($form.find('.doctor-name input').val() != "") {
				url += $form.find('.doctor-name input').val();
				window.location = url;
			} else if ($form.find('#slSpecialty').val() != "") {
				// else if the 'specialty' is selected use this search term
				url += $form.find('#slSpecialty').val();
				window.location = url;
			}
		});
		
		// ENTER keypress handler for the Find a Doctor input field
		this.$el.find('.search-doctor form .doctor-name input').bind("keypress", function(e) {
	        if (e.keyCode == 13) {
	        	_this.$el.find('.doctor-search-btn .btn').trigger("click");
	        }
		});
		
		this.updateAllCriteria();
	},
	
	/**
	 * @updateAllCriteria	Method that serializes the form and submits and triggers the filter event
	 */
	updateAllCriteria: function() {
		var _this = this;
		var dataArray = this.$el.find("form#frm-filter-doctor").serializeArray();
		var dataObj = {};
		$.each(dataArray, function(i){
			dataObj[dataArray[i].name] = dataArray[i].value;
		});
		
		// if the zip is defined, get the GPS coords
		if (dataObj.db_location1zip != "") {
			var url = 'http://maps.googleapis.com/maps/api/geocode/json?address='+dataObj.db_location1zip+'&sensor=false';
	    	$.getJSON(url, function(data) {
	        	dataObj['lat'] = data.results[0].geometry.location.lat;
				dataObj['lng'] = data.results[0].geometry.location.lng;
				module.vent.trigger(_this.filterEventName, dataObj);
	    	});
		} else {
			module.vent.trigger(this.filterEventName, dataObj);
		}
	},
	
	/**
	 * @method	submitFilter
	 * @param 	e
	 */
	submitFilter: function(e){
		e.preventDefault();
	}
	
});

/**
 * FilterView:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '#filter-doctor' elems and initialize lpch.FilterView
 */
$(window).bind('initializeComponents', function() {
	// die if there are no #filter-doctor elements returned
	if ($('#filter-doctor').length == 0) return;
	new lpch.FilterView({
		el: '#filter-doctor',
		filterEventName:"filter.doctor",
	});
});