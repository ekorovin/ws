/**
 * Related:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Related links component
 */
lpch.Related = lpch.BaseView.extend({
	
	NAME: "Related",
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		this.$el.find('a').click(function(event) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Related:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.related' classes and initialize lpch.Related
 */
$(window).bind('initializeComponents', function() {
	$('.related').each(function(index) {
		new lpch.Related({
	        el: this
	    });
	});
});