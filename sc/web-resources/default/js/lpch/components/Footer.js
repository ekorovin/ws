/**
 * Footer:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Footer component
 */
lpch.Footer = lpch.BaseView.extend({
	
	NAME: "Footer",
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		this.$el.find('a').click(function(event) {
			module.view.trackEvent($(this).text(), $(this).parent().parent().parent().find("> h3").text(), _this.NAME);
		});

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Footer:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.Footer' classes and initialize lpch.Footer
 */
$(window).bind('initializeComponents', function() {
	$('.footer').each(function(index) {
		new lpch.Footer({
	        el: this
	    });
	});
});