/**
 * SearchResult:	Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the SearchResults
 */
lpch.SearchResult = lpch.BaseView.extend({
	initialize: function() {
		// Self-reference for scoping
		var _this = this;

		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
		
		//Create Tab "All" List View
		this.searchAllList = new lpch.SearchItemListView({
			itemViewClass: lpch.SearchAllItemView,
			el: "#all-list",
			templateID:"allListView",
			collection: this.collection
		});

		//Create Tab "Doctor" List View
		this.searchDoctorList = new lpch.SearchItemListView({
			itemViewClass: lpch.SearchDoctorItemView,
			el:"#doctors-list",
			templateID:"doctorsListView",
			category:"caregiver",
			filterEventName:"filter.doctor",
			collection: this.collection,
			layoutChangeCallBack: _this.handleDoctorLayoutChange
		});

		//Create Tab "Service" List View
		this.searchServiceList = new lpch.SearchItemListView({
			itemViewClass: lpch.SearchServiceItemView,
			el:"#services-list",
			templateID:"servicesListView",
			category:"service",
			collection: this.collection
		});

		//Create Tab "Location" List View
		this.searchLocationList = new lpch.SearchItemListView({
			itemViewClass: lpch.SearchLocationItemView,
			el:"#locations-list",
			templateID:"locationsListView",
			category:"location",
			collection: this.collection
		});

		//Create Tab "Class" List View
		this.searchClassList = new lpch.SearchItemListView({
			itemViewClass: lpch.SearchClassItemView,
			el:"#classes-list",
			templateID:"classesListView",
			category:"class",
			collection: this.collection
		});
		
		// if the lastSearchTab is stored in LocalStorage AND the search-term in the URL matches the term stored in LocalStorage,
		// then a user is likely backing into a search result page with the browser BACK button, remember the last search page state
		if ($.jStorage.get('lastSearchTab') && $.jStorage.get('lastSearchTerm') == module.view.getParameterByName("search-term")) {
			var href = $.jStorage.get('lastSearchTab');
			var tab = $('#search_result_tab li a[href="'+ href + '"]');
			tab.trigger("click");
		} else if (module.view.getParameterByName("tab") != "") {
			var href = "#" + module.view.getParameterByName("tab");
			var tab = $('#search_result_tab li a[href="'+ href + '"]');
			tab.trigger("click");
		} else {
			$.jStorage.set('lastSearchTab', "#all");
		}
		
		// Store the search term in LocalStorage
		$.jStorage.set('lastSearchTerm', module.view.getParameterByName("search-term"));
		
		// track events for all anchors that have a 'title' attribute
		this.$el.find('.results-header a[title], .results-body a[title]').click(function(e) {
			module.view.trackEvent($(this).attr('title'), _this.$el.find('#search_result_tab li.active .inner').clone().children().remove().end().text(), 'Search');
		});
	},
	
	handleViewportChange: function(width, height) {}
});

lpch.SearchResultTab = lpch.BaseView.extend({
	tabsText: ['all', 'services', 'classes'],
	tabActive: null,
	wordCounts:{
		desktop    : 28,
		tablet     : 20,
		smartphone : 12
	},	
	timer: null,
	stopBubbling: function(e){
		e.stopPropagation();
	},
	toggleDropDownNav: function(e) {
		e.stopPropagation();	
		$('#search_result_tab').slideToggle(200);
	},
	closeDropDownNav: function(e) {		
		if(module.view.getCurrentOrientation() == 'smartphone')
			$('#search_result_tab').slideUp(200, function(){
				$(this).removeAttr("style");
			});
	},
	truncate: function(orientation){
		this.tabActive = $('.tab-content > .active');
		var isTruncate = false;		
		for (var i = 0; i < this.tabsText.length; i++){			
			if (this.tabActive.attr('id') == this.tabsText[i]){
				isTruncate = true;
				break;
			}	
		}		
		if (!isTruncate) return;

		var _this = this;
		clearTimeout(this.timer);
		this.timer = setTimeout(function(){			
			_this.truncateTabsContent(_this.tabActive.find(".results-body"), _this.wordCounts[orientation || module.view.getCurrentOrientation()] );			
		}, 200);
	},
	registerTextTruncate: function(eles){
		this.tabsText.push(eles);
	},
	truncateTabsContent: function(list, limit) {		
		$.each(list.find("li"), function(i, jitem) {
			var desc = $(jitem).find('.desc'),
					jct  = desc.find('.content'),
					jctm = desc.find('.content-mobile'),
					ws   = words(jct.html());

			if (ws.length > limit) truncateText(jctm, ws, limit);
		});		
	},
	showTab: function(e) {		
		e.preventDefault();
		var _self = $(this);
		_self.tab('show');
		module.trigger("showTab", _self.attr("href"));
		$('.dropdown-nav p').html(_self.find('.inner').html());
		$('#search_result_tab').hide().removeAttr("style");
		lpch.SearchResultTab.prototype.truncate();
		// track the tab click
		module.view.trackEvent($(this).find('.inner').clone().children().remove().end().text(), "Tab", "Search");

		// use jstorage to set the href in LocalStorage
		$.jStorage.set('lastSearchTab', $(e.currentTarget).attr("href"));
	},
	updateTabLabelLength: function(data){
		this.$el.find('.nav-wrap .result-' + data.category + '-count').html('('+data.l+')');
	},
	initialize: function() {
		lpch.BaseView.prototype.initialize.call(this);		

		this.$el.find('#search_result_tab a').bind("click", this.showTab);
		this.$el.find("#search_result_tab").bind("click", this.stopBubbling);
		this.$el.find(".dropdown-nav").bind("click", this.toggleDropDownNav);
		
		module.vent.on("updateTabLabelLength", this.updateTabLabelLength, this);			
		
		if(module.view.getCurrentOrientation() == 'smartphone'){
			$(document).bind('click', this.closeDropDownNav);
		}
		
		this.truncate();
	},
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');		
		this.$('.filter-inner').removeAttr('style');
		if(orientation != "smartphone") {			
			$(document).unbind('click', this.closeDropDownNav);
			$.colorbox.resize({			
				innerWidth: 640,
				innerHeight: 404
			});
		}else{
			$(document).bind('click', this.closeDropDownNav);
			this.$('.search-result-tab').removeAttr('style');
			$.colorbox.resize({			
				innerWidth: 320,
				innerHeight: 200
			});
		}
		this.truncate(orientation);
	}
});


/**
 * SearchResult:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.Accordion
 */
$(window).bind('initializeComponents', function() {
	
	$('.search-result').each(function(index) {
		
		try {
			var searchResultsCollection = new lpch.SearchResultsCollection();
			searchResultsCollection.reset(searchResults.response.docs);
			searchResultsCollection.clean();
			new lpch.SearchResultTab({
				el: this
			});
			new lpch.SearchResult({
		        el: this,
		        collection: searchResultsCollection
		    });
		} catch (error) {
			console.log(error.message);
		}
		
		
	});
});

