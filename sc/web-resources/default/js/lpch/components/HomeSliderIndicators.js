/**
 * HomeSliderIndicators:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for HomeSliderIndicators components
 */
lpch.HomeSliderIndicators = lpch.BaseView.extend({
	
	topArr: [],
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();
		var offset = (orientation == "desktop") ? 75 : 110;
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		$('body').scrollspy({target: '.home-slider-indicators'});
		
		if (!Modernizr.touch) {
			this.$el.find("li a").addClass("no-touch");
		}
		
		$(window).bind('scroll', function() {
			if ($(this).scrollTop() < $('.home-slider').first().offset().top) {
				_this.$el.find("li").removeClass("active");
				_this.$el.find("li").first().addClass("active");
			}
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(height) {}
	
});

/**
 * HomeSliderIndicators:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.home-slider' classes and initialize lpch.HomeSliderIndicators*/
 
$(window).bind('initializeComponents', function() {
	$('.home-slider-indicators').each(function(index) {
		new lpch.HomeSliderIndicators({
	        el: this
	    });
	});
});