/**
 * DoctorIntro:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.DoctorIntro = lpch.BaseView.extend({
	
	quoteSlider: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;			
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		this.$el.find('li').wrapInner('<div />');
		this.initSlider();

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	initSlider: function() {
		this.quoteSlider = this.$el.find('ul').bxSlider({
			auto: false,
			minSlides: 1,
			maxSlides: 1,
			controls: true,
			useCSS: true,
			pager: false,
			startSlide: 0,
			hideControlOnEnd: true,
			infiniteLoop: false,
			pause: 6000,
			autoHover: true
		});
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * DoctorIntro:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.DoctorIntro
 */
$(window).bind('initializeComponents', function() {
	// clone the "desktop" .doctor-intro container and prepend it to the "smartphone" container
	// this prevents the need to do any DOM manipulation on orientation change which
	// causes issues with the BXSlider
	$('.doctor-profile .span8 .doctor-intro')
		.clone()
		.prependTo('.doctor-profile .span4 .doctor-intro-wrap')
		.addClass("visible-phone");
	// initialize
	$('.doctor-intro').each(function(index) {
		new lpch.DoctorIntro({
			el: this
		});
	});
});