/**
 * Mktgimgtxt:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Mktgimgtxt components
 */
lpch.Mktgimgtxt = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping		
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		var orientation = module.view.getCurrentOrientation();
		if( orientation != 'smartphone') {
			$('.img-top-text-bottom').find('.mktgimgtxt-first').prependTo('.img-top-text-bottom');
		} else {
			$('.img-top-text-bottom').find('.mktgimgtxt-first').appendTo('.img-top-text-bottom');
		}
		
		// track events from anchor clicks
		this.$el.find("a").not(".youtube").click(function(event){
			module.view.trackEvent($(this).attr("title") || $(this).text() || $(this).find("img").first().attr("alt"));
		});

		// invoke the super method

		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
		if(orientation == 'smartphone') {
			$('.img-top-text-bottom').find('.mktgimgtxt-first').appendTo('.img-top-text-bottom');
		} else {
			$('.img-top-text-bottom').find('.mktgimgtxt-first').prependTo('.img-top-text-bottom');
		} 
	},
	
	handleViewportChange: function(width, height) { 

	}
	
});

/**
 * Mktgimgtxt:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.Mktgimgtxt' classes and initialize lpch.Mktgimgtxt
 */
$(window).bind('initializeComponents', function() {
	$('.mktgimgtxt-component').each(function(index) {
		new lpch.Mktgimgtxt({
	        el: this
	    });
	});
});