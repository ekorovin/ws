/**
 * MobileHomeSearch:		Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity of the moblie content overlay for mobile nav flyout
 */
lpch.MobileHomeSearch = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		this.$el.find("a").click(function(event) {
			event.stopPropagation();
			_this.$el.find("form").submit();
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * MobileHomeSearch:		Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then initialize lpch.MobileHomeSearch
 */
$(window).bind('initializeComponents', function() {
	$('.mobile-home-search').each(function(index) {
		new lpch.MobileHomeSearch({
	        el: this
	    });
	});
});