/**
 * HeroBanner:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.HeroBanner = lpch.BaseView.extend({
	
	NAME: "Hero Banner",
	heroSlide: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		var hasSlides = (_this.$el.find("#hero_banner li").length > 1);
		this.heroSlide = this.$el.find('#hero_banner').bxSlider({
			auto: true,
			minSlides: 1,
			maxSlides: 1,
			controls: true,
			useCSS: false,
			pager: hasSlides,
			startSlide: 0,
			hideControlOnEnd: true,
			infiniteLoop: false,
			pause: 6000,
			autoHover: true,
			onSliderLoad: function(){
				$('.slide-content').removeClass('slide-content--fix-height-mobile');
				$(_this.$el.find(".information .item")[0]).show();
			},
			onSlideBefore: function($slideElement, oldIndex, newIndex) {
				$(_this.$el.find(".information .item")[oldIndex]).hide();
				$(_this.$el.find(".information .item")[newIndex]).fadeIn();
			}
		});
		
		$.each(this.$el.find(".information .item"), function(index, el) {
			if (_this.heroSlide.getCurrentSlide() == index) {
				$(el).show();
			} else {
				$(el).hide();
			}
		});
		
		this.$el.find(".information .item a").click(function(event) {
			module.view.trackEvent($(this).text());
		});

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {
		var _this = this;
		$.each(this.$el.find(".information .item"), function(index, el) {
			if (_this.heroSlide.getCurrentSlide() == index) {
				$(el).show();
			} else {
				$(el).hide();
			}
		});
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * HeroBanner:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.HeroBanner
 */
$(window).bind('initializeComponents', function() {
	$('.hero-banner').each(function(index) {
		new lpch.HeroBanner({
	        el: this
	    });
	});
});