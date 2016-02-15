/**
 * Header:		Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity of the site header
 */
lpch.Header = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// check to see if the device is Android's Browser app NOT Chrome
		// if Browser app, add class to header to help with flyout nav
		if ($('html').hasClass('android') && !$('html').hasClass('chrome')) this.$el.addClass('android-browser');
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		this.$el.find('.nav-btn').click(function(event) {
			event.preventDefault();
			$('.ls-canvas').toggleClass('active');
			$('body').toggleClass('no-scroll');
			$('#mobile-content-overlay').toggle();
			
			// trigger an event that the nav is being toggled
			module.trigger('toggleNav');
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {
		if (layout.get('orientation') == 'desktop') {
			if($('.ls-canvas').hasClass('active')) {
				this.$el.find('.nav-btn').trigger('click');	
			}			
		} else {
			
		}
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Header:		Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then initialize lpch.Header
 */
$(window).bind('initializeComponents', function() {
	new lpch.Header({ el: '#header' });
});