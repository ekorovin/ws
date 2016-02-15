/**
 * ImageText:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.ImageText = lpch.BaseView.extend({
	maxHeight: null,
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		_this.changeHeight();
		
		this.$el.find('a').click(function(e) {
			module.view.trackEvent($(this).attr('title') || $(this).text() || $(this).find('img').first().attr('alt'));
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	changeHeight: function(){
		var orientation = module.view.getCurrentOrientation();		
		var objWrapper = $('.image-text-extra-component');
		var imageTextContent= $('.image-text-second');
		var objHeight = imageTextContent.outerHeight();
		var _this = this;
		// console.log(objHeight);
		this.maxHeight = 0;
		objWrapper.each(function(){
			var contentHeight = $('.image-text-second', this).outerHeight();
			if(_this.maxHeight < contentHeight) {
				_this.maxHeight = contentHeight;
			}
		});

		if(orientation != 'smartphone'){
			objWrapper.css({'min-height': this.maxHeight});	
		}
	},
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');

	},
	handleViewportChange: function(width, height) {
		this.changeHeight();		
	}
	
});

/**
 * ImageText:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.ImageText
 */
$(window).bind('initializeComponents', function() {
	$('.image-text-extra-component').each(function(index) {
		new lpch.ImageText({
	        el: this
	    });
	});
});