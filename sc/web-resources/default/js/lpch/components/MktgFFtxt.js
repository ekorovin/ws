/**
 * MktgFFtxt:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for MktgFFtxt components
 */
lpch.MktgFFtxt = lpch.BaseView.extend({ 
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// track events from anchor clicks
		this.$el.find('a').not(".youtube").click(function(event){
			module.view.trackEvent($(this).attr("title") || $(this).text() || $(this).find("img").first().attr("alt"));
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * MktgFFtxt:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.MktgFFtxt' classes and initialize lpch.MktgFFtxt
 */
$(window).bind('initializeComponents', function() {
	$('.mktgfftxt-component').each(function(index) {
		new lpch.MktgFFtxt({
	        el: this
	    });
	});
	
});