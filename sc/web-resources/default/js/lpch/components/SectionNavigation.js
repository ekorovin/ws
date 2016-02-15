/**
 * SectionNav:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the SectionNav component
 */
lpch.SectionNav = lpch.BaseView.extend({ 
	NAME: "Section Navigation",
	scroller: null,

	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		this.$el.find('.section-name').bind('click', function(e) {
			_this.openSectionNav(e);
		});
		
		$(document).bind('click touchstart',function(e){
			var orientation = module.view.getCurrentOrientation(); 
			if (orientation == 'smartphone') {
				// if the click is NOT on this component
				if ( !$(e.target).parents().is(_this.$el) )
					_this.closeSectionNav();
			}
		});
		
		this.$el.bind('itemClicked', function(event) {
			event.stopPropagation();
			_this.closeSectionNav();
		});
		
		// tracking clicks on .list-section-name anchors
		this.$el.find('.list-section-name a').click(function(event) {
			module.view.trackEvent($(this).text());
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	openSectionNav: function(e) {
		var _this = this;
		e.preventDefault();
		e.stopPropagation();
		this.$el.find('.list-section-name').show();
		var elem = this.$el.find('.list-section-name')[0];
		this.scroller = new iScroll(elem, {bounce: false});
	},
	closeSectionNav: function(e){
		$('.list-section-name').hide();
		this.scroller = null;
	},
	handleLayoutChange: function(layout) {
		var device = layout.get('orientation');
		if(device == 'smartphone') {
			$('.list-section-name').hide();	
		} else {
			$('.list-section-name').show();
		}
	},
	
	handleViewportChange: function(width, height) {}
});

/**
 * SectionNav:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.SectionNav' classes and initialize lpch.SectionNav
 */
$(window).bind('initializeComponents', function() {
	$('.section-navigation').each(function(index) {
		new lpch.SectionNav({
	        el: this
	    });
	});
});