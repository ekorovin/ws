/**
 * Feature:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Feature components
 */
lpch.Feature = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		var orientation = module.view.getCurrentOrientation();
		if( orientation != 'smartphone') {
			$('.img-top-text-bottom').find('.pull-right').prependTo('.img-top-text-bottom');
		}

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
		if(orientation == 'smartphone') {
			$('.img-top-text-bottom').find('.pull-right').appendTo('.img-top-text-bottom');
		} else {
			$('.img-top-text-bottom').find('.pull-right').prependTo('.img-top-text-bottom');
		} 
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Feature:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.Feature' classes and initialize lpch.Feature
 */
$(window).bind('initializeComponents', function() {
	$('.feature-story').each(function(index) {
		new lpch.Feature({
	        el: this
	    });
	});
});