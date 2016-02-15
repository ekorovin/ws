/**
 * HomeSlider:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for HomeSlider components
 */
lpch.HomeSlider = lpch.BaseView.extend({
	
	slider: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		if (module.view.getCurrentOrientation() != "smartphone") {
			this.initSlider();
		}
		
		$('.generic').addClass('nopad');
		
		this.$el.find('a').click(function(e) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	initSlider: function() {
		var _this = this;
		if (this.slider) return;
		var hasSlides = (this.$el.find(".bxslider > li").length > 1);
		if (hasSlides) {
			var nextStr = $(this.$el.find(".bxslider > li")[1]).attr("data-title");
			this.slider = this.$el.find(".bxslider").bxSlider({
				nextText: nextStr,
				auto: false,
				minSlides: 1,
				maxSlides: 1,
				controls: true,
				useCSS: true,
				pager: false,
				startSlide: 0,
				infiniteLoop: false,
				hideControlOnEnd: true,
				onSlideNext: function($elem, oldIndex, newIndex) {
					var nextStr = $(_this.$el.find(".bxslider > li")[newIndex+1]).attr("data-title");
					var prevStr = $(_this.$el.find(".bxslider > li")[oldIndex]).attr("data-title");
					_this.$el.find(".bx-controls .bx-prev").text(prevStr);
					_this.$el.find(".bx-controls .bx-next").text(nextStr);
				},
				onSlidePrev: function($elem, oldIndex, newIndex) {
					var nextStr = $(_this.$el.find(".bxslider > li")[newIndex+1]).attr("data-title");
					var prevStr = $(_this.$el.find(".bxslider > li")[newIndex-1]).attr("data-title");
					_this.$el.find(".bx-controls .bx-prev").text(prevStr);
					_this.$el.find(".bx-controls .bx-next").text(nextStr);
				}
			});
		}
	},
	
	destroySlider: function() {
		if (!this.slider) return;
		this.slider.destroySlider();
		this.slider = null;
	},
	
	handleLayoutChange: function(layout) {
		if (layout.get('orientation')=='smartphone') {
			this.destroySlider();
		} else {
			this.initSlider();
		}
	},
	
	handleViewportChange: function(height) {
		
	}
	
});

/**
 * HomeSlider:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.home-slider' classes and initialize lpch.HomeSlider*/
 
$(window).bind('initializeComponents', function() {
	$('.home-slider').each(function(index) {
		new lpch.HomeSlider({
	        el: this
	    });
	});
});