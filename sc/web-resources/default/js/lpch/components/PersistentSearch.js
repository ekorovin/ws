/**
 * PersistentSearch:	Implementation
 * Description:			An extension of the lpch.BaseView object
 * 						Allows for declaration of interactivity of the persistent search widget
 */
lpch.PersistentSearch = lpch.BaseView.extend({
	
	$magGlass: null,
	$searchBar: null,
	$searchInput: null,
	$searchResults: null,
	
	pSearchClosedWidth: 40,
	pSearchClosedLeft: 380,
	pSearchActiveWidth: 258,
	pSearchActiveLeft: 160,
	pSearchOpenWidth: 420,
	pSearchOpenLeft: 0,
	
	userClicked: false,
	csstransitions: false,
	
	state:		"active",
	CLOSED: 	"closed",
	OPEN: 		"open",
	ACTIVE: 	"active",
	RESULTS: 	"results",
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		this.csstransitions = $("html").hasClass("csstransitions");
		
		// check to see if the device is Android's Browser app NOT Chrome
		// if Browser app, add class to header to help with flyout nav
		if ($('html').hasClass('android') && !$('html').hasClass('chrome')) this.$el.addClass('android-browser');
		
		if ($("#emergency-banner").length > 0) this.$el.find(".p-search-spacer").addClass("emergency");
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		this.$magGlass = this.$el.find(".p-search-mag");
		this.$searchBar = this.$el.find(".p-search-bar");
		this.$searchInput = this.$el.find(".p-search-input");
		this.$searchResults = this.$el.find(".p-search-results");
		
		this.initMagGlass();
		this.initSearchInput();
		this.initWindowScroll();
	
		this.handleViewportChange(module.view.getViewportWidth(), module.view.getViewportHeight());
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);

	},
	
	initMagGlass: function() {
		var _this = this;
		this.$magGlass.click(function(e) {
			e.stopPropagation();
			_this.userClicked = true;
			if (_this.state == _this.CLOSED) {
				_this.activate();
				module.view.trackEvent('Activate', 'Button', 'Search Widget');
			} else if (_this.state == _this.OPEN) {
				module.view.trackEvent('Submit', 'Button', 'Search Widget');
				_this.$el.find(".p-search-form").submit();
			}
		}).hover(function() {
			if (_this.state == _this.CLOSED) {
				if (_this.csstransitions) {
					_this.$el.addClass("hover");
				} else {
					_this.$searchBar.animate({"opacity": 1}, "fast");
				}
			}
		}, function() {
			if (_this.state == _this.CLOSED) {
				if (_this.csstransitions) {
					_this.$el.removeClass("hover");
				} else {
					_this.$searchBar.animate({"opacity": 0.9}, "fast");
				}
			}
		});
	},
	
	initSearchInput: function() {
		var _this = this;
		this.$searchInput.keyup(function() {
			_this.open();
			var url = "/en/search/widget.page?search-term=" + $(this).val();
//			var url = "/web-resources/default/data/search-query.json";
			if ($(this).val().length > 3) {
				_this.load(url, _this.onSearchResults);
			} else {
				_this.$searchResults.empty();
			}
		}).focus(function() {
			_this.userClicked = true;
			if (Modernizr.touch) {
				$("#header, #navigation, #persistent-search").css("position", "absolute");
			}
		}).blur(function() {
			if (Modernizr.touch) {
				$("#header, #navigation, #persistent-search").css("position", "fixed");
			}
		}).click(function(event) {
			// should prevent closing
			event.stopPropagation();
		});
	},
	
	initWindowScroll: function() {
		var _this = this;
		$(window).scroll(function() {
			if (_this.$searchInput.is(":focus")) return;
			if (_this.state == _this.RESULTS) return;
			//if (_this.userClicked) return;
			_this.close();
		});
	},
	
	initDocumentClick: function() {
		var _this = this;
		$(document).click(function() {
			_this.close();
		});
	},
	
	load: function(url, onSuccess, data) {
		var _this = this;
		$.getJSON(url, function(data) {
			_this.onSearchResults(data, _this);
		});
	},
	
	onSearchResults: function(result, _this) {
		// empty the prior results
		_this.$searchResults.empty();
		// create HTML for the different categories and ul lists in each category
		var $servicesHTML = $($.trim(module.view.model.templates.get('pSearchServicesItemTemplate').get('html'))),
			$servicesList = $servicesHTML.find(".p-search-result-set-list"),
		
			$doctorsHTML = $($.trim(module.view.model.templates.get('pSearchDoctorsItemTemplate').get('html'))),
			$doctorsList = $doctorsHTML.find(".p-search-result-set-list"),
		
			$locationsHTML = $($.trim(module.view.model.templates.get('pSearchLocationsItemTemplate').get('html'))),
			$locationsList = $locationsHTML.find(".p-search-result-set-list"),
		
			$eventsHTML = $($.trim(module.view.model.templates.get('pSearchEventsItemTemplate').get('html'))),
			$eventsList = $eventsHTML.find(".p-search-result-set-list"),
		
			$pagesHTML = $($.trim(module.view.model.templates.get('pSearchPagesItemTemplate').get('html'))),
			$pagesList = $pagesHTML.find(".p-search-result-set-list"),
		
			$allHTML = $($.trim(module.view.model.templates.get('pSearchAllItemTemplate').get('html'))),
			list,
			numServices = 0,
			numCaregivers = 0,
			numLocations = 0,
			numClasses = 0,
			numPages = 0,
			docs =	result.response.docs;
		
		$.each( docs, function(i, data) {
			switch(data['content-type']) {
				case "service":
					list = $servicesList;
					numServices++;
					break;
				case "caregiver":
					list = $doctorsList;
					numCaregivers++;
					break;
				case "location":
					list = $locationsList;
					numLocations++;
					break;
				case "class":
					list = $eventsList;
					numClasses++;
					break;
				case "webcrawl":
				//default: // uncomment to capture all results not in one of the above content-types
					list = $pagesList;
					numPages++;
					break;
			}
			// if the list exists and the length is less than 3
			if (list && list.find("li").length < 3) {
				var li = '<li><a href="'+data['url']+'" title="' + (data.name || data.title) + '">' + (data.name || data.title) + '</a></li>';
				$(li).appendTo(list);
			}
		});
		if ($servicesList.find("li").length > 0) {
			// hide the icon if the list only have 1 item
			if ($servicesList.find("li").length == 1) $servicesHTML.find(".p-search-result-set-header .icon").hide();
			$servicesHTML.find(".p-search-result-set-header .header").append("<span> (" + numServices + ")</span>");
			$servicesHTML.appendTo(_this.$searchResults);
		}
		if ($doctorsList.find("li").length > 0) {
			// hide the icon if the list only have 1 item
			if ($doctorsList.find("li").length == 1) $doctorsHTML.find(".p-search-result-set-header .icon").hide();
			$doctorsHTML.find(".p-search-result-set-header .header").append("<span> (" + numCaregivers + ")</span>");
			$doctorsHTML.appendTo(_this.$searchResults);
		}
		if ($locationsList.find("li").length > 0) {
			// hide the icon if the list only have 1 item
			if ($locationsList.find("li").length == 1) $locationsHTML.find(".p-search-result-set-header .icon").hide();
			$locationsHTML.find(".p-search-result-set-header .header").append("<span> (" + numLocations + ")</span>");
			$locationsHTML.appendTo(_this.$searchResults);
		}
		if ($eventsList.find("li").length > 0) {
			// hide the icon if the list only have 1 item
			if ($eventsList.find("li").length == 1) $eventsHTML.find(".p-search-result-set-header .icon").hide();
			$eventsHTML.find(".p-search-result-set-header .header").append("<span> (" + numClasses + ")</span>");
			$eventsHTML.appendTo(_this.$searchResults);
		}
		if ($pagesList.find("li").length > 0) {
			// hide the icon if the list only have 1 item
			if ($pagesList.find("li").length == 1) $pagesHTML.find(".p-search-result-set-header .icon").hide();
			$pagesHTML.find(".p-search-result-set-header .header").append("<span> (" + numPages + ")</span>");
			$pagesHTML.appendTo(_this.$searchResults);
		}
		$allHTML.appendTo(_this.$searchResults);
		
		// trigger the form on click of View All Results button
		_this.$searchResults.find(".view-all-results").click(function(event) {
			event.preventDefault();
			_this.$el.find(".p-search-form").submit();
		});
		
		// track events on pSearch tabs
		_this.$el.find(".p-search-result-set-header a").click(function(event) {
			event.preventDefault();
			module.view.trackEvent($(this).attr('title'), 'Tab', 'Search Widget');
			var href = $(this).attr("href");
			window.location = href + _this.$searchInput.val();
		});
		
		// track events on pSearch results
		_this.$el.find(".p-search-result-set-list a").not('.view-all-results').click(function(event) {
			module.view.trackEvent($(this).attr('title'), $(this).parent().parent().prev().find('a').attr('title'), 'Search Widget');
		});
		_this.$el.find(".p-search-result-set-list a.view-all-results").click(function(event) {
			module.view.trackEvent($(this).attr('title'), 'View All', 'Search Widget');
		});
		
		_this.$searchResults.find(".p-search-result-set:first-child").addClass("first");
		if (_this.csstransitions) {
			_this.$el.addClass(_this.RESULTS);
		} else {
			_this.$searchResults.css("visibility", "visible").animate({
				maxHeight: "600px",
				opacity: "1"
			}, "fast");
		}
	},
	
	activate: function() {
		this.$searchInput.val("");
		if (this.csstransitions) {
			this.$el.removeClass("hover");
			this.$el.addClass(this.ACTIVE);
		} else {
			this.$searchBar.animate({
									opacity: 0.9,
									left: this.pSearchActiveLeft,
									width: this.pSearchActiveWidth
							}, "fast");
			this.$searchResults.animate({
									left: this.pSearchActiveLeft,
									width: this.pSearchActiveWidth
							}, "fast");
			this.$searchInput.fadeIn("fast");
		}
		this.setState(this.ACTIVE);
	},
	
	open: function() {
		if (this.state == this.OPEN) return;
		if (this.csstransitions) {
			this.$el.addClass(this.OPEN);
		} else {
			this.$searchBar.animate({
									left: this.pSearchOpenLeft,
									width: this.pSearchOpenWidth
							}, "fast");
			this.$searchResults.animate({
									left: this.pSearchOpenLeft,
									width: this.pSearchOpenWidth
							}, "fast");
			this.$searchInput.animate({
									width: "355px"
							}, "fast");
		}
		this.initDocumentClick();
		this.setState(this.OPEN);
	},
	
	close: function() {
		if (this.csstransitions) {
			this.$el.removeClass(this.ACTIVE);
			this.$el.removeClass(this.OPEN);
			this.$el.removeClass(this.RESULTS);
		} else {
			this.$searchBar.animate({
									left: this.pSearchClosedLeft,
									width: this.pSearchClosedWidth
							}, "fast");
			this.$searchResults.animate({
									left: this.pSearchClosedLeft,
									width: this.pSearchClosedWidth,
									maxHeight: "0",
									opacity: "0"
							}, "fast");
			this.$searchInput.animate({
								width: "195px"
							}, "fast");
			this.$searchInput.fadeOut("fast");
			this.$searchResults.css({visibility: "hidden",
									maxHeight: 0});
		}
		this.$searchInput.blur();
		this.setState(this.CLOSED);
		/*setTimeout(function() {
			$(document).unbind("click");
		}, 100);*/
	},
	
	setState: function(state) {
		this.state = state;
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {
		var orientation = module.view.getCurrentOrientation();
		// for fluid tablet, calculate the margin-left
		if (orientation == "tablet") {
			var ml = width  - this.$el.width();
			this.$el.css({marginLeft: ml});
		} else if (orientation == "desktop") {
			// for fixed desktop, remove any inline styles
			this.$el.attr("style", "");
		}
	}
});

/**
 * SearchResult:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.Accordion
 */
$(window).bind('initializeComponents', function() {
		new lpch.PersistentSearch({
	        el: '#persistent-search'
	    });
});