/**
 * SearchItemListView:	Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the SearchItemListView
 */
lpch.SearchItemListView = lpch.BaseView.extend({

	// collection of the ENTIRE result set
	collection: null,
	// collection of results sorted by list/tab
	sortedCollection: null, 
	// collection of results rendered to the DOM
	renderedCollection: null,
	// list item view class
	itemViewClass: null,
	// google map object, not defined until tab is shown
	googleMap: null,
	// filter criteria
	criteria:undefined,
	// tab category
	category:"",
	// filter event name for filtering results
	filterEventName: null,
	// template id name
	templateID:"",	
	// total number of pages in result set
	numPages: null,
	// current page of results
	currentPage: null,
	// id of the tab/list
	listID: null,
	// number of results per page
	resultsPerPage: 12,
	// keeps track if pagination should be reset to page 1
	// by default set to false to ensure that the last page 
	// saved in LocalStorage is read
	resetPagination: false,

	events: {
		"click .type-switcher-wrap a" : "switchType"
	},

	/**
	 * @method	initialize	Invoked on object instantiation by Backbone
	 * @param 	options		Extra options to override defaults declared above
	 * @returns	{Boolean}
	 */
	initialize: function(options){
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
		
		_.extend(this, options);
		// get the template for this list view
		this.template = _.template(module.view.model.templates.get(this.templateID).get('html'));
		
		// string indentifier for this list of results, maps directly to the tab href
		// (all, doctors, services, locations, classes)
		this.listID = this.$el.parent().attr('id');
		
		if (options.itemViewClass==null) {
			throw new Error('Should have itemViewClass');
			return false;
		}
		
		// this event handler need to receive criteria data
		if (this.filterEventName != '') {
			module.vent.on(this.filterEventName, this.updateListView, this);
		}

		this.$el.html(this.template({}));
		
		// if the category is empty (ALL) use the full collection
		// else sort the collection based on category (doctors, services, locations, classes)
		if (this.category=="") {
			this.sortedCollection = this.collection;
		} else {
			this.sortedCollection = new Backbone.Collection(this.collection[this.category+"Collection"]);
		}

		// set the current page
		this.currentPage = 1;
		// check to see if we are backing into a result set, it is ok to do here because this initializes BEFORE
		// lpch.SearchResult which where the lastSearchTab/lastSearchTerm is set/reset
		if ($.jStorage.get('lastSearchTab') && $.jStorage.get('lastSearchTerm') == module.view.getParameterByName("search-term")) {
			// if backing into a result set
			// check for which page of results we were on
			this.currentPage = $.jStorage.get(this.listID+'LastSearchPage');
		}
		$.jStorage.set(this.listID+'LastSearchPage', this.currentPage);
		// set the total number of pages in the result set
		this.numPages = Math.ceil(this.sortedCollection.models.length/this.resultsPerPage);
		
		// update pagination
		this.updatePagination();
		
		// update the list view based on filter criteria
		this.updateListView(this.criteria);
		
		// show grid or list
		this.updateViewType("grid", "list");
		
		// event hanlder for tab clicks
		module.on('showTab', this.handleShowTab, this);
		
		// last second ui initialization
		this.initUI();
	},
	
	/**
	 * @method	initUI
	 */
	initUI: function() {
		this.$el.find('.video').colorbox({
			iframe:true, 
			innerWidth:620,
			innerHeight:404,
			onOpen: function() {
				module.view.trackEvent($(this).attr('title'));
			},
			onComplete: function() {
				var pageHeight = $('html').height();
				$('#cboxOverlay').height(pageHeight);
			}
		});
		
		// formats phone numbers as: (123) 456-7890
		$(".phone1").text(function(i, text) {
	        text = text.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
	        return text;
	    });
		
		if (module.view.getParameterByName("search-term") == "" && this.listID == "doctors") {
			this.$el.hide();
		}
		
		// if the 'filterEventName' is defined, trigger an event to update all filter criteria
		// this helps when backing into the search results page that may have had filters enabled
		// prior to an outbound click on a search result
		if (this.filterEventName) {
			// do NOT reset the pagination
			this.resetPagination = false;
			module.vent.trigger("updateAllCriteria");
		}
	},
	
	/**
	 * @method	handleShowTab	Callback for tab clicks
	 * @param 	tabID
	 */
	handleShowTab: function(tabID) {
		if (this.el == "#locations-list" && tabID == "#locations") {
			// if there is more than 0 results
			if (this.collection[this.category+"Collection"].length > 0) {
				this.$el.find(".results-body").show();
				if (!this.googleMap) {
					this.googleMap = new lpch.GoogleMapSearchView({ el: '#map-canvas' });
				}
			} else {
				this.$el.find(".results-body").hide();
			}
		}
	},
	
	/**
	 * @method	addOne	Adds one item to the list of results
	 * @param 	model	data model of the item to add
	 */
	addOne: function(model) {
		var tempView = new this.itemViewClass({model:model});
		var $list = this.$el.find(".results-body ul");
		var $item = $(tempView.render().el);
		$item.find(".avatar p").text($list.find("li").length+1);
		$item.appendTo($list);
	},
	
	/**
	 * @method	updateListView	Updates the list of doctors based on filter settings
	 * @param 	criteria		Object containing filter settings
	 */
	updateListView: function(criteria) {
		_this = this;
		var filteredLength = 0;
		var filteredCollection = new Backbone.Collection();
		if (criteria != undefined) {
			this.$el.find(".results-body ul").empty();
			console.log(criteria);
			this.sortedCollection.each(function(model){
				var flag = true;
				_.each(criteria, function(v,k){
					if (v == ""){
						return;
					}
					//temporary remove radius
					var tempVal = model.get(k);
					// if the key is 'radius' AND lat, lng and radius are DEFINED
					if (k == "radius" && !isNaN(criteria.lat) && !isNaN(criteria.lng) && criteria.radius != ""){
						var dist = model.getDistance(criteria.lat, criteria.lng);
						if (dist > Number(criteria.radius)) {
							flag = false;
							return false;
						}
					// else just another key
					} else {
						// if the key is lat or lng, do nothing
						if (k == "lat" || k == "lng") {
							return false;
						// if the key is zip and radius is defined, do nothing
						} else if (k == 'db_location1zip' && criteria.radius != "") {
							return false;
						} else {
							// else just match the values
							if (tempVal != v) {
								flag = false;
								return false;
							}
						}
					}
				}, this);
				
				if (flag) {
					filteredCollection.add(model);
					filteredLength++;
				}
				
			}, this);
			
			this.renderedCollection = filteredCollection;
			
		} else {
			if (this.category == "") {
				if (filteredLength == 0) 
					filteredLength = this.collection.length;
			} else {
				if (filteredLength == 0)
					filteredLength = this.collection[this.category+"Collection"].length;
			}
			this.renderedCollection = this.sortedCollection;
			
		}
		
		// reset the page to 1 if necessary
		if (this.resetPagination) {
			this.currentPage = 1;
			$.jStorage.set(this.listID+'LastSearchPage', this.currentPage);
		} 
		this.resetPagination = true;
		
		this.numPages = Math.ceil(this.renderedCollection.models.length/this.resultsPerPage);
		this.updatePagination();
		
		this.render();
		this.addStyleForOddRow();
		
		this.$el.find('.result-count span').html(filteredLength);
		
		module.vent.trigger("updateTabLabelLength", {
			l:filteredLength,
			category: this.category==""?"all":this.category
		});
	},
	
	render: function() {
		this.$el.find(".results-body ul").empty();
		
		var start = (this.currentPage-1) * this.resultsPerPage;
		var end = this.currentPage * this.resultsPerPage;
		
		var newColl = new Backbone.Collection( this.renderedCollection.models.slice(start, end) );
		newColl.each(this.addOne, this);
		return this;
	},
	
	switchType: function(e){
		if (!$(e.target).hasClass("active")) {
			var currentType = $(e.target).siblings()
									 .removeClass("active").end()
									 .addClass("active")
									 .attr("data-view-type");
			this.updateViewType(currentType=="grid"?"list":"grid", currentType);
		}
		
		return false;
	},
	
	/**
	 * @method	updatePagination	draw/update the pagination component based on number of results
	 */
	updatePagination: function() {
		var _this = this;
		this.$el.find('.pagination ul').empty();
		var html = '<li class="prev"><a href="#">previous</a></li>';
		// add the appropriate number of page indicators
		for (var i=1; i<=this.numPages; i++) {
			html += '<li><a href="#">'+i+'</a></li>';
		}
		html += '<li class="next"><a href="#">next</a></li>';
		// draw the pagination element
		this.$el.find('.pagination ul')
			.append(html)
			// for anchors that are not the prev or next links
			.find('li').not('.prev, .next').find('a').click(function(event) {
				event.preventDefault();
				// reset active
				_this.$el.find('.pagination ul li').removeClass('active');
				$(this).parent().addClass('active');
				// set currentPage
				_this.currentPage = Number( $(this).text() );
				$.jStorage.set(_this.listID+'LastSearchPage',  _this.currentPage);
				// render list
				_this.render();
				$(window).scrollTop(0);
			});
		
		this.$el.find('.pagination ul li.prev, .pagination ul li.next').find('a').click(function(event) {
			event.preventDefault();
			if ($(this).parent().hasClass('prev')) {
				if (_this.currentPage > 1) {
					_this.currentPage--;
					$.jStorage.set(_this.listID+'LastSearchPage', _this.currentPage);
					_this.render();
					$(window).scrollTop(0);
				}
			} else {
				if (_this.currentPage < _this.numPages) {
					_this.currentPage++;
					$.jStorage.set(_this.listID+'LastSearchPage', _this.currentPage);
					_this.render();
					$(window).scrollTop(0);
				}
			}
			_this.$el.find('.pagination ul li').removeClass('active');
			$(_this.$el.find('.pagination ul li').not('.prev, .next')[_this.currentPage-1]).addClass("active");
			
		});
		
		// set current active page
		$(this.$el.find('.pagination ul li').not('.prev, .next')[this.currentPage-1]).addClass("active");
		
		if (this.numPages <= 1) {
			this.$el.find('.pagination').hide();
		} else {
			this.$el.find('.pagination').show();
		}
	},
	
	/**
	 * @method	updateViewType		Method to update the search results list from list to grid or vice versa
	 * @param 	removeClassName
	 * @param 	addClassName
	 */
	updateViewType: function(removeClassName, addClassName){
		this.$el.find('.list-wrap').removeClass(removeClassName).addClass(addClassName);
	},
	
	/**
	 * @method	handleLayoutChange	Method to handle changes in the layout (smartphone, tablet, desktop)
	 * @param 	layout
	 */
	handleLayoutChange: function(layout) {
		if(layout.get('orientation') == "smartphone")
			this.updateViewType("grid","list");
		else{
			if(this.$el.find('.type-switcher.active').attr("data-view-type")!="list")
				this.updateViewType("list","grid");
		}
	},
	
	handleViewportChange: function() {},
	
	/**
	 * @method	addStyleForOddRow	Adds style for odd numbered rows
	 */
	addStyleForOddRow: function() {
		this.$('ul li').removeClass('odd')
		.filter(function() {
			return $(this).css('display') != 'none';
		})
		.filter(function(i) {
			return i%2 == 0;
		}).addClass('odd');
	}
});