/**
 * location:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for location components
 */
lpch.Location = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// this.$el.find('.location-nav li a').first().addClass('active');
		// this.$el.find('.location-content-container div:first-child').addClass('open');

		this.locCnt = _this.$el.find('.location-content-container');
		this.locNav = _this.$el.find('.location-nav');
		this.locNavPad = parseInt(this.locNav.css('paddingTop')) + parseInt(this.locNav.css('paddingBottom'));				
		this.mH = 0;

		this.$el.find('.location-btn').click(function(e) {
			e.preventDefault();
			
			module.view.trackEvent($(this).find('.center-text').text());
			
			_this.locNav.css('height', 'auto');
			if (!$(this).hasClass('active')) {
				_this.$el.find('.open').removeClass('open');
				_this.$el.find( '#' + $(this).attr('data-rel') ).addClass('open');
				
				_this.$el.find('.active').removeClass('active');
				$(this).addClass('active');
			}
			_this.changeHeight();
		});
 	 
 		var orientation = module.view.getCurrentOrientation();
		
		if(orientation == 'smartphone'){
			this.$el.find('.location-nav li:even').css({'margin-left':'0px','width':'50%'});
		}
		else{
			this.$el.find('.location-nav li:even').removeAttr('style');
			this.changeHeight();
		}

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},

	changeHeight: function () {		
		this.mH = this.locCnt.height();
		if(module.view.getCurrentOrientation() != 'smartphone' && this.mH > this.locNav.outerHeight())			
			this.locNav.height(this.mH - this.locNavPad);		
	},
	
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');		
		if(orientation == 'smartphone'){ 
			this.$el.find('.location-nav li:even').css({'margin-left':'0px','width':'50%'});
		}
		else{
			this.$el.find('.location-nav li:even').removeAttr('style');
		}
	},
	
	handleViewportChange: function(width, height) {
		this.locNav.css('height', 'auto');
		this.changeHeight();
	}
});

/**
 * location:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.location' classes and initialize lpch.location
 */
$(window).bind('initializeComponents', function() {
	$('.related-locations').each(function(index) {
		new lpch.Location({
	        el: this
	    });
	});
});