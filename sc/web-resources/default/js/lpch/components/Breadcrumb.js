/**
 * Breadcrumb:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the breadcrumb component
 */
lpch.Breadcrumb = lpch.BaseView.extend({
	
	scroller: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		this.$el.find('.dropdown-breadcrumb').bind('click', function(e) {
			_this.openBreadcrumb(e);
		});
		
		// track event clicks
		this.$el.find('.list-breadcrumb a').bind('click', function(e){
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});
		
		$(document).bind('click touchstart',function(e){
			var orientation = module.view.getCurrentOrientation(); 
			if (orientation != 'desktop') {
				if ( !$(e.target).parents().is(_this.$el) )
					_this.closeBreadcrumb();
			}
		});
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	openBreadcrumb: function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.list-breadcrumb').show();
		var elem = this.$el.find('.list-breadcrumb')[0];
		this.scroller = new iScroll(elem, {bounce: false});
	},
	
	closeBreadcrumb: function(e){
		$('.list-breadcrumb').hide();
		this.scroller = null;
	},
	
	handleLayoutChange: function(layout) {
		var device = layout.get('orientation');
		if(device == 'desktop') {
			$('.list-breadcrumb').show();
		}
		else {
			$('.list-breadcrumb').hide();	
		}
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Breadcrumb:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.breadcrumb' classes and initialize lpch.Breadcrumb
 */
$(window).bind('initializeComponents', function() {
	$('.breadcrumb').each(function(index) {
		new lpch.Breadcrumb({
	        el: this
	    });
	});
});