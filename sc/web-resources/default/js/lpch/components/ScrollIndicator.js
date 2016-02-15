/**
 * ScrollIndicator:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for ScrollIndicator components
 */
lpch.ScrollIndicator = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		$(window).bind("scroll", function(event) {
			var orientation = module.view.getCurrentOrientation();
			if( orientation == 'desktop') {
				var top = $(this).scrollTop();
				if (top > 350) _this.$el.fadeOut();
				else _this.$el.fadeIn();
			}
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		
	},
	
	handleViewportChange: function(width, height) {

	}
	 
});

/**
 * ScrollIndicator:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.ScrollIndicator' classes and initialize lpch.ScrollIndicator
 */
$(window).bind('initializeComponents', function() {
	$('.scroll-page').each(function(index) {
		new lpch.ScrollIndicator({
	        el: this
	    });
	});
}); 