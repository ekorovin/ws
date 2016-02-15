/**
 * GlobalCarousel:	Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.GlobalCarousel = lpch.BaseView.extend({
	
	slide: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {
		//var slideCount = this.slide.getSlideCount();
		/*if (orientation != 'desktop') {
			this.$el.find('.bx-controls-direction a').removeClass('disabled');
		} else {
			if (slideCount < 3) {
				this.$el.find('.bx-controls-direction a').addClass('disabled');
			}
		}*/
		var _this = this;
		/*
		if(orientation == 'smartphone'){
			this.slide = this.$el.find('#global_slider').bxSlider({
				minSlides: 1,
				maxSlides: 1,
				slideWidth: 320,
				controls: true,
				useCSS: false,
				pager: false,
				startSlide: 0,
				hideControlOnEnd: false,
				infiniteLoop: false
			});

		}
		else {
			if(this.slide != null) {
				this.slide.destroySlider();
				this.slide = null;
				setTimeout(function(){
					_this.$el.find('.slide-item').removeAttr("style");
				},100);
			}
		}
		*/
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * GlobalCarousel:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.global-carousel' classes and initialize lpch.GlobalCarousel
 */
$(window).bind('initializeComponents', function() {
	$('.global-carousel').each(function(index) {
		new lpch.GlobalCarousel({
	        el: this
	    });
	});
});