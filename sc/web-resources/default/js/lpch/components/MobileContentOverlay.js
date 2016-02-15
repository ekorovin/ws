/**
 * MobileContentOverlay:		Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity of the moblie content overlay for mobile nav flyout
 */
lpch.MobileContentOverlay = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		this.$el.click(function(event) {
			$('.ls-canvas').toggleClass('active');
//			$('#navigation .nav').toggleClass('active');
			$('body').toggleClass('no-scroll');
			$('#mobile-content-overlay').toggle();
			
			// trigger an event that the nav is being toggled
			module.trigger('toggleNav');

			//if (module.view.model.get('currentLayout').get('orientation') != 'desktop') {
//			if(!$('.find-doctor').hasClass('find-doctor--device')){
//				$('.find-doctor').addClass('find-doctor--device');
//				$('body, html').addClass('no-scroll');
//			}
//			else {
//				$('.find-doctor').removeClass("find-doctor--device");
//				$('body, html').removeClass('no-scroll');
//			}
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * MobileContentOverlay:		Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then initialize lpch.MobileContentOverlay
 */
$(window).bind('initializeComponents', function() {
	new lpch.MobileContentOverlay({ el: '#mobile-content-overlay' });
});