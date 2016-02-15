/**
 * BackToTop:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for BackToTop components
 */
lpch.BackToTop = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		this.$el.find('.link-back-to-top').click(_this.backToTop);
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	backToTop: function(e) {
		
		module.view.trackEvent($(this).attr('title') || $(this).text());
		
		$('html, body').animate({
			'scrollTop': 0
		}, 300);
		e.preventDefault();
	}
});

/**
 * BackToTop:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.BackToTop' classes and initialize lpch.BackToTop
 */
$(window).bind('initializeComponents', function() {
	$('.back-to-top').each(function(index) {
		new lpch.BackToTop({
	        el: this
	    });
	});
}); 