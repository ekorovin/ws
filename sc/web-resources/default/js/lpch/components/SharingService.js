/**
 * SharingService:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for SharingService components
 */
lpch.SharingService = lpch.BaseView.extend({ 
	
	NAME: "Share",
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// track events on share components
		//this.$el.find('a').not('.dropdown-toggle').click(function(event) {
			//module.view.trackEvent("Share via " + $(this).attr("title"));
		//});

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * SharingService:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.SharingService' classes and initialize lpch.SharingService
 */
$(window).bind('initializeComponents', function() {
	$('.sharing').each(function(index) {
		new lpch.SharingService({
	        el: this
	    });
	});
	 
	
});