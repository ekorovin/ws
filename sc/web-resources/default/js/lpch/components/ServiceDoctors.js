/**
 * service-doctors:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for service-doctors components
 */
lpch.ServiceDoctors = lpch.BaseView.extend({ 
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		this.$el.find('.service-doctors-nav li a').first().addClass('active').next().addClass('open');
		this.$el.find('.service-doctors-content-container div:first-child').addClass('open');
	
		/**
		 * Disabled in favor of simple href links
		 * 
		 * this.$el.find('.service-doctors-btn').click(function(e) {
			e.preventDefault();
			if (!$(this).hasClass('active')) {
				_this.$el.find('.open').removeClass('open');
				_this.$el.find( '#' + $(this).attr('data-rel') ).addClass('open');
				
				_this.$el.find('.active').removeClass('active');
				$(this).addClass('active');
			} 
		});*/

		var orientation = module.view.getCurrentOrientation();
		
		if(orientation == 'tablet'){
			this.$el.find('.our-care-team li:even').css({'margin-left':'0px'});
		}
		else{
			this.$el.find('.our-care-team li:even').removeAttr('style');
		}
		
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) { 
		var device = layout.get('orientation');
		if(device == 'tablet'){ 
			this.$el.find('.our-care-team li:even').css({'margin-left':'0px'});
		}
		else{
			this.$el.find('.our-care-team li:even').removeAttr('style');
		}
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * service-doctors:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.service-doctors' classes and initialize lpch.service-doctors
 */
$(window).bind('initializeComponents', function() {
	$('.service-doctors').each(function(index) {
		new lpch.ServiceDoctors({
	        el: this
	    });
	});
});