/**
 * Engagement:	Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the Engagement components
 */
lpch.Engagement = lpch.BaseView.extend({
	
	slide: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		this.$el.find('.item').last().addClass('last');
		
		// track events from anchor clicks
		this.$el.find(".engagement-item a").not(".youtube").click(function(event){
			module.view.trackEvent($(this).attr("title") || $(this).text() || $(this).find("img").first().attr("alt"));
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Engagement:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.engagement' classes and initialize lpch.Engagement
 */
$(window).bind('initializeComponents', function() {
	$('.engagement').each(function(index) {
		new lpch.Engagement({
	        el: this
	    });
	});
});